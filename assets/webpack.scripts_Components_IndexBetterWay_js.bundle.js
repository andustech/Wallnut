"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecomm_levity"] = self["webpackChunkecomm_levity"] || []).push([["scripts_Components_IndexBetterWay_js"],{

/***/ "./scripts/Components/IndexBetterWay.js":
/*!**********************************************!*\
  !*** ./scripts/Components/IndexBetterWay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ \"./node_modules/core-js/modules/es.array.is-array.js\");\n/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar IndexBetterWay = function IndexBetterWay(_ref) {\n  var blocks = _ref.blocks;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)('fade-out'),\n      _useState2 = _slicedToArray(_useState, 2),\n      videoActive = _useState2[0],\n      setVideoActive = _useState2[1];\n\n  var handleVideoPopup = function handleVideoPopup() {\n    if (videoActive === 'fade-out') {\n      setVideoActive('fade-in');\n      $('.video_items_container .videoBack video')[0].play();\n      $('.close-button').addClass('md:hidden');\n    } else {\n      setVideoActive('fade-out');\n      $('.video_items_container .videoBack video')[0].pause();\n    }\n  };\n\n  $('.video_items_container .modal-body').mouseenter(function () {\n    $('.video_items_container .videoBack video').attr('controls', true);\n    $('.close-button').removeClass('md:hidden');\n  });\n  $('.video_items_container .modal-body').mouseleave(function () {\n    $('.video_items_container .videoBack video').removeAttr('controls');\n    $('.close-button').addClass('md:hidden');\n  });\n  $(document).on('click', function (e) {\n    if (!($(e.target).closest('.video-open').length > 0 || $(e.target).closest('.videoBack .modal-body').length > 0)) {\n      setVideoActive('fade-out');\n      $('.video_items_container .videoBack video')[0].pause();\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n    className: \"section-padding\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n    className: \"bg-deep-moss py-8 lg:py-16 text-white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n    className: \"container mx-auto lg:py-2\"\n  }, blocks.map(function (block, index) {\n    var settings = block.settings;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      key: \"bw-\" + index\n    }, index % 2 === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"video_items_container flex items-center flex-col-reverse md:flex-row mb-14 md:mb-0\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"video_content w-full md:w-6/12 md:pr-8 lg:px-13 xl:px-16 pt-6 md:pt-0- pb-0 md:pb-5 lg:pb-0\"\n    }, settings.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"h2\", {\n      className: \"font-bold text-white mb-2 lg:mb-4\"\n    }, settings.title), settings.content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"p\", {\n      className: \"mb-6\"\n    }, settings.content), settings.video_btn_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react__WEBPACK_IMPORTED_MODULE_13__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"a\", {\n      onClick: function onClick() {\n        return handleVideoPopup();\n      },\n      href: undefined,\n      className: \"video-open text-white flex items-center video-open-link cursor-pointer\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"img\", {\n      src: \"https://cdn.shopify.com/s/files/1/0627/3476/2207/files/video-play.svg?v=1651814299\",\n      alt: \"Video Play\",\n      className: \"mr-3\"\n    }), settings.video_btn_text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"flex items-center\"\n    }, settings.button_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"a\", {\n      href: settings.button_link,\n      className: \"primary_btn\"\n    }, settings.button_text), settings.link_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"a\", {\n      href: settings.link_url,\n      className: \"text-white hover:text-red-100 flex items-center\"\n    }, settings.link_icon_position == 'before' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"img\", {\n      src: settings.link_icon,\n      alt: \"Video Play\",\n      className: \"mr-3\"\n    }), settings.link_text, settings.link_icon_position == 'after' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"img\", {\n      src: settings.link_icon,\n      alt: \"Video Play\",\n      className: \"ml-6\"\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"w-full md:w-6/12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"video\", {\n      width: \"100%\",\n      height: \"100%\",\n      autoPlay: true,\n      muted: true,\n      loop: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"source\", {\n      src: settings.image,\n      type: \"video/mp4\"\n    }), \"Your browser does not support the video tag.\")), settings.video_link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      tabIndex: \"-1\",\n      \"aria-hidden\": \"true\",\n      className: \"videoBack fixed \".concat(videoActive)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"flex items-start modal-body pr-4 w-11/12 md:w-2/3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"video\", {\n      width: \"100%\",\n      height: \"100%\",\n      controls: true,\n      allow: 'autoplay',\n      className: \"pr-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"source\", {\n      src: settings.video_link,\n      type: \"video/mp4\"\n    }), \"Your browser does not support the video tag.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"button\", {\n      type: \"button\",\n      className: \"close-button bg-transparent hover:text-gray-900 items-center ml-auto rounded-lg text-gray-400 text-sm\",\n      onClick: function onClick() {\n        return handleVideoPopup();\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"svg\", {\n      className: \"w-5 h-5\",\n      fill: \"#fff\",\n      viewBox: \"0 0 20 20\",\n      xmlns: \"http://www.w3.org/2000/svg\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"path\", {\n      fillRule: \"evenodd\",\n      d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n      clipRule: \"evenodd\"\n    })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"how_it_work_items_container flex items-center flex-col md:flex-row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"w-full md:w-6/12\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"video\", {\n      width: \"100%\",\n      height: \"100%\",\n      autoPlay: true,\n      muted: true,\n      loop: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"source\", {\n      src: settings.image,\n      type: \"video/mp4\"\n    }), \"Your browser does not support the video tag.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"how_it_work_content w-full md:w-6/12 md:pl-8 lg:px-13 xl:px-16 pt-6 md:pt-0-\"\n    }, settings.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"h2\", {\n      className: \"font-bold text-white mb-2 lg:mb-4\"\n    }, settings.title), settings.content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"p\", {\n      className: \"mb-6\"\n    }, settings.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"div\", {\n      className: \"flex items-center flex-row\"\n    }, settings.button_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"a\", {\n      href: settings.button_link,\n      className: \"primary_btn mr-6 sm:mr-10\"\n    }, settings.button_text), settings.link_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(\"a\", {\n      href: settings.link_url,\n      className: \"premium_link white_link relative link_hover\"\n    }, settings.link_text)))));\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexBetterWay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL0NvbXBvbmVudHMvSW5kZXhCZXR0ZXJXYXkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFnQjtFQUFBLElBQWJDLE1BQWEsUUFBYkEsTUFBYTs7RUFDckMsZ0JBQXNDRixnREFBUSxDQUFDLFVBQUQsQ0FBOUM7RUFBQTtFQUFBLElBQU9HLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0lBQzdCLElBQUlGLFdBQVcsS0FBSyxVQUFwQixFQUFnQztNQUM5QkMsY0FBYyxDQUFDLFNBQUQsQ0FBZDtNQUNBRSxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QyxDQUE3QyxFQUFnREMsSUFBaEQ7TUFDQUQsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkUsUUFBbkIsQ0FBNEIsV0FBNUI7SUFDRCxDQUpELE1BSU87TUFDTEosY0FBYyxDQUFDLFVBQUQsQ0FBZDtNQUNBRSxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QyxDQUE3QyxFQUFnREcsS0FBaEQ7SUFDRDtFQUNGLENBVEQ7O0VBV0FILENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDSSxVQUF4QyxDQUFtRCxZQUFZO0lBQzdESixDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2Q0ssSUFBN0MsQ0FBa0QsVUFBbEQsRUFBOEQsSUFBOUQ7SUFDQUwsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQk0sV0FBbkIsQ0FBK0IsV0FBL0I7RUFDRCxDQUhEO0VBSUFOLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDTyxVQUF4QyxDQUFtRCxZQUFZO0lBQzdEUCxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2Q1EsVUFBN0MsQ0FBd0QsVUFBeEQ7SUFDQVIsQ0FBQyxDQUFDLGVBQUQs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LFFBQVEsQ0FBQ0UsT0FBVCxpQkFBb0I7TUFBRyxTQUFTLEVBQUM7SUFBYixHQUFxQkYsUUFBUSxDQUFDRSxPQUE5QixDQUp2QixlQUtFO01BQUssU0FBUyxFQUFDO0lBQWYsR0FDR0YsUUFBUSxDQUFDSyxXQUFULGlCQUNDO01BQUcsSUFBSSxFQUFFTCxRQUFRLENBQUNNLFdBQWxCO01BQStCLFNBQVMsRUFBQztJQUF6QyxHQUNHTixRQUFRLENBQUNLLFdBRFosQ0FGSixFQU1HTCxRQUFRLENBQUNPLFNBQVQsaUJBQ0M7TUFDRSxJQUFJLEVBQUVQLFFBQVEsQ0FBQ1EsUUFEakI7TUFFRSxTQUFTLEVBQUM7SUFGWixHQUlHUixRQUFRLENBQUNPLFNBSlosQ0FQSixDQUxGLENBUEYsQ0E1RkosQ0FERjtFQTZIRCxDQS9IQSxDQURILENBREYsQ0FERixDQURGO0FBd0lELENBM0tEOztBQTZLQSxpRUFBZTlCLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbS1sZXZpdHkvLi9zY3JpcHRzL0NvbXBvbmVudHMvSW5kZXhCZXR0ZXJXYXkuanM/ODRmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleEJldHRlcldheSA9ICh7IGJsb2NrcyB9KSA9PiB7XHJcbiAgY29uc3QgW3ZpZGVvQWN0aXZlLCBzZXRWaWRlb0FjdGl2ZV0gPSB1c2VTdGF0ZSgnZmFkZS1vdXQnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVmlkZW9Qb3B1cCA9ICgpID0+IHtcclxuICAgIGlmICh2aWRlb0FjdGl2ZSA9PT0gJ2ZhZGUtb3V0Jykge1xyXG4gICAgICBzZXRWaWRlb0FjdGl2ZSgnZmFkZS1pbicpO1xyXG4gICAgICAkKCcudmlkZW9faXRlbXNfY29udGFpbmVyIC52aWRlb0JhY2sgdmlkZW8nKVswXS5wbGF5KCk7XHJcbiAgICAgICQoJy5jbG9zZS1idXR0b24nKS5hZGRDbGFzcygnbWQ6aGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRWaWRlb0FjdGl2ZSgnZmFkZS1vdXQnKTtcclxuICAgICAgJCgnLnZpZGVvX2l0ZW1zX2NvbnRhaW5lciAudmlkZW9CYWNrIHZpZGVvJylbMF0ucGF1c2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkKCcudmlkZW9faXRlbXNfY29udGFpbmVyIC5tb2RhbC1ib2R5JykubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcudmlkZW9faXRlbXNfY29udGFpbmVyIC52aWRlb0JhY2sgdmlkZW8nKS5hdHRyKCdjb250cm9scycsIHRydWUpO1xyXG4gICAgJCgnLmNsb3NlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdtZDpoaWRkZW4nKTtcclxuICB9KTtcclxuICAkKCcudmlkZW9faXRlbXNfY29udGFpbmVyIC5tb2RhbC1ib2R5JykubW91c2VsZWF2ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcudmlkZW9faXRlbXNfY29udGFpbmVyIC52aWRlb0JhY2sgdmlkZW8nKS5yZW1vdmVBdHRyKCdjb250cm9scycpO1xyXG4gICAgJCgnLmNsb3NlLWJ1dHRvbicpLmFkZENsYXNzKCdtZDpoaWRkZW4nKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChcclxuICAgICAgIShcclxuICAgICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcudmlkZW8tb3BlbicpLmxlbmd0aCA+IDAgfHxcclxuICAgICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcudmlkZW9CYWNrIC5tb2RhbC1ib2R5JykubGVuZ3RoID4gMFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgc2V0VmlkZW9BY3RpdmUoJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgICQoJy52aWRlb19pdGVtc19jb250YWluZXIgLnZpZGVvQmFjayB2aWRlbycpWzBdLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tcGFkZGluZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRlZXAtbW9zcyBweS04IGxnOnB5LTE2IHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGxnOnB5LTJcIj5cclxuICAgICAgICAgIHtibG9ja3MubWFwKChibG9jaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBzZXR0aW5ncyB9ID0gYmxvY2s7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Bidy1gICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb19pdGVtc19jb250YWluZXIgZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2wtcmV2ZXJzZSBtZDpmbGV4LXJvdyBtYi0xNCBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb19jb250ZW50IHctZnVsbCBtZDp3LTYvMTIgbWQ6cHItOCBsZzpweC0xMyB4bDpweC0xNiBwdC02IG1kOnB0LTAtIHBiLTAgbWQ6cGItNSBsZzpwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZ3MudGl0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgbWItMiBsZzptYi00XCI+e3NldHRpbmdzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLmNvbnRlbnQgJiYgPHAgY2xhc3NOYW1lPVwibWItNlwiPntzZXR0aW5ncy5jb250ZW50fTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZ3MudmlkZW9fYnRuX3RleHQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWRlb1BvcHVwKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby1vcGVuIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgdmlkZW8tb3Blbi1saW5rIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNjI3LzM0NzYvMjIwNy9maWxlcy92aWRlby1wbGF5LnN2Zz92PTE2NTE4MTQyOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJWaWRlbyBQbGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLnZpZGVvX2J0bl90ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZ3MuYnV0dG9uX3RleHQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NldHRpbmdzLmJ1dHRvbl9saW5rfSBjbGFzc05hbWU9XCJwcmltYXJ5X2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLmJ1dHRvbl90ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLmxpbmtfdGV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NldHRpbmdzLmxpbmtfdXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXJlZC0xMDAgZmxleCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5ncy5saW5rX2ljb25fcG9zaXRpb24gPT0gJ2JlZm9yZScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2V0dGluZ3MubGlua19pY29ufSBhbHQ9XCJWaWRlbyBQbGF5XCIgY2xhc3NOYW1lPVwibXItM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLmxpbmtfdGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5ncy5saW5rX2ljb25fcG9zaXRpb24gPT0gJ2FmdGVyJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZXR0aW5ncy5saW5rX2ljb259IGFsdD1cIlZpZGVvIFBsYXlcIiBjbGFzc05hbWU9XCJtbC02XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy02LzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGF1dG9QbGF5IG11dGVkIGxvb3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtzZXR0aW5ncy5pbWFnZX0gdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXR0aW5ncy52aWRlb19saW5rICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZpZGVvQmFjayBmaXhlZCAke3ZpZGVvQWN0aXZlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBtb2RhbC1ib2R5IHByLTQgdy0xMS8xMiBtZDp3LTIvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PXsnYXV0b3BsYXknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e3NldHRpbmdzLnZpZGVvX2xpbmt9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uIGJnLXRyYW5zcGFyZW50IGhvdmVyOnRleHQtZ3JheS05MDAgaXRlbXMtY2VudGVyIG1sLWF1dG8gcm91bmRlZC1sZyB0ZXh0LWdyYXktNDAwIHRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmlkZW9Qb3B1cCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvd19pdF93b3JrX2l0ZW1zX2NvbnRhaW5lciBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctNi8xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBhdXRvUGxheSBtdXRlZCBsb29wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17c2V0dGluZ3MuaW1hZ2V9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvd19pdF93b3JrX2NvbnRlbnQgdy1mdWxsIG1kOnctNi8xMiBtZDpwbC04IGxnOnB4LTEzIHhsOnB4LTE2IHB0LTYgbWQ6cHQtMC1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5ncy50aXRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSBtYi0yIGxnOm1iLTRcIj57c2V0dGluZ3MudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZ3MuY29udGVudCAmJiA8cCBjbGFzc05hbWU9XCJtYi02XCI+e3NldHRpbmdzLmNvbnRlbnR9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLmJ1dHRvbl90ZXh0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzZXR0aW5ncy5idXR0b25fbGlua30gY2xhc3NOYW1lPVwicHJpbWFyeV9idG4gbXItNiBzbTptci0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLmJ1dHRvbl90ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLmxpbmtfdGV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NldHRpbmdzLmxpbmtfdXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJlbWl1bV9saW5rIHdoaXRlX2xpbmsgcmVsYXRpdmUgbGlua19ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzLmxpbmtfdGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4QmV0dGVyV2F5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkluZGV4QmV0dGVyV2F5IiwiYmxvY2tzIiwidmlkZW9BY3RpdmUiLCJzZXRWaWRlb0FjdGl2ZSIsImhhbmRsZVZpZGVvUG9wdXAiLCIkIiwicGxheSIsImFkZENsYXNzIiwicGF1c2UiLCJtb3VzZWVudGVyIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwibW91c2VsZWF2ZSIsInJlbW92ZUF0dHIiLCJkb2N1bWVudCIsIm9uIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJtYXAiLCJibG9jayIsImluZGV4Iiwic2V0dGluZ3MiLCJ0aXRsZSIsImNvbnRlbnQiLCJ2aWRlb19idG5fdGV4dCIsInVuZGVmaW5lZCIsImJ1dHRvbl90ZXh0IiwiYnV0dG9uX2xpbmsiLCJsaW5rX3RleHQiLCJsaW5rX3VybCIsImxpbmtfaWNvbl9wb3NpdGlvbiIsImxpbmtfaWNvbiIsImltYWdlIiwidmlkZW9fbGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scripts/Components/IndexBetterWay.js\n");

/***/ })

}]);