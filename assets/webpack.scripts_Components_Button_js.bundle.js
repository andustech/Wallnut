"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecomm_levity"] = self["webpackChunkecomm_levity"] || []).push([["scripts_Components_Button_js"],{

/***/ "./scripts/Components/Button.js":
/*!**************************************!*\
  !*** ./scripts/Components/Button.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ \"./node_modules/core-js/modules/es.string.link.js\");\n/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Button = function Button(props) {\n  var buttonAction = props.buttonAction,\n      brown = props.brown,\n      blue = props.blue,\n      white = props.white,\n      children = props.children,\n      link = props.link,\n      styles = props.styles;\n\n  var handleClick = function handleClick(e) {\n    if (!link && buttonAction) {\n      e.preventDefault();\n      buttonAction(e);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"a\", {\n    href: link || '',\n    className: \"\\n        \".concat(brown ? 'bg-brown text-white hover:bg-white hover:text-brown' : '', \"\\n        \").concat(white ? 'bg-white text-brown border-2 font-light border-brown border-solid hover:bg-brown hover:text-white font-lg lg:font-normal' : '', \"\\n        \").concat(blue ? 'bg-blue text-white' : '', \"\\n        hover:no-underline\\n        font-extralight\\n        inline-block\\n        px-9\\n        md:px-12\\n        py-2\\n        rounded-full\\n        text-base\\n        w-full\\n        center\\n        uppercase\\n        \").concat(styles, \"\\n      \"),\n    onClick: handleClick\n  }, children);\n};\n\nButton.defaultProps = {\n  brown: false,\n  blue: false,\n  white: false,\n  link: '',\n  styles: '',\n  buttonAction: function buttonAction() {}\n};\nButton.propTypes = {\n  buttonAction: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),\n  brown: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),\n  white: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),\n  blue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),\n  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]).isRequired,\n  link: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n  styles: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL0NvbXBvbmVudHMvQnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QixNQUFRQyxZQUFSLEdBQXFFRCxLQUFyRSxDQUFRQyxZQUFSO0FBQUEsTUFBc0JDLEtBQXRCLEdBQXFFRixLQUFyRSxDQUFzQkUsS0FBdEI7QUFBQSxNQUE2QkMsSUFBN0IsR0FBcUVILEtBQXJFLENBQTZCRyxJQUE3QjtBQUFBLE1BQW1DQyxLQUFuQyxHQUFxRUosS0FBckUsQ0FBbUNJLEtBQW5DO0FBQUEsTUFBMENDLFFBQTFDLEdBQXFFTCxLQUFyRSxDQUEwQ0ssUUFBMUM7QUFBQSxNQUFvREMsSUFBcEQsR0FBcUVOLEtBQXJFLENBQW9ETSxJQUFwRDtBQUFBLE1BQTBEQyxNQUExRCxHQUFxRVAsS0FBckUsQ0FBMERPLE1BQTFEOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QixRQUFJLENBQUNILElBQUQsSUFBU0wsWUFBYixFQUEyQjtBQUN6QlEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FULE1BQUFBLFlBQVksQ0FBQ1EsQ0FBRCxDQUFaO0FBQ0Q7QUFDRixHQUxEOztBQU9BLHNCQUNFO0FBQ0UsUUFBSSxFQUFFSCxJQUFJLElBQUksRUFEaEI7QUFFRSxhQUFTLHNCQUNMSixLQUFLLEdBQUcscURBQUgsR0FBMkQsRUFEM0QsdUJBR0xFLEtBQUssR0FDRCwwSEFEQyxHQUVELEVBTEMsdUJBT0xELElBQUksR0FBRyxvQkFBSCxHQUEwQixFQVB6Qiw0T0FtQkxJLE1BbkJLLGFBRlg7QUF1QkUsV0FBTyxFQUFFQztBQXZCWCxLQXlCR0gsUUF6QkgsQ0FERjtBQTZCRCxDQXRDRDs7QUF3Q0FOLE1BQU0sQ0FBQ1ksWUFBUCxHQUFzQjtBQUNwQlQsRUFBQUEsS0FBSyxFQUFFLEtBRGE7QUFFcEJDLEVBQUFBLElBQUksRUFBRSxLQUZjO0FBR3BCQyxFQUFBQSxLQUFLLEVBQUUsS0FIYTtBQUlwQkUsRUFBQUEsSUFBSSxFQUFFLEVBSmM7QUFLcEJDLEVBQUFBLE1BQU0sRUFBRSxFQUxZO0FBTXBCTixFQUFBQSxZQUFZLEVBQUUsd0JBQU0sQ0FBRTtBQU5GLENBQXRCO0FBU0FGLE1BQU0sQ0FBQ2EsU0FBUCxHQUFtQjtBQUNqQlgsRUFBQUEsWUFBWSxFQUFFSCx3REFERztBQUVqQkksRUFBQUEsS0FBSyxFQUFFSix3REFGVTtBQUdqQk0sRUFBQUEsS0FBSyxFQUFFTix3REFIVTtBQUlqQkssRUFBQUEsSUFBSSxFQUFFTCx3REFKVztBQUtqQk8sRUFBQUEsUUFBUSxFQUFFUCwyREFBQSxDQUFvQixDQUFDQSwwREFBRCxFQUFtQkEsd0RBQW5CLEVBQW1DQSwwREFBbkMsQ0FBcEIsRUFBMEVvQixVQUxuRTtBQU1qQlosRUFBQUEsSUFBSSxFQUFFUiwwREFOVztBQU9qQlMsRUFBQUEsTUFBTSxFQUFFVCwwREFBZ0JrQjtBQVBQLENBQW5CO0FBVUEsaUVBQWVqQixNQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbS1sZXZpdHkvLi9zY3JpcHRzL0NvbXBvbmVudHMvQnV0dG9uLmpzP2E2N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYnV0dG9uQWN0aW9uLCBicm93biwgYmx1ZSwgd2hpdGUsIGNoaWxkcmVuLCBsaW5rLCBzdHlsZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGlmICghbGluayAmJiBidXR0b25BY3Rpb24pIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBidXR0b25BY3Rpb24oZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhXHJcbiAgICAgIGhyZWY9e2xpbmsgfHwgJyd9XHJcbiAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICR7YnJvd24gPyAnYmctYnJvd24gdGV4dC13aGl0ZSBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJyb3duJyA6ICcnfVxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICB3aGl0ZVxyXG4gICAgICAgICAgICA/ICdiZy13aGl0ZSB0ZXh0LWJyb3duIGJvcmRlci0yIGZvbnQtbGlnaHQgYm9yZGVyLWJyb3duIGJvcmRlci1zb2xpZCBob3ZlcjpiZy1icm93biBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtbGcgbGc6Zm9udC1ub3JtYWwnXHJcbiAgICAgICAgICAgIDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgJHtibHVlID8gJ2JnLWJsdWUgdGV4dC13aGl0ZScgOiAnJ31cclxuICAgICAgICBob3Zlcjpuby11bmRlcmxpbmVcclxuICAgICAgICBmb250LWV4dHJhbGlnaHRcclxuICAgICAgICBpbmxpbmUtYmxvY2tcclxuICAgICAgICBweC05XHJcbiAgICAgICAgbWQ6cHgtMTJcclxuICAgICAgICBweS0yXHJcbiAgICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICAgICAgdGV4dC1iYXNlXHJcbiAgICAgICAgdy1mdWxsXHJcbiAgICAgICAgY2VudGVyXHJcbiAgICAgICAgdXBwZXJjYXNlXHJcbiAgICAgICAgJHtzdHlsZXN9XHJcbiAgICAgIGB9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYnJvd246IGZhbHNlLFxyXG4gIGJsdWU6IGZhbHNlLFxyXG4gIHdoaXRlOiBmYWxzZSxcclxuICBsaW5rOiAnJyxcclxuICBzdHlsZXM6ICcnLFxyXG4gIGJ1dHRvbkFjdGlvbjogKCkgPT4ge30sXHJcbn07XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGJ1dHRvbkFjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgYnJvd246IFByb3BUeXBlcy5ib29sLFxyXG4gIHdoaXRlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBibHVlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxyXG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc3R5bGVzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJCdXR0b24iLCJwcm9wcyIsImJ1dHRvbkFjdGlvbiIsImJyb3duIiwiYmx1ZSIsIndoaXRlIiwiY2hpbGRyZW4iLCJsaW5rIiwic3R5bGVzIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYm9vbCIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/Components/Button.js\n");

/***/ })

}]);