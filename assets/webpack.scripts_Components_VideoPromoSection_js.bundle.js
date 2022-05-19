"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecomm_levity"] = self["webpackChunkecomm_levity"] || []).push([["scripts_Components_VideoPromoSection_js"],{

/***/ "./scripts/Components/VideoPromoSection.js":
/*!*************************************************!*\
  !*** ./scripts/Components/VideoPromoSection.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ProductFeature_ValuePropComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductFeature/ValuePropComponent */ \"./scripts/Components/ProductFeature/ValuePropComponent.js\");\n\n\n\n\nvar VideoPromoSection = function VideoPromoSection(_ref) {\n  var settings = _ref.settings;\n  var image = settings.image,\n      section_title = settings.section_title,\n      title = settings.title,\n      subheading = settings.subheading,\n      button_text = settings.button_text,\n      button_link = settings.button_link;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WhiteCollectionContainer, {\n    className: \"container white_main_container section-padding\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"white_coll_left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: image,\n    alt: \"Collection\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"white_coll_right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"item_box\"\n  }, section_title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"title_top uppercase\"\n  }, section_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MiddContent, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"font-bold\"\n  }, title), subheading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, subheading), button_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"premium_link bg-milk\",\n    href: button_link\n  }, button_text))))));\n};\n\nvar WhiteCollectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({\n  displayName: \"VideoPromoSection__WhiteCollectionContainer\",\n  componentId: \"sc-1jaxqnt-0\"\n})([\"\"]);\nvar MiddContent = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({\n  displayName: \"VideoPromoSection__MiddContent\",\n  componentId: \"sc-1jaxqnt-1\"\n})([\"a:after{}\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPromoSection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL0NvbXBvbmVudHMvVmlkZW9Qcm9tb1NlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzFDLE1BQVFDLEtBQVIsR0FBOEVELFFBQTlFLENBQVFDLEtBQVI7QUFBQSxNQUFlQyxhQUFmLEdBQThFRixRQUE5RSxDQUFlRSxhQUFmO0FBQUEsTUFBOEJDLEtBQTlCLEdBQThFSCxRQUE5RSxDQUE4QkcsS0FBOUI7QUFBQSxNQUFxQ0MsVUFBckMsR0FBOEVKLFFBQTlFLENBQXFDSSxVQUFyQztBQUFBLE1BQWlEQyxXQUFqRCxHQUE4RUwsUUFBOUUsQ0FBaURLLFdBQWpEO0FBQUEsTUFBOERDLFdBQTlELEdBQThFTixRQUE5RSxDQUE4RE0sV0FBOUQ7QUFFQSxzQkFDRSxpSEFDRSxpREFBQyx3QkFBRDtBQUEwQixhQUFTLEVBQUM7QUFBcEMsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLE9BQUcsRUFBRUwsS0FBVjtBQUFpQixPQUFHLEVBQUM7QUFBckIsSUFERixDQURGLGVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0lDLGFBQWEsaUJBQUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFzQ0EsYUFBdEMsQ0FEckIsZUFHRSxpREFBQyxXQUFELFFBQ0lDLEtBQUssaUJBQUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUEyQkEsS0FBM0IsQ0FEYixFQUVJQyxVQUFVLGlCQUFJLDREQUFJQSxVQUFKLENBRmxCLEVBR0lDLFdBQVcsaUJBQUk7QUFBRyxhQUFTLEVBQUMsc0JBQWI7QUFBb0MsUUFBSSxFQUFFQztBQUExQyxLQUF3REQsV0FBeEQsQ0FIbkIsQ0FIRixDQURGLENBSkYsQ0FERixDQURGO0FBcUJELENBeEJEOztBQTRCQSxJQUFNRSx3QkFBd0IsR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBOUI7QUFHQSxJQUFNWSxXQUFXLEdBQUdaLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlCQUFqQjtBQVlBLGlFQUFlRSxpQkFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW0tbGV2aXR5Ly4vc2NyaXB0cy9Db21wb25lbnRzL1ZpZGVvUHJvbW9TZWN0aW9uLmpzPzUwYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNlY3Rpb25UaWx0bGUgfSBmcm9tICcuL1Byb2R1Y3RGZWF0dXJlL1ZhbHVlUHJvcENvbXBvbmVudCc7XHJcblxyXG5jb25zdCBWaWRlb1Byb21vU2VjdGlvbiA9ICh7IHNldHRpbmdzIH0pID0+IHtcclxuICBjb25zdCB7IGltYWdlLCBzZWN0aW9uX3RpdGxlLCB0aXRsZSwgc3ViaGVhZGluZywgYnV0dG9uX3RleHQsIGJ1dHRvbl9saW5rIH0gPSBzZXR0aW5ncztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxXaGl0ZUNvbGxlY3Rpb25Db250YWluZXIgY2xhc3NOYW1lPSdjb250YWluZXIgd2hpdGVfbWFpbl9jb250YWluZXIgc2VjdGlvbi1wYWRkaW5nJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hpdGVfY29sbF9sZWZ0Jz5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiQ29sbGVjdGlvblwiIC8+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aGl0ZV9jb2xsX3JpZ2h0Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtX2JveCc+XHJcbiAgICAgICAgICAgIHsgc2VjdGlvbl90aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT0ndGl0bGVfdG9wIHVwcGVyY2FzZSc+e3NlY3Rpb25fdGl0bGV9PC9kaXY+IH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TWlkZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgeyB0aXRsZSAmJiA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3RpdGxlfTwvaDI+IH1cclxuICAgICAgICAgICAgICB7IHN1YmhlYWRpbmcgJiYgPHA+e3N1YmhlYWRpbmd9PC9wPiB9XHJcbiAgICAgICAgICAgICAgeyBidXR0b25fdGV4dCAmJiA8YSBjbGFzc05hbWU9J3ByZW1pdW1fbGluayBiZy1taWxrJyBocmVmPXtidXR0b25fbGlua30+e2J1dHRvbl90ZXh0fTwvYT4gfVxyXG4gICAgICAgICAgICA8L01pZGRDb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvV2hpdGVDb2xsZWN0aW9uQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG5cclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgV2hpdGVDb2xsZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuYDtcclxuXHJcbmNvbnN0IE1pZGRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBhOmFmdGVyIHtcclxuICAvLyBjb250ZW50OiAnJztcclxuICAvLyB3aWR0aDogMTdweDtcclxuICAvLyBoZWlnaHQ6IDEwcHg7XHJcbiAgLy8gcmlnaHQ6IDMwcHg7XHJcbiAgLy8gdG9wOiAxOHB4O1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaS5pYmIuY28vbWhKWGNyWi9WZWN0b3IucG5nJyk7XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvUHJvbW9TZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJTZWN0aW9uVGlsdGxlIiwiVmlkZW9Qcm9tb1NlY3Rpb24iLCJzZXR0aW5ncyIsImltYWdlIiwic2VjdGlvbl90aXRsZSIsInRpdGxlIiwic3ViaGVhZGluZyIsImJ1dHRvbl90ZXh0IiwiYnV0dG9uX2xpbmsiLCJXaGl0ZUNvbGxlY3Rpb25Db250YWluZXIiLCJkaXYiLCJNaWRkQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scripts/Components/VideoPromoSection.js\n");

/***/ })

}]);