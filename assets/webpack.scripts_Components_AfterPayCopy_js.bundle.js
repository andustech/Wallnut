"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecomm_levity"] = self["webpackChunkecomm_levity"] || []).push([["scripts_Components_AfterPayCopy_js"],{

/***/ "./scripts/Components/AfterPayCopy.js":
/*!********************************************!*\
  !*** ./scripts/Components/AfterPayCopy.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable new-cap */\n\n\n\nvar AfterPayCopy = function AfterPayCopy(_ref) {\n  var price = _ref.price,\n      dataSize = _ref.dataSize;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"afterpay-placement\", {\n    \"data-locale\": \"en_US\",\n    \"data-badge-theme\": \"white-on-black\",\n    \"data-modal-theme\": \"white\",\n    \"data-currency\": \"USD\",\n    \"data-amount\": \"\".concat(price / 100),\n    \"data-size\": dataSize\n  });\n};\n\nAfterPayCopy.defaultProps = {\n  dataSize: 'sm'\n};\nAfterPayCopy.propTypes = {\n  price: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),\n  dataSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AfterPayCopy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL0NvbXBvbmVudHMvQWZ0ZXJQYXlDb3B5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxzQkFDbkI7QUFDRSxtQkFBWSxPQURkO0FBRUUsd0JBQWlCLGdCQUZuQjtBQUdFLHdCQUFpQixPQUhuQjtBQUlFLHFCQUFjLEtBSmhCO0FBS0UsNkJBQWdCRCxLQUFLLEdBQUcsR0FBeEIsQ0FMRjtBQU1FLGlCQUFXQztBQU5iLElBRG1CO0FBQUEsQ0FBckI7O0FBV0FGLFlBQVksQ0FBQ0csWUFBYixHQUE0QjtBQUMxQkQsRUFBQUEsUUFBUSxFQUFFO0FBRGdCLENBQTVCO0FBSUFGLFlBQVksQ0FBQ0ksU0FBYixHQUF5QjtBQUN2QkgsRUFBQUEsS0FBSyxFQUFFRixxRUFEZ0I7QUFFdkJHLEVBQUFBLFFBQVEsRUFBRUgsMERBQWdCUTtBQUZILENBQXpCO0FBS0EsaUVBQWVQLFlBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tLWxldml0eS8uL3NjcmlwdHMvQ29tcG9uZW50cy9BZnRlclBheUNvcHkuanM/YjJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuZXctY2FwICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBBZnRlclBheUNvcHkgPSAoeyBwcmljZSwgZGF0YVNpemUgfSkgPT4gKFxyXG4gIDxhZnRlcnBheS1wbGFjZW1lbnRcclxuICAgIGRhdGEtbG9jYWxlPVwiZW5fVVNcIlxyXG4gICAgZGF0YS1iYWRnZS10aGVtZT1cIndoaXRlLW9uLWJsYWNrXCJcclxuICAgIGRhdGEtbW9kYWwtdGhlbWU9XCJ3aGl0ZVwiXHJcbiAgICBkYXRhLWN1cnJlbmN5PVwiVVNEXCJcclxuICAgIGRhdGEtYW1vdW50PXtgJHtwcmljZSAvIDEwMH1gfVxyXG4gICAgZGF0YS1zaXplPXtkYXRhU2l6ZX1cclxuICAvPlxyXG4pO1xyXG5cclxuQWZ0ZXJQYXlDb3B5LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRhU2l6ZTogJ3NtJyxcclxufTtcclxuXHJcbkFmdGVyUGF5Q29weS5wcm9wVHlwZXMgPSB7XHJcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBkYXRhU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFmdGVyUGF5Q29weTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQWZ0ZXJQYXlDb3B5IiwicHJpY2UiLCJkYXRhU2l6ZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/Components/AfterPayCopy.js\n");

/***/ })

}]);