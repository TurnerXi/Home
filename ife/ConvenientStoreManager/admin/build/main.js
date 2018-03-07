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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  env: {
    // API_URL: 'https://192.168.2.140:3004'
  },
  axios: {
    baseURL: 'http://192.168.2.140:3004',
    debug: true,
    https: true,
    proxy: true,
    retry: { retries: 3 }
  },
  // proxy: {
  //   '/api/': 'http://api.example.com',
  //   '/api2/': 'http://api.another-website.com'
  // },
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,minimal-ui' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }, { name: 'msapplication-tap-highlight', content: 'no' }, { name: 'apple-mobile-web-app-capable', content: 'yes' }, { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }, { name: 'format-detection', content: 'telephone=no' }, { name: 'renderer', content: 'webkit' }, { name: 'HandheldFriendly', content: 'true' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    changed: function changed(head) {
      this.$store.state.pageName = head.title;
    }
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css', 'element-ui/lib/theme-chalk/index.css', 'element-ui/lib/theme-chalk/display.css'],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /**
   * modules
   */
  modules: ['@nuxtjs/axios'],
  /**
   * plugins
   */
  plugins: [{ src: '~plugins/element-ui', ssr: true }, { src: '~/plugins/axios', ssr: true }],
  /**
   * router
   */
  router: {
    middleware: 'stats'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'element-ui'],
    babel: {
      plugins: [['component', [{
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }, 'transform-async-to-generator', 'transform-runtime']]]
    },
    loaders: [{
      test: /\.css$/,
      loader: 'vue-style-loader!css-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1KO
        name: 'img/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1 KO
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }],
    postcss: [__webpack_require__(4)({
      browsers: ['last 3 versions']
    })],
    /*
     ** Run ESLINT on save
     */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("autoprefixer");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_admin_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_admin_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_admin_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_admin_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_admin_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(0);

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
            return builder.build();

          case 10:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_admin_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_D_Projects_Home_ife_ConvenientStoreManager_admin_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 13:
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

/***/ }
/******/ ]);
//# sourceMappingURL=main.map