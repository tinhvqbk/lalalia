'use strict'
const _pkg = require('../package')

const header = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<?xml-stylesheet type="text/xsl" href="https://raw.githubusercontent.com/tinhvqbk/lalalia/master/lib/sitemap.xsl"?>',
  '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
];

const footer = ['</urlset>'];
const allowedProperties = ['getLoc', 'lastmod', 'priority', 'changefreq', 'hreflang'];

const getEntryConfig = (file, siteConfig) => {
  const relativePath = file.relative;
  const mappingsForFile = _pkg._.find(siteConfig.mappings, function (item) {
    return _pkg.multimatch(relativePath, item.pages).length > 0;
  }) || {};

  const entry = _pkg._.defaults(
    {},
    _pkg._.pick(mappingsForFile, allowedProperties),
    _pkg._.pick(siteConfig, allowedProperties)
  );

  if (siteConfig.stylesheetUrl) {
    header[1] = '<?xml-stylesheet type="text/xsl" href="' + siteConfig.stylesheetURL + '"?>';
  }

  if (entry.lastmod === null) {
    // calculate mtime manually
    entry.lastmod = file.stat && file.stat.mtime || Date.now();
  } else if (typeof entry.lastmod === 'function') {
    entry.lastmod = entry.lastmod(file);
  }

  //turn index.html into -> /
  let relativeFile = relativePath.replace(/(\/|\\|^)index\.html?$/, '/');
  if (relativeFile === '/') {
    relativeFile = '';
  }
  //url location. Use slash to convert windows \\ or \ to /
  const adjustedFile = _pkg.slash(relativeFile);
  entry.loc = siteConfig.siteUrl + adjustedFile;
  entry.file = adjustedFile;
  entry.source = file.history[0];

  return entry;
}
const wrapTag = (tag, value) => (
  `
  <${ tag}>${value}</${tag}>
`)

const createImageSitemap = (imageURL) => (
  `
  <image:image>
      <image:loc>${imageURL}</image:loc>
  </image:image>
`)
const notIsHTTPURL = (text) => (!(/https?:\/\//ig).test(text))

const getImagesUrl = (entry, siteConfig) => {
  const reImageMatch = /<img\s+src="((https?:\/\/)?[\w\.\/]+)"/ig;
  const reSourceMatch = /"((https?:\/\/)?[\w\.\/]+)"/ig;
  const html = _pkg.fs.readFileSync(entry.source, { encoding: 'utf8' })
  const images = html.match(reImageMatch);

  if (images === null) {
    return [];
  }

  const URLs = images.map(image => {
    let currentURL = image.match(reSourceMatch)[0].replace(/^\"|\"$/ig, '');

    if (notIsHTTPURL(currentURL)) {
      currentURL = currentURL.replace(/^\/|\.\//, '');
      currentURL = siteConfig.siteUrl + currentURL;
    }

    return currentURL;
  });

  return URLs;
}
const generateImagesMap = (entry, siteConfig) => {
  let imagesURLS = [];
  let XMLImageList = '';

  // Crawling page for images
  imagesURLS = getImagesUrl(entry, siteConfig);

  // if truthy create image sitemap
  if (imagesURLS.length) {
    XMLImageList = imagesURLS.map(imageURL => createImageSitemap(imageURL)).join('')
  }

  return XMLImageList;
}

const processEntry = (entry, siteConfig) => {
  const returnArr = [siteConfig.spacing + '<url>'];

  const loc = entry.getLoc ? entry.getLoc(siteConfig.siteUrl, entry.loc, entry) : entry.loc;
  returnArr.push(siteConfig.spacing + siteConfig.spacing + wrapTag('loc', loc) + (siteConfig.images ? generateImagesMap(entry, siteConfig) : ''));

  let lastmod = entry.lastmod;
  if (lastmod) {
    //format mtime to ISO (same as +00:00)
    lastmod = new Date(lastmod).toISOString();
    returnArr.push(siteConfig.spacing + siteConfig.spacing + wrapTag('lastmod', lastmod));
  }

  const changefreq = entry.changefreq;
  if (changefreq) {
    returnArr.push(siteConfig.spacing + siteConfig.spacing + wrapTag('changefreq', changefreq));
  }

  let priority;

  if (typeof entry.priority === 'function') {
    priority = entry.priority(siteConfig.siteUrl, entry.loc, entry);
  } else if (typeof entry.priority !== 'undefined') {
    priority = entry.priority;
  }
  if (typeof priority !== 'undefined') {
    returnArr.push(siteConfig.spacing + siteConfig.spacing + wrapTag('priority', priority));
  }

  const hreflang = entry.hreflang;
  if (hreflang && hreflang.length > 0) {
    const file = entry.file;
    hreflang.forEach(function (item) {
      const href = item.getHref(siteConfig.siteUrl, file, item.lang, loc);
      const tag = '<xhtml:link rel="alternate" hreflang="' + item.lang + '" href="' + href + '" />';
      returnArr.push(siteConfig.spacing + siteConfig.spacing + tag);
    });
  }

  returnArr.push(siteConfig.spacing + '</url>');
  return returnArr.join(siteConfig.newLine);
}

const prepareSitemap = (entries, config) => {
  const entriesHref = entries.some((entry) => {
    return entry && entry.hreflang && entry.hreflang.length;
  });
  return (header)
    .concat(entries.map(function (entry) {
      return processEntry(entry, config);
    }))
    .concat(footer)
    .join(config.newLine)
    .toString();
}

const VALID_CHANGE_FREQUENCIES = [
  'always',
  'hourly',
  'daily',
  'weekly',
  'monthly',
  'yearly',
  'never'
];

const isChangefreqValid = (changefreq) => {
  // empty changefreq is valid
  if (!changefreq) {
    return true;
  }
  return _pkg._.includes(VALID_CHANGE_FREQUENCIES, changefreq.toLowerCase());
}
module.exports = function (options = {}) {
  const config = _pkg._.defaults({}, options, {
    changefreq: undefined,
    fileName: 'sitemap.xml',
    lastmod: null,
    mappings: [],
    newLine: '\n',
    priority: undefined,
    spacing: '    ',
    verbose: false,
    noindex: false
  });
  const entries = [];
  let firstFile;
  let msg;

  if (!config.siteUrl) {
    throw new _pkg.PluginError('lalalia#sitemap', 'siteUrl is a required param');
  }

  // site url should have a trailing slash
  if (config.siteUrl.slice(-1) !== '/') {
    config.siteUrl = config.siteUrl + '/';
  }

  return _pkg.through2.obj(function (file, enc, callback) {
    //we handle null files (that have no contents), but not dirs
    if (file.isDirectory()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      msg = 'Streaming not supported';
      return callback(new _pkg.PluginError('lalalia#sitemap'), msg);
    }

    //skip 404 file
    if (/404\.html?$/i.test(file.relative)) {
      return callback();
    }

    if (options.noindex) {
      const contents = file.contents.toString();
      if (/<meta [^>]*?noindex/i.test(contents)) {
        return callback();
      }
    }

    if (!firstFile) {
      firstFile = file;
    }

    const entry = getEntryConfig(file, config);
    entries.push(entry);
    callback();
  },
    function (callback) {
      if (!firstFile) {
        return callback();
      }
      const contents = prepareSitemap(entries, config);
      if (options.verbose) {
        msg = 'Files in sitemap: ' + entries.length;
        _pkg.log(pluginName, msg);
      }
      //create and push new vinyl file for sitemap
      this.push(new _pkg.vinyl({
        cwd: firstFile.cwd,
        base: firstFile.cwd,
        path: _pkg.path.join(firstFile.cwd, config.fileName),
        contents: Buffer.from(contents)
      }));
      callback();
    });
};
