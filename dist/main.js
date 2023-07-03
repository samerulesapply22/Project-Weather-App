/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayWeather.js":
/*!*******************************!*\
  !*** ./src/displayWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather)\n/* harmony export */ });\nconst conditionTextDiv = document.getElementById('conditionText');\nconst locationDiv = document.getElementById('location');\nconst temperatureDiv = document.getElementById('temperature');\nconst feelslikeDiv = document.getElementById('feelslike');\nconst windDiv = document.getElementById('wind');\nconst humidityDiv = document.getElementById('humidity');\n\nfunction displayWeather(\n  conditionText,\n  city,\n  country,\n  temperature,\n  feelslike,\n  wind,\n  humidity,\n) {\n  conditionTextDiv.textContent = conditionText;\n  locationDiv.textContent = city + ', ' + country;\n\n  temperatureDiv.textContent = temperature;\n  feelslikeDiv.textContent = 'feels like: ' + feelslike;\n  windDiv.textContent = 'wind speed: ' + wind + 'kph';\n  humidityDiv.textContent = 'humidity: ' + humidity + '%';\n}\n\n\n//# sourceURL=webpack://project-weather-app/./src/displayWeather.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather */ \"./src/displayWeather.js\");\n\nconst dealer = document.getElementById('error');\n\nfunction dealwitherror() {\n  dealer.textContent = 'Cannot find the city';\n}\n\nasync function getWeather(place) {\n  const response = await fetch(\n    `http://api.weatherapi.com/v1/forecast.json?key=de8a49aa5a1a4a91abb143538230107&q=${place}`,\n    {\n      mode: 'cors',\n    }\n  );\n  if (response.status === 400) {\n    dealwitherror();\n    return;\n  } \n  dealer.textContent = '';\n  const weatherData = await response.json();\n  (0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    weatherData.current.condition.text,\n    weatherData.location.name,\n    weatherData.location.country,\n    weatherData.current.temp_c,\n    weatherData.current.feelslike_c,\n    weatherData.current.wind_kph,\n    weatherData.current.humidity\n  );\n  \n}\n\n\n//# sourceURL=webpack://project-weather-app/./src/getWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n\n\n(0,_getWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Lviv');\nconst placeholder = document.getElementById('place');\nconst search = document.getElementById('search');\n\nplaceholder.addEventListener('mousedown', () => {\n  placeholder.value = '';\n});\n\nsearch.addEventListener('click', () => {\n  const place = placeholder.value;\n  (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(place);\n});\n\n\n//# sourceURL=webpack://project-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;