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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);

module.exports = {
  env: {
    API_HOST: 'https://192.168.2.140:3004'
  },
  build: {
    vendor: ['axios']
  },
  // plugins: ['~/plugins/scanner.js','~/plugins/axios.js'],
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' },
    // <!-- 视图窗口，移动端特属的标签。 -->
    // <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
    // <!-- 是否启动webapp功能，会删除默认的苹果工具栏和菜单栏。 -->
    // <meta name="apple-mobile-web-app-capable" content="yes" />
    // <!-- 这个主要是根据实际的页面设计的主体色为搭配来进行设置。 -->
    // <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    // <!-- 忽略页面中的数字识别为电话号码,email识别 -->
    // <meta name="format-detection"content="telephone=no, email=no" />
    // <!-- 启用360浏览器的极速模式(webkit) -->
    // <meta name="renderer" content="webkit">
    // <!-- 避免IE使用兼容模式 -->
    // <meta http-equiv="X-UA-Compatible" content="IE=edge">
    // <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    // <meta name="HandheldFriendly" content="true">
    // <!-- 微软的老式浏览器 -->
    // <meta name="MobileOptimized" content="320">
    // <!-- uc强制竖屏 -->
    // <meta name="screen-orientation" content="portrait">
    // <!-- QQ强制竖屏 -->
    // <meta name="x5-orientation" content="portrait">
    // <!-- UC强制全屏 -->
    // <meta name="full-screen" content="yes">
    // <!-- QQ强制全屏 -->
    // <meta name="x5-fullscreen" content="true">
    // <!-- UC应用模式 -->
    // <meta name="browsermode" content="application">
    // <!-- QQ应用模式 -->
    // <meta name="x5-page-mode" content="app">
    // <!-- windows phone 点击无高光 -->
    // <meta name="msapplication-tap-highlight" content="no">
    { name: 'viewport', content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,minimal-ui' }, { name: 'msapplication-tap-highlight', content: 'no' }, { name: 'apple-mobile-web-app-capable', content: 'yes' }, { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }, { name: 'format-detection', content: 'telephone=no' }, { name: 'renderer', content: 'webkit' }, { name: 'HandheldFriendly', content: 'true' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("https");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_client_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_client_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_client_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_https__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_https___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_https__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_client_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder, options;
    return __WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_client_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(1);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 10;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 10;
            return new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt).build();

          case 10:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_client_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_client_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
                return _ref2.apply(this, arguments);
              };
            }());
            // SSL options
            options = {
              key: __WEBPACK_IMPORTED_MODULE_4_fs___default.a.readFileSync(__dirname + '/../META-INF/privatekey.pem'),
              cert: __WEBPACK_IMPORTED_MODULE_4_fs___default.a.readFileSync(__dirname + '/../META-INF/certification.pem')
            };

            // start the server
            // http.createServer(app.callback()).listen(port, host);

            __WEBPACK_IMPORTED_MODULE_3_https___default.a.createServer(options, app.callback()).listen(443, host);

            // app.listen(port, host)
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







start();
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }
/******/ ]);
//# sourceMappingURL=main.map