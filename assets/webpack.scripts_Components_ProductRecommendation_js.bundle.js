"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecomm_levity"] = self["webpackChunkecomm_levity"] || []).push([["scripts_Components_ProductRecommendation_js"],{

/***/ "./scripts/Components/ProductRecommendation.js":
/*!*****************************************************!*\
  !*** ./scripts/Components/ProductRecommendation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ \"./node_modules/core-js/modules/es.array.find-index.js\");\n/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ \"./node_modules/core-js/modules/es.array.is-array.js\");\n/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ \"./node_modules/core-js/modules/es.object.define-properties.js\");\n/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ProductFeature_ValuePropComponent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ProductFeature/ValuePropComponent */ \"./scripts/Components/ProductFeature/ValuePropComponent.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../utils */ \"./scripts/utils/index.js\");\n/* harmony import */ var _PLPItem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PLPItem */ \"./scripts/Components/PLPItem.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar ProductRecommendation = function ProductRecommendation(_ref) {\n  var blocks = _ref.blocks,\n      settings = _ref.settings;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      recommendations = _useState2[0],\n      setRecommendations = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_26__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                try {\n                  {\n                    blocks.map( /*#__PURE__*/function () {\n                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(block, index) {\n                        var settings, response;\n                        return regeneratorRuntime.wrap(function _callee$(_context) {\n                          while (1) {\n                            switch (_context.prev = _context.next) {\n                              case 0:\n                                settings = block.settings;\n                                _context.next = 3;\n                                return (0,_utils__WEBPACK_IMPORTED_MODULE_28__.fetchProductByHandle)(settings, settings);\n\n                              case 3:\n                                response = _context.sent;\n                                setRecommendations(function (oldArray) {\n                                  return [].concat(_toConsumableArray(oldArray), [response]);\n                                });\n\n                              case 5:\n                              case \"end\":\n                                return _context.stop();\n                            }\n                          }\n                        }, _callee);\n                      }));\n\n                      return function (_x, _x2) {\n                        return _ref3.apply(this, arguments);\n                      };\n                    }());\n                  }\n                } catch (err) {\n                  console.log(err.message);\n                }\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, [blocks, setRecommendations]);\n\n  var getVariant = function getVariant(recommendation, colorsArr, colorIndex) {\n    if (colorIndex === 0) {\n      var productVariant = recommendation.variants.find(function (variant) {\n        return variant.option1 === colorsArr[0];\n      });\n      return productVariant;\n    } else if (colorIndex === 1) {\n      var _productVariant = recommendation.variants.find(function (variant) {\n        return variant.option2 === colorsArr[0];\n      });\n\n      return _productVariant;\n    } else if (colorIndex === 2) {\n      var _productVariant2 = recommendation.variants.find(function (variant) {\n        return variant.option3 === colorsArr[0];\n      });\n\n      return _productVariant2;\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(ProductRecommendationContainer, {\n    className: \"section-padding\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_ProductFeature_ValuePropComponent__WEBPACK_IMPORTED_MODULE_27__.SectionTiltle, {\n    className: \"section_titile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(\"h2\", {\n    className: \"font-bold\"\n  }, settings === null || settings === void 0 ? void 0 : settings.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(RecommendationContainer, {\n    recommendations: recommendations\n  }, recommendations && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(react__WEBPACK_IMPORTED_MODULE_26__.Fragment, null, recommendations.map(function (product, index) {\n    var colorsArr = [];\n    var colorIndex = product.options.findIndex(function (option) {\n      return option === \"Color\";\n    });\n    var color = '';\n    {\n      product.variants.map(function (variant, index) {\n        if (colorIndex === 0) {\n          color = variant.option1;\n        } else if (colorIndex === 1) {\n          color = variant.option2;\n        } else if (colorIndex === 2) {\n          color = variant.option3;\n        }\n\n        if (colorsArr.indexOf(color) === -1 && colorsArr.length <= 3) {\n          colorsArr.push(color);\n        }\n      });\n    }\n\n    var newProduct = _objectSpread(_objectSpread({}, product), {}, {\n      variant: getVariant(product, colorsArr, colorIndex)\n    });\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_PLPItem__WEBPACK_IMPORTED_MODULE_29__.default, {\n      key: [product.id],\n      product: newProduct,\n      colors: colorsArr\n    });\n  })))));\n};\n\nvar ProductRecommendationContainer = styled_components__WEBPACK_IMPORTED_MODULE_30__.default.div.attrs({\n  className: 'px-2 md:px-0 md:text-center'\n}).withConfig({\n  displayName: \"ProductRecommendation__ProductRecommendationContainer\",\n  componentId: \"sc-1bfw787-0\"\n})([\"@media (min-width:740px){margin-right:-8%;margin-left:-8%;}\"]);\nvar RecommendationContainer = styled_components__WEBPACK_IMPORTED_MODULE_30__.default.div.attrs(function (_ref4) {\n  var recommendations = _ref4.recommendations;\n  return {\n    className: \"container\"\n  };\n}).withConfig({\n  displayName: \"ProductRecommendation__RecommendationContainer\",\n  componentId: \"sc-1bfw787-1\"\n})([\"\"]);\nvar TrendingMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_30__.default.div.withConfig({\n  displayName: \"ProductRecommendation__TrendingMainContainer\",\n  componentId: \"sc-1bfw787-2\"\n})([\"padding:112px 0;\"]);\nvar TrendCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_30__.default.div.withConfig({\n  displayName: \"ProductRecommendation__TrendCardContainer\",\n  componentId: \"sc-1bfw787-3\"\n})([\"display:flex;align-items:center;margin-top:30px !important;justify-content:space-between;\"]); // const TrendCardRow = styled.div``\n\nvar TrendCardRow = styled_components__WEBPACK_IMPORTED_MODULE_30__.default.div.withConfig({\n  displayName: \"ProductRecommendation__TrendCardRow\",\n  componentId: \"sc-1bfw787-4\"\n})([\"display:flex;align-items:center;position:relative;\"]);\nvar RadioChoice = styled_components__WEBPACK_IMPORTED_MODULE_30__.default.div.withConfig({\n  displayName: \"ProductRecommendation__RadioChoice\",\n  componentId: \"sc-1bfw787-5\"\n})([\"input{margin:0 4px;cursor:pointer;}input:first-child{margin-left:0;}input:last-child{margin-right:0;}\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductRecommendation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL0NvbXBvbmVudHMvUHJvZHVjdFJlY29tbWVuZGF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BQTBCO0FBQUEsTUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDdEQsa0JBQThDUCxnREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9RLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUVBVixFQUFBQSxpREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNVyxTQUFTO0FBQUEsMEVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQixvQkFBSTtBQUNGO0FBQ0VKLG9CQUFBQSxNQUFNLENBQUNLLEdBQVA7QUFBQSwwRkFBVyxpQkFBT0MsS0FBUCxFQUFjQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNETixnQ0FBQUEsUUFEQyxHQUNZSyxLQURaLENBQ0RMLFFBREM7QUFBQTtBQUFBLHVDQUVjSiw2REFBb0IsQ0FBQ0ksUUFBRCxFQUFXQSxRQUFYLENBRmxDOztBQUFBO0FBRUhPLGdDQUFBQSxRQUZHO0FBR1RMLGdDQUFBQSxrQkFBa0IsQ0FBQyxVQUFBTSxRQUFRO0FBQUEsc0VBQVFBLFFBQVIsSUFBa0JELFFBQWxCO0FBQUEsaUNBQVQsQ0FBbEI7O0FBSFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLRDtBQUNGLGlCQVJELENBUUUsT0FBT0UsR0FBUCxFQUFZO0FBQ1pDLGtCQUFBQSxP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QUFBLFNBQVMsQ0FBQ2lCLElBQVYsQ0FBZUgsS0FBZjtBQUNEO0FBQ0YsT0FkQTtBQWNFOztBQUNILFFBQU1JLFVBQVUsbUNBQVFSLE9BQVI7QUFBaUJMLE1BQUFBLE9BQU8sRUFBRVAsVUFBVSxDQUFDWSxPQUFELEVBQVVWLFNBQVYsRUFBcUJDLFVBQXJCO0FBQXBDLE1BQWhCOztBQUNBLHdCQUNFLGtEQUFDLDhDQUFEO0FBQ0UsU0FBRyxFQUFFLENBQUNTLE9BQU8sQ0FBQ1MsRUFBVCxDQURQO0FBRUUsYUFBTyxFQUFFRCxVQUZYO0FBR0UsWUFBTSxFQUFFbEI7QUFIVixNQURGO0FBT0QsR0EzQkEsQ0FESCxDQUZGLENBREYsQ0FKRixDQURGO0FBNkNELENBdEZEOztBQTBGQSxJQUFNb0IsOEJBQThCLEdBQUd6QyxpRUFBQSxDQUFpQjtBQUN0RDRDLEVBQUFBLFNBQVMsRUFBRTtBQUQyQyxDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLG1FQUFwQztBQVNBLElBQU1DLHVCQUF1QixHQUFHN0MsaUVBQUEsQ0FBaUI7QUFBQSxNQUFHTyxlQUFILFNBQUdBLGVBQUg7QUFBQSxTQUEwQjtBQUN6RXFDLElBQUFBLFNBQVM7QUFEZ0UsR0FBMUI7QUFBQSxDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLFFBQTdCO0FBSUEsSUFBTUUscUJBQXFCLEdBQUc5QyxzRUFBSDtBQUFBO0FBQUE7QUFBQSx3QkFBM0I7QUFJQSxJQUFNK0Msa0JBQWtCLEdBQUcvQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSxpR0FBeEIsRUFPQTs7QUFDQSxJQUFNZ0QsWUFBWSxHQUFHaEQsc0VBQUg7QUFBQTtBQUFBO0FBQUEsMERBQWxCO0FBTUEsSUFBTWlELFdBQVcsR0FBR2pELHNFQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUFqQjtBQWdCQSxpRUFBZUkscUJBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tLWxldml0eS8uL3NjcmlwdHMvQ29tcG9uZW50cy9Qcm9kdWN0UmVjb21tZW5kYXRpb24uanM/YWYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNlY3Rpb25UaWx0bGUgfSBmcm9tICcuL1Byb2R1Y3RGZWF0dXJlL1ZhbHVlUHJvcENvbXBvbmVudCc7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdEJ5SGFuZGxlIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgUExQSXRlbSBmcm9tICcuL1BMUEl0ZW0nO1xyXG5cclxuY29uc3QgUHJvZHVjdFJlY29tbWVuZGF0aW9uID0gKHsgYmxvY2tzLCBzZXR0aW5ncyB9KSA9PiB7XHJcbiAgY29uc3QgW3JlY29tbWVuZGF0aW9ucywgc2V0UmVjb21tZW5kYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBibG9ja3MubWFwKGFzeW5jIChibG9jaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBzZXR0aW5ncyB9ID0gYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9kdWN0QnlIYW5kbGUoc2V0dGluZ3MsIHNldHRpbmdzKTtcclxuICAgICAgICAgICAgc2V0UmVjb21tZW5kYXRpb25zKG9sZEFycmF5ID0+IFsuLi5vbGRBcnJheSwgcmVzcG9uc2VdKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbYmxvY2tzLCBzZXRSZWNvbW1lbmRhdGlvbnNdKTtcclxuXHJcbiAgY29uc3QgZ2V0VmFyaWFudCA9IChyZWNvbW1lbmRhdGlvbiwgY29sb3JzQXJyLCBjb2xvckluZGV4KSA9PiB7XHJcbiAgICBpZihjb2xvckluZGV4ID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50ID0gcmVjb21tZW5kYXRpb24udmFyaWFudHMuZmluZChcclxuICAgICAgICAodmFyaWFudCkgPT4gdmFyaWFudC5vcHRpb24xID09PSBjb2xvcnNBcnJbMF1cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihjb2xvckluZGV4ID09PSAxKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50ID0gcmVjb21tZW5kYXRpb24udmFyaWFudHMuZmluZChcclxuICAgICAgICAodmFyaWFudCkgPT4gdmFyaWFudC5vcHRpb24yID09PSBjb2xvcnNBcnJbMF1cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihjb2xvckluZGV4ID09PSAyKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50ID0gcmVjb21tZW5kYXRpb24udmFyaWFudHMuZmluZChcclxuICAgICAgICAodmFyaWFudCkgPT4gdmFyaWFudC5vcHRpb24zID09PSBjb2xvcnNBcnJbMF1cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZHVjdFJlY29tbWVuZGF0aW9uQ29udGFpbmVyIGNsYXNzTmFtZT1cInNlY3Rpb24tcGFkZGluZ1wiPlxyXG4gICAgICA8U2VjdGlvblRpbHRsZSBjbGFzc05hbWU9J3NlY3Rpb25fdGl0aWxlJz5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57c2V0dGluZ3M/LnRpdGxlfTwvaDI+XHJcbiAgICAgIDwvU2VjdGlvblRpbHRsZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8UmVjb21tZW5kYXRpb25Db250YWluZXIgcmVjb21tZW5kYXRpb25zPXtyZWNvbW1lbmRhdGlvbnN9PlxyXG4gICAgICAgIHtyZWNvbW1lbmRhdGlvbnMgJiZcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtyZWNvbW1lbmRhdGlvbnMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBjb2xvcnNBcnIgPSBbXTtcclxuICAgICAgICAgICAgICBjb25zdCBjb2xvckluZGV4ID0gcHJvZHVjdC5vcHRpb25zLmZpbmRJbmRleChvcHRpb24gPT4gb3B0aW9uID09PSBcIkNvbG9yXCIpO1xyXG4gICAgICAgICAgICAgIHZhciBjb2xvciA9ICcnO1xyXG4gICAgICAgICAgICAgIHtwcm9kdWN0LnZhcmlhbnRzLm1hcCgodmFyaWFudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbG9ySW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3IgPSB2YXJpYW50Lm9wdGlvbjE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNvbG9ySW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3IgPSB2YXJpYW50Lm9wdGlvbjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNvbG9ySW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3IgPSB2YXJpYW50Lm9wdGlvbjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yc0Fyci5pbmRleE9mKGNvbG9yKSA9PT0gLTEgJiYgY29sb3JzQXJyLmxlbmd0aCA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yc0Fyci5wdXNoKGNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICBjb25zdCBuZXdQcm9kdWN0ID0geyAuLi5wcm9kdWN0LCB2YXJpYW50OiBnZXRWYXJpYW50KHByb2R1Y3QsIGNvbG9yc0FyciwgY29sb3JJbmRleCkgfTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFBMUEl0ZW1cclxuICAgICAgICAgICAgICAgICAga2V5PXtbcHJvZHVjdC5pZF19XHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e25ld1Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9ycz17Y29sb3JzQXJyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVjb21tZW5kYXRpb25Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Qcm9kdWN0UmVjb21tZW5kYXRpb25Db250YWluZXI+XHJcbiAgKTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RSZWNvbW1lbmRhdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3B4LTIgbWQ6cHgtMCBtZDp0ZXh0LWNlbnRlcicsXHJcbn0pYFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NDBweCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTglO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlY29tbWVuZGF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycygoeyByZWNvbW1lbmRhdGlvbnMgfSkgPT4gKHtcclxuICBjbGFzc05hbWU6IGBjb250YWluZXJgLFxyXG59KSlgYDtcclxuXHJcbmNvbnN0IFRyZW5kaW5nTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6IDExMnB4IDA7XHJcbmBcclxuXHJcbmNvbnN0IFRyZW5kQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5gXHJcbi8vIGNvbnN0IFRyZW5kQ2FyZFJvdyA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBUcmVuZENhcmRSb3cgPSBzdHlsZWQuZGl2YFxyXG4gZGlzcGxheTogZmxleDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBSYWRpb0Nob2ljZSA9IHN0eWxlZC5kaXZgXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0OmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RSZWNvbW1lbmRhdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIlNlY3Rpb25UaWx0bGUiLCJmZXRjaFByb2R1Y3RCeUhhbmRsZSIsIlBMUEl0ZW0iLCJQcm9kdWN0UmVjb21tZW5kYXRpb24iLCJibG9ja3MiLCJzZXR0aW5ncyIsInJlY29tbWVuZGF0aW9ucyIsInNldFJlY29tbWVuZGF0aW9ucyIsImZldGNoRGF0YSIsIm1hcCIsImJsb2NrIiwiaW5kZXgiLCJyZXNwb25zZSIsIm9sZEFycmF5IiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJnZXRWYXJpYW50IiwicmVjb21tZW5kYXRpb24iLCJjb2xvcnNBcnIiLCJjb2xvckluZGV4IiwicHJvZHVjdFZhcmlhbnQiLCJ2YXJpYW50cyIsImZpbmQiLCJ2YXJpYW50Iiwib3B0aW9uMSIsIm9wdGlvbjIiLCJvcHRpb24zIiwidGl0bGUiLCJwcm9kdWN0Iiwib3B0aW9ucyIsImZpbmRJbmRleCIsIm9wdGlvbiIsImNvbG9yIiwiaW5kZXhPZiIsImxlbmd0aCIsInB1c2giLCJuZXdQcm9kdWN0IiwiaWQiLCJQcm9kdWN0UmVjb21tZW5kYXRpb25Db250YWluZXIiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIlJlY29tbWVuZGF0aW9uQ29udGFpbmVyIiwiVHJlbmRpbmdNYWluQ29udGFpbmVyIiwiVHJlbmRDYXJkQ29udGFpbmVyIiwiVHJlbmRDYXJkUm93IiwiUmFkaW9DaG9pY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/Components/ProductRecommendation.js\n");

/***/ })

}]);