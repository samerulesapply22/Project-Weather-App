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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather)\n/* harmony export */ });\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n\n\nconst conditionTextDiv = document.getElementById('conditionText');\nconst locationDiv = document.getElementById('location');\nconst temperatureDiv = document.getElementById('temperature');\nconst feelslikeDiv = document.getElementById('feelslike');\nconst windDiv = document.getElementById('wind');\nconst humidityDiv = document.getElementById('humidity');\n\nasync function displayWeather(place) {\n  const myWeatherData = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(place);\n  console.log(myWeatherData);\n\n  conditionTextDiv.textContent = myWeatherData.conditionText;\n  locationDiv.textContent = myWeatherData.city + ', ' + myWeatherData.country;\n  temperatureDiv.textContent = myWeatherData.temperature;\n  feelslikeDiv.textContent = 'feels like: ' + myWeatherData.feelslike;\n  windDiv.textContent = 'wind speed: ' + myWeatherData.wind + 'kph';\n  humidityDiv.textContent = 'humidity: ' + myWeatherData.humidity + '%';\n}\n\n\n//# sourceURL=webpack://project-weather-app/./src/displayWeather.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\nconst dealer = document.getElementById('error');\n\nasync function getWeather(place) {\n  const response = await fetch(\n    `http://api.weatherapi.com/v1/forecast.json?key=de8a49aa5a1a4a91abb143538230107&q=${place}`,\n    {\n      mode: 'cors',\n    }\n  );\n  if (response.status === 400) {\n    dealer.textContent = 'Cannot find the city';\n    return;\n  }\n  dealer.textContent = '';\n  const weatherData = await response.json();\n  const myWeatherData = {\n    conditionText: weatherData.current.condition.text,\n    city: weatherData.location.name,\n    country: weatherData.location.country,\n    temperature: weatherData.current.temp_c,\n    feelslike: weatherData.current.feelslike_c,\n    wind: weatherData.current.wind_kph,\n    humidity: weatherData.current.humidity,\n  };\n\n  return myWeatherData;\n}\n\n\n//# sourceURL=webpack://project-weather-app/./src/getWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather */ \"./src/displayWeather.js\");\n\n\n(0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Lviv');\n\n\nconst placeholder = document.getElementById('place');\nconst search = document.getElementById('search');\n\nplaceholder.addEventListener('mousedown', () => {\n  placeholder.value = '';\n});\n\nsearch.addEventListener('click', () => {\n  const place = placeholder.value;\n  (0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(place)\n});\n\n\n//# sourceURL=webpack://project-weather-app/./src/index.js?");

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