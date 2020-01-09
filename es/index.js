module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("regenerator-runtime");


/***/ }),

/***/ "./node_modules/crypto-browserify/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.randomBytes = exports.rng = exports.pseudoRandomBytes = exports.prng = __webpack_require__("randombytes")
exports.createHash = exports.Hash = __webpack_require__("create-hash")
exports.createHmac = exports.Hmac = __webpack_require__("create-hmac")

var algos = __webpack_require__("browserify-sign/algos")
var algoKeys = Object.keys(algos)
var hashes = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(algoKeys)
exports.getHashes = function () {
  return hashes
}

var p = __webpack_require__("pbkdf2")
exports.pbkdf2 = p.pbkdf2
exports.pbkdf2Sync = p.pbkdf2Sync

var aes = __webpack_require__("browserify-cipher")

exports.Cipher = aes.Cipher
exports.createCipher = aes.createCipher
exports.Cipheriv = aes.Cipheriv
exports.createCipheriv = aes.createCipheriv
exports.Decipher = aes.Decipher
exports.createDecipher = aes.createDecipher
exports.Decipheriv = aes.Decipheriv
exports.createDecipheriv = aes.createDecipheriv
exports.getCiphers = aes.getCiphers
exports.listCiphers = aes.listCiphers

var dh = __webpack_require__("diffie-hellman")

exports.DiffieHellmanGroup = dh.DiffieHellmanGroup
exports.createDiffieHellmanGroup = dh.createDiffieHellmanGroup
exports.getDiffieHellman = dh.getDiffieHellman
exports.createDiffieHellman = dh.createDiffieHellman
exports.DiffieHellman = dh.DiffieHellman

var sign = __webpack_require__("browserify-sign")

exports.createSign = sign.createSign
exports.Sign = sign.Sign
exports.createVerify = sign.createVerify
exports.Verify = sign.Verify

exports.createECDH = __webpack_require__("create-ecdh")

var publicEncrypt = __webpack_require__("public-encrypt")

exports.publicEncrypt = publicEncrypt.publicEncrypt
exports.privateEncrypt = publicEncrypt.privateEncrypt
exports.publicDecrypt = publicEncrypt.publicDecrypt
exports.privateDecrypt = publicEncrypt.privateDecrypt

// the least I can do is make error messages for the rest of the node.js/crypto api.
// ;[
//   'createCredentials'
// ].forEach(function (name) {
//   exports[name] = function () {
//     throw new Error([
//       'sorry, ' + name + ' is not implemented yet',
//       'we accept pull requests',
//       'https://github.com/crypto-browserify/crypto-browserify'
//     ].join('\n'))
//   }
// })

var rf = __webpack_require__("randomfill")

exports.randomFill = rf.randomFill
exports.randomFillSync = rf.randomFillSync

exports.createCredentials = function () {
  throw new Error([
    'sorry, createCredentials is not implemented yet',
    'we accept pull requests',
    'https://github.com/crypto-browserify/crypto-browserify'
  ].join('\n'))
}

exports.constants = {
  'DH_CHECK_P_NOT_SAFE_PRIME': 2,
  'DH_CHECK_P_NOT_PRIME': 1,
  'DH_UNABLE_TO_CHECK_GENERATOR': 4,
  'DH_NOT_SUITABLE_GENERATOR': 8,
  'NPN_ENABLED': 1,
  'ALPN_ENABLED': 1,
  'RSA_PKCS1_PADDING': 1,
  'RSA_SSLV23_PADDING': 2,
  'RSA_NO_PADDING': 3,
  'RSA_PKCS1_OAEP_PADDING': 4,
  'RSA_X931_PADDING': 5,
  'RSA_PKCS1_PSS_PADDING': 6,
  'POINT_CONVERSION_COMPRESSED': 2,
  'POINT_CONVERSION_UNCOMPRESSED': 4,
  'POINT_CONVERSION_HYBRID': 6
}


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("base64-js")
var ieee754 = __webpack_require__("ieee754")
var isArray = __webpack_require__("isarray")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/config.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"paths\":{\"root\":\"./\",\"src\":{\"root\":\"./src/\",\"sass\":\"./src/_scss\",\"data\":\"./src/_data\",\"data_file\":\"./src/.tmp/data.json\",\"script\":\"./src/_script\",\"templates\":\"./src/_templates\",\"assets\":\"./src/assets\",\"css\":\"./src/assets/css\",\"js\":\"./src/assets/js\",\"images\":\"./src/assets/images\",\"svg\":\"./src/assets/svg\",\"otherassets\":\"./src/assets/others\",\"otherfile\":[\"./src/favicon.ico\"]},\"dest\":{\"root\":\"./public/\",\"assets\":\"./public/assets\",\"css\":\"./public/assets/css\",\"js\":\"./public/assets/js\",\"images\":\"./public/assets/images\",\"otherassets\":\"./public/assets/others\"},\"tmp\":{\"root\":\"./.tmp\"}}}");

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pkg = __webpack_require__("./src/package.js");

var load = __webpack_require__("./src/load.js");

var defaultConfig = __webpack_require__("./src/config.json");

var defaultOptions = {
  serve: true,
  minify: false,
  htmlBeautify: true,
  htmlOptimize: false,
  cssOptimize: false,
  jsOptimize: false,
  hash: false
};

var lalalia = function lalalia(configs, options) {
  configs = _pkg._.defaultsDeep(configs || {}, defaultConfig);
  options = _pkg._.defaultsDeep(options || {}, defaultOptions);
  return _pkg.through2.obj(load(configs, options));
};

lalalia.getConfigs = function (configs) {
  return configs = _pkg._.defaultsDeep(configs || {}, defaultConfig);
};

lalalia.sitemap = _pkg.lib.sitemap;
module.exports = lalalia;

/***/ }),

/***/ "./src/lib/file-sync.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pkg = __webpack_require__("./src/package.js"); //Fork from gulp-file-sync


var isIgnored = function isIgnored(options, stats, file) {
  if (options.ignore) {
    if (Array.isArray(options.ignore)) {
      return options.ignore.some(function (filter) {
        return isIgnored({
          ignore: filter
        }, stats, file);
      });
    } else {
      var ignoreFileType = typeof options.ignore;

      if (ignoreFileType === 'function') {
        return options.ignore(stats, file);
      } else if (ignoreFileType === 'string') {
        return options.ignore === file;
      } else {
        var matcheFile = options.ignore.exec(file);
        return matcheFile && matcheFile.length > 0;
      }
    }
  }

  return false;
};

var isSameFile = function isSameFile(src, dest) {
  var crcSrc = _pkg.crc.crc32(_pkg.fsEx.readFileSync(src)).toString(16),
      crcDest = _pkg.crc.crc32(_pkg.fsEx.readFileSync(dest)).toString(16);

  return crcSrc === crcDest;
};

var remove = function remove(options, src, dest) {
  var files = _pkg.fsEx.readdirSync(dest);

  files.forEach(function (file) {
    var fullPathSrc = _pkg.path.join(src, file),
        fullPathDest = _pkg.path.join(dest, file),
        statDest = _pkg.fsEx.statSync(fullPathDest);

    if (isIgnored(options, statDest, file)) {
      return;
    }

    if (statDest.isDirectory() && !options.recursive) {
      return;
    }

    if (!_pkg.fsEx.existsSync(fullPathSrc)) {
      options.beforeDeleteFileCallback && options.beforeDeleteFileCallback(fullPathSrc);

      _pkg.fsEx.removeSync(fullPathDest);

      options.deleteFileCallback(fullPathSrc, fullPathDest);
    } else {
      var statSrc = _pkg.fsEx.statSync(fullPathSrc);

      if (statSrc.isFile() !== statDest.isFile() || statSrc.isDirectory() !== statDest.isDirectory()) {
        options.beforeDeleteFileCallback && options.beforeDeleteFileCallback(fullPathSrc);

        _pkg.fsEx.removeSync(fullPathDest);

        options.deleteFileCallback(fullPathSrc, fullPathDest);
      } else if (statDest.isDirectory()) {
        remove(options, fullPathSrc, fullPathDest);
      }
    }
  });
};

var add = function add(options, src, dest) {
  var files = _pkg.fsEx.readdirSync(src);

  files.forEach(function (file) {
    if (/(^|\/)\.[^\/\.]/g.test(file)) {
      return;
    }

    var fullPathSrc = _pkg.path.join(src, file),
        fullPathDest = _pkg.path.join(dest, file),
        existsDest = _pkg.fsEx.existsSync(fullPathDest),
        statSrc = _pkg.fsEx.statSync(fullPathSrc);

    if (isIgnored(options, statSrc, file)) {
      return;
    }

    if (statSrc.isFile()) {
      if (existsDest) {
        var statDest = _pkg.fsEx.statSync(fullPathDest);

        if (statDest.isFile()) {
          if (!isSameFile(fullPathSrc, fullPathDest)) {
            options.beforeUpdateFileCallback && options.beforeUpdateFileCallback(fullPathSrc);

            _pkg.fsEx.copySync(fullPathSrc, fullPathDest, {
              force: true
            });

            options.updateFileCallback(fullPathSrc, fullPathDest);
          }
        }
      } else {
        options.beforeAddFileCallback && options.beforeAddFileCallback(fullPathSrc);

        _pkg.fsEx.copySync(fullPathSrc, fullPathDest, {
          force: true
        });

        options.addFileCallback(fullPathSrc, fullPathDest);
      }
    } else if (statSrc.isDirectory()) {
      if (!options.recursive) {
        return;
      }

      add(options, fullPathSrc, fullPathDest);
    }
  });
};

module.exports = function (src, dest, options) {
  if (typeof src !== 'string') {
    throw new _pkg.PluginError('lalalia#filesync', 'Missing source directory or type is not a string.');
  }

  if (typeof dest !== 'string') {
    throw new _pkg.PluginError('lalalia#filesync', 'Missing destination directory or type is not a string.');
  }

  options = options || {};
  options.recursive = options.recursive === undefined || options.recursive;

  options.addFileCallback = options.addFileCallback || function (fullPathSrc, fullPathDest) {
    _pkg.log.info('[%s] %s add', _pkg.colors.blue('Filesync'), _pkg.colors.cyan(fullPathSrc));
  };

  options.deleteFileCallback = options.deleteFileCallback || function (fullPathSrc, fullPathDest) {
    _pkg.log.info('[%s] %s delete', _pkg.colors.blue('Filesync'), _pkg.colors.cyan(fullPathSrc));
  };

  options.updateFileCallback = options.updateFileCallback || function (fullPathSrc, fullPathDest) {
    _pkg.log.info('[%s] %s change', _pkg.colors.blue('Filesync'), _pkg.colors.cyan(fullPathSrc));
  };

  _pkg.fsEx.ensureDirSync(dest);

  remove(options, src, dest);
  add(options, src, dest);
};

/***/ }),

/***/ "./src/lib/html-beautify.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _pkg = __webpack_require__("./src/package.js");

module.exports = function (options) {
  return _pkg.through2.obj(function (file, enc, next) {
    if (file.isNull()) {
      next(null, file);
      return;
    }

    var minify = function minify(buf, _, cb) {
      try {
        var contents = Buffer.from(_pkg.beautify.html(buf.toString().replace(/^\s*[\r\n]/gm, ''), options));

        if (next === cb) {
          file.contents = contents;
          cb(null, file);
          return;
        }

        cb(null, contents);
        next(null, file);
      } catch (err) {
        var opts = Object.assign({}, options, {
          fileName: file.path
        });
        var error = new _pkg.PluginError('lalalia#htmlbeautify', err, opts);

        if (next !== cb) {
          next(error);
          return;
        }

        cb(error);
      }
    };

    if (file.isStream()) {
      file.contents = file.contents.pipe(_pkg.through(minify));
    } else {
      minify(file.contents, null, next);
    }
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/lib/html-min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _pkg = __webpack_require__("./src/package.js");

module.exports = function (options) {
  return _pkg.through2.obj(function (file, enc, next) {
    if (file.isNull()) {
      next(null, file);
      return;
    }

    var minify = function minify(buf, _, cb) {
      try {
        var contents = Buffer.from(_pkg.htmlMin.minify(_pkg.decomment(buf.toString(), options), options));

        if (next === cb) {
          file.contents = contents;
          cb(null, file);
          return;
        }

        cb(null, contents);
        next(null, file);
      } catch (err) {
        var opts = Object.assign({}, options, {
          fileName: file.path
        });
        var error = new _pkg.PluginError('lalalia#htmlmin', err, opts);

        if (next !== cb) {
          next(error);
          return;
        }

        cb(error);
      }
    };

    if (file.isStream()) {
      file.contents = file.contents.pipe(_pkg.through(minify));
    } else {
      minify(file.contents, null, next);
    }
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/lib/js-inline-min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _pkg = __webpack_require__("./src/package.js");

module.exports = function (options) {
  options = options || {};

  function minify(file, _, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      throw new _pkg.PluginError('lalalia#jsinlinemin', 'Streaming not supported');
    }

    var html = file.contents.toString('utf8');
    var reg = /(<script(?![^>]*?\b(type=['"]text\/template['"]|src=["']))[^>]*?>)([\s\S]*?)<\/script>/g;
    var isMinify = false;
    html = html.replace(reg, function (str, tagStart, attr, script) {
      try {
        var result = _pkg.uglifyJS.minify(script, options);

        isMinify = true;

        if (!result || result.error) {
          throw new _pkg.PluginError('lalalia#jsinlinemin', 'uglify-es minify error.' + result.error);
        }

        return tagStart + result.code + '</script>';
      } catch (err) {
        throw new _pkg.PluginError('lalalia#jsinlinemin', err, {
          fileName: file.path
        });
      }
    });

    if (isMinify) {
      file.contents = new Buffer(html);
    }

    cb(null, file);
  }

  return _pkg.through2.obj(minify);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/lib/js-min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {

var _pkg = __webpack_require__("./src/package.js");

module.exports = function (options) {
  options = options || {};

  function minify(file, _, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    var _this = this;

    if (file.isStream()) {
      throw new _pkg.PluginError('lalalia#jsmin', 'Streaming not supported');
    }

    var script = file.contents.toString();

    try {
      var result = _pkg.uglifyJS.minify(script, options);

      if (!result || result.error) {
        var message = new _pkg.PluginError('lalalia#jsmin', 'uglify-es minify error.' + result.error);
        process.stderr.write("".concat(message, "\n"));

        _this.emit('end');
      }

      file.contents = new Buffer.from(result.code);
      cb(null, file);
    } catch (err) {
      var _message = new _pkg.PluginError('lalalia#jsmin', err, {
        fileName: file.path
      });

      process.stderr.write("".concat(_message, "\n"));

      _this.emit('end');
    }
  }

  return _pkg.through2.obj(minify);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/lib/merge-json.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pkg = __webpack_require__("./src/package.js"); //Fork from gulp-json-concat


module.exports = function (fileName, converter) {
  if (!fileName) {
    throw new _pkg.PluginError('lalalia#data', 'Missing fileName option!');
  }

  if (!converter) {
    throw new _pkg.PluginError('lalalia#data', 'Missing converter option!');
  }

  var data = {};
  var firstFile = null;
  var skipConversion = false;

  function bufferContents(file) {
    try {
      _pkg.jsonlint.parse(String(file.contents));
    } catch (err) {
      _pkg.log.error('Error on file' + file.path);

      _pkg.log.error(err.message);

      _pkg.log.error('Your JSON file was not generated. Please correct your JSON file.');

      return false;
    }

    if (!firstFile) {
      firstFile = file;
    }

    if (file.isNull()) {
      return; // ignore
    }

    if (file.isStream()) {
      skipConversion = true;
      return this.emit('error', new _pkg.PluginError('lalalia#data', 'Streaming not supported'));
    }

    try {
      // Remove subfolders name in the file.relative value
      if (file.relative.indexOf('\\') >= 0) {
        var fileFlat = _pkg.path.parse(_file.relative);

        var fileContent = _file.contents;

        var _file = new _pkg.vinyl({
          cwd: "",
          base: "",
          path: fileFlat.base,
          contents: fileContent
        });
      }

      data[_pkg.path.basename(file.relative, ".json")] = JSON.parse(file.contents.toString());
    } catch (err) {
      skipConversion = true;
      return this.emit('error', new _pkg.PluginError('lalalia#data', 'Error parsing JSON: ' + err + ', file: ' + file.path.slice(file.base.length)));
    }
  }

  function endStream() {
    if (firstFile && !skipConversion) {
      var joinedPath = _pkg.path.join(firstFile.base, fileName);

      try {
        var joinedFile = new _pkg.vinyl({
          cwd: firstFile.cwd,
          base: firstFile.base,
          path: joinedPath,
          contents: converter(data)
        });
        this.emit('data', joinedFile);
      } catch (e) {
        return this.emit('error', new _pkg.PluginError('lalalia#data', e, {
          showStack: true
        }));
      }
    }

    this.emit('end');
  }

  return _pkg.through(bufferContents, endStream);
};

/***/ }),

/***/ "./src/lib/nunjuck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {

var _pkg = __webpack_require__("./src/package.js"); //Fork from gulp-nunjucks-render


module.exports = function (options) {
  var defaults = {
    path: '.',
    ext: '.html',
    data: {},
    inheritExtension: false,
    envOptions: {
      watch: false
    },
    manageEnv: null
  };
  options = _pkg._.defaultsDeep(options || {}, defaults);

  _pkg.nunjucks.configure(options.envOptions);

  if (!options.loaders) {
    options.loaders = new _pkg.nunjucks.FileSystemLoader(options.path);
  }

  var compile = new _pkg.nunjucks.Environment(options.loaders, options.envOptions);

  if (_pkg._.isFunction(options.manageEnv)) {
    options.manageEnv.call(null, compile);
  }

  return _pkg.through2.obj(function (file, enc, cb) {
    var data = _pkg._.cloneDeep(options.data);

    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.data) {
      data = _pkg._.merge(file.data, data);
    }

    if (file.isStream()) {
      this.emit('error', new _pkg.PluginError('lalalia#njk', 'Streaming not supported'));
      return cb();
    }

    var _this = this;

    var filePath = file.path;

    try {
      compile.renderString(file.contents.toString(), data, function (err, result) {
        if (err) {
          var message = new _pkg.PluginError('lalalia#njk', err, {
            fileName: filePath
          });
          process.stderr.write("".concat(message, "\n"));

          _this.emit('end');

          return cb();
        }

        file.contents = new Buffer.from(result);

        if (!options.inheritExtension) {
          file.path = _pkg.replaceExtension(filePath, options.ext);
        }

        _this.push(file);

        cb();
      });
    } catch (err) {
      var message = new _pkg.PluginError('lalalia#njk', err, {
        fileName: filePath
      });
      process.stderr.write("".concat(message, "\n"));

      _this.emit('end');

      cb();
    }
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/lib/rev-url.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _pkg = __webpack_require__("./src/package.js"); //Fork from gulp-rev-css-url


module.exports = function () {
  var allowedPathRegExp = /\.(scss|less|stylus|css)$/;

  function md5(str) {
    return _pkg.crypto.createHash('md5').update(str, 'utf8').digest('hex');
  }

  function relPath(base, filePath) {
    if (filePath.indexOf(base) !== 0) {
      return filePath;
    }

    var newPath = filePath.substr(base.length);

    if (newPath[0] === _pkg.path.sep) {
      return newPath.substr(1);
    } else {
      return newPath;
    }
  }

  var f = [];
  return _pkg.through2.obj(function (file, enc, cb) {
    var firstFile = null;
    file.skipHash = !file.revOrigPath;
    file.revOrigPath = file.revOrigPath || file.path;
    file.revOrigBase = file.revOrigBase || file.base;

    if (file.path && file.revOrigPath) {
      firstFile = firstFile || file;

      var _relPath = relPath(_pkg.path.resolve(firstFile.revOrigBase), file.revOrigPath);

      f.push({
        origPath: _relPath,
        hashedPath: relPath(_pkg.path.resolve(firstFile.base), file.path),
        file: file
      });
    }

    cb();
  }, function (cb) {
    var self = this; // sort by filename length to not replace the common part(s) of several filenames

    var longestFirst = f.slice().sort(function (a, b) {
      if (a.origPath.length > b.origPath.length) return -1;
      if (a.origPath.length < b.origPath.length) return 1;
      return 0;
    });
    f.forEach(function (_f) {
      var file = _f.file;

      if (allowedPathRegExp.test(file.revOrigPath) && file.contents) {
        var contents = file.contents.toString();
        longestFirst.forEach(function (__f) {
          var origPath = __f.origPath.replace(new RegExp('\\' + _pkg.path.sep, 'g'), '/').replace(/\./g, '\\.');

          var hashedPath = __f.hashedPath.replace(new RegExp('\\' + _pkg.path.sep, 'g'), '/');

          contents = contents.replace(new RegExp(origPath, 'g'), hashedPath);
        });
        file.contents = new Buffer(contents);

        if (!file.skipHash) {
          // update file's hash as it does in gulp-rev plugin
          var hash = file.revHash = md5(contents).slice(0, 10);

          var ext = _pkg.path.extname(file.path);

          var filename = _pkg.path.basename(file.revOrigPath, ext) + '-' + hash + ext;
          file.path = _pkg.path.join(_pkg.path.dirname(file.path), filename);
        }
      }

      self.push(file);
    });
    cb();
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/lib/sitemap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _pkg = __webpack_require__("./src/package.js");

var header = ['<?xml version="1.0" encoding="UTF-8"?>', '<?xml-stylesheet type="text/xsl" href="https://cdn.jsdelivr.net/gh/tinhvqbk/lalalia@master/lib/sitemap.xsl"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'];
var footer = ['</urlset>'];
var allowedProperties = ['getLoc', 'lastmod', 'priority', 'changefreq', 'hreflang'];

var getEntryConfig = function getEntryConfig(file, siteConfig) {
  var relativePath = file.relative;
  var mappingsForFile = _pkg._.find(siteConfig.mappings, function (item) {
    return _pkg.multimatch(relativePath, item.pages).length > 0;
  }) || {};

  var entry = _pkg._.defaults({}, _pkg._.pick(mappingsForFile, allowedProperties), _pkg._.pick(siteConfig, allowedProperties));

  if (siteConfig.stylesheetUrl) {
    header[1] = '<?xml-stylesheet type="text/xsl" href="' + siteConfig.stylesheetUrl + '"?>';
  }

  if (entry.lastmod === null) {
    // calculate mtime manually
    entry.lastmod = file.stat && file.stat.mtime || Date.now();
  } else if (typeof entry.lastmod === 'function') {
    entry.lastmod = entry.lastmod(file);
  } //turn index.html into -> /


  var relativeFile = relativePath.replace(/(\/|\\|^)index\.html?$/, '/');

  if (relativeFile === '/') {
    relativeFile = '';
  } //url location. Use slash to convert windows \\ or \ to /


  var adjustedFile = _pkg.slash(relativeFile);

  entry.loc = siteConfig.siteUrl + adjustedFile;
  entry.file = adjustedFile;
  entry.source = file.history[0];
  return entry;
};

var wrapTag = function wrapTag(tag, value) {
  return "\n  <".concat(tag, ">").concat(value, "</").concat(tag, ">\n");
};

var createImageSitemap = function createImageSitemap(imageURL) {
  return "\n  <image:image>\n      <image:loc>".concat(imageURL, "</image:loc>\n  </image:image>\n");
};

var notIsHTTPURL = function notIsHTTPURL(text) {
  return !/https?:\/\//ig.test(text);
};

var getImagesUrl = function getImagesUrl(entry, siteConfig) {
  var reImageMatch = /<img\s+src="((https?:\/\/)?[\w\.\/]+)"/ig;
  var reSourceMatch = /"((https?:\/\/)?[\w\.\/]+)"/ig;

  var html = _pkg.fs.readFileSync(entry.source, {
    encoding: 'utf8'
  });

  var images = html.match(reImageMatch);

  if (images === null) {
    return [];
  }

  var URLs = images.map(function (image) {
    var currentURL = image.match(reSourceMatch)[0].replace(/^\"|\"$/ig, '');

    if (notIsHTTPURL(currentURL)) {
      currentURL = currentURL.replace(/^\/|\.\//, '');
      currentURL = siteConfig.siteUrl + currentURL;
    }

    return currentURL;
  });
  return URLs;
};

var generateImagesMap = function generateImagesMap(entry, siteConfig) {
  var imagesURLS = [];
  var XMLImageList = ''; // Crawling page for images

  imagesURLS = getImagesUrl(entry, siteConfig); // if truthy create image sitemap

  if (imagesURLS.length) {
    XMLImageList = imagesURLS.map(function (imageURL) {
      return createImageSitemap(imageURL);
    }).join('');
  }

  return XMLImageList;
};

var processEntry = function processEntry(entry, siteConfig) {
  var returnArr = [siteConfig.spacing + '<url>'];
  var loc = entry.getLoc ? entry.getLoc(siteConfig.siteUrl, entry.loc, entry) : entry.loc;
  returnArr.push(siteConfig.spacing + siteConfig.spacing + wrapTag('loc', loc) + (siteConfig.images ? generateImagesMap(entry, siteConfig) : ''));
  var lastmod = entry.lastmod;

  if (lastmod) {
    //format mtime to ISO (same as +00:00)
    lastmod = new Date(lastmod).toISOString();
    returnArr.push(siteConfig.spacing + siteConfig.spacing + wrapTag('lastmod', lastmod));
  }

  var changefreq = entry.changefreq;

  if (changefreq) {
    returnArr.push(siteConfig.spacing + siteConfig.spacing + wrapTag('changefreq', changefreq));
  }

  var priority;

  if (typeof entry.priority === 'function') {
    priority = entry.priority(siteConfig.siteUrl, entry.loc, entry);
  } else if (typeof entry.priority !== 'undefined') {
    priority = entry.priority;
  }

  if (typeof priority !== 'undefined') {
    returnArr.push(siteConfig.spacing + siteConfig.spacing + wrapTag('priority', priority));
  }

  var hreflang = entry.hreflang;

  if (hreflang && hreflang.length > 0) {
    var file = entry.file;
    hreflang.forEach(function (item) {
      var href = item.getHref(siteConfig.siteUrl, file, item.lang, loc);
      var tag = '<xhtml:link rel="alternate" hreflang="' + item.lang + '" href="' + href + '" />';
      returnArr.push(siteConfig.spacing + siteConfig.spacing + tag);
    });
  }

  returnArr.push(siteConfig.spacing + '</url>');
  return returnArr.join(siteConfig.newLine);
};

var prepareSitemap = function prepareSitemap(entries, config) {
  var entriesHref = entries.some(function (entry) {
    return entry && entry.hreflang && entry.hreflang.length;
  });
  return header.concat(entries.map(function (entry) {
    return processEntry(entry, config);
  })).concat(footer).join(config.newLine).toString();
};

var VALID_CHANGE_FREQUENCIES = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];

var isChangefreqValid = function isChangefreqValid(changefreq) {
  // empty changefreq is valid
  if (!changefreq) {
    return true;
  }

  return _pkg._.includes(VALID_CHANGE_FREQUENCIES, changefreq.toLowerCase());
};

module.exports = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var config = _pkg._.defaults({}, options, {
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

  var entries = [];
  var firstFile;
  var msg;

  if (!config.siteUrl) {
    throw new _pkg.PluginError('lalalia#sitemap', 'siteUrl is a required param');
  } // site url should have a trailing slash


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
    } //skip 404 file


    if (/404\.html?$/i.test(file.relative)) {
      return callback();
    }

    if (options.noindex) {
      var contents = file.contents.toString();

      if (/<meta [^>]*?noindex/i.test(contents)) {
        return callback();
      }
    }

    if (!firstFile) {
      firstFile = file;
    }

    var entry = getEntryConfig(file, config);
    entries.push(entry);
    callback();
  }, function (callback) {
    if (!firstFile) {
      return callback();
    }

    var contents = prepareSitemap(entries, config);

    if (options.verbose) {
      msg = 'Files in sitemap: ' + entries.length;

      _pkg.log(pluginName, msg);
    } //create and push new vinyl file for sitemap


    this.push(new _pkg.vinyl({
      cwd: firstFile.cwd,
      base: firstFile.cwd,
      path: _pkg.path.join(firstFile.cwd, config.fileName),
      contents: Buffer.from(contents)
    }));
    callback();
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/load.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_kyletv_Workspace_lalalia_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_kyletv_Workspace_lalalia_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kyletv_Workspace_lalalia_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_kyletv_Workspace_lalalia_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");





var _pkg = __webpack_require__("./src/package.js");

var _data = __webpack_require__("./src/scripts/data.js");

var _assets = __webpack_require__("./src/scripts/assets.js");

var _sass = __webpack_require__("./src/scripts/style.js");

var _script = __webpack_require__("./src/scripts/script.js");

var _html = __webpack_require__("./src/scripts/html.js");

var _browser = __webpack_require__("./src/scripts/browser.js");

module.exports =
/*#__PURE__*/
function () {
  var _ref = Object(_Users_kyletv_Workspace_lalalia_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  /*#__PURE__*/
  _Users_kyletv_Workspace_lalalia_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(configs, options) {
    return _Users_kyletv_Workspace_lalalia_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _pkg.log.info('[' + _pkg.colors.blue('Copy') + '] Root file');

            _assets.copy_rootFile(configs);

            _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] CSS');

            _context.next = 5;
            return _sass.init(configs, options);

          case 5:
            _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] CSS');

            _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] Javascript');

            _context.next = 9;
            return _script.init(configs, options);

          case 9:
            _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] Javascript');

            if (!options.hash) {
              _context.next = 19;
              break;
            }

            _pkg.log.info('[' + _pkg.colors.blue('Hash') + '] Assets');

            _context.next = 14;
            return _assets.copy_nohash(configs, options);

          case 14:
            _context.next = 16;
            return _assets.hash(configs, options);

          case 16:
            _pkg.log.info('[' + _pkg.colors.green('Hashed') + '] Assets');

            _context.next = 23;
            break;

          case 19:
            _pkg.log.info('[' + _pkg.colors.blue('Copy') + '] Assets');

            _context.next = 22;
            return _assets.copy(configs);

          case 22:
            _pkg.log.info('[' + _pkg.colors.green('Copied') + '] Assets');

          case 23:
            _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] Data JSON');

            _context.next = 26;
            return _data.init(configs);

          case 26:
            _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] Data JSON ');

            _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] HTML');

            _context.next = 30;
            return _html.init(configs, options);

          case 30:
            _pkg.log.info('[' + _pkg.colors.green('Compileted') + '] HTML');

            if (!options.hash) {
              _context.next = 36;
              break;
            }

            _pkg.log.info('[' + _pkg.colors.blue('Revision') + '] Assets');

            _context.next = 35;
            return _assets.rev(configs, options);

          case 35:
            _pkg.log.info('[' + _pkg.colors.green('Revisioned') + '] Assets');

          case 36:
            if (!options.sitemap) {
              _context.next = 41;
              break;
            }

            _pkg.log.info('[' + _pkg.colors.blue('Generating') + '] Sitemap');

            _context.next = 40;
            return _assets.sitemap(configs, options);

          case 40:
            _pkg.log.info('[' + _pkg.colors.green('Generated') + '] Sitemap');

          case 41:
            if (options.serve) {
              _browser.init(configs, options);
            }

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/package.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "_": __webpack_require__("lodash"),
  "path": __webpack_require__("./node_modules/path-browserify/index.js"),
  "vinyl": __webpack_require__("vinyl"),
  "crc": __webpack_require__("crc"),
  "fs": __webpack_require__("fs"),
  "fsEx": __webpack_require__("fs-extra"),
  "log": __webpack_require__("fancy-log"),
  "replaceExtension": __webpack_require__("replace-ext"),
  "PluginError": __webpack_require__("plugin-error"),
  "colors": __webpack_require__("ansi-colors"),
  "browser": __webpack_require__("browser-sync"),
  "chokidar": __webpack_require__("chokidar"),
  "through2": __webpack_require__("through2"),
  "through": __webpack_require__("through"),
  "nunjucks": __webpack_require__("nunjucks"),
  "webpack": __webpack_require__("webpack"),
  "webpackStream": __webpack_require__("webpack-stream"),
  "jsonlint": __webpack_require__("jsonlint"),
  "postcssImport": __webpack_require__("postcss-import"),
  "cssnano": __webpack_require__("cssnano"),
  "htmlMin": __webpack_require__("html-minifier"),
  "decomment": __webpack_require__("decomment"),
  "uglifyJS": __webpack_require__("uglify-js"),
  "autoprefixer": __webpack_require__("autoprefixer"),
  "beautify": __webpack_require__("js-beautify"),
  "crypto": __webpack_require__("./node_modules/crypto-browserify/index.js"),
  "multimatch": __webpack_require__("multimatch"),
  "slash": __webpack_require__("slash"),
  //Gulp
  "gulp": __webpack_require__("gulp"),
  "gulpPostcss": __webpack_require__("gulp-postcss"),
  "gulpSass": __webpack_require__("gulp-sass"),
  "gulpIf": __webpack_require__("gulp-if"),
  "gulpBabel": __webpack_require__("gulp-babel"),
  //Build hash
  "rev": __webpack_require__("gulp-rev"),
  "revCollector": __webpack_require__("gulp-rev-collector")
};
module.exports.lib = {
  "nunjuck": __webpack_require__("./src/lib/nunjuck.js"),
  "sitemap": __webpack_require__("./src/lib/sitemap.js"),
  "revURL": __webpack_require__("./src/lib/rev-url.js"),
  "mergeJson": __webpack_require__("./src/lib/merge-json.js"),
  "htmlMin": __webpack_require__("./src/lib/html-min.js"),
  "htmlBeautify": __webpack_require__("./src/lib/html-beautify.js"),
  "jsInlineMin": __webpack_require__("./src/lib/js-inline-min.js"),
  "jsMin": __webpack_require__("./src/lib/js-min.js"),
  "fileSync": __webpack_require__("./src/lib/file-sync.js")
};

/***/ }),

/***/ "./src/scripts/assets.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pkg = __webpack_require__("./src/package.js");

function copy_rootFile(_config) {
  return _pkg.gulp.src(_config.paths.src.otherfile).pipe(_pkg.gulp.dest(_config.paths.dest.root));
}

function copy(_config, _option) {
  return new Promise(function (res) {
    _pkg.gulp.src([_config.paths.src.assets + '/**/*', '!' + _config.paths.src.svg, '!' + _config.paths.src.svg + '/**/**']).pipe(_pkg.gulp.dest(_config.paths.dest.assets)).on('end', res);
  });
}

function copy_nohash(_config, _option) {
  return new Promise(function (res) {
    _pkg.gulp.src([_config.paths.src.otherassets + '/**/*']).pipe(_pkg.gulpIf('*.html', _pkg.lib.htmlMin({
      collapseWhitespace: true
    }))).pipe(_pkg.gulpIf('*.html', _pkg.lib.jsInlineMin())).pipe(_pkg.gulpIf('*.js', _pkg.gulpBabel({
      compact: false,
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-class-properties']
    }))).pipe(_pkg.gulpIf('*.js', _pkg.lib.jsMin())).pipe(_pkg.gulp.dest(_config.paths.dest.otherassets)).on('end', res);
  });
}

function hash(_config, _option) {
  return new Promise(function (res) {
    _pkg.gulp.src([_config.paths.src.assets + '/**/*', '!' + _config.paths.src.svg + '/**/*', '!' + _config.paths.src.otherassets + '/**/*']).pipe(_pkg.rev()).pipe(_pkg.lib.revURL()).pipe(_pkg.gulp.dest(_config.paths.dest.assets)).pipe(_pkg.rev.manifest('assets.json', {
      merge: true
    })).pipe(_pkg.gulp.dest(_config.paths.root + '/rev')).on('end', res);
  });
}

function rev(_config, _option) {
  return new Promise(function (res) {
    _pkg.gulp.src([_config.paths.root + 'rev/**/*.json', _config.paths.tmp.root + '/**/*.html']).pipe(_pkg.revCollector({
      replaceReved: true
    })).pipe(_pkg.gulp.dest(_config.paths.dest.root)).on('end', res);
  });
}

function sitemap(_config, _option) {
  return new Promise(function (res) {
    _pkg.gulp.src([_config.paths.dest.root + '/**/*.html', '!' + _config.paths.dest.assets + '/**/*.html'], {
      read: false
    }).pipe(_pkg.lib.sitemap(_option.sitemap)).pipe(_pkg.gulp.dest(_config.paths.dest.root)).on('end', res);
  });
}

module.exports = {
  "copy": copy,
  "copy_rootFile": copy_rootFile,
  "copy_nohash": copy_nohash,
  "hash": hash,
  "sitemap": sitemap,
  "rev": rev
};

/***/ }),

/***/ "./src/scripts/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pkg = __webpack_require__("./src/package.js");

var _sass = __webpack_require__("./src/scripts/style.js");

var _html = __webpack_require__("./src/scripts/html.js");

var _script = __webpack_require__("./src/scripts/script.js");

var _data = __webpack_require__("./src/scripts/data.js");

function init(_config, _option) {
  var _sync = _pkg.browser.create();

  _sync.init({
    server: {
      notify: false,
      baseDir: [_config.paths.dest.root],
      directory: true
    }
  });

  _pkg.chokidar.watch([_config.paths.src.data + '/**/*', _config.paths.src.svg + '/**/*', _config.paths.src.sass + '/**/*', _config.paths.src.script + '/**/*', _config.paths.src.templates + '/**/*']).on('all', function (event, path) {
    if (event == 'change') {
      var extFile = _pkg.path.extname(path);

      _pkg.log.info('[%s] %s %s', _pkg.colors.blue('Watch'), _pkg.colors.cyan(path), event);

      if (extFile === '.scss' || extFile === '.css') {
        _sass.init(_config, _option).then(function () {
          _sync.reload();
        });
      }

      if (extFile === '.njk' || extFile === '.svg') {
        _html.init(_config, _option).then(function () {
          _sync.reload();
        });
      }

      if (extFile === '.js' || extFile === '.jsx' || extFile === '.mjs') {
        _script.init(_config, _option).then(function () {
          _sync.reload();
        });
      }

      if (extFile === '.json') {
        _data.init(_config, _option).then(function () {
          _html.init(_config, _option).then(function () {
            _sync.reload();
          });
        });
      }
    }
  });

  _pkg.chokidar.watch([_config.paths.src.assets]).on('all', function (event) {
    if (event == 'change' || event == 'unlink') {
      _pkg.lib.fileSync(_config.paths.src.images, _config.paths.dest.images);

      _pkg.lib.fileSync(_config.paths.src.otherassets, _config.paths.dest.otherassets);
    }
  });
}

module.exports = {
  "init": init
};

/***/ }),

/***/ "./src/scripts/data.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _pkg = __webpack_require__("./src/package.js");

function init(_config) {
  return new Promise(function (res) {
    _pkg.gulp.src(_config.paths.src.data + '/*.json').pipe(_pkg.lib.mergeJson('data.json', function (data) {
      return new Buffer.from(JSON.stringify(data));
    })).pipe(_pkg.gulp.dest(_config.paths.tmp.root)).on('end', res);
  });
}

module.exports = {
  "init": init
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/scripts/html.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pkg = __webpack_require__("./src/package.js");

function init(_config, _option) {
  var dest = _option.hash ? _config.paths.tmp.root : _config.paths.dest.root;
  return new Promise(function (res) {
    _pkg.gulp.src([_config.paths.src.templates + '/pages/**/*.njk']).pipe(_pkg.lib.nunjuck({
      path: [_config.paths.src.svg, _config.paths.src.templates + '/pages/', _config.paths.src.templates + '/partials/', _config.paths.src.templates + '/layouts/'],
      // data: _data.stream(_config),
      data: JSON.parse(_pkg.fs.readFileSync(_config.paths.tmp.root + '/data.json')),
      manageEnv: function manageEnv(env) {
        env.addGlobal('ENV', Object({"NODE_ENV":"production","PUBLIC_URL":""}));
        env.addGlobal('YEAR', new Date().getFullYear());
      }
    })).pipe(_pkg.gulpIf(_option.htmlBeautify, _pkg.lib.htmlBeautify({
      space_in_empty_paren: true
    }))).pipe(_pkg.gulpIf(_option.minify, _pkg.lib.htmlMin({
      collapseWhitespace: true
    }))).pipe(_pkg.gulp.dest(dest)).on('end', res);
  });
}

module.exports = {
  "init": init
};

/***/ }),

/***/ "./src/scripts/script.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pkg = __webpack_require__("./src/package.js");

function init(_config, _option) {
  var dest = _option.hash ? _config.paths.src.js : _config.paths.dest.js;
  var webpackMode = _option.jsOptimize || _option.minify ? 'production' : 'development';
  return new Promise(function (res) {
    _pkg.gulp.src(_config.paths.src.script + '/*.+(js|mjs|jsx)').pipe(_pkg.webpackStream({
      mode: webpackMode,
      output: {
        filename: 'app.js'
      },
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        }]
      }
    }, _pkg.webpack)).pipe(_pkg.gulp.dest(dest)).on('end', res);
  });
}

module.exports = {
  "init": init
};

/***/ }),

/***/ "./src/scripts/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pkg = __webpack_require__("./src/package.js");

function init(_config, _option) {
  var dest = _option.hash ? _config.paths.src.css : _config.paths.dest.css;
  var postcssPlugins = [_pkg.postcssImport(), _pkg.autoprefixer()];

  if (_option.cssOptimize || _option.minify) {
    postcssPlugins.push(_pkg.cssnano({
      zindex: false
    }));
  }

  var outputStyle = _option.cssOptimize || _option.minify ? 'compressed' : 'expanded';
  return new Promise(function (res) {
    _pkg.gulp.src(_config.paths.src.sass + '/**/*.scss').pipe(_pkg.gulpSass({
      includePaths: ['./node_modules'],
      sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: outputStyle
    }).on('error', _pkg.gulpSass.logError)).pipe(_pkg.gulpPostcss(postcssPlugins)).pipe(_pkg.gulp.dest(dest)).on('end', res);
  });
}

module.exports = {
  "init": init
};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.js");


/***/ }),

/***/ "ansi-colors":
/***/ (function(module, exports) {

module.exports = require("ansi-colors");

/***/ }),

/***/ "autoprefixer":
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ }),

/***/ "base64-js":
/***/ (function(module, exports) {

module.exports = require("base64-js");

/***/ }),

/***/ "browser-sync":
/***/ (function(module, exports) {

module.exports = require("browser-sync");

/***/ }),

/***/ "browserify-cipher":
/***/ (function(module, exports) {

module.exports = require("browserify-cipher");

/***/ }),

/***/ "browserify-sign":
/***/ (function(module, exports) {

module.exports = require("browserify-sign");

/***/ }),

/***/ "browserify-sign/algos":
/***/ (function(module, exports) {

module.exports = require("browserify-sign/algos");

/***/ }),

/***/ "chokidar":
/***/ (function(module, exports) {

module.exports = require("chokidar");

/***/ }),

/***/ "crc":
/***/ (function(module, exports) {

module.exports = require("crc");

/***/ }),

/***/ "create-ecdh":
/***/ (function(module, exports) {

module.exports = require("create-ecdh");

/***/ }),

/***/ "create-hash":
/***/ (function(module, exports) {

module.exports = require("create-hash");

/***/ }),

/***/ "create-hmac":
/***/ (function(module, exports) {

module.exports = require("create-hmac");

/***/ }),

/***/ "cssnano":
/***/ (function(module, exports) {

module.exports = require("cssnano");

/***/ }),

/***/ "decomment":
/***/ (function(module, exports) {

module.exports = require("decomment");

/***/ }),

/***/ "diffie-hellman":
/***/ (function(module, exports) {

module.exports = require("diffie-hellman");

/***/ }),

/***/ "fancy-log":
/***/ (function(module, exports) {

module.exports = require("fancy-log");

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "fs-extra":
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "gulp":
/***/ (function(module, exports) {

module.exports = require("gulp");

/***/ }),

/***/ "gulp-babel":
/***/ (function(module, exports) {

module.exports = require("gulp-babel");

/***/ }),

/***/ "gulp-if":
/***/ (function(module, exports) {

module.exports = require("gulp-if");

/***/ }),

/***/ "gulp-postcss":
/***/ (function(module, exports) {

module.exports = require("gulp-postcss");

/***/ }),

/***/ "gulp-rev":
/***/ (function(module, exports) {

module.exports = require("gulp-rev");

/***/ }),

/***/ "gulp-rev-collector":
/***/ (function(module, exports) {

module.exports = require("gulp-rev-collector");

/***/ }),

/***/ "gulp-sass":
/***/ (function(module, exports) {

module.exports = require("gulp-sass");

/***/ }),

/***/ "html-minifier":
/***/ (function(module, exports) {

module.exports = require("html-minifier");

/***/ }),

/***/ "ieee754":
/***/ (function(module, exports) {

module.exports = require("ieee754");

/***/ }),

/***/ "isarray":
/***/ (function(module, exports) {

module.exports = require("isarray");

/***/ }),

/***/ "js-beautify":
/***/ (function(module, exports) {

module.exports = require("js-beautify");

/***/ }),

/***/ "jsonlint":
/***/ (function(module, exports) {

module.exports = require("jsonlint");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "multimatch":
/***/ (function(module, exports) {

module.exports = require("multimatch");

/***/ }),

/***/ "nunjucks":
/***/ (function(module, exports) {

module.exports = require("nunjucks");

/***/ }),

/***/ "pbkdf2":
/***/ (function(module, exports) {

module.exports = require("pbkdf2");

/***/ }),

/***/ "plugin-error":
/***/ (function(module, exports) {

module.exports = require("plugin-error");

/***/ }),

/***/ "postcss-import":
/***/ (function(module, exports) {

module.exports = require("postcss-import");

/***/ }),

/***/ "public-encrypt":
/***/ (function(module, exports) {

module.exports = require("public-encrypt");

/***/ }),

/***/ "randombytes":
/***/ (function(module, exports) {

module.exports = require("randombytes");

/***/ }),

/***/ "randomfill":
/***/ (function(module, exports) {

module.exports = require("randomfill");

/***/ }),

/***/ "regenerator-runtime":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "replace-ext":
/***/ (function(module, exports) {

module.exports = require("replace-ext");

/***/ }),

/***/ "slash":
/***/ (function(module, exports) {

module.exports = require("slash");

/***/ }),

/***/ "through":
/***/ (function(module, exports) {

module.exports = require("through");

/***/ }),

/***/ "through2":
/***/ (function(module, exports) {

module.exports = require("through2");

/***/ }),

/***/ "uglify-js":
/***/ (function(module, exports) {

module.exports = require("uglify-js");

/***/ }),

/***/ "vinyl":
/***/ (function(module, exports) {

module.exports = require("vinyl");

/***/ }),

/***/ "webpack":
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-stream":
/***/ (function(module, exports) {

module.exports = require("webpack-stream");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map