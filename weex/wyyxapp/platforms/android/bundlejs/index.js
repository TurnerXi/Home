// { "framework": "Vue"} 

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Vue */

/* weex initialized here, please do not move this line */
var _require = __webpack_require__(1),
    router = _require.router;

var App = __webpack_require__(87);
var mixins = __webpack_require__(95);
Vue.mixin(mixins);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _vueRouter = __webpack_require__(2);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(3);

var _Home2 = _interopRequireDefault(_Home);

var _Topic = __webpack_require__(35);

var _Topic2 = _interopRequireDefault(_Topic);

var _Catalog = __webpack_require__(51);

var _Catalog2 = _interopRequireDefault(_Catalog);

var _Shopcart = __webpack_require__(63);

var _Shopcart2 = _interopRequireDefault(_Shopcart);

var _My = __webpack_require__(71);

var _My2 = _interopRequireDefault(_My);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
Vue.use(_vueRouter2.default);

var router = exports.router = new _vueRouter2.default({
  routes: [{ path: '/', name: 'home', component: _Home2.default }, { path: '/topic', name: 'topic', component: _Topic2.default }, { path: '/catalog', name: 'catalog', component: _Catalog2.default }, { path: '/shopcart', name: 'shopcart', component: _Shopcart2.default }, { path: '/my', name: 'my', component: _My2.default }]
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
  * vue-router v3.0.6
  * (c) 2019 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode && parent.$vnode.data;
      if (vnodeData) {
        if (vnodeData.routerView) {
          depth++;
        }
        if (vnodeData.keepAlive && parent._inactive) {
          inactive = true;
        }
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    if (params.pathMatch) { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    return extend({}, raw)
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) { href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex); }
    else { href = decodeURI(href); }
  } else {
    if (searchIndex > -1) { href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex); }
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(
    to,
    current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.6';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(34)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\page\\Home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-942eacd4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "main-list": {
    "position": "fixed",
    "top": "168",
    "bottom": "90",
    "left": 0,
    "right": 0
  },
  "main-nav": {
    "position": "fixed",
    "top": "114",
    "left": 0,
    "right": 0
  },
  "cell-btn": {
    "paddingBottom": "18",
    "marginBottom": "20"
  },
  "slogen": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff"
  },
  "i-slg": {
    "flex": 1,
    "height": "64",
    "paddingTop": "16",
    "fontSize": "24",
    "color": "#FF0000",
    "textAlign": "center"
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(14);

var _Nav2 = _interopRequireDefault(_Nav);

var _ImgSlider = __webpack_require__(18);

var _ImgSlider2 = _interopRequireDefault(_ImgSlider);

var _Block = __webpack_require__(22);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(26);

var _Block4 = _interopRequireDefault(_Block3);

var _Block5 = __webpack_require__(30);

var _Block6 = _interopRequireDefault(_Block5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: {
    MHeader: _Header2.default,
    Nav: _Nav2.default,
    ImgSlider: _ImgSlider2.default,
    Block1: _Block2.default,
    Block2: _Block4.default,
    Block3: _Block6.default
  },
  data: function data() {
    return {
      isShowNav: false
    };
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(13)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\home\\Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e4d0ca32"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "114",
    "paddingTop": "44",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "backgroundColor": "#FAFAFA",
    "opacity": 0.99
  },
  "header-scanner": {
    "height": "80",
    "width": "96"
  },
  "header-msg": {
    "height": "80",
    "width": "96"
  },
  "icon": {
    "color": "#9c9c9c",
    "fontWeight": "300",
    "textAlign": "center",
    "fontSize": "32"
  },
  "txt": {
    "color": "#9c9c9c",
    "fontWeight": "300",
    "textAlign": "center",
    "fontSize": "18"
  },
  "header-search": {
    "color": "#9c9c9c",
    "fontWeight": "300",
    "textAlign": "center",
    "flex": 1,
    "height": "60",
    "paddingTop": "13",
    "fontSize": "26",
    "borderRadius": "8",
    "backgroundColor": "#EDEDED"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchForm = __webpack_require__(9);

var _SearchForm2 = _interopRequireDefault(_SearchForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    SearchForm: _SearchForm2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\common\\SearchForm.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-359cf2cc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "search-wrapper": {
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2",
    "backgroundColor": "#666666"
  },
  "search-input": {
    "width": "75",
    "height": "90",
    "borderWidth": "0",
    "opacity": 0.1,
    "width:focus": "75",
    "height:focus": "90",
    "borderWidth:focus": "0",
    "opacity:focus": 0.1
  },
  "search-placeholder": {
    "position": "absolute",
    "height": "90",
    "textAlign": "center",
    "lineHeight": "90"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["search-wrapper"]
  }, [_c('input', {
    staticClass: ["search-input"],
    attrs: {
      "type": "text",
      "height": "100%"
    }
  }), _c('div', {
    staticClass: ["search-placeholder"]
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header-scanner"]
  }, [_c('text', {
    staticClass: ["icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["txt"]
  }, [_vm._v("扫一扫")])]), _c('text', {
    staticClass: ["header-search", "iconfont"]
  }, [_vm._v(" 搜索商品，共8888款好物")]), _c('div', {
    staticClass: ["header-msg"]
  }, [_c('text', {
    staticClass: ["icon", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["txt"]
  }, [_vm._v("消息")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\home\\Nav.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3a673539"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "wrapper": {
    "backgroundColor": "#FAFAFA",
    "borderBottomWidth": "1",
    "borderBottomColor": "#DADADA"
  },
  "scroller": {
    "height": "54",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "i-c": {
    "paddingTop": "10",
    "paddingLeft": "45",
    "paddingRight": "45",
    "paddingBottom": "6",
    "fontSize": "26",
    "color": "#333333"
  },
  "c-act": {
    "color": "#b4282d"
  },
  "more": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "height": "52",
    "width": "100",
    "paddingTop": "10",
    "textAlign": "center",
    "backgroundColor": "#fafafa",
    "opacity": 0.96,
    "boxShadow": "-6px -4px 4px #fafafa",
    "transitionProperty": "transform",
    "transitionDuration": 300
  },
  "@TRANSITION": {
    "more": {
      "property": "transform",
      "duration": 300
    },
    "scroll-line": {
      "property": "transform,width",
      "duration": 300
    }
  },
  "scroll-line": {
    "position": "absolute",
    "bottom": 0,
    "height": "4",
    "backgroundColor": "#ff4400",
    "transitionProperty": "transform,width",
    "transitionDuration": 300
  },
  "fix-nav": {
    "position": "absolute",
    "height": "290",
    "left": 0,
    "right": 0,
    "flexDirection": "row",
    "flexWrap": "wrap",
    "backgroundColor": "#fafafa",
    "borderBottomWidth": "1",
    "borderBottomColor": "#DADADA"
  },
  "f-c": {
    "width": "210",
    "height": "52",
    "borderRadius": "8",
    "borderWidth": "1",
    "borderColor": "#dddddd",
    "textAlign": "center",
    "fontSize": "26",
    "paddingTop": "8",
    "marginLeft": "20",
    "marginRight": "20",
    "marginTop": "20",
    "color": "#333333"
  },
  "f-act": {
    "borderColor": "#ff4400",
    "color": "#ff4400",
    "boxShadow": "0px -4px 4px #fafafa"
  },
  "fix-nav-title": {
    "width": "750",
    "height": "54",
    "lineHeight": "54",
    "paddingLeft": "20",
    "fontSize": "26",
    "color": "#333333"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
exports.default = {
  data: function data() {
    return {
      chooseId: 1,
      showFixNav: false,
      scrollLine: {
        left: 30,
        width: 82
      },
      columns: [{ id: 1, title: '推荐' }, { id: 2, title: '限购品' }, { id: 3, title: '新品' }, { id: 4, title: '居家' }, { id: 5, title: '餐饮' }, { id: 6, title: '运动' }, { id: 7, title: '数码' }, { id: 8, title: '服装' }]
    };
  },

  methods: {
    chooseItem: function chooseItem(itemId, idx) {
      this.showFixNav = false;
      this.chooseId = itemId;
      this.scrollLineTo(idx);
      dom.scrollToElement(this.$refs.columns[idx], { offset: -100 });
    },
    scrollLineTo: function scrollLineTo(idx) {
      var _this = this;

      var left = 0;
      for (var i = 0; i < idx; i++) {
        dom.getComponentRect(this.$refs.columns[i], function (data) {
          left += Number(data.size.width);
        });
      }
      dom.getComponentRect(this.$refs.columns[idx], function (data) {
        _this.scrollLine.left = left + 15;
        _this.scrollLine.width = data.size.width - 30;
      });
    }
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: {
      'height': _vm.showFixNav ? '290px' : ''
    }
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    ref: "scrollLine",
    staticClass: ["scroll-line"],
    style: {
      'transform': ("translateX(" + (_vm.scrollLine.left) + "px)"),
      'width': ((_vm.scrollLine.width) + "px")
    }
  }), _vm._l((_vm.columns), function(item, idx) {
    return _c('text', {
      key: item.id,
      ref: "columns",
      refInFor: true,
      class: ['i-c', item.id === _vm.chooseId ? 'c-act' : ''],
      on: {
        "click": function($event) {
          _vm.chooseItem(item.id, idx)
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  }), _c('text', {
    staticClass: ["i-c"]
  })], 2), (_vm.showFixNav) ? _c('div', {
    staticClass: ["fix-nav"]
  }, [_c('text', {
    staticClass: ["fix-nav-title"]
  }, [_vm._v("全部频道")]), _vm._l((_vm.columns), function(item, idx) {
    return _c('text', {
      key: item.id,
      class: ['f-c', item.id === _vm.chooseId ? 'f-act' : ''],
      on: {
        "click": function($event) {
          _vm.chooseItem(item.id, idx)
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  })], 2) : _vm._e(), _c('text', {
    staticClass: ["more", "iconfont"],
    on: {
      "click": function($event) {
        _vm.showFixNav = !_vm.showFixNav
      }
    }
  }, [_vm._v(_vm._s(_vm.showFixNav ? '' : ''))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\home\\ImgSlider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-20401b9a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "width": "750",
    "height": "370"
  },
  "frame": {
    "width": "750",
    "height": "370"
  },
  "image": {
    "width": "750",
    "height": "370"
  },
  "indicator": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": "750",
    "height": "30",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "i-d": {
    "width": "30",
    "height": "4",
    "marginLeft": "10",
    "backgroundColor": "#ffffff",
    "opacity": 0.4
  },
  "i-d-act": {
    "opacity": 1
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      currentIdx: 0,
      imageList: [{ src: 'https://yanxuan.nosdn.127.net/01de3a547f5448d31f8f45f5a012e1a1.jpg?imageView&quality=75&thumbnail=750x0' }, { src: 'https://yanxuan.nosdn.127.net/4a08abbe66fbb2969512269ebfdde19f.jpg?imageView&quality=75&thumbnail=750x0' }, { src: 'https://yanxuan.nosdn.127.net/31044e551b20e851c67b6deea3639430.jpg?imageView&quality=75&thumbnail=750x0' }, { src: 'https://yanxuan.nosdn.127.net/a2b4bcc5a668b35a2820061022904fa8.jpg?imageView&quality=75&thumbnail=750x0' }]
    };
  },

  methods: {}
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "showIndicators": "true"
    },
    on: {
      "change": function($event) {
        _vm.currentIdx = $event.index
      }
    }
  }, _vm._l((_vm.imageList), function(img, idx) {
    return _c('div', {
      key: idx,
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "contain",
        "src": img.src
      }
    })])
  })), _c('div', {
    staticClass: ["indicator"]
  }, _vm._l((_vm.imageList), function(item, idx) {
    return _c('div', {
      key: idx,
      class: ['i-d', _vm.currentIdx == idx ? 'i-d-act' : '']
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(23)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(25)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\home\\Block1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-61d1521e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundSize": "contain"
  },
  "bkg": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "banner": {
    "height": "280"
  },
  "banner-items": {
    "position": "absolute",
    "top": "56",
    "right": "71",
    "width": "168",
    "height": "168"
  },
  "slider": {
    "width": "168",
    "height": "168"
  },
  "frame": {
    "width": "168",
    "height": "168"
  },
  "banner-img": {
    "width": "168",
    "height": "168"
  },
  "banner-txt": {
    "position": "absolute",
    "bottom": 0,
    "left": "10",
    "right": "10",
    "height": "30",
    "flexDirection": "row",
    "justifyContent": "center",
    "textAlign": "center",
    "backgroundColor": "#F49321",
    "borderRadius": "15"
  },
  "banner-money": {
    "color": "#ffffff",
    "fontSize": "20",
    "paddingLeft": "5",
    "lineHeight": "30"
  },
  "banner-omoney": {
    "color": "#ffffff",
    "fontSize": "18",
    "paddingLeft": "5",
    "lineHeight": "30",
    "textDecoration": "line-through"
  },
  "main-items": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "220",
    "marginLeft": "20",
    "marginRight": "20",
    "marginBottom": "10"
  },
  "main-frame": {
    "alignItems": "center",
    "width": "230",
    "height": "220",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "main-txt": {
    "left": 0,
    "right": 0
  },
  "main-title": {
    "textAlign": "center",
    "fontSize": "24",
    "color": "#4c4c4c",
    "lineHeight": "36",
    "fontWeight": "700"
  },
  "main-desc": {
    "textAlign": "center",
    "fontSize": "20",
    "color": "#d4080d",
    "lineHeight": "30"
  },
  "main-img": {
    "flex": 1,
    "width": "140",
    "height": "140"
  },
  "title": {
    "height": "80",
    "width": "750"
  },
  "title-img": {
    "height": "80",
    "width": "750"
  },
  "list-items": {
    "marginLeft": "20",
    "marginRight": "20",
    "marginBottom": "10"
  },
  "list-group": {
    "marginTop": "10",
    "height": "220",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "list-frame": {
    "alignItems": "center",
    "width": "170",
    "height": "220",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "list-txt": {
    "left": 0,
    "right": 0
  },
  "list-title": {
    "textAlign": "center",
    "fontSize": "24",
    "color": "#d95006",
    "lineHeight": "36",
    "fontWeight": "700"
  },
  "list-desc": {
    "textAlign": "center",
    "fontSize": "20",
    "color": "#d95006",
    "lineHeight": "30"
  },
  "list-img": {
    "flex": 1,
    "width": "140",
    "height": "140"
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      info: {
        bkg: 'https://yanxuan.nosdn.127.net/fe5a4fe84fd7f58c588927cf54181981.jpg',
        title_img: 'https://yanxuan.nosdn.127.net/2faa4315a4b09d7e8da6a8f451adf4b4.jpg?imageView&thumbnail=750x0&quality=75',
        banner: {
          bkg: 'https://yanxuan.nosdn.127.net/1f898fc569dc58a8b9a589a16ca83d20.gif',
          items: [{ id: 1, href: '#', img: 'http://yanxuan.nosdn.127.net/7cd9f22c8ca9515d8e8e0861f57f19e9.png', money: '¥69', omoney: '¥78' }, { id: 2, href: '#', img: 'http://yanxuan.nosdn.127.net/b1f7d3096d12d0e4f9e0bbc7232e9295.png', money: '¥120', omoney: '¥180' }, { id: 3, href: '#', img: 'http://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png', money: '¥88', omoney: '¥98' }, { id: 4, href: '#', img: 'http://yanxuan.nosdn.127.net/d2f5072ded8d01e65997638cff806277.png', money: '¥168', omoney: '¥258' }, { id: 5, href: '#', img: 'http://yanxuan.nosdn.127.net/37721979dfc82a0a2648f3b5b46e2161.png', money: '¥288', omoney: '¥328' }]
        },
        main: {
          bkg: 'https://yanxuan.nosdn.127.net/ea460e6a4a55a84a3527c3ea675f2d9f.png?imageView&thumbnail=250x0&quality=75',
          items: [{ id: 1, href: '#', img: 'http://yanxuan.nosdn.127.net/84f4cda372dfd703fe0eeb287fb185f4.png?imageView&thumbnail=160x160&quality=75', title: '特价返场', desc: '最高降1400' }, { id: 2, href: '#', img: 'http://yanxuan.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=160x160&quality=75', title: '618爆卖榜', desc: '抢疯单品4折起' }, { id: 3, href: '#', img: 'http://yanxuan.nosdn.127.net/9b17bde0818b456f208257089ce9ed73.png?imageView&thumbnail=160x160&quality=75', title: '飙升新品榜', desc: '最in新品盘点' }]
        },
        list: {
          bkg: 'https://yanxuan.nosdn.127.net/01c1103b24aa5349f5cf3342b02da313.png?imageView&thumbnail=188x0&quality=75',
          groups: [[{ id: 1, href: '#', img: 'http://yanxuan.nosdn.127.net/4ae99cd4d76993ba384200c1c8d1b8db.png?imageView&thumbnail=160x160&quality=75', title: '净爽洗护', desc: '网红爆款6折起' }, { id: 2, href: '#', img: 'http://yanxuan.nosdn.127.net/bf3ec70b254348196e78259818a48cfc.png?imageView&thumbnail=160x160&quality=75', title: '夏凉服装', desc: '狂欢同价4折起' }, { id: 3, href: '#', img: 'http://yanxuan.nosdn.127.net/37f106da4d23985d3c251f3ba40f9d7e.png?imageView&thumbnail=160x160&quality=75', title: '鞋包配饰', desc: '家居拖9.9元起' }, { id: 4, href: '#', img: 'http://yanxuan.nosdn.127.net/47a8bf28e3e56b96a111546704074ed6.png?imageView&thumbnail=160x160&quality=75', title: '当季美食', desc: '美味低至3.9元' }], [{ id: 5, href: '#', img: 'http://yanxuan.nosdn.127.net/4ae99cd4d76993ba384200c1c8d1b8db.png?imageView&thumbnail=160x160&quality=75', title: '数码家电', desc: '风扇限时7.7折' }, { id: 6, href: '#', img: 'http://yanxuan.nosdn.127.net/77f711f2feeb8f24e2272400d372f41e.png?imageView&thumbnail=160x160&quality=75', title: '精致餐厨', desc: '夏日新品49元起' }, { id: 7, href: '#', img: 'http://yanxuan.nosdn.127.net/a7f3ad90d19c4e06c78f10b4202e5853.png?imageView&thumbnail=160x160&quality=75', title: '品质进口', desc: '最高满199减100' }, { id: 8, href: '#', img: 'http://yanxuan.nosdn.127.net/cd7a612c192a37bab964b41fbc83c4e6.png?imageView&thumbnail=160x160&quality=75', title: '缤纷周边', desc: '官方正版5折起' }], [{ id: 9, href: '#', img: 'http://yanxuan.nosdn.127.net/c442593e0cf25a42d37941554b587418.png?imageView&thumbnail=160x160&quality=75', title: '运动户外', desc: '运动T恤仅29元' }, { id: 10, href: '#', img: 'http://yanxuan.nosdn.127.net/4478ac57bf289b162e8f1837ba3355f7.png?imageView&thumbnail=160x160&quality=75', title: '春风情趣', desc: '特惠5折起' }, { id: 11, href: '#', img: 'http://yanxuan.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?imageView&thumbnail=160x160&quality=75', title: '婴童孕产', desc: '放心购5折起' }, { id: 12, href: '#', img: 'http://yanxuan.nosdn.127.net/146230f1e1c389fb309b38183d73d475.png?imageView&thumbnail=160x160&quality=75', title: '居家焕新', desc: '冰丝席159元起' }]]
        }
      }
    };
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["wrapper-bkg", "bkg"],
    attrs: {
      "resize": "cover",
      "src": _vm.info.bkg
    }
  }), _c('div', {
    staticClass: ["banner"]
  }, [_c('image', {
    staticClass: ["bkg"],
    attrs: {
      "resize": "cover",
      "src": _vm.info.banner.bkg
    }
  }), _c('div', {
    staticClass: ["banner-items"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true"
    }
  }, _vm._l((_vm.info.banner.items), function(item, idx) {
    return _c('a', {
      key: idx,
      staticClass: ["frame"],
      attrs: {
        "href": item.href
      }
    }, [_c('image', {
      staticClass: ["banner-img"],
      attrs: {
        "src": item.img,
        "resize": "contain"
      }
    }), _c('div', {
      staticClass: ["banner-txt"]
    }, [_c('text', {
      staticClass: ["banner-money"]
    }, [_vm._v(_vm._s(item.money))]), _c('text', {
      staticClass: ["banner-omoney"]
    }, [_vm._v(_vm._s(item.omoney))])])])
  }))])]), _c('div', {
    staticClass: ["main-items"]
  }, _vm._l((_vm.info.main.items), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: ["main-frame"]
    }, [_c('image', {
      staticClass: ["bkg"],
      attrs: {
        "resize": "cover",
        "src": _vm.info.main.bkg
      }
    }), _c('div', {
      staticClass: ["main-txt"]
    }, [_c('text', {
      staticClass: ["main-title"]
    }, [_vm._v(_vm._s(item.title))]), _c('text', {
      staticClass: ["main-desc"]
    }, [_vm._v(_vm._s(item.desc))])]), _c('image', {
      staticClass: ["main-img"],
      attrs: {
        "resize": "contain",
        "src": item.img
      }
    })])
  })), _c('div', {
    staticClass: ["title"]
  }, [_c('image', {
    staticClass: ["title-img"],
    attrs: {
      "resize": "contain",
      "src": _vm.info.title_img
    }
  })]), _c('div', {
    staticClass: ["list-items"]
  }, _vm._l((_vm.info.list.groups), function(group, gidx) {
    return _c('div', {
      key: gidx,
      staticClass: ["list-group"]
    }, _vm._l((_vm.info.list.groups[gidx]), function(item, idx) {
      return _c('div', {
        key: idx,
        staticClass: ["list-frame"]
      }, [_c('image', {
        staticClass: ["bkg"],
        attrs: {
          "resize": "cover",
          "src": _vm.info.list.bkg
        }
      }), _c('div', {
        staticClass: ["list-txt"]
      }, [_c('text', {
        staticClass: ["list-title"]
      }, [_vm._v(_vm._s(item.title))]), _c('text', {
        staticClass: ["list-desc"]
      }, [_vm._v(_vm._s(item.desc))])]), _c('image', {
        staticClass: ["list-img"],
        attrs: {
          "resize": "contain",
          "src": item.img
        }
      })])
    }))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\home\\Block2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-61df699f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "title-wrapper": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title": {
    "height": "90",
    "lineHeight": "90",
    "textAlign": "center",
    "fontSize": "32",
    "paddingLeft": "40",
    "paddingRight": "40"
  },
  "title-line": {
    "height": "3",
    "width": "24",
    "backgroundColor": "#333333"
  },
  "items": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "marginLeft": "30",
    "marginRight": "30"
  },
  "main-frame": {
    "marginRight": "4",
    "width": "343",
    "height": "434",
    "borderRadius": "4",
    "backgroundColor": "#F9E9CF"
  },
  "main-title": {
    "fontSize": "32",
    "paddingTop": "30",
    "paddingLeft": "30"
  },
  "main-pic": {
    "width": "258",
    "height": "258",
    "marginTop": "57",
    "marginLeft": "42",
    "marginRight": "42"
  },
  "item-frame": {
    "width": "343",
    "height": "215",
    "marginBottom": "4",
    "borderRadius": "4",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "txt-frame": {
    "alignSelf": "flex-start",
    "paddingTop": "20",
    "paddingLeft": "30"
  },
  "item-title": {
    "fontSize": "32"
  },
  "item-desc": {
    "fontSize": "18",
    "color": "#7F7F7F"
  },
  "item-tag": {
    "alignSelf": "flex-start",
    "fontSize": "16",
    "borderRadius": "5",
    "height": "32",
    "lineHeight": "32",
    "paddingLeft": "10",
    "paddingRight": "10",
    "color": "#ffffff",
    "backgroundColor": "#CBB693",
    "textAlign": "center"
  },
  "item-pic": {
    "alignSelf": "flex-end",
    "width": "200",
    "height": "200"
  },
  "top": {
    "backgroundColor": "#FBE2D3"
  },
  "bottom": {
    "backgroundColor": "#FFECC2"
  },
  "discount": {
    "position": "absolute",
    "top": "10",
    "right": "30",
    "width": "80",
    "height": "80",
    "backgroundColor": "#F59524",
    "borderRadius": "40",
    "opacity": 0.8,
    "paddingTop": "10"
  },
  "line1": {
    "fontSize": "24",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "40"
  },
  "line2": {
    "fontSize": "20",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "25",
    "textDecoration": "line-through"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["title-wrapper"]
  }, [_c('div', {
    staticClass: ["title-line"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("新人专享礼")]), _c('div', {
    staticClass: ["title-line"]
  })]), _c('div', {
    staticClass: ["items"]
  }, [_c('div', {
    staticClass: ["main-frame"]
  }, [_c('text', {
    staticClass: ["main-title"]
  }, [_vm._v("新人专享礼包")]), _c('image', {
    staticClass: ["main-pic"],
    attrs: {
      "resize": "contain",
      "src": "http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"
    }
  })]), _c('div', [_c('div', {
    staticClass: ["item-frame", "top"]
  }, [_c('div', {
    staticClass: ["txt-frame"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("福利社")]), _c('text', {
    staticClass: ["item-desc"]
  }, [_vm._v("今日特价")])]), _c('image', {
    staticClass: ["item-pic"],
    attrs: {
      "resize": "contain",
      "src": "http://yanxuan.nosdn.127.net/13de83a532212f8f7e7723ac666bf191.png?imageView&thumbnail=200x200&quality=75"
    }
  }), _c('div', {
    staticClass: ["discount"]
  }, [_c('text', {
    staticClass: ["line1"]
  }, [_vm._v("¥9.9")]), _c('text', {
    staticClass: ["line2"]
  }, [_vm._v("¥19")])])]), _c('div', {
    staticClass: ["item-frame", "bottom"]
  }, [_c('div', {
    staticClass: ["txt-frame"]
  }, [_c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("新人拼团")]), _c('text', {
    staticClass: ["item-desc"]
  }), _c('text', {
    staticClass: ["item-tag"]
  }, [_vm._v("1元起包邮")])]), _c('image', {
    staticClass: ["item-pic"],
    attrs: {
      "resize": "contain",
      "src": "http://yanxuan.nosdn.127.net/27e82b28bf11797b6c4a10b67d221867.png?imageView&thumbnail=200x200&quality=75"
    }
  }), _c('div', {
    staticClass: ["discount"]
  }, [_c('text', {
    staticClass: ["line1"]
  }, [_vm._v("¥9.9")]), _c('text', {
    staticClass: ["line2"]
  }, [_vm._v("¥19")])])])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(33)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\home\\Block3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-61ed8120"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "bkg": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "wrapper": {
    "backgroundColor": "#ffffff"
  },
  "header": {
    "height": "100",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "title": {
    "height": "100",
    "lineHeight": "100",
    "fontSize": "32",
    "color": "#333333"
  },
  "more": {
    "height": "100",
    "lineHeight": "100",
    "fontSize": "28",
    "color": "#333333",
    "marginRight": 0
  },
  "items": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "flexWrap": "wrap"
  },
  "item-frame": {
    "width": "343",
    "height": "260",
    "alignItems": "center",
    "paddingTop": "23",
    "marginBottom": "4",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat"
  },
  "item-title": {
    "textAlign": "center",
    "fontSize": "28",
    "height": "33",
    "lineHeight": "33",
    "color": "#333333"
  },
  "item-desc": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "36"
  },
  "desc": {
    "fontSize": "24",
    "color": "#7F7F7F",
    "lineHeight": "36",
    "height": "36"
  },
  "tag": {
    "height": "32",
    "lineHeight": "32",
    "fontSize": "24",
    "color": "#ffffff",
    "backgroundColor": "#cbb693",
    "borderRadius": "5",
    "marginLeft": "5",
    "paddingLeft": "5",
    "paddingRight": "5"
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("品牌制造商直供")]), _c('text', {
    staticClass: ["more", "iconfont"]
  }, [_vm._v("更多")])]), _c('div', {
    staticClass: ["items"]
  }, [_c('div', {
    staticClass: ["item-frame"]
  }, [_c('image', {
    staticClass: ["bkg"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"
    }
  }), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("海外制造商")]), _c('div', {
    staticClass: ["item-desc"]
  }, [_c('text', {
    staticClass: ["desc"]
  }, [_vm._v("9.9元起")]), _c('text', {
    staticClass: ["tag"]
  }, [_vm._v("上新")])])]), _c('div', {
    staticClass: ["item-frame"]
  }, [_c('image', {
    staticClass: ["bkg"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1"
    }
  }), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("CK制造商")]), _c('div', {
    staticClass: ["item-desc"]
  }, [_c('text', {
    staticClass: ["desc"]
  }, [_vm._v("29.9元起")])])]), _c('div', {
    staticClass: ["item-frame"]
  }, [_c('image', {
    staticClass: ["bkg"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1"
    }
  }), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("新秀丽制造商")]), _c('div', {
    staticClass: ["item-desc"]
  }, [_c('text', {
    staticClass: ["desc"]
  }, [_vm._v("169元起")])])]), _c('div', {
    staticClass: ["item-frame"]
  }, [_c('image', {
    staticClass: ["bkg"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1"
    }
  }), _c('text', {
    staticClass: ["item-title"]
  }, [_vm._v("Nine West制造商")]), _c('div', {
    staticClass: ["item-desc"]
  }, [_c('text', {
    staticClass: ["desc"]
  }, [_vm._v("269元起")])])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('m-header'), _c('scroller', {
    staticClass: ["main-list"],
    attrs: {
      "loadmoreoffset": "300",
      "offsetAccuracy": "300"
    }
  }, [_c('div', {
    staticClass: ["cell-btn"]
  }, [_c('img-slider'), _vm._m(0)], 1), _c('block1', {
    staticClass: ["cell-btn"]
  }), _c('block2', {
    staticClass: ["cell-btn"]
  }), _c('block3', {
    staticClass: ["cell-btn"]
  })], 1), _c('nav', {
    staticClass: ["main-nav"]
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["slogen"]
  }, [_c('text', {
    staticClass: ["i-slg", "iconfont"]
  }, [_vm._v(" 网易自营品牌")]), _c('text', {
    staticClass: ["i-slg", "iconfont"]
  }, [_vm._v(" 30天无忧退货")]), _c('text', {
    staticClass: ["i-slg", "iconfont"]
  }, [_vm._v(" 48小时快速退款")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(50)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\page\\Topic.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ba9c0af0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "cell-top": {
    "marginTop": "20"
  },
  "title-frame": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "114",
    "paddingTop": "44",
    "borderBottomWidth": "1",
    "borderColor": "#d9d9d9",
    "backgroundColor": "#fafafa"
  },
  "title": {
    "paddingTop": "10",
    "fontSize": "36",
    "lineHeight": "59",
    "textAlign": "center",
    "color": "#333333"
  },
  "list": {
    "position": "fixed",
    "top": "114",
    "left": 0,
    "right": 0,
    "bottom": "95"
  },
  "loading": {
    "width": "750",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Nav = __webpack_require__(38);

var _Nav2 = _interopRequireDefault(_Nav);

var _Block = __webpack_require__(42);

var _Block2 = _interopRequireDefault(_Block);

var _MLoading = __webpack_require__(46);

var _MLoading2 = _interopRequireDefault(_MLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Nav: _Nav2.default,
    Block: _Block2.default,
    MLoading: _MLoading2.default
  },
  data: function data() {
    return {
      loading: false,
      list: [{ avatar: 'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64', name: '居家组：朵朵', images: ['https://yanxuan.nosdn.127.net/15040927525260414.jpg', 'https://yanxuan.nosdn.127.net/15040927586650416.jpg', 'https://yanxuan.nosdn.127.net/15040927556820415.jpg'], title: '初秋，最想用它来裸睡', desc: '连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...' }, { avatar: 'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64', name: '严选推荐', images: ['http://yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg'], title: '年中扫一扫，下半年运势好', desc: '6个家庭清洁小技巧', price: '6.9元起' }]
    };
  },

  methods: {
    onloading: function onloading() {
      var _this = this;

      if (!this.loading) {
        this.loading = true;
        setTimeout(function () {
          _this.list = _this.list.concat(_this.list);
          _this.loading = false;
        }, 2000);
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\topic\\Nav.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7f90d6b3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {
  "bkg": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "scroller": {
    "backgroundColor": "#ffffff",
    "height": "200",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "topic-item": {
    "width": "275",
    "height": "150",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "topic-bkg": {
    "borderRadius": "10"
  },
  "title": {
    "lineHeight": "150",
    "fontSize": "28",
    "color": "#ffffff",
    "textAlign": "center"
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      topics: [{ title: '严选look', img: 'https://yanxuan.nosdn.127.net/15030393722652401.jpg' }, { title: '严选推荐', img: 'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg' }, { title: '丁磊私物推荐', img: 'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg' }, { title: '挑款师推荐', img: 'http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png' }]
    };
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.topics), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: ["topic-item"]
    }, [_c('image', {
      staticClass: ["topic-bkg", "bkg"],
      attrs: {
        "resize": "cover",
        "src": item.img
      }
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(item.title))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\topic\\Block.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4997ef1d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "header-frame": {
    "height": "75",
    "paddingLeft": "25",
    "paddingTop": "10",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center"
  },
  "avatar": {
    "width": "58",
    "height": "58",
    "borderRadius": "25"
  },
  "name": {
    "paddingLeft": "20",
    "fontSize": "26"
  },
  "banner-frame": {
    "height": "380",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "banner-left": {
    "flex": 1,
    "height": "380"
  },
  "banner-right": {
    "width": "190",
    "height": "380"
  },
  "banner-top": {
    "width": "190",
    "height": "188",
    "marginLeft": "3",
    "marginBottom": "3"
  },
  "banner-bottom": {
    "width": "190",
    "height": "188",
    "marginLeft": "3",
    "marginBottom": "3"
  },
  "title-frame": {
    "height": "80",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center"
  },
  "title": {
    "flex": 1,
    "fontSize": "34"
  },
  "price": {
    "fontSize": "32",
    "color": "#ff4400",
    "marginRight": 0
  },
  "desc": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "fontSize": "24",
    "color": "#666666"
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    article: Object
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header-frame"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.avatar
    }
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.article.name))])]), _c('div', {
    staticClass: ["banner-frame"]
  }, [_c('image', {
    staticClass: ["banner-left"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.images[0]
    }
  }), (_vm.article.images.length > 1) ? _c('div', {
    staticClass: ["banner-right"]
  }, [_c('image', {
    staticClass: ["banner-top"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.images[1]
    }
  }), _c('image', {
    staticClass: ["banner-bottom"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.images[2]
    }
  })]) : _vm._e()]), _c('div', {
    staticClass: ["title-frame"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.article.title))]), _c('text', {
    staticClass: ["price"]
  }, [_vm._v(_vm._s(_vm.article.price))])]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v(_vm._s(_vm.article.desc))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(49)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\common\\MLoading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cc5197c6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "height": "60",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#F0F0F0"
  },
  "indicator": {
    "marginLeft": "5",
    "width": "14",
    "height": "14",
    "borderRadius": "7",
    "backgroundColor": "#aeadba",
    "opacity": 0.8,
    "transitionProperty": "opacity,transform",
    "transitionDuration": 500,
    "transitionTimingFunction": "cubic-bezier(0.5,0,0.5,1)"
  },
  "@TRANSITION": {
    "indicator": {
      "property": "opacity,transform",
      "duration": 500,
      "timingFunction": "cubic-bezier(0.5,0,0.5,1)"
    }
  },
  "active": {
    "opacity": 1,
    "transform": "scale(.1)"
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      timer: null,
      active: 0,
      list: [0, 1, 2, 3, 4]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.active = (_this.active + 1) % 5;
    }, 250);
  },
  destroyed: function destroyed() {
    clearInterval(this.timer);
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, _vm._l((_vm.list), function(item) {
    return _c('div', {
      key: item,
      class: ['indicator', _vm.active == item ? 'active' : '']
    })
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _c('list', {
    staticClass: ["list"],
    attrs: {
      "loadmoreoffset": "500"
    },
    on: {
      "loadmore": _vm.onloading
    }
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('nav')], 1), _vm._l((_vm.list), function(item, idx) {
    return _c('cell', {
      key: idx,
      staticClass: ["cell-top"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('block', {
      attrs: {
        "article": item
      }
    })], 1)
  }), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [(_vm.loading) ? _c('m-loading') : _vm._e()], 1)], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title-frame"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("专题")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(62)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\page\\Catalog.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-49fd079c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "wrapper": {
    "backgroundColor": "#FFFFFF"
  },
  "header": {
    "height": "90",
    "paddingLeft": "30",
    "paddingRight": "30",
    "borderBottomWidth": "2",
    "borderBottomColor": "#ededed",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "header-search": {
    "flex": 1,
    "height": "56",
    "lineHeight": "56",
    "textAlign": "center",
    "borderRadius": "10",
    "backgroundColor": "#ededed",
    "fontSize": "26",
    "color": "#666666"
  },
  "main": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": "90",
    "bottom": "90",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "sidebar": {
    "width": "162"
  },
  "content": {
    "flex": 1
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MContent = __webpack_require__(54);

var _MContent2 = _interopRequireDefault(_MContent);

var _MSidebar = __webpack_require__(58);

var _MSidebar2 = _interopRequireDefault(_MSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: {
    MContent: _MContent2.default,
    MSidebar: _MSidebar2.default
  },
  data: function data() {
    return {
      cataId: '0'
    };
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(55)
)

/* script */
__vue_exports__ = __webpack_require__(56)

/* template */
var __vue_template__ = __webpack_require__(57)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\catalog\\MContent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c318edfc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "20",
    "paddingLeft": "30"
  },
  "banner": {
    "marginBottom": "32"
  },
  "banner-img": {
    "height": "192",
    "marginLeft": 0,
    "marginRight": 0
  },
  "items": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-around"
  },
  "item-img": {
    "width": "144",
    "height": "144",
    "borderRadius": "72"
  },
  "item-name": {
    "width": "144",
    "height": "72",
    "textAlign": "center",
    "fontSize": "24"
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      items: [{ 'name': '清爽美食', 'img': 'http://yanxuan.nosdn.127.net/300904c5241a26db6bcce5d9f76551cc.jpg?imageView&quality=85&thumbnail=144x144' }, { 'name': '降温好物', 'img': 'http://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png?imageView&quality=85&thumbnail=144x144' }, { 'name': '烈日防晒', 'img': 'http://yanxuan.nosdn.127.net/0955bacbb512b7be7fac01cd25e2d5fb.png?imageView&quality=85&thumbnail=144x144' }, { 'name': '夏季养生', 'img': 'http://yanxuan.nosdn.127.net/f1b98c9f371cee2860ce8d2f1e11941c.png?imageView&quality=85&thumbnail=144x144' }, { 'name': '防蚊驱虫', 'img': 'http://yanxuan.nosdn.127.net/6466f8085f3e2e06011a8e3f709849d3.png?imageView&quality=85&thumbnail=144x144' }, { 'name': '夏凉床品', 'img': 'http://yanxuan.nosdn.127.net/a763b3c77bc79abaa82c8f716fdd47f0.png?imageView&quality=85&thumbnail=144x144' }, { 'name': '清凉洗护', 'img': 'http://yanxuan.nosdn.127.net/3be1e5f43842190000c9521e3ed741d0.png?imageView&quality=85&thumbnail=144x144' }, { 'name': '夏日穿搭', 'img': 'http://yanxuan.nosdn.127.net/e0df2c529af0fa46524938d9d6458363.png?imageView&quality=85&thumbnail=144x144' }, { 'name': '室内运动好物', 'img': 'http://yanxuan.nosdn.127.net/3738e85c2fb0c009c917a5b378661d36.png?imageView&quality=85&thumbnail=144x144' }]
    };
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["items"]
  }, _vm._l((_vm.items), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: ["item-frame"]
    }, [_c('image', {
      staticClass: ["item-img"],
      attrs: {
        "resize": "cover",
        "src": item.img
      }
    }), _c('text', {
      staticClass: ["item-name"]
    }, [_vm._v(_vm._s(item.name))])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["banner"]
  }, [_c('image', {
    staticClass: ["banner-img"],
    attrs: {
      "src": "http://yanxuan.nosdn.127.net/d2579b43938c13a2c1278cd51c8b1afd.jpg?imageView&thumbnail=0x196&quality=75"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(59)
)

/* script */
__vue_exports__ = __webpack_require__(60)

/* template */
var __vue_template__ = __webpack_require__(61)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\catalog\\MSidebar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c5ab9336"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {
  "menu": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0,
    "paddingBottom": "40"
  },
  "menu-item": {
    "marginTop": "40",
    "height": "50"
  },
  "menu-title": {
    "textAlign": "center",
    "height": "50",
    "lineHeight": "50",
    "fontSize": "28"
  },
  "active": {
    "borderLeftWidth": "8",
    "borderLeftColor": "#FF4400",
    "color": "#FF4400"
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  model: {
    prop: 'cataId',
    event: 'change'
  },
  props: {
    cataId: String
  },
  data: function data() {
    return {
      menus: [{ 'title': '推荐专区', 'cataId': '1022001' }, { 'title': '夏凉专区', 'cataId': '109224000' }, { 'title': '爆品专区', 'cataId': '1087004' }, { 'title': '新品专区', 'cataId': '109217021' }, { 'title': '居家生活', 'cataId': '1005000' }, { 'title': '服饰鞋包', 'cataId': '1010000' }, { 'title': '美食酒水', 'cataId': '1005002' }, { 'title': '个护清洁', 'cataId': '1013001' }, { 'title': '母婴亲子', 'cataId': '1011000' }, { 'title': '运动旅行', 'cataId': '109243029' }, { 'title': '数码家电', 'cataId': '1043000' }, { 'title': '全球特色', 'cataId': '1019001' }, { 'title': '全球特色', 'cataId': '1019002' }, { 'title': '全球特色', 'cataId': '1019003' }, { 'title': '全球特色', 'cataId': '1019004' }]
    };
  },

  methods: {
    doClickEvent: function doClickEvent(cataId) {
      this.$emit('change', cataId);
    }
  },
  mounted: function mounted() {
    this.$emit('change', this.menus[0].cataId);
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["menu"]
  }, _vm._l((_vm.menus), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: ["menu-item"],
      on: {
        "click": function($event) {
          _vm.doClickEvent(item.cataId)
        }
      }
    }, [_c('text', {
      class: ['menu-title', _vm.cataId == item.cataId ? 'active' : '']
    }, [_vm._v(_vm._s(item.title))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["main"]
  }, [_c('m-sidebar', {
    staticClass: ["sidebar"],
    model: {
      value: (_vm.cataId),
      callback: function($$v) {
        _vm.cataId = $$v
      },
      expression: "cataId"
    }
  }), _c('m-content', {
    staticClass: ["content"],
    attrs: {
      "cataId": _vm.cataId
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["header-search", "iconfont"]
  }, [_vm._v(" 搜索商品，共8888款好物")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(64)
)

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(70)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\page\\Shopcart.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-efcc7666"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "88",
    "paddingLeft": "30",
    "paddingRight": "30",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center"
  },
  "header-txt": {
    "flex": 1,
    "fontSize": "36",
    "color": "#333333"
  },
  "header-right": {
    "marginRight": 0,
    "fontSize": "30",
    "color": "#FF4400"
  },
  "service": {
    "height": "70",
    "paddingLeft": "30",
    "paddingRight": "30",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "service-frame": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center"
  },
  "dot": {
    "width": "10",
    "height": "10",
    "borderRadius": "5",
    "borderWidth": ".5",
    "borderColor": "#666666",
    "marginRight": "5",
    "opacity": 0.5
  },
  "service-txt": {
    "fontSize": "24",
    "color": "#666666"
  },
  "cart": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": "158",
    "bottom": "90"
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CartList = __webpack_require__(66);

var _CartList2 = _interopRequireDefault(_CartList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    CartList: _CartList2.default
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(67)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(69)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\shopcart\\CartList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-27515fe1"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "cart-list": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "#FFFFFF"
  },
  "cart-empty": {
    "height": "500",
    "alignItems": "center"
  },
  "empty-img": {
    "width": "248",
    "height": "248",
    "marginBottom": "8"
  },
  "empty-txt": {
    "color": "#7f7f7f",
    "fontSize": "27"
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      list: []
    };
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.list.length > 0) ? _c('scroller', {
    staticClass: ["cart-list"]
  }) : _c('div', {
    staticClass: ["cart-empty"]
  }, [_c('image', {
    staticClass: ["empty-img"],
    attrs: {
      "resize": "contain",
      "src": "//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
    }
  }), _c('text', {
    staticClass: ["empty-txt"]
  }, [_vm._v("去添加点什么吧")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _vm._m(1), _c('cart-list', {
    staticClass: ["cart"]
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["header-txt"]
  }, [_vm._v("购物车")]), _c('text', {
    staticClass: ["header-right"]
  }, [_vm._v("领券")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["service"]
  }, [_c('div', {
    staticClass: ["service-frame"]
  }, [_c('div', {
    staticClass: ["dot"]
  }), _c('text', {
    staticClass: ["service-txt"]
  }, [_vm._v("30天无忧退货")])]), _c('div', {
    staticClass: ["service-frame"]
  }, [_c('div', {
    staticClass: ["dot"]
  }), _c('text', {
    staticClass: ["service-txt"]
  }, [_vm._v("48小时快速退款")])]), _c('div', {
    staticClass: ["service-frame"]
  }, [_c('div', {
    staticClass: ["dot"]
  }), _c('text', {
    staticClass: ["service-txt"]
  }, [_vm._v("满88元免邮费")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(72)
)

/* script */
__vue_exports__ = __webpack_require__(73)

/* template */
var __vue_template__ = __webpack_require__(86)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\page\\My.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-df8f20ba"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {
  "main-wrapper": {
    "paddingBottom": "150"
  },
  "order-btn": {
    "marginBottom": "18"
  },
  "service-btn": {
    "marginBottom": "80"
  },
  "logout": {
    "height": "94",
    "backgroundColor": "#ffffff",
    "fontSize": "28",
    "textAlign": "center",
    "lineHeight": "94"
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MHeader = __webpack_require__(74);

var _MHeader2 = _interopRequireDefault(_MHeader);

var _MOrder = __webpack_require__(78);

var _MOrder2 = _interopRequireDefault(_MOrder);

var _MService = __webpack_require__(82);

var _MService2 = _interopRequireDefault(_MService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    MHeader: _MHeader2.default,
    MOrder: _MOrder2.default,
    MService: _MService2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(75)
)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(77)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\my\\MHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-61606afd"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "vip-icon": {
    "backgroundColor": "#b29e75",
    "color": "#ffffff"
  },
  "vip-txt": {
    "color": "#b29e75"
  },
  "wrapper": {
    "backgroundColor": "#000000",
    "height": "380",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingBottom": "60",
    "justifyContent": "flex-end",
    "overflow": "hidden"
  },
  "user-wrapper": {
    "flexDirection": "row",
    "alignItems": "center",
    "flexWrap": "nowrap"
  },
  "avatar": {
    "width": "130",
    "height": "130",
    "borderRadius": "65"
  },
  "user-title": {
    "flex": 1,
    "marginLeft": "30",
    "height": "100",
    "justifyContent": "space-between"
  },
  "user-name": {
    "color": "#FFFFFF",
    "lineHeight": "38",
    "fontSize": "38"
  },
  "title": {
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "title-icon": {
    "width": "32",
    "height": "32",
    "fontSize": "32",
    "marginRight": "6",
    "borderRadius": "4"
  },
  "title-txt": {
    "fontSize": "28"
  },
  "qrcode": {
    "position": "absolute",
    "right": "80",
    "bottom": "120",
    "width": "80",
    "height": "80",
    "marginRight": "-40",
    "marginBottom": "-40",
    "backgroundColor": "#666666",
    "fontSize": "45",
    "lineHeight": "80",
    "borderRadius": "70",
    "textAlign": "center",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["user-wrapper"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/885e3901d0a3501362530435d76bebb3.jpg"
    }
  }), _c('div', {
    staticClass: ["user-title"]
  }, [_c('text', {
    staticClass: ["user-name"]
  }, [_vm._v("Turner")]), _c('div', {
    staticClass: ["title"]
  }, [_c('image', {
    staticClass: ["title-icon"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/3dc6e876620bb84a5dac3deb6ecd4916.png"
    }
  }), _c('div', {
    staticClass: ["title-icon", "iconfont", "vip-icon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["title-txt", "vip-txt"]
  }, [_vm._v("品质生活家")])])])]), _c('text', {
    staticClass: ["qrcode", "iconfont"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(79)
)

/* script */
__vue_exports__ = __webpack_require__(80)

/* template */
var __vue_template__ = __webpack_require__(81)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\my\\MOrder.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5129d8e4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "wrapper": {
    "height": "226",
    "paddingLeft": "26",
    "backgroundColor": "#ffffff"
  },
  "header": {
    "height": "93",
    "paddingTop": "34",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d9d9d9",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "header-title": {
    "flex": 1,
    "fontSize": "26",
    "color": "#333333"
  },
  "header-right": {
    "marginRight": "30",
    "fontSize": "26",
    "color": "#333333"
  },
  "list": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-around",
    "paddingRight": "30"
  },
  "list-item": {
    "width": "130",
    "height": "132"
  },
  "item-icon": {
    "textAlign": "center",
    "height": "79",
    "paddingTop": "10",
    "paddingBottom": "15",
    "fontSize": "50",
    "color": "#666666"
  },
  "item-name": {
    "textAlign": "center",
    "fontSize": "26",
    "color": "#666666"
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["header-title"]
  }, [_vm._v("我的订单")]), _c('text', {
    staticClass: ["header-right", "iconfont"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["list"]
  }, [_c('div', {
    staticClass: ["list-item"]
  }, [_c('div', {
    staticClass: ["item-icon", "iconfont"]
  }, [_vm._v("")]), _c('div', {
    staticClass: ["item-name"]
  }, [_vm._v("待付款")])]), _c('div', {
    staticClass: ["list-item"]
  }, [_c('div', {
    staticClass: ["item-icon", "iconfont"]
  }, [_vm._v("")]), _c('div', {
    staticClass: ["item-name"]
  }, [_vm._v("待发货")])]), _c('div', {
    staticClass: ["list-item"]
  }, [_c('div', {
    staticClass: ["item-icon", "iconfont"]
  }, [_vm._v("")]), _c('div', {
    staticClass: ["item-name"]
  }, [_vm._v("已发货")])]), _c('div', {
    staticClass: ["list-item"]
  }, [_c('div', {
    staticClass: ["item-icon", "iconfont"]
  }, [_vm._v("")]), _c('div', {
    staticClass: ["item-name"]
  }, [_vm._v("待评价")])]), _c('div', {
    staticClass: ["list-item"]
  }, [_c('div', {
    staticClass: ["item-icon", "iconfont"]
  }, [_vm._v("")]), _c('div', {
    staticClass: ["item-name"]
  }, [_vm._v("退换/售后")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(85)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\my\\MService.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-13c7bd75"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "wrapper": {
    "backgroundColor": "#FFFFFF",
    "paddingLeft": "30"
  },
  "header": {
    "height": "93",
    "paddingTop": "34",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d9d9d9",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "header-title": {
    "flex": 1,
    "fontSize": "26",
    "color": "#333333"
  },
  "header-right": {
    "marginRight": "30",
    "fontSize": "26",
    "color": "#333333"
  },
  "service-list": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-around",
    "height": "150",
    "paddingTop": "20",
    "paddingRight": "30"
  },
  "border": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#d9d9d9"
  },
  "service-item": {
    "width": "130",
    "height": "132"
  },
  "item-icon": {
    "textAlign": "center",
    "height": "79",
    "paddingTop": "10",
    "paddingBottom": "15",
    "fontSize": "50",
    "color": "#666666"
  },
  "item-name": {
    "textAlign": "center",
    "fontSize": "26",
    "color": "#666666"
  },
  "i-c-orange": {
    "color": "#ff744d"
  },
  "i-c-yellow": {
    "color": "#f6a121"
  },
  "i-c-blue": {
    "color": "#689de5"
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      services: [[{ 'name': '拼团订单', 'icon': '&#xe619;', 'color': 'i-c-orange' }, { 'name': '邀请好友', 'icon': '&#xe600;', 'color': 'i-c-yellow' }, { 'name': '优惠券', 'icon': '&#xe609;', 'color': 'i-c-orange' }, { 'name': '优先购', 'icon': '&#xe7fb;', 'color': 'i-c-yellow' }], [{ 'name': '礼品卡', 'icon': '&#xe660;', 'color': 'i-c-orange' }, { 'name': '会员', 'icon': '&#xe701;', 'color': 'i-c-yellow' }, { 'name': '足迹', 'icon': '&#xe602;', 'color': 'i-c-orange' }, { 'name': '收藏', 'icon': '&#xe7f1;', 'color': 'i-c-yellow' }], [{ 'name': '地址', 'icon': '&#xe62c;', 'color': 'i-c-blue' }, { 'name': '客服', 'icon': '&#xe62d;', 'color': 'i-c-blue' }, { 'name': '帮助', 'icon': '&#xe6b5;', 'color': 'i-c-blue' }, { 'name': '设置', 'icon': '&#xe68a;', 'color': 'i-c-blue' }]]
    };
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _vm._l((_vm.services), function(group, g_idx) {
    return _c('div', {
      key: g_idx,
      class: ['service-list', g_idx != _vm.services.length - 1 ? 'border' : '']
    }, _vm._l((group), function(item, idx) {
      return _c('div', {
        key: idx,
        staticClass: ["service-item"]
      }, [_c('text', {
        directives: [{
          name: "html",
          rawName: "v-html",
          value: (item.icon),
          expression: "item.icon"
        }],
        class: ['item-icon', 'iconfont', item.color]
      }), _c('text', {
        staticClass: ["item-name"]
      }, [_vm._v(_vm._s(item.name))])])
    }))
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["header-title"]
  }, [_vm._v("我的服务")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main-wrapper"]
  }, [_c('m-header'), _c('m-order', {
    staticClass: ["order-btn"]
  }), _c('m-service', {
    staticClass: ["service-btn"]
  }), _c('text', {
    staticClass: ["logout"]
  }, [_vm._v("退出登录")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(88)
)

/* script */
__vue_exports__ = __webpack_require__(89)

/* template */
var __vue_template__ = __webpack_require__(94)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = {
  "app-wrapper": {
    "backgroundColor": "#f4f4f4"
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TabBar = __webpack_require__(90);

var _TabBar2 = _interopRequireDefault(_TabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = weex.requireModule('dom'); //
//
//
//
//
//
//

exports.default = {
  name: 'App',
  components: {
    tabBar: _TabBar2.default
  },
  methods: {
    routeTo: function routeTo(target) {
      this.$router.push(target);
    }
  },
  beforeCreate: function beforeCreate() {
    _module.addRule('fontFace', {
      'fontFamily': 'myico',
      'src': "url('https://at.alicdn.com/t/font_1266237_1orvzrmxzqa.ttf')"
    });
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(91)
)

/* script */
__vue_exports__ = __webpack_require__(92)

/* template */
var __vue_template__ = __webpack_require__(93)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\Projects\\Home\\weex\\wyyxapp\\src\\assets\\components\\TabBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4225a05e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "myico"
  },
  "wrapper": {
    "position": "fixed",
    "bottom": 0,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "95",
    "width": "750",
    "borderTopWidth": "1",
    "borderTopColor": "#d9d9d9",
    "backgroundColor": "#fafafa"
  },
  "bar-item": {
    "flex": 1
  },
  "bar-txt": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": "22",
    "paddingTop": "2"
  },
  "bar-icon": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": "38",
    "paddingTop": "14"
  },
  "i-notice": {
    "position": "absolute",
    "top": "10",
    "right": "30",
    "width": "30",
    "height": "30",
    "borderRadius": "30",
    "color": "#ffffff",
    "fontSize": "26",
    "textAlign": "center",
    "lineHeight": "30",
    "backgroundColor": "#ff0000"
  },
  "notice-dot": {
    "position": "absolute",
    "top": "15",
    "right": "40",
    "height": "15",
    "width": "15",
    "borderRadius": "15",
    "backgroundColor": "#ff0000"
  },
  "on": {
    "color": "#ff0000"
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  },

  computed: {
    page: function page() {
      return this.$route.name;
    }
  },
  methods: {
    switchTab: function switchTab(target) {
      this.$emit('routeTo', target);
    }
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.switchTab('/')
      }
    }
  }, [_c('text', {
    class: ['bar-icon', 'iconfont', _vm.page == 'home' ? 'on' : '']
  }, [_vm._v("")]), _c('text', {
    class: ['bar-txt', _vm.page == 'home' ? 'on' : '']
  }, [_vm._v("首页")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.switchTab('topic')
      }
    }
  }, [_c('text', {
    class: ['bar-icon', 'iconfont', _vm.page == 'topic' ? 'on' : '']
  }, [_vm._v("")]), _c('text', {
    class: ['bar-txt', _vm.page == 'topic' ? 'on' : '']
  }, [_vm._v("专题")]), _c('text', {
    staticClass: ["notice-dot"]
  })]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.switchTab('catalog')
      }
    }
  }, [_c('text', {
    class: ['bar-icon', 'iconfont', _vm.page == 'catalog' ? 'on' : '']
  }, [_vm._v("")]), _c('text', {
    class: ['bar-txt', _vm.page == 'catalog' ? 'on' : '']
  }, [_vm._v("分类")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.switchTab('shopcart')
      }
    }
  }, [_c('text', {
    class: ['bar-icon', 'iconfont', _vm.page == 'shopcart' ? 'on' : '']
  }, [_vm._v("")]), _c('text', {
    class: ['bar-txt', _vm.page == 'shopcart' ? 'on' : '']
  }, [_vm._v("购物车")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.switchTab('my')
      }
    }
  }, [_c('text', {
    class: ['bar-icon', 'iconfont', _vm.page == 'my' ? 'on' : '']
  }, [_vm._v("")]), _c('text', {
    class: ['bar-txt', _vm.page == 'my' ? 'on' : '']
  }, [_vm._v("个人")]), _c('text', {
    staticClass: ["i-notice"]
  }, [_vm._v("2")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-wrapper"]
  }, [_c('router-view'), _c('tab-bar', {
    on: {
      "routeTo": _vm.routeTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mounted: function mounted() {}
};

/***/ })
/******/ ]);