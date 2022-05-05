"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecomm_levity"] = self["webpackChunkecomm_levity"] || []).push([["scripts_Components_ColorSwatch_js"],{

/***/ "./scripts/Components/ColorSwatch.js":
/*!*******************************************!*\
  !*** ./scripts/Components/ColorSwatch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.small.js */ \"./node_modules/core-js/modules/es.string.small.js\");\n/* harmony import */ var core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./scripts/utils/index.js\");\n\n\n\n\n\n\nvar ColorSwatch = function ColorSwatch(_ref) {\n  var option = _ref.option,\n      small = _ref.small;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ColorSwatchContainer, {\n    small: small,\n    \"aria-label\": \"change to \".concat(option.toLowerCase(), \" variant\"),\n    option: option\n  });\n};\n\nvar ColorSwatchContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.attrs(function (_ref2) {\n  var small = _ref2.small;\n  var size = small ? 'h-8 w-8' : 'h-7 w-7 md:h-9 md:w-9';\n  return {\n    className: \"bg-white bg-no-repeat rounded-full \".concat(size)\n  };\n}).withConfig({\n  displayName: \"ColorSwatch__ColorSwatchContainer\",\n  componentId: \"sc-skv415-0\"\n})([\"\", \"\"], function (_ref3) {\n  var option = _ref3.option;\n  return \"\\n    background-image: url(\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__.getColorSwatchThumbImageUrl)(option), \");\\n    background-size: 36px 36px;\\n  \");\n});\nColorSwatch.defaultProps = {\n  small: false\n};\nColorSwatch.propTypes = {\n  option: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n  small: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSwatch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL0NvbXBvbmVudHMvQ29sb3JTd2F0Y2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxNQUFXQyxLQUFYLFFBQVdBLEtBQVg7QUFBQSxzQkFDbEIsaURBQUMsb0JBQUQ7QUFDRSxTQUFLLEVBQUVBLEtBRFQ7QUFFRSxzQ0FBeUJELE1BQU0sQ0FBQ0UsV0FBUCxFQUF6QixhQUZGO0FBR0UsVUFBTSxFQUFFRjtBQUhWLElBRGtCO0FBQUEsQ0FBcEI7O0FBUUEsSUFBTUcsb0JBQW9CLEdBQUdOLGdFQUFBLENBQWlCLGlCQUFlO0FBQUEsTUFBWkksS0FBWSxTQUFaQSxLQUFZO0FBQzNELE1BQU1LLElBQUksR0FBR0wsS0FBSyxHQUFHLFNBQUgsR0FBZSx1QkFBakM7QUFDQSxTQUFPO0FBQ0xNLElBQUFBLFNBQVMsK0NBQXdDRCxJQUF4QztBQURKLEdBQVA7QUFHRCxDQUw0QixDQUFIO0FBQUE7QUFBQTtBQUFBLGFBTXRCO0FBQUEsTUFBR04sTUFBSCxTQUFHQSxNQUFIO0FBQUEsK0NBQ3dCRixtRUFBMkIsQ0FBQ0UsTUFBRCxDQURuRDtBQUFBLENBTnNCLENBQTFCO0FBWUFELFdBQVcsQ0FBQ1MsWUFBWixHQUEyQjtBQUN6QlAsRUFBQUEsS0FBSyxFQUFFO0FBRGtCLENBQTNCO0FBSUFGLFdBQVcsQ0FBQ1UsU0FBWixHQUF3QjtBQUN0QlQsRUFBQUEsTUFBTSxFQUFFSixxRUFEYztBQUV0QkssRUFBQUEsS0FBSyxFQUFFTCx3REFBY2dCO0FBRkMsQ0FBeEI7QUFLQSxpRUFBZWIsV0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW0tbGV2aXR5Ly4vc2NyaXB0cy9Db21wb25lbnRzL0NvbG9yU3dhdGNoLmpzP2NhNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGdldENvbG9yU3dhdGNoVGh1bWJJbWFnZVVybCB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgQ29sb3JTd2F0Y2ggPSAoeyBvcHRpb24sIHNtYWxsIH0pID0+IChcbiAgPENvbG9yU3dhdGNoQ29udGFpbmVyXG4gICAgc21hbGw9e3NtYWxsfVxuICAgIGFyaWEtbGFiZWw9e2BjaGFuZ2UgdG8gJHtvcHRpb24udG9Mb3dlckNhc2UoKX0gdmFyaWFudGB9XG4gICAgb3B0aW9uPXtvcHRpb259XG4gIC8+XG4pO1xuXG5jb25zdCBDb2xvclN3YXRjaENvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgc21hbGwgfSkgPT4ge1xuICBjb25zdCBzaXplID0gc21hbGwgPyAnaC04IHctOCcgOiAnaC03IHctNyBtZDpoLTkgbWQ6dy05JztcbiAgcmV0dXJuIHtcbiAgICBjbGFzc05hbWU6IGBiZy13aGl0ZSBiZy1uby1yZXBlYXQgcm91bmRlZC1mdWxsICR7c2l6ZX1gLFxuICB9O1xufSlgXG4gICR7KHsgb3B0aW9uIH0pID0+IGBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtnZXRDb2xvclN3YXRjaFRodW1iSW1hZ2VVcmwob3B0aW9uKX0pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCAzNnB4O1xuICBgfVxuYDtcblxuQ29sb3JTd2F0Y2guZGVmYXVsdFByb3BzID0ge1xuICBzbWFsbDogZmFsc2UsXG59O1xuXG5Db2xvclN3YXRjaC5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclN3YXRjaDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImdldENvbG9yU3dhdGNoVGh1bWJJbWFnZVVybCIsIkNvbG9yU3dhdGNoIiwib3B0aW9uIiwic21hbGwiLCJ0b0xvd2VyQ2FzZSIsIkNvbG9yU3dhdGNoQ29udGFpbmVyIiwiZGl2IiwiYXR0cnMiLCJzaXplIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/Components/ColorSwatch.js\n");

/***/ })

}]);