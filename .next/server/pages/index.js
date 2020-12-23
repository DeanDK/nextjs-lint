module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/dean.bozic/playground/brijica/src/pages/index.tsx\";\n\nconst IndexPage = ({\n  launch\n}) => {\n  const date = new Date(launch.timestamp);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [\"Next SpaceX Launch: \", launch.mission]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [launch.rocket, \" will take off from \", launch.site, \" on \", date.toDateString()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nconst getServerSideProps = async () => {\n  const response = await fetch('https://api.spacexdata.com/v3/launches/next');\n  const nextLaunch = await response.json();\n  return {\n    props: {\n      launch: {\n        mission: nextLaunch.mission_name,\n        site: nextLaunch.launch_site.site_name_long,\n        timestamp: nextLaunch.launch_date_unix * 1000,\n        rocket: nextLaunch.rocket.rocket_name\n      }\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwibGF1bmNoIiwiZGF0ZSIsIkRhdGUiLCJ0aW1lc3RhbXAiLCJtaXNzaW9uIiwicm9ja2V0Iiwic2l0ZSIsInRvRGF0ZVN0cmluZyIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJuZXh0TGF1bmNoIiwianNvbiIsInByb3BzIiwibWlzc2lvbl9uYW1lIiwibGF1bmNoX3NpdGUiLCJzaXRlX25hbWVfbG9uZyIsImxhdW5jaF9kYXRlX3VuaXgiLCJyb2NrZXRfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVdBLE1BQU1BLFNBQTBCLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBYztBQUM3QyxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixNQUFNLENBQUNHLFNBQWhCLENBQWI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEseUNBQXlCSCxNQUFNLENBQUNJLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsaUJBQ0tKLE1BQU0sQ0FBQ0ssTUFEWiwwQkFDd0NMLE1BQU0sQ0FBQ00sSUFEL0MsVUFDeURMLElBQUksQ0FBQ00sWUFBTCxFQUR6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxDQVZEOztBQVdlUix3RUFBZjtBQUVPLE1BQU1TLGtCQUE2QyxHQUFHLFlBQVk7QUFDckUsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw2Q0FBRCxDQUE1QjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBekI7QUFDQSxTQUFPO0FBQ0hDLFNBQUssRUFBRTtBQUNIYixZQUFNLEVBQUU7QUFDSkksZUFBTyxFQUFFTyxVQUFVLENBQUNHLFlBRGhCO0FBRUpSLFlBQUksRUFBRUssVUFBVSxDQUFDSSxXQUFYLENBQXVCQyxjQUZ6QjtBQUdKYixpQkFBUyxFQUFFUSxVQUFVLENBQUNNLGdCQUFYLEdBQThCLElBSHJDO0FBSUpaLGNBQU0sRUFBRU0sVUFBVSxDQUFDTixNQUFYLENBQWtCYTtBQUp0QjtBQURMO0FBREosR0FBUDtBQVVILENBYk0iLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlfSBmcm9tICduZXh0J1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGxhdW5jaDoge1xuICAgICAgICBtaXNzaW9uOiBzdHJpbmcsXG4gICAgICAgIHNpdGU6IHN0cmluZ1xuICAgICAgICB0aW1lc3RhbXA6IG51bWJlclxuICAgICAgICByb2NrZXQ6IHN0cmluZ1xuICAgIH1cbn1cblxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoe2xhdW5jaH0pID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobGF1bmNoLnRpbWVzdGFtcClcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxoMT5OZXh0IFNwYWNlWCBMYXVuY2g6IHtsYXVuY2gubWlzc2lvbn08L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge2xhdW5jaC5yb2NrZXR9IHdpbGwgdGFrZSBvZmYgZnJvbSB7bGF1bmNoLnNpdGV9IG9uIHtkYXRlLnRvRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L21haW4+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczxQcm9wcz4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvbGF1bmNoZXMvbmV4dCcpXG4gICAgY29uc3QgbmV4dExhdW5jaCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBsYXVuY2g6IHtcbiAgICAgICAgICAgICAgICBtaXNzaW9uOiBuZXh0TGF1bmNoLm1pc3Npb25fbmFtZSxcbiAgICAgICAgICAgICAgICBzaXRlOiBuZXh0TGF1bmNoLmxhdW5jaF9zaXRlLnNpdGVfbmFtZV9sb25nLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV4dExhdW5jaC5sYXVuY2hfZGF0ZV91bml4ICogMTAwMCxcbiAgICAgICAgICAgICAgICByb2NrZXQ6IG5leHRMYXVuY2gucm9ja2V0LnJvY2tldF9uYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });