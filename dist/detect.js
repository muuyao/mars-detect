(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["detect"] = factory();
	else
		root["detect"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _window$navigator = window.navigator,
    userAgent = _window$navigator.userAgent,
    platform = _window$navigator.platform;

/**
 * 根据 ua 判断
 * @param    {[type]}                ua       [description]
 * @param    {[type]}                platform [description]
 * @return   {[type]}                [description]
 * @datetime 2016-12-15T22:11:20+080
 * @author wangxiao<i@muyao.me>
 */

function detect(ua, platform) {
  var os = {};
  var browser = {};

  var webkit = ua.match(/Web[kK]it[/]{0,1}([\d.]+)/);
  var android = ua.match(/(Android);?[\s/]+([\d.]+)?/);
  var osx = !!ua.match(/\(Macintosh; Intel /);
  var weixin = ua.match(/MicroMessenger/i);
  var weibo = ua.match(/Weibo/i);
  var qq = ua.indexOf('QQ/') !== -1;
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
  var webos = ua.match(/(webOS|hpwOS)[\s/]([\d.]+)/);
  var win = /Win\d{2}|Windows/.test(platform);
  var wp = ua.match(/Windows Phone ([\d.]+)/);
  var touchpad = webos && ua.match(/TouchPad/);
  var kindle = ua.match(/Kindle\/([\d.]+)/);
  var silk = ua.match(/Silk\/([\d._]+)/);
  var blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
  var bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
  var rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
  var playbook = ua.match(/PlayBook/);
  var chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
  var firefox = ua.match(/Firefox\/([\d.]+)/);
  var firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/);
  var ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^?]+).*rv:([0-9.].)/);
  var webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/);
  var safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);

  // Todo: clean this up with a better OS/browser seperation:
  // - discern (more) between multiple browsers on android
  // - decide if kindle fire in silk mode is android or not
  // - Firefox on Android doesn't specify the Android version
  // - possibly devide in os, device and browser hashes

  if (android) {
    os.android = true;
    os.version = android[2];
  }

  if (iphone && !ipod) {
    os.ios = os.iphone = true;
    os.version = iphone[2].replace(/_/g, '.');
  }

  if (ipad) {
    os.ios = os.ipad = true;
    os.version = ipad[2].replace(/_/g, '.');
  }

  if (ipod) {
    os.ios = os.ipod = true;
    os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
  }

  if (wp) {
    os.wp = true;
    os.version = wp[1];
  }

  if (webos) {
    os.webos = true;
    os.version = webos[2];
  }

  if (touchpad) {
    os.touchpad = true;
  }

  if (blackberry) {
    os.blackberry = true;
    os.version = blackberry[2];
  }

  if (bb10) {
    os.bb10 = true;
    os.version = bb10[2];
  }

  if (rimtabletos) {
    os.rimtabletos = true;
    os.version = rimtabletos[2];
  }

  if (kindle) {
    os.kindle = true;
    os.version = kindle[1];
  }

  if (firefoxos) {
    os.firefoxos = true;
    os.version = firefoxos[1];
  }

  // 浏览器判断
  if (webkit) {
    browser.webkit = true;
    browser.version = webkit[1];
  }

  if (weixin) {
    browser.weixin = true;
  }

  if (weibo) {
    browser.weibo = true;
  }

  if (qq) {
    browser.qq = true;
  }

  if (playbook) {
    browser.playbook = true;
  }

  if (silk) {
    browser.silk = true;
    browser.version = silk[1];
  }

  if (!silk && os.android && ua.match(/Kindle Fire/)) {
    browser.silk = true;
  }

  if (chrome) {
    browser.chrome = true;
    browser.version = chrome[1];
  }

  if (firefox) {
    browser.firefox = true;
    browser.version = firefox[1];
  }

  if (ie) {
    browser.ie = true;
    browser.version = ie[1];
  }

  if (safari && (osx || os.ios || win)) {
    browser.safari = true;
    if (!os.ios) {
      browser.version = safari[1];
    }
  }

  if (webview) {
    browser.webview = true;
  }

  os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/));

  os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)));

  return {
    os: os,
    browser: browser
  };
}

exports.default = detect(userAgent, platform);

/***/ })
/******/ ]);
});