"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/dashboard/dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/dashboard.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _dashboard_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-layout */ \"./src/components/dashboard/dashboard-layout.js\");\n/* harmony import */ var _client_list_ClientList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-list/ClientList */ \"./src/components/dashboard/client-list/ClientList.tsx\");\n/* harmony import */ var _payments_list_PaymentList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-list/PaymentList */ \"./src/components/dashboard/payments-list/PaymentList.tsx\");\n/* harmony import */ var _your_revenue_Revenue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./your-revenue/Revenue */ \"./src/components/dashboard/your-revenue/Revenue.tsx\");\n/* harmony import */ var _bussiness_statistics_statistics_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bussiness-statistics/statistics-container */ \"./src/components/dashboard/bussiness-statistics/statistics-container.tsx\");\n/* harmony import */ var _lib_gtm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/gtm */ \"./src/lib/gtm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Overview = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), displayBanner = ref[0], setDisplayBanner = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _lib_gtm__WEBPACK_IMPORTED_MODULE_8__.gtm.push({\n            event: 'page_view'\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Restore the persistent state from local/session storage\n        var value = globalThis.sessionStorage.getItem('dismiss-banner');\n        if (value === 'true') {\n        // setDisplayBanner(false);\n        }\n    }, []);\n    var handleDismissBanner = function() {\n        // Update the persistent state\n        // globalThis.sessionStorage.setItem('dismiss-banner', 'true');\n        setDisplayBanner(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    py: -1,\n                    ml: 15\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Container, {\n                    maxWidth: \"xl\",\n                    sx: {\n                        display: 'flex',\n                        flexDirection: 'column'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                            container: true,\n                            spacing: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                    item: true,\n                                    md: 8,\n                                    xs: 12,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                                            sx: {\n                                                mb: 4,\n                                                ml: 2\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                                variant: \"h4\",\n                                                style: {\n                                                    fontWeight: '500'\n                                                },\n                                                children: \"Good Morning\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_your_revenue_Revenue__WEBPACK_IMPORTED_MODULE_6__.Revenue, {}, void 0, false, {\n                                            fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bussiness_statistics_statistics_container__WEBPACK_IMPORTED_MODULE_7__.StatisticsContainer, {}, void 0, false, {\n                                            fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                    item: true,\n                                    md: 8,\n                                    xs: 12,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Here goes the graphic\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 14\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                            container: true,\n                            spacing: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                item: true,\n                                md: 4,\n                                xs: 4,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_list_ClientList__WEBPACK_IMPORTED_MODULE_4__.ClientList, {\n                                    title: \"Your Recent Clients\",\n                                    placeholder: \"Search in all Persona\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Overview, \"ABwQaPQ8P66affKNtYZyNy+SoHA=\");\n_c = Overview;\nOverview.getLayout = function(page) {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dashboard_layout__WEBPACK_IMPORTED_MODULE_3__.DashboardLayout, {\n        children: page\n    }, void 0, false, {\n        fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Overview);\n{}{}var _c;\n$RefreshReg$(_c, \"Overview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDZjtBQWFOO0FBQzhCO0FBQ0Q7QUFDSztBQUNWO0FBQ2lDO0FBSTVDOzs7QUFHbkMsR0FBSyxDQUFDb0IsUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7O0lBQ3RCLEdBQUssQ0FBcUNuQixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFoRG9CLGFBQWEsR0FBc0JwQixHQUFjLEtBQWxDcUIsZ0JBQWdCLEdBQUlyQixHQUFjO0lBRXhERCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmbUIsOENBQVEsQ0FBQyxDQUFDO1lBQUNLLEtBQUssRUFBRSxDQUFXO1FBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUx4QixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEVBQTBEO1FBQzFELEdBQUssQ0FBQ3lCLEtBQUssR0FBR0MsVUFBVSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxDQUFnQjtRQUVoRSxFQUFFLEVBQUVILEtBQUssS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUNyQixFQUEyQjtRQUM3QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0ksbUJBQW1CLEdBQUcsUUFDOUIsR0FEb0MsQ0FBQztRQUNqQyxFQUE4QjtRQUM5QixFQUErRDtRQUMvRFAsZ0JBQWdCLENBQUMsS0FBSztJQUN4QixDQUFDO0lBRUQsTUFBTTs7d0ZBRURwQixrREFBSTtzR0FDRjRCLENBQUs7OEJBQUMsQ0FFUDs7Ozs7Ozs7Ozs7d0ZBRUQzQiw4Q0FBRztnQkFBQzRCLFNBQVMsRUFBQyxDQUFNO2dCQUFDQyxFQUFFLEVBQUUsQ0FBQ0M7b0JBQUFBLFFBQVEsRUFBRSxDQUFDO29CQUFFQyxFQUFFLEdBQUcsQ0FBQztvQkFBRUMsRUFBRSxFQUFFLEVBQUU7Z0JBQUEsQ0FBQztzR0FDcEQzQixvREFBUztvQkFBQzRCLFFBQVEsRUFBQyxDQUFJO29CQUFDSixFQUFFLEVBQUUsQ0FBQ0s7d0JBQUFBLE9BQU8sRUFBRSxDQUFNO3dCQUFFQyxhQUFhLEVBQUUsQ0FBUTtvQkFBQSxDQUFDOztvR0FDcEU1QiwrQ0FBSTs0QkFBQzZCLFNBQVM7NEJBQUNDLE9BQU8sRUFBRSxDQUFDOzs0R0FDdkI5QiwrQ0FBSTtvQ0FBQytCLElBQUk7b0NBQUNDLEVBQUUsRUFBRSxDQUFDO29DQUFFQyxFQUFFLEVBQUUsRUFBRTs7b0hBQ25CeEMsOENBQUc7NENBQUM2QixFQUFFLEVBQUUsQ0FBQztnREFBQ1ksRUFBRSxFQUFFLENBQUM7Z0RBQUVULEVBQUUsRUFBRSxDQUFDOzRDQUFBLENBQUM7a0lBQ3JCdEIscURBQVU7Z0RBQUNnQyxPQUFPLEVBQUMsQ0FBSTtnREFBQ0MsS0FBSyxFQUFFLENBQUNDO29EQUFBQSxVQUFVLEVBQUUsQ0FBSztnREFBQSxDQUFDOzBEQUFFLENBRXJEOzs7Ozs7Ozs7OztvSEFFRDlCLDBEQUFPOzs7OztvSEFDUEMsMkZBQW1COzs7Ozs7Ozs7Ozs0R0FFdkJSLCtDQUFJO29DQUFDK0IsSUFBSTtvQ0FBQ0MsRUFBRSxFQUFFLENBQUM7b0NBQUVDLEVBQUUsRUFBRSxFQUFFOzBIQUN0QkssQ0FBQztrREFBQyxDQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBSTFCdEMsK0NBQUk7NEJBQUM2QixTQUFTOzRCQUFDQyxPQUFPLEVBQUUsQ0FBQztrSEFDdkI5QiwrQ0FBSTtnQ0FBQytCLElBQUk7Z0NBQUNDLEVBQUUsRUFBRSxDQUFDO2dDQUFFQyxFQUFFLEVBQUUsQ0FBQztzSEFDcEI1QiwrREFBVTtvQ0FBQ2UsS0FBSyxFQUFDLENBQXFCO29DQUFDbUIsV0FBVyxFQUFDLENBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6RixDQUFDO0dBeERLN0IsUUFBUTtLQUFSQSxRQUFRO0FBMERkQSxRQUFRLENBQUM4QixTQUFTLEdBQUcsUUFBUSxDQUFQQyxJQUFJO2tCQUN0QixNQUFNLCtEQUFMckMsOERBQWU7a0JBQ2JxQyxJQUFJOzs7Ozs7O0FBS1gsK0RBQWUvQixRQUFRLEVBQUM7QUFFeEIsQ0FBQyxDQUVVLENBRVYsQ0FFVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzP2E2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIE1lbnVJdGVtLFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHlcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRMYXlvdXQgfSBmcm9tICcuL2Rhc2hib2FyZC1sYXlvdXQnO1xuaW1wb3J0IHtDbGllbnRMaXN0fSBmcm9tICcuL2NsaWVudC1saXN0L0NsaWVudExpc3QnXG5pbXBvcnQge1BheW1lbnRzTGlzdH0gZnJvbSAnLi9wYXltZW50cy1saXN0L1BheW1lbnRMaXN0J1xuaW1wb3J0IHtSZXZlbnVlfSBmcm9tICcuL3lvdXItcmV2ZW51ZS9SZXZlbnVlJ1xuaW1wb3J0IHtTdGF0aXN0aWNzQ29udGFpbmVyfSBmcm9tICcuL2J1c3NpbmVzcy1zdGF0aXN0aWNzL3N0YXRpc3RpY3MtY29udGFpbmVyJ1xuXG5cblxuaW1wb3J0IHsgZ3RtIH0gZnJvbSAnLi4vLi4vbGliL2d0bSc7XG5cblxuY29uc3QgT3ZlcnZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtkaXNwbGF5QmFubmVyLCBzZXREaXNwbGF5QmFubmVyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3RtLnB1c2goeyBldmVudDogJ3BhZ2VfdmlldycgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFJlc3RvcmUgdGhlIHBlcnNpc3RlbnQgc3RhdGUgZnJvbSBsb2NhbC9zZXNzaW9uIHN0b3JhZ2VcbiAgICBjb25zdCB2YWx1ZSA9IGdsb2JhbFRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZGlzbWlzcy1iYW5uZXInKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAvLyBzZXREaXNwbGF5QmFubmVyKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVEaXNtaXNzQmFubmVyID0gKCkgPT4ge1xuICAgIC8vIFVwZGF0ZSB0aGUgcGVyc2lzdGVudCBzdGF0ZVxuICAgIC8vIGdsb2JhbFRoaXMuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZGlzbWlzcy1iYW5uZXInLCAndHJ1ZScpO1xuICAgIHNldERpc3BsYXlCYW5uZXIoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cIm1haW5cIiBzeD17e2ZsZXhHcm93OiAxLCBweTogLTEsIG1sOiAxNX19PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIiBzeD17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbid9fT5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs4fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbWI6IDQsIG1sOiAyfX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICc1MDAnfX0+XG4gICAgICAgICAgICAgICAgICAgIEdvb2QgTW9ybmluZ1xuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxSZXZlbnVlIC8+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8U3RhdGlzdGljc0NvbnRhaW5lciAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OH0geHM9ezEyfT5cbiAgICAgICAgICAgICA8cD5IZXJlIGdvZXMgdGhlIGdyYXBoaWM8L3A+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NH0geHM9ezR9PlxuICAgICAgICAgICAgICA8Q2xpZW50TGlzdCB0aXRsZT1cIllvdXIgUmVjZW50IENsaWVudHNcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhbGwgUGVyc29uYVwiLz5cbiAgICAgICAgICAgIDwvR3JpZD4gXG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5PdmVydmlldy5nZXRMYXlvdXQgPSAocGFnZSkgPT4gKFxuICAgIDxEYXNoYm9hcmRMYXlvdXQ+XG4gICAgICB7cGFnZX1cbiAgICA8L0Rhc2hib2FyZExheW91dD5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG5cbnsvKiA8R3JpZCBpdGVtIG1kPXs0fSB4cz17MTJ9PlxuICA8Q2xpZW50TGlzdCB0aXRsZT1cIllvdXIgUmVjZW50IENsaWVudHNcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhbGwgUGVyc29uYVwiLz5cbjwvR3JpZD4gKi99XG5cbnsvKiA8R3JpZCBpdGVtIG1kPXs0fSB4cz17MTJ9PlxuICAgIDxQYXltZW50c0xpc3QgdGl0bGU9XCJZb3VyIEJ1aXNpbmVzcyBQYXltZW50c1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgUGF5bWVudFwiIC8+XG48L0dyaWQ+ICovfVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkJveCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIkdyaWQiLCJNZW51SXRlbSIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJEYXNoYm9hcmRMYXlvdXQiLCJDbGllbnRMaXN0IiwiUGF5bWVudHNMaXN0IiwiUmV2ZW51ZSIsIlN0YXRpc3RpY3NDb250YWluZXIiLCJndG0iLCJPdmVydmlldyIsImRpc3BsYXlCYW5uZXIiLCJzZXREaXNwbGF5QmFubmVyIiwicHVzaCIsImV2ZW50IiwidmFsdWUiLCJnbG9iYWxUaGlzIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlRGlzbWlzc0Jhbm5lciIsInRpdGxlIiwiY29tcG9uZW50Iiwic3giLCJmbGV4R3JvdyIsInB5IiwibWwiLCJtYXhXaWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJtZCIsInhzIiwibWIiLCJ2YXJpYW50Iiwic3R5bGUiLCJmb250V2VpZ2h0IiwicCIsInBsYWNlaG9sZGVyIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard/dashboard.js\n");

/***/ })

});