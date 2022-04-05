"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ RTL)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(1913);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: external "stylis-plugin-rtl"
const external_stylis_plugin_rtl_namespaceObject = require("stylis-plugin-rtl");
var external_stylis_plugin_rtl_default = /*#__PURE__*/__webpack_require__.n(external_stylis_plugin_rtl_namespaceObject);
;// CONCATENATED MODULE: ./src/components/rtl.js






const styleCache = ()=>cache_default()({
        key: 'rtl',
        prepend: true,
        stylisPlugins: [
            (external_stylis_plugin_rtl_default())
        ]
    })
;
const RTL = (props)=>{
    const { children , direction ='ltr'  } = props;
    (0,external_react_.useEffect)(()=>{
        document.dir = direction;
    }, [
        direction
    ]);
    if (direction === 'rtl') {
        return(/*#__PURE__*/ jsx_runtime_.jsx(react_.CacheProvider, {
            value: styleCache(),
            children: children
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }));
};
RTL.propTypes = {
    children: (external_prop_types_default()).node.isRequired,
    direction: external_prop_types_default().oneOf([
        'ltr',
        'rtl'
    ])
};


/***/ }),

/***/ 6132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ SettingsButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/utils"
var utils_ = __webpack_require__(7077);
;// CONCATENATED MODULE: ./src/icons/adjustments.js


const Adjustments = (0,utils_.createSvgIcon)(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
    })
}), 'Adjustments');

// EXTERNAL MODULE: ./src/contexts/settings-context.js
var settings_context = __webpack_require__(8473);
;// CONCATENATED MODULE: ./src/hooks/use-settings.js


const useSettings = ()=>(0,external_react_.useContext)(settings_context/* SettingsContext */.J6)
;

;// CONCATENATED MODULE: ./src/icons/x.js


const X = (0,utils_.createSvgIcon)(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
    })
}), 'X');

;// CONCATENATED MODULE: ./src/components/light-theme.svg
var _g, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgLightTheme = function SvgLightTheme(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 152,
    height: 130,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    clipPath: "url(#light-theme_svg__a)"
  }, /*#__PURE__*/external_react_.createElement("g", {
    filter: "url(#light-theme_svg__b)"
  }, /*#__PURE__*/external_react_.createElement("path", {
    fill: "#111827",
    d: "M0 0h52v130H0z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m16.638 9.715 3.516 1.967a.524.524 0 0 1 .195.719.523.523 0 0 1-.195.191l-3.516 1.967a1.506 1.506 0 0 1-1.47 0l-3.516-1.967a.524.524 0 0 1-.196-.719.525.525 0 0 1 .196-.191l3.516-1.967a1.505 1.505 0 0 1 1.47 0Z",
    fill: "#fff"
  }), /*#__PURE__*/external_react_.createElement("path", {
    opacity: 0.7,
    d: "m16.619 11.561 5.035 2.817a.523.523 0 0 1 0 .91l-5.035 2.817a1.505 1.505 0 0 1-1.47 0l-5.035-2.817a.524.524 0 0 1-.196-.719.524.524 0 0 1 .196-.191l5.035-2.817a1.505 1.505 0 0 1 1.47 0Z",
    fill: "#fff"
  }), /*#__PURE__*/external_react_.createElement("path", {
    opacity: 0.4,
    d: "m16.734 13.407 6.999 3.915a.522.522 0 0 1 .195.718.523.523 0 0 1-.195.191l-7 3.915a1.503 1.503 0 0 1-1.467 0L8.267 18.23a.523.523 0 0 1-.195-.718.522.522 0 0 1 .195-.191l7-3.915a1.503 1.503 0 0 1 1.467 0Z",
    fill: "#fff"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 36,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#10B981"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 54,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#4B5563"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 72,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#4B5563"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 90,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#4B5563"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 108,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#4B5563"
  })), /*#__PURE__*/external_react_.createElement("path", {
    fill: "#F9FAFC",
    d: "M52 0h100v130H52z"
  }), /*#__PURE__*/external_react_.createElement("g", {
    filter: "url(#light-theme_svg__c)"
  }, /*#__PURE__*/external_react_.createElement("path", {
    fill: "#fff",
    d: "M52 0h100v22H52z"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 58,
    y: 8,
    width: 33,
    height: 6,
    rx: 3,
    fill: "#CFD8DC"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 122,
    y: 7,
    width: 8,
    height: 8,
    rx: 4,
    fill: "#CFD8DC"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 138,
    y: 7,
    width: 8,
    height: 8,
    rx: 4,
    fill: "#CFD8DC"
  })))), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("filter", {
    id: "light-theme_svg__b",
    x: -2,
    y: -1,
    width: 56,
    height: 134,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_react_.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_react_.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/external_react_.createElement("feGaussianBlur", {
    stdDeviation: 1
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_7075:30048"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_7075:30048",
    result: "shape"
  })), /*#__PURE__*/external_react_.createElement("filter", {
    id: "light-theme_svg__c",
    x: 50,
    y: -1,
    width: 104,
    height: 26,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_react_.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_react_.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/external_react_.createElement("feGaussianBlur", {
    stdDeviation: 1
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    values: "0 0 0 0 0.392157 0 0 0 0 0.454902 0 0 0 0 0.545098 0 0 0 0.1 0"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_7075:30048"
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_react_.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/external_react_.createElement("feGaussianBlur", {
    stdDeviation: 0.5
  }), /*#__PURE__*/external_react_.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    values: "0 0 0 0 0.392157 0 0 0 0 0.454902 0 0 0 0 0.545098 0 0 0 0.06 0"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in2: "effect1_dropShadow_7075:30048",
    result: "effect2_dropShadow_7075:30048"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect2_dropShadow_7075:30048",
    result: "shape"
  })), /*#__PURE__*/external_react_.createElement("clipPath", {
    id: "light-theme_svg__a"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M0 4a4 4 0 0 1 4-4h148v130H0V4Z",
    fill: "#fff"
  })))));
};

/* harmony default export */ const light_theme = (SvgLightTheme);
;// CONCATENATED MODULE: ./src/components/dark-theme.svg
var dark_theme_g, dark_theme_defs;

function dark_theme_extends() { dark_theme_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dark_theme_extends.apply(this, arguments); }



var SvgDarkTheme = function SvgDarkTheme(props) {
  return /*#__PURE__*/external_react_.createElement("svg", dark_theme_extends({
    width: 152,
    height: 130,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), dark_theme_g || (dark_theme_g = /*#__PURE__*/external_react_.createElement("g", {
    clipPath: "url(#dark-theme_svg__a)"
  }, /*#__PURE__*/external_react_.createElement("g", {
    filter: "url(#dark-theme_svg__b)"
  }, /*#__PURE__*/external_react_.createElement("path", {
    fill: "#1A202C",
    d: "M0 0h52v130H0z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "m16.638 9.715 3.516 1.967a.524.524 0 0 1 .195.719.523.523 0 0 1-.195.191l-3.516 1.967a1.506 1.506 0 0 1-1.47 0l-3.516-1.967a.524.524 0 0 1-.196-.719.525.525 0 0 1 .196-.191l3.516-1.967a1.505 1.505 0 0 1 1.47 0Z",
    fill: "#fff"
  }), /*#__PURE__*/external_react_.createElement("path", {
    opacity: 0.7,
    d: "m16.619 11.561 5.035 2.817a.523.523 0 0 1 0 .91l-5.035 2.817a1.505 1.505 0 0 1-1.47 0l-5.035-2.817a.524.524 0 0 1-.196-.719.524.524 0 0 1 .196-.191l5.035-2.817a1.505 1.505 0 0 1 1.47 0Z",
    fill: "#fff"
  }), /*#__PURE__*/external_react_.createElement("path", {
    opacity: 0.4,
    d: "m16.734 13.407 6.999 3.915a.522.522 0 0 1 .195.718.523.523 0 0 1-.195.191l-7 3.915a1.503 1.503 0 0 1-1.467 0L8.267 18.23a.523.523 0 0 1-.195-.718.522.522 0 0 1 .195-.191l7-3.915a1.503 1.503 0 0 1 1.467 0Z",
    fill: "#fff"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 36,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#10B981"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 54,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#4B5563"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 72,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#4B5563"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 90,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#4B5563"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 8,
    y: 108,
    width: 36,
    height: 6,
    rx: 3,
    fill: "#4B5563"
  })), /*#__PURE__*/external_react_.createElement("path", {
    fill: "#12141C",
    d: "M52 0h100v130H52z"
  }), /*#__PURE__*/external_react_.createElement("g", {
    filter: "url(#dark-theme_svg__c)"
  }, /*#__PURE__*/external_react_.createElement("path", {
    fill: "#1A202C",
    d: "M52 0h100v22H52z"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 58,
    y: 8,
    width: 33,
    height: 6,
    rx: 3,
    fill: "#A0AEC0"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 122,
    y: 7,
    width: 8,
    height: 8,
    rx: 4,
    fill: "#A0AEC0"
  }), /*#__PURE__*/external_react_.createElement("rect", {
    x: 138,
    y: 7,
    width: 8,
    height: 8,
    rx: 4,
    fill: "#A0AEC0"
  })))), dark_theme_defs || (dark_theme_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("filter", {
    id: "dark-theme_svg__b",
    x: -2,
    y: -1,
    width: 56,
    height: 134,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_react_.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_react_.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/external_react_.createElement("feGaussianBlur", {
    stdDeviation: 1
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_7075:30069"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_7075:30069",
    result: "shape"
  })), /*#__PURE__*/external_react_.createElement("filter", {
    id: "dark-theme_svg__c",
    x: 50,
    y: -1,
    width: 104,
    height: 26,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_react_.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_react_.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/external_react_.createElement("feGaussianBlur", {
    stdDeviation: 1
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    values: "0 0 0 0 0.392157 0 0 0 0 0.454902 0 0 0 0 0.545098 0 0 0 0.1 0"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_7075:30069"
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_react_.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/external_react_.createElement("feGaussianBlur", {
    stdDeviation: 0.5
  }), /*#__PURE__*/external_react_.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/external_react_.createElement("feColorMatrix", {
    values: "0 0 0 0 0.392157 0 0 0 0 0.454902 0 0 0 0 0.545098 0 0 0 0.06 0"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in2: "effect1_dropShadow_7075:30069",
    result: "effect2_dropShadow_7075:30069"
  }), /*#__PURE__*/external_react_.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect2_dropShadow_7075:30069",
    result: "shape"
  })), /*#__PURE__*/external_react_.createElement("clipPath", {
    id: "dark-theme_svg__a"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M0 4a4 4 0 0 1 4-4h148v130H0V4Z",
    fill: "#fff"
  })))));
};

/* harmony default export */ const dark_theme = (SvgDarkTheme);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/components/settings-drawer.js








const themes = [
    {
        label: 'Light',
        value: 'light',
        icon: light_theme
    },
    {
        label: 'Dark',
        value: 'dark',
        icon: dark_theme
    }
];
const getValues = (settings)=>({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        theme: settings.theme
    })
;
const SettingsDrawer = (props)=>{
    const { open , onClose , ...other } = props;
    const { settings , saveSettings  } = useSettings();
    const { 0: values , 1: setValues  } = (0,external_react_.useState)(getValues(settings));
    (0,external_react_.useEffect)(()=>{
        setValues(getValues(settings));
    }, [
        settings
    ]);
    const handleChange = (field, value)=>{
        setValues({
            ...values,
            [field]: value
        });
    };
    const handleSave = ()=>{
        saveSettings(values);
        onClose?.();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Drawer, {
        anchor: "right",
        onClose: onClose,
        open: open,
        ModalProps: {
            sx: {
                zIndex: 2000
            }
        },
        PaperProps: {
            sx: {
                width: 320
            }
        },
        ...other,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    alignItems: 'center',
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 3,
                    py: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        color: "inherit",
                        variant: "h6",
                        children: "Theme settings"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        color: "inherit",
                        onClick: onClose,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(X, {
                            fontSize: "small"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    py: 4,
                    px: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        color: "textSecondary",
                        sx: {
                            display: 'block',
                            mb: 1
                        },
                        variant: "overline",
                        children: "Color Scheme"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            alignItems: 'center',
                            display: 'flex',
                            m: -1
                        },
                        children: themes.map((theme)=>{
                            const { label , icon: Icon , value  } = theme;
                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        onClick: ()=>handleChange('theme', value)
                                        ,
                                        sx: {
                                            borderColor: values.theme === value ? 'primary.main' : 'divider',
                                            borderRadius: 1,
                                            borderStyle: 'solid',
                                            borderWidth: 2,
                                            cursor: 'pointer',
                                            flexGrow: 1,
                                            fontSize: 0,
                                            m: 1,
                                            overflow: 'hidden',
                                            p: 1,
                                            '& svg': {
                                                height: 'auto',
                                                width: '100%'
                                            }
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        align: "center",
                                        sx: {
                                            mt: 1
                                        },
                                        variant: "subtitle2",
                                        children: label
                                    })
                                ]
                            }, value));
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        color: "textSecondary",
                        sx: {
                            display: 'block',
                            mb: 1,
                            mt: 4
                        },
                        variant: "overline",
                        children: "Settings"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                            control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Checkbox, {
                                checked: values.direction === 'rtl',
                                name: "direction",
                                onChange: (event)=>handleChange('direction', event.target.checked ? 'rtl' : 'ltr')
                            }),
                            label: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "subtitle2",
                                children: "Activate RTL content"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                            control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Checkbox, {
                                checked: values.responsiveFontSizes,
                                name: "direction",
                                onChange: (event)=>handleChange('responsiveFontSizes', event.target.checked)
                            }),
                            label: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "subtitle2",
                                children: "Responsive font sizes"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        color: "primary",
                        fullWidth: true,
                        onClick: handleSave,
                        sx: {
                            mt: 3
                        },
                        variant: "contained",
                        children: "Save Settings"
                    })
                ]
            })
        ]
    }));
};
SettingsDrawer.propTypes = {
    onClose: (external_prop_types_default()).func,
    open: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/components/settings-button.js





const SettingsButton = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                title: "Settings",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Fab, {
                    color: "primary",
                    onClick: handleOpen,
                    size: "medium",
                    sx: {
                        bottom: 0,
                        margin: (theme)=>theme.spacing(4)
                        ,
                        position: 'fixed',
                        right: 0,
                        zIndex: 1900
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Adjustments, {
                        fontSize: "small"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SettingsDrawer, {
                onClose: handleClose,
                open: open
            })
        ]
    }));
};


/***/ }),

/***/ 8474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ SplashScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6788);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);




const bounce1 = _emotion_react__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 1px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;
const bounce3 = _emotion_react__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 3px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;
const SplashScreen = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            alignItems: 'center',
            backgroundColor: 'neutral.900',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            left: 0,
            p: 3,
            position: 'fixed',
            top: 0,
            width: '100vw',
            zIndex: 2000
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_2__/* .Logo */ .T, {
            sx: {
                height: 80,
                width: 80,
                '& path:nth-child(1)': {
                    animation: `${bounce1} 1s ease-in-out infinite`
                },
                '& path:nth-child(3)': {
                    animation: `${bounce3} 1s ease-in-out infinite`
                }
            }
        })
    })
;


/***/ }),

/***/ 3726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PG": () => (/* binding */ gtmConfig)
/* harmony export */ });
/* unused harmony exports amplifyConfig, auth0Config, firebaseConfig */
const amplifyConfig = {
    aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
    aws_cognito_identity_pool_id: process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
    aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID
};
const auth0Config = {
    client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN
};
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
};
const gtmConfig = {
    containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
};


/***/ }),

/***/ 8473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J6": () => (/* binding */ SettingsContext),
/* harmony export */   "mu": () => (/* binding */ SettingsProvider),
/* harmony export */   "ix": () => (/* binding */ SettingsConsumer)
/* harmony export */ });
/* unused harmony exports restoreSettings, storeSettings */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const initialSettings = {
    direction: 'ltr',
    responsiveFontSizes: true,
    theme: 'light'
};
const restoreSettings = ()=>{
    let settings = null;
    try {
        const storedData = globalThis.localStorage.getItem('settings');
        if (storedData) {
            settings = JSON.parse(storedData);
        } else {
            settings = {
                direction: 'ltr',
                responsiveFontSizes: true,
                theme: globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            };
        }
    } catch (err) {
        console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
    }
    return settings;
};
const storeSettings = (settings)=>{
    globalThis.localStorage.setItem('settings', JSON.stringify(settings));
};
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    settings: initialSettings,
    saveSettings: ()=>{}
});
const SettingsProvider = (props)=>{
    const { children  } = props;
    const { 0: settings , 1: setSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSettings);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const restoredSettings = restoreSettings();
        if (restoredSettings) {
            setSettings(restoredSettings);
        }
    }, []);
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
        storeSettings(updatedSettings);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    }));
};
SettingsProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
const SettingsConsumer = SettingsContext.Consumer;


/***/ }),

/***/ 3555:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__]);
i18next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const resources = {
    en: {
        translation: {}
    },
    de: {
        translation: {
            'Language changed': 'Sprache ge\xe4ndert',
            'Your tier': 'Ihre Stufe',
            'General': 'Allgemein',
            'Overview': '\xdcberblick',
            'Analytics': 'Analytik',
            'Finance': 'Finanzen',
            'Logistics': 'Logistik',
            'Account': 'Konto',
            'Management': 'Verwaltung',
            'Customers': 'Kunden',
            'List': 'Auff\xfchren',
            'Details': 'Einzelheiten',
            'Edit': 'Bearbeiten',
            'Products': 'Produkte',
            'Create': 'Schaffen',
            'Orders': 'Auftr\xe4ge',
            'Invoices': 'Rechnungen',
            'Platforms': 'Plattform',
            'Job Listings': 'Stellenangebote',
            'Browse': 'Durchsuche',
            'Social Media': 'Sozialen Medien',
            'Profile': 'Profil',
            'Feed': 'F\xfcttern',
            'Blog': 'Blog',
            'Post List': 'Beitragsliste',
            'Post Details': 'Beitragsdetails',
            'Post Create': 'Beitrag erstellen',
            'Apps': 'Apps',
            'Kanban': 'Kanban',
            'Mail': 'E-Mail',
            'Chat': 'Plaudern',
            'Calendar': 'Kalender',
            'Pages': 'Seiten',
            'Auth': 'Authentifizierung',
            'Register': 'Registrieren',
            'Login': 'Anmeldung',
            'Pricing': 'Preisgestaltung',
            'Checkout': 'Auschecken',
            'Contact': 'Kontakt',
            'Error': 'Fehler',
            'Need Help?': 'Brauchen Sie Hilfe?',
            'Check our docs': '\xdcberpr\xfcfen Sie unsere Dokumente',
            'Documentation': 'Dokumentation'
        }
    },
    es: {
        translation: {
            'Language changed': 'Se ha cambiado el idioma.',
            'Your tier': 'Tu nivel',
            'General': 'General',
            'Overview': 'Visi\xf3n general',
            'Analytics': 'Anal\xedtica',
            'Finance': 'Finanzas',
            'Logistics': 'Log\xedstica',
            'Account': 'Cuenta',
            'Management': 'Gesti\xf3n',
            'Customers': 'Clientes',
            'List': 'Lista',
            'Details': 'Detalles',
            'Edit': 'Editar',
            'Products': 'Productos',
            'Create': 'Crear',
            'Orders': 'Pedidos',
            'Invoices': 'Facturas',
            'Platforms': 'Plataforma',
            'Job Listings': 'Listado de trabajos',
            'Browse': 'Buscar',
            'Social Media': 'Redes sociales',
            'Profile': 'Perfil',
            'Feed': 'Fuente social',
            'Blog': 'Blog',
            'Post List': 'Lista de articulos',
            'Post Details': 'Detalles del articulo',
            'Post Create': 'Create articulo',
            'Apps': 'Aplicaciones',
            'Kanban': 'Kanban',
            'Mail': 'Correo',
            'Chat': 'Chat',
            'Calendar': 'Calendario',
            'Pages': 'P\xe1ginas',
            'Auth': 'Autenticaci\xf3n',
            'Register': 'Registrarse',
            'Login': 'Acceso',
            'Pricing': 'Precios',
            'Checkout': 'Pago',
            'Contact': 'Contacto',
            'Error': 'Error',
            'Need Help?': '\xbfNecesitas ayuda?',
            'Check our docs': 'Consulte nuestros documentos',
            'Documentation': 'Documentaci\xf3n'
        }
    }
};
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

});

/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6715);
/* harmony import */ var _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_rtl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7413);
/* harmony import */ var _components_settings_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6132);
/* harmony import */ var _components_splash_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8474);
/* harmony import */ var _contexts_settings_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8473);
/* harmony import */ var _contexts_jwt_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8579);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3726);
/* harmony import */ var _lib_gtm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8682);
/* harmony import */ var _store_storeSetup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1448);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1796);
/* harmony import */ var _utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2707);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_22__]);
_i18n__WEBPACK_IMPORTED_MODULE_22__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
























next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', (nprogress__WEBPACK_IMPORTED_MODULE_6___default().start));
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeError', (nprogress__WEBPACK_IMPORTED_MODULE_6___default().done));
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', (nprogress__WEBPACK_IMPORTED_MODULE_6___default().done));
const clientSideEmotionCache = (0,_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_21__/* .createEmotionCache */ .S)();
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const getLayout = Component.getLayout ?? ((page)=>page
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _lib_gtm__WEBPACK_IMPORTED_MODULE_18__/* .gtm.initialize */ .w.initialize(_config__WEBPACK_IMPORTED_MODULE_17__/* .gtmConfig */ .PG);
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Material Kit Pro"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
                store: _store_storeSetup__WEBPACK_IMPORTED_MODULE_19__/* .store */ .h,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_10__.LocalizationProvider, {
                    dateAdapter: (_mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_11___default()),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_jwt_context__WEBPACK_IMPORTED_MODULE_16__/* .AuthProvider */ .Ho, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_settings_context__WEBPACK_IMPORTED_MODULE_15__/* .SettingsProvider */ .mu, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_settings_context__WEBPACK_IMPORTED_MODULE_15__/* .SettingsConsumer */ .ix, {
                                children: ({ settings  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {
                                        theme: (0,_theme__WEBPACK_IMPORTED_MODULE_20__/* .createTheme */ .j)({
                                            direction: settings.direction,
                                            responsiveFontSizes: settings.responsiveFontSizes,
                                            mode: settings.theme
                                        }),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_rtl__WEBPACK_IMPORTED_MODULE_12__/* .RTL */ .l, {
                                            direction: settings.direction,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
                                                    position: "top-center"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_settings_button__WEBPACK_IMPORTED_MODULE_13__/* .SettingsButton */ .l, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_jwt_context__WEBPACK_IMPORTED_MODULE_16__/* .AuthConsumer */ .he, {
                                                    children: (auth)=>!auth.isInitialized ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_splash_screen__WEBPACK_IMPORTED_MODULE_14__/* .SplashScreen */ .c, {}) : getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                            ...pageProps
                                                        }))
                                                })
                                            ]
                                        })
                                    })
                            })
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

});

/***/ }),

/***/ 1448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
// EXTERNAL MODULE: ./src/store/storeApi.ts + 2 modules
var storeApi = __webpack_require__(5424);
;// CONCATENATED MODULE: ./src/store/reducers/config.js

const dataRequest = {
    data: {},
    status: undefined
};
const initialState = {
    displayCreateStoreSuggestion: true,
    loginConfig: {
        email: "",
        rememberEmail: false
    },
    displayHomeTutorial: true,
    displayTaxTutorial: true,
    displayBusinessTutorial: true,
    displayStoreTutorial: true,
    displayInitialTutorial: true,
    isPushTokenSet: false,
    isAdvancedInvoicingActive: false
};
const configSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "config",
    initialState,
    reducers: {
        displayCreateStoreSuggestion (state, action) {
            state.displayCreateStoreSuggestion = action.payload;
        },
        saveLoginConfig (state, action) {
            state.loginConfig = {
                email: action.payload.email,
                rememberEmail: true
            };
        },
        removeLoginConfig (state) {
            state.loginConfig = initialState.loginConfig;
        },
        displayTaxTutorial (state, action) {
            state.displayTaxTutorial = action.payload;
        },
        displayHomeTutorial (state, action) {
            state.displayHomeTutorial = action.payload;
        },
        displayBusinessTutorial (state, action) {
            state.displayBusinessTutorial = action.payload;
        },
        displayStoreTutorial (state, action) {
            state.displayStoreTutorial = action.payload;
        },
        displayInitialTutorial (state, action) {
            state.displayInitialTutorial = action.payload;
        },
        changeIsPushTokenSet (state, action) {
            state.isPushTokenSet = action.payload;
        },
        changeIsAdvancedInvoicingActive (state, action) {
            state.isAdvancedInvoicingActive = action.payload;
        }
    }
});
const { displayCreateStoreSuggestion , saveLoginConfig , removeLoginConfig , displayTaxTutorial , displayHomeTutorial , displayBusinessTutorial , displayStoreTutorial , displayInitialTutorial , changeIsPushTokenSet , changeIsAdvancedInvoicingActive ,  } = configSlice.actions;
const configReducer = configSlice.reducer;

;// CONCATENATED MODULE: ./src/store/storeSetup.ts



const reducers = (0,toolkit_namespaceObject.combineReducers)({
    //auth: authReducer,
    config: configReducer,
    [storeApi/* baseStoreApi.reducerPath */.r.reducerPath]: storeApi/* baseStoreApi.reducer */.r.reducer
});
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: reducers,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(storeApi/* baseStoreApi.middleware */.r.middleware)
});



/***/ }),

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ createTheme)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/theme/base-theme-options.js
const baseThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
        }
    },
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'none'
                },
                sizeSmall: {
                    padding: '6px 16px'
                },
                sizeMedium: {
                    padding: '8px 20px'
                },
                sizeLarge: {
                    padding: '11px 24px'
                },
                textSizeSmall: {
                    padding: '7px 12px'
                },
                textSizeMedium: {
                    padding: '9px 16px'
                },
                textSizeLarge: {
                    padding: '12px 16px'
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '16px 24px'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                    '&:last-child': {
                        paddingBottom: '32px'
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6'
                },
                subheaderTypographyProps: {
                    variant: 'body2'
                }
            },
            styleOverrides: {
                root: {
                    padding: '32px 24px'
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box'
                },
                html: {
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                body: {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                '#__next': {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                },
                '#nprogress': {
                    pointerEvents: 'none'
                },
                '#nprogress .bar': {
                    backgroundColor: '#5048E5',
                    height: 3,
                    left: 0,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 2000
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8
                },
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 3,
                    overflow: 'hidden'
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    marginRight: '16px',
                    '&.MuiListItemIcon-root': {
                        minWidth: 'unset'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    fontWeight: 500
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                }
            }
        },
        MuiPopover: {
            defaultProps: {
                elevation: 16
            }
        },
        MuiRadio: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiSwitch: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: 'auto',
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: 'none',
                    '& + &': {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '15px 16px'
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: 'none',
                    '& .MuiTableCell-root': {
                        borderBottom: 'none',
                        fontSize: '12px',
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase'
                    },
                    '& .MuiTableCell-paddingCheckbox': {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        }
    },
    direction: 'ltr',
    shape: {
        borderRadius: 8
    },
    typography: {
        button: {
            fontWeight: 600
        },
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.57
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.75
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase'
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66
        },
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.375
        },
        h2: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.375
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.375
        },
        h4: {
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: 1.375
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.375
        },
        h6: {
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.375
        }
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
};

;// CONCATENATED MODULE: ./src/theme/dark-theme-options.js
// Colors
const neutral = {
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
};
const background = {
    default: '#0B0F19',
    paper: neutral[900]
};
const divider = '#2D3748';
const primary = {
    main: '#7582EB',
    light: '#909BEF',
    dark: '#515BA4',
    contrastText: neutral[900]
};
const secondary = {
    main: '#10B981',
    light: '#3FC79A',
    dark: '#0B815A',
    contrastText: neutral[900]
};
const success = {
    main: '#14B8A6',
    light: '#43C6B7',
    dark: '#0E8074',
    contrastText: neutral[900]
};
const info = {
    main: '#2196F3',
    light: '#64B6F7',
    dark: '#0B79D0',
    contrastText: neutral[900]
};
const warning = {
    main: '#FFB020',
    light: '#FFBF4C',
    dark: '#B27B16',
    contrastText: neutral[900]
};
const error = {
    main: '#D14343',
    light: '#DA6868',
    dark: '#922E2E',
    contrastText: neutral[900]
};
const dark_theme_options_text = {
    primary: '#EDF2F7',
    secondary: '#A0AEC0',
    disabled: 'rgba(255, 255, 255, 0.48)'
};
const darkThemeOptions = {
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[500],
                    color: '#FFFFFF'
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-filledDefault': {
                        backgroundColor: neutral[800],
                        '& .MuiChip-deleteIcon': {
                            color: neutral[500]
                        }
                    },
                    '&.MuiChip-outlinedDefault': {
                        borderColor: neutral[700],
                        '& .MuiChip-deleteIcon': {
                            color: neutral[700]
                        }
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: dark_theme_options_text.secondary
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: divider
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: 'solid',
                    borderWidth: 1
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: 'solid',
                    borderWidth: 1
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: neutral[700]
                },
                track: {
                    backgroundColor: neutral[500],
                    opacity: 1
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${divider}`
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[800],
                    '.MuiTableCell-root': {
                        color: neutral[300]
                    }
                }
            }
        }
    },
    palette: {
        action: {
            active: neutral[400],
            hover: 'rgba(255, 255, 255, 0.04)',
            selected: 'rgba(255, 255, 255, 0.08)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabled: 'rgba(255, 255, 255, 0.26)'
        },
        background,
        divider,
        error,
        info,
        mode: 'dark',
        neutral,
        primary,
        secondary,
        success,
        text: dark_theme_options_text,
        warning
    },
    shadows: [
        'none',
        '0px 1px 2px rgba(0, 0, 0, 0.24)',
        '0px 1px 2px rgba(0, 0, 0, 0.24)',
        '0px 1px 4px rgba(0, 0, 0, 0.24)',
        '0px 1px 5px rgba(0, 0, 0, 0.24)',
        '0px 1px 6px rgba(0, 0, 0, 0.24)',
        '0px 2px 6px rgba(0, 0, 0, 0.24)',
        '0px 3px 6px rgba(0, 0, 0, 0.24)',
        '0px 4px 6px rgba(0, 0, 0, 0.24)',
        '0px 5px 12px rgba(0, 0, 0, 0.24)',
        '0px 5px 14px rgba(0, 0, 0, 0.24)',
        '0px 5px 15px rgba(0, 0, 0, 0.24)',
        '0px 6px 15px rgba(0, 0, 0, 0.24)',
        '0px 7px 15px rgba(0, 0, 0, 0.24)',
        '0px 8px 15px rgba(0, 0, 0, 0.24)',
        '0px 9px 15px rgba(0, 0, 0, 0.24)',
        '0px 10px 15px rgba(0, 0, 0, 0.24)',
        '0px 12px 22px -8px rgba(0, 0, 0, 0.24)',
        '0px 13px 22px -8px rgba(0, 0, 0, 0.24)',
        '0px 14px 24px -8px rgba(0, 0, 0, 0.24)',
        '0px 20px 25px rgba(0, 0, 0, 0.24)',
        '0px 25px 50px rgba(0, 0, 0, 0.24)',
        '0px 25px 50px rgba(0, 0, 0, 0.24)',
        '0px 25px 50px rgba(0, 0, 0, 0.24)',
        '0px 25px 50px rgba(0, 0, 0, 0.24)'
    ]
};

;// CONCATENATED MODULE: ./src/theme/light-theme-options.js
// Colors
const light_theme_options_neutral = {
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
};
const light_theme_options_background = {
    default: '#F9FAFC',
    paper: '#FFFFFF'
};
const light_theme_options_divider = '#E6E8F0';
const light_theme_options_primary = {
    main: '#5048E5',
    light: '#828DF8',
    dark: '#3832A0',
    contrastText: '#FFFFFF'
};
const light_theme_options_secondary = {
    main: '#10B981',
    light: '#3FC79A',
    dark: '#0B815A',
    contrastText: '#FFFFFF'
};
const light_theme_options_success = {
    main: '#14B8A6',
    light: '#43C6B7',
    dark: '#0E8074',
    contrastText: '#FFFFFF'
};
const light_theme_options_info = {
    main: '#2196F3',
    light: '#64B6F7',
    dark: '#0B79D0',
    contrastText: '#FFFFFF'
};
const light_theme_options_warning = {
    main: '#FFB020',
    light: '#FFBF4C',
    dark: '#B27B16',
    contrastText: '#FFFFFF'
};
const light_theme_options_error = {
    main: '#D14343',
    light: '#DA6868',
    dark: '#922E2E',
    contrastText: '#FFFFFF'
};
const light_theme_options_text = {
    primary: '#121828',
    secondary: '#65748B',
    disabled: 'rgba(55, 65, 81, 0.48)'
};
const lightThemeOptions = {
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: light_theme_options_neutral[500],
                    color: '#FFFFFF'
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-filledDefault': {
                        backgroundColor: light_theme_options_neutral[200],
                        '& .MuiChip-deleteIcon': {
                            color: light_theme_options_neutral[400]
                        }
                    },
                    '&.MuiChip-outlinedDefault': {
                        '& .MuiChip-deleteIcon': {
                            color: light_theme_options_neutral[300]
                        }
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: light_theme_options_text.secondary
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: light_theme_options_divider
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderColor: light_theme_options_divider,
                    borderStyle: 'solid',
                    borderWidth: 1
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderColor: light_theme_options_divider,
                    borderStyle: 'solid',
                    borderWidth: 1
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: light_theme_options_neutral[500]
                },
                track: {
                    backgroundColor: light_theme_options_neutral[400],
                    opacity: 1
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${light_theme_options_divider}`
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: light_theme_options_neutral[100],
                    '.MuiTableCell-root': {
                        color: light_theme_options_neutral[700]
                    }
                }
            }
        }
    },
    palette: {
        action: {
            active: light_theme_options_neutral[500],
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(55, 65, 81, 0.04)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)'
        },
        background: light_theme_options_background,
        divider: light_theme_options_divider,
        error: light_theme_options_error,
        info: light_theme_options_info,
        mode: 'light',
        neutral: light_theme_options_neutral,
        primary: light_theme_options_primary,
        secondary: light_theme_options_secondary,
        success: light_theme_options_success,
        text: light_theme_options_text,
        warning: light_theme_options_warning
    },
    shadows: [
        'none',
        '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
        '0px 1px 2px rgba(100, 116, 139, 0.12)',
        '0px 1px 4px rgba(100, 116, 139, 0.12)',
        '0px 1px 5px rgba(100, 116, 139, 0.12)',
        '0px 1px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 6px rgba(100, 116, 139, 0.12)',
        '0px 3px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
        '0px 5px 12px rgba(100, 116, 139, 0.12)',
        '0px 5px 14px rgba(100, 116, 139, 0.12)',
        '0px 5px 15px rgba(100, 116, 139, 0.12)',
        '0px 6px 15px rgba(100, 116, 139, 0.12)',
        '0px 7px 15px rgba(100, 116, 139, 0.12)',
        '0px 8px 15px rgba(100, 116, 139, 0.12)',
        '0px 9px 15px rgba(100, 116, 139, 0.12)',
        '0px 10px 15px rgba(100, 116, 139, 0.12)',
        '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
        '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)'
    ]
};

;// CONCATENATED MODULE: ./src/theme/index.js




const createTheme = (config)=>{
    let theme = (0,styles_.createTheme)(baseThemeOptions, config.mode === 'dark' ? darkThemeOptions : lightThemeOptions, {
        direction: config.direction
    });
    if (config.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return theme;
};


/***/ }),

/***/ 2707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

const createEmotionCache = ()=>{
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: 'css'
    });
};


/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 6072:
/***/ ((module) => {

module.exports = require("@mui/lab");

/***/ }),

/***/ 6715:
/***/ ((module) => {

module.exports = require("@mui/lab/AdapterDateFns");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7077:
/***/ ((module) => {

module.exports = require("@mui/material/utils");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1860:
/***/ ((module) => {

module.exports = require("axios-logger");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [682,788,579,424], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();