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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./scripts/utils/index.js\");\n\n\n\n\n\nvar ColorSwatch = function ColorSwatch(_ref) {\n  var option = _ref.option,\n      size = _ref.size;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorSwatchContainer, {\n    size: size,\n    \"aria-label\": \"change to \".concat(option.toLowerCase(), \" variant\"),\n    option: option\n  });\n};\n\nvar ColorSwatchContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref2) {\n  var size = _ref2.size;\n  var className = 'bg-white bg-no-repeat rounded-full';\n\n  if (size === 'small') {\n    className = \"\".concat(className, \" small-color-swatch\");\n  } else if (size === 'medium') {\n    className = \"\".concat(className, \" medium-color-swatch\");\n  } else {\n    className = \"\".concat(className, \" large-color-swatch\");\n  }\n\n  return {\n    className: className\n  };\n}).withConfig({\n  displayName: \"ColorSwatch__ColorSwatchContainer\",\n  componentId: \"sc-skv415-0\"\n})([\"\", \"\"], function (_ref3) {\n  var option = _ref3.option;\n  return \"\\n    background-image: url(\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getColorSwatchThumbImageUrl)(option), \");\\n    background-size: 100% 100%;\\n  \");\n});\nColorSwatch.defaultProps = {\n  size: 'large'\n};\nColorSwatch.propTypes = {\n  option: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSwatch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL0NvbXBvbmVudHMvQ29sb3JTd2F0Y2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWM7RUFBQSxJQUFHQyxNQUFILFFBQUdBLE1BQUg7RUFBQSxJQUFXQyxJQUFYLFFBQVdBLElBQVg7RUFBQSxvQkFDbEIsaURBQUMsb0JBQUQ7SUFDRSxJQUFJLEVBQUVBLElBRFI7SUFFRSxrQ0FBeUJELE1BQU0sQ0FBQ0UsV0FBUCxFQUF6QixhQUZGO0lBR0UsTUFBTSxFQUFFRjtFQUhWLEVBRGtCO0FBQUEsQ0FBcEI7O0FBUUEsSUFBTUcsb0JBQW9CLEdBQUdOLG1FQUFBLENBQWlCLGlCQUFjO0VBQUEsSUFBWEksSUFBVyxTQUFYQSxJQUFXO0VBQzFELElBQUlLLFNBQVMsR0FBRyxvQ0FBaEI7O0VBRUEsSUFBSUwsSUFBSSxLQUFLLE9BQWIsRUFBc0I7SUFDcEJLLFNBQVMsYUFBTUEsU0FBTix3QkFBVDtFQUNELENBRkQsTUFHSyxJQUFJTCxJQUFJLEtBQUssUUFBYixFQUF1QjtJQUMxQkssU0FBUyxhQUFNQSxTQUFOLHlCQUFUO0VBQ0QsQ0FGSSxNQUdBO0lBQ0hBLFNBQVMsYUFBTUEsU0FBTix3QkFBVDtFQUNEOztFQUVELE9BQU87SUFDTEEsU0FBUyxFQUFUQTtFQURLLENBQVA7QUFHRCxDQWhCNEIsQ0FBSDtFQUFBO0VBQUE7QUFBQSxhQWlCdEI7RUFBQSxJQUFHTixNQUFILFNBQUdBLE1BQUg7RUFBQSw2Q0FDd0JGLG1FQUEyQixDQUFDRSxNQUFELENBRG5EO0FBQUEsQ0FqQnNCLENBQTFCO0FBdUJBRCxXQUFXLENBQUNRLFlBQVosR0FBMkI7RUFDekJOLElBQUksRUFBRTtBQURtQixDQUEzQjtBQUlBRixXQUFXLENBQUNTLFNBQVosR0FBd0I7RUFDdEJSLE1BQU0sRUFBRUoscUVBQTJCYztBQURiLENBQXhCO0FBSUEsaUVBQWVYLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbS1sZXZpdHkvLi9zY3JpcHRzL0NvbXBvbmVudHMvQ29sb3JTd2F0Y2guanM/Y2E0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgZ2V0Q29sb3JTd2F0Y2hUaHVtYkltYWdlVXJsIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuY29uc3QgQ29sb3JTd2F0Y2ggPSAoeyBvcHRpb24sIHNpemUgfSkgPT4gKFxyXG4gIDxDb2xvclN3YXRjaENvbnRhaW5lclxyXG4gICAgc2l6ZT17c2l6ZX1cclxuICAgIGFyaWEtbGFiZWw9e2BjaGFuZ2UgdG8gJHtvcHRpb24udG9Mb3dlckNhc2UoKX0gdmFyaWFudGB9XHJcbiAgICBvcHRpb249e29wdGlvbn1cclxuICAvPlxyXG4pO1xyXG5cclxuY29uc3QgQ29sb3JTd2F0Y2hDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IHNpemUgfSkgPT4ge1xyXG4gIGxldCBjbGFzc05hbWUgPSAnYmctd2hpdGUgYmctbm8tcmVwZWF0IHJvdW5kZWQtZnVsbCc7XHJcblxyXG4gIGlmIChzaXplID09PSAnc21hbGwnKSB7XHJcbiAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IHNtYWxsLWNvbG9yLXN3YXRjaGA7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHNpemUgPT09ICdtZWRpdW0nKSB7XHJcbiAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IG1lZGl1bS1jb2xvci1zd2F0Y2hgO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gbGFyZ2UtY29sb3Itc3dhdGNoYDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjbGFzc05hbWUsXHJcbiAgfTtcclxufSlgXHJcbiAgJHsoeyBvcHRpb24gfSkgPT4gYFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Z2V0Q29sb3JTd2F0Y2hUaHVtYkltYWdlVXJsKG9wdGlvbil9KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGB9XHJcbmA7XHJcblxyXG5Db2xvclN3YXRjaC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2l6ZTogJ2xhcmdlJyxcclxufTtcclxuXHJcbkNvbG9yU3dhdGNoLnByb3BUeXBlcyA9IHtcclxuICBvcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yU3dhdGNoO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJnZXRDb2xvclN3YXRjaFRodW1iSW1hZ2VVcmwiLCJDb2xvclN3YXRjaCIsIm9wdGlvbiIsInNpemUiLCJ0b0xvd2VyQ2FzZSIsIkNvbG9yU3dhdGNoQ29udGFpbmVyIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scripts/Components/ColorSwatch.js\n");

/***/ })

}]);