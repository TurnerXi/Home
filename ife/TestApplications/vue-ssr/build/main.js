require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nuxt__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nuxt__);


/* harmony default export */ exports["a"] = function (app) {

  return new Promise(function (resolve, reject) {
    // Import and Set Nuxt.js options
    var config = __webpack_require__(5);
    config.dev = !(app.env === 'production');

    // Instantiate nuxt.js
    var nuxt = new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Nuxt"](config);
    // Build in development
    if (config.dev) {
      var builder = new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Builder"](nuxt);
      new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Builder"](nuxt).build().then(function () {
        resolve(nuxt);
      });
    } else {
      resolve(nuxt);
    }
  });
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_logger__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_onerror__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_onerror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_onerror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(6);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







/* harmony default export */ exports["a"] = function (app, nuxt) {
  var _this = this;

  var host = process.env.HOST || '127.0.0.1';
  var port = process.env.PORT || 3000;

  app.use(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              ctx.status = 200; // koa defaults to 404 when it sees that status is unset
              return _context.abrupt('return', new Promise(function (resolve, reject) {
                ctx.res.on('close', resolve);
                ctx.res.on('finish', resolve);
                nuxt.render(ctx.req, ctx.res, function (promise) {
                  // nuxt.render passes a rejected promise into callback on error.
                  promise.then(resolve).catch(reject);
                });
              }));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  app.use(__WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */].allowedMethods());

  var server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(app.callback());
  server.listen(port, host);
  server.on('error', onError);
  server.on('listening', onListening);

  /**
   * Event listener for HTTP server "error" event.
   */

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Server listening on ' + bind); // eslint-disable-line no-console
  }
};

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_users__ = __webpack_require__(8);





var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({
  prefix: "/api"
});

// routes definition
router.use(__WEBPACK_IMPORTED_MODULE_1__routes_index__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_1__routes_index__["a" /* default */].allowedMethods());
router.use(__WEBPACK_IMPORTED_MODULE_2__routes_users__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_2__routes_users__["a" /* default */].allowedMethods());

/* harmony default export */ exports["a"] = router;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a({ prefix: '/index' });
router.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('1234');

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/foo', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('2345');

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ exports["a"] = router;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a({ prefix: '/users' });

router.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.body = 'this is a users response!';

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/bar', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx.body = 'this is a users/bar response!';

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ exports["a"] = router;

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-json");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("koa-logger");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("koa-onerror");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server__ = __webpack_require__(3);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var app;
    return __WEBPACK_IMPORTED_MODULE_0_D_coding_Home_ife_TestApplications_vue_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nuxt__["a" /* default */])(app).then(function (nuxt) {
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__server__["a" /* default */])(app, nuxt);
            });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map