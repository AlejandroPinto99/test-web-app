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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _dashboard_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-layout */ \"./src/components/dashboard/dashboard-layout.js\");\n/* harmony import */ var _client_list_ClientList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-list/ClientList */ \"./src/components/dashboard/client-list/ClientList.tsx\");\n/* harmony import */ var _payments_list_PaymentList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-list/PaymentList */ \"./src/components/dashboard/payments-list/PaymentList.tsx\");\n/* harmony import */ var _your_revenue_Revenue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./your-revenue/Revenue */ \"./src/components/dashboard/your-revenue/Revenue.tsx\");\n/* harmony import */ var _bussiness_statistics_statistics_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bussiness-statistics/statistics-container */ \"./src/components/dashboard/bussiness-statistics/statistics-container.tsx\");\n/* harmony import */ var _lib_gtm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/gtm */ \"./src/lib/gtm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Overview = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), displayBanner = ref[0], setDisplayBanner = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _lib_gtm__WEBPACK_IMPORTED_MODULE_8__.gtm.push({\n            event: 'page_view'\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Restore the persistent state from local/session storage\n        var value = globalThis.sessionStorage.getItem('dismiss-banner');\n        if (value === 'true') {\n        // setDisplayBanner(false);\n        }\n    }, []);\n    var handleDismissBanner = function() {\n        // Update the persistent state\n        // globalThis.sessionStorage.setItem('dismiss-banner', 'true');\n        setDisplayBanner(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    py: -1,\n                    ml: 15\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Container, {\n                    maxWidth: \"xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                        container: true,\n                        spacing: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                item: true,\n                                md: 8,\n                                xs: 12,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                                        sx: {\n                                            mb: 4,\n                                            ml: 2\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n                                            variant: \"h4\",\n                                            style: {\n                                                fontWeight: '500'\n                                            },\n                                            children: \"Good Morning\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_your_revenue_Revenue__WEBPACK_IMPORTED_MODULE_6__.Revenue, {}, void 0, false, {\n                                        fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bussiness_statistics_statistics_container__WEBPACK_IMPORTED_MODULE_7__.StatisticsContainer, {}, void 0, false, {\n                                        fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                item: true,\n                                md: 4,\n                                xs: 12,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_list_ClientList__WEBPACK_IMPORTED_MODULE_4__.ClientList, {\n                                    title: \"Your Recent Clients\",\n                                    placeholder: \"Search in all Persona\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                item: true,\n                                md: 8,\n                                xs: 12,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Here goes the graphic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 14\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n                                item: true,\n                                md: 4,\n                                xs: 12,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_payments_list_PaymentList__WEBPACK_IMPORTED_MODULE_5__.PaymentsList, {\n                                    title: \"Your Buisiness Payments\",\n                                    placeholder: \"Search a Payment\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Overview, \"ABwQaPQ8P66affKNtYZyNy+SoHA=\");\n_c = Overview;\nOverview.getLayout = function(page) {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dashboard_layout__WEBPACK_IMPORTED_MODULE_3__.DashboardLayout, {\n        children: page\n    }, void 0, false, {\n        fileName: \"/home/pinto/persona-app-web/src/components/dashboard/dashboard.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Overview);\nvar _c;\n$RefreshReg$(_c, \"Overview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDZjtBQWFOO0FBQzhCO0FBQ0Q7QUFDSztBQUNWO0FBQ2lDO0FBSTVDOzs7QUFHbkMsR0FBSyxDQUFDb0IsUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7O0lBQ3RCLEdBQUssQ0FBcUNuQixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFoRG9CLGFBQWEsR0FBc0JwQixHQUFjLEtBQWxDcUIsZ0JBQWdCLEdBQUlyQixHQUFjO0lBRXhERCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmbUIsOENBQVEsQ0FBQyxDQUFDO1lBQUNLLEtBQUssRUFBRSxDQUFXO1FBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUx4QixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEVBQTBEO1FBQzFELEdBQUssQ0FBQ3lCLEtBQUssR0FBR0MsVUFBVSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxDQUFnQjtRQUVoRSxFQUFFLEVBQUVILEtBQUssS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUNyQixFQUEyQjtRQUM3QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0ksbUJBQW1CLEdBQUcsUUFDOUIsR0FEb0MsQ0FBQztRQUNqQyxFQUE4QjtRQUM5QixFQUErRDtRQUMvRFAsZ0JBQWdCLENBQUMsS0FBSztJQUN4QixDQUFDO0lBRUQsTUFBTTs7d0ZBRURwQixrREFBSTtzR0FDRjRCLENBQUs7OEJBQUMsQ0FFUDs7Ozs7Ozs7Ozs7d0ZBRUQzQiw4Q0FBRztnQkFBQzRCLFNBQVMsRUFBQyxDQUFNO2dCQUFDQyxFQUFFLEVBQUUsQ0FBQ0M7b0JBQUFBLFFBQVEsRUFBRSxDQUFDO29CQUFFQyxFQUFFLEdBQUcsQ0FBQztvQkFBRUMsRUFBRSxFQUFFLEVBQUU7Z0JBQUEsQ0FBQztzR0FDcEQzQixvREFBUztvQkFBQzRCLFFBQVEsRUFBQyxDQUFJOzBHQUdyQjFCLCtDQUFJO3dCQUFDMkIsU0FBUzt3QkFBQ0MsT0FBTyxFQUFFLENBQUM7O3dHQUN2QjVCLCtDQUFJO2dDQUFDNkIsSUFBSTtnQ0FBQ0MsRUFBRSxFQUFFLENBQUM7Z0NBQUVDLEVBQUUsRUFBRSxFQUFFOztnSEFDbkJ0Qyw4Q0FBRzt3Q0FBQzZCLEVBQUUsRUFBRSxDQUFDOzRDQUFDVSxFQUFFLEVBQUUsQ0FBQzs0Q0FBRVAsRUFBRSxFQUFFLENBQUM7d0NBQUEsQ0FBQzs4SEFDckJ0QixxREFBVTs0Q0FBQzhCLE9BQU8sRUFBQyxDQUFJOzRDQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7Z0RBQUFBLFVBQVUsRUFBRSxDQUFLOzRDQUFBLENBQUM7c0RBQUUsQ0FFckQ7Ozs7Ozs7Ozs7O2dIQUVENUIsMERBQU87Ozs7O2dIQUNQQywyRkFBbUI7Ozs7Ozs7Ozs7O3dHQUd2QlIsK0NBQUk7Z0NBQUM2QixJQUFJO2dDQUFDQyxFQUFFLEVBQUUsQ0FBQztnQ0FBRUMsRUFBRSxFQUFFLEVBQUU7c0hBQ3JCMUIsK0RBQVU7b0NBQUNlLEtBQUssRUFBQyxDQUFxQjtvQ0FBQ2dCLFdBQVcsRUFBQyxDQUF1Qjs7Ozs7Ozs7Ozs7d0dBRzVFcEMsK0NBQUk7Z0NBQUM2QixJQUFJO2dDQUFDQyxFQUFFLEVBQUUsQ0FBQztnQ0FBRUMsRUFBRSxFQUFFLEVBQUU7c0hBQ3RCTSxDQUFDOzhDQUFDLENBQXFCOzs7Ozs7Ozs7Ozt3R0FHeEJyQywrQ0FBSTtnQ0FBQzZCLElBQUk7Z0NBQUNDLEVBQUUsRUFBRSxDQUFDO2dDQUFFQyxFQUFFLEVBQUUsRUFBRTtzSEFDckJ6QixvRUFBWTtvQ0FBQ2MsS0FBSyxFQUFDLENBQXlCO29DQUFDZ0IsV0FBVyxFQUFDLENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExRixDQUFDO0dBN0RLMUIsUUFBUTtLQUFSQSxRQUFRO0FBK0RkQSxRQUFRLENBQUM0QixTQUFTLEdBQUcsUUFBUSxDQUFQQyxJQUFJO2tCQUN0QixNQUFNLCtEQUFMbkMsOERBQWU7a0JBQ2JtQyxJQUFJOzs7Ozs7O0FBS1gsK0RBQWU3QixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcz9hNjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBNZW51SXRlbSxcbiAgVGV4dEZpZWxkLFxuICBUeXBvZ3JhcGh5XG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTGF5b3V0IH0gZnJvbSAnLi9kYXNoYm9hcmQtbGF5b3V0JztcbmltcG9ydCB7Q2xpZW50TGlzdH0gZnJvbSAnLi9jbGllbnQtbGlzdC9DbGllbnRMaXN0J1xuaW1wb3J0IHtQYXltZW50c0xpc3R9IGZyb20gJy4vcGF5bWVudHMtbGlzdC9QYXltZW50TGlzdCdcbmltcG9ydCB7UmV2ZW51ZX0gZnJvbSAnLi95b3VyLXJldmVudWUvUmV2ZW51ZSdcbmltcG9ydCB7U3RhdGlzdGljc0NvbnRhaW5lcn0gZnJvbSAnLi9idXNzaW5lc3Mtc3RhdGlzdGljcy9zdGF0aXN0aWNzLWNvbnRhaW5lcidcblxuXG5cbmltcG9ydCB7IGd0bSB9IGZyb20gJy4uLy4uL2xpYi9ndG0nO1xuXG5cbmNvbnN0IE92ZXJ2aWV3ID0gKCkgPT4ge1xuICBjb25zdCBbZGlzcGxheUJhbm5lciwgc2V0RGlzcGxheUJhbm5lcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGd0bS5wdXNoKHsgZXZlbnQ6ICdwYWdlX3ZpZXcnIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZXN0b3JlIHRoZSBwZXJzaXN0ZW50IHN0YXRlIGZyb20gbG9jYWwvc2Vzc2lvbiBzdG9yYWdlXG4gICAgY29uc3QgdmFsdWUgPSBnbG9iYWxUaGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Rpc21pc3MtYmFubmVyJyk7XG5cbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgLy8gc2V0RGlzcGxheUJhbm5lcihmYWxzZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGlzbWlzc0Jhbm5lciA9ICgpID0+IHtcbiAgICAvLyBVcGRhdGUgdGhlIHBlcnNpc3RlbnQgc3RhdGVcbiAgICAvLyBnbG9iYWxUaGlzLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Rpc21pc3MtYmFubmVyJywgJ3RydWUnKTtcbiAgICBzZXREaXNwbGF5QmFubmVyKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJveCBjb21wb25lbnQ9XCJtYWluXCIgc3g9e3tmbGV4R3JvdzogMSwgcHk6IC0xLCBtbDogMTV9fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XG4gICAgICAgICAgXG5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs4fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbWI6IDQsIG1sOiAyfX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICc1MDAnfX0+XG4gICAgICAgICAgICAgICAgICAgIEdvb2QgTW9ybmluZ1xuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxSZXZlbnVlIC8+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8U3RhdGlzdGljc0NvbnRhaW5lciAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8Q2xpZW50TGlzdCB0aXRsZT1cIllvdXIgUmVjZW50IENsaWVudHNcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbiBhbGwgUGVyc29uYVwiLz5cbiAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OH0geHM9ezEyfT5cbiAgICAgICAgICAgICA8cD5IZXJlIGdvZXMgdGhlIGdyYXBoaWM8L3A+XG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxQYXltZW50c0xpc3QgdGl0bGU9XCJZb3VyIEJ1aXNpbmVzcyBQYXltZW50c1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgUGF5bWVudFwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5PdmVydmlldy5nZXRMYXlvdXQgPSAocGFnZSkgPT4gKFxuICAgIDxEYXNoYm9hcmRMYXlvdXQ+XG4gICAgICB7cGFnZX1cbiAgICA8L0Rhc2hib2FyZExheW91dD5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiQm94IiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJDb250YWluZXIiLCJEaXZpZGVyIiwiR3JpZCIsIk1lbnVJdGVtIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsIkRhc2hib2FyZExheW91dCIsIkNsaWVudExpc3QiLCJQYXltZW50c0xpc3QiLCJSZXZlbnVlIiwiU3RhdGlzdGljc0NvbnRhaW5lciIsImd0bSIsIk92ZXJ2aWV3IiwiZGlzcGxheUJhbm5lciIsInNldERpc3BsYXlCYW5uZXIiLCJwdXNoIiwiZXZlbnQiLCJ2YWx1ZSIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVEaXNtaXNzQmFubmVyIiwidGl0bGUiLCJjb21wb25lbnQiLCJzeCIsImZsZXhHcm93IiwicHkiLCJtbCIsIm1heFdpZHRoIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJtZCIsInhzIiwibWIiLCJ2YXJpYW50Iiwic3R5bGUiLCJmb250V2VpZ2h0IiwicGxhY2Vob2xkZXIiLCJwIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dashboard/dashboard.js\n");

/***/ })

});