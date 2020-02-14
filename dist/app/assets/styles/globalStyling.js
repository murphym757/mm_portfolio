"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

var _MontserratBold = _interopRequireDefault(require("../fonts/Montserrat/Montserrat-Bold.otf"));

var _MontserratLight = _interopRequireDefault(require("../fonts/Montserrat/Montserrat-Light.otf"));

var _MontserratThin = _interopRequireDefault(require("../fonts/Montserrat/Montserrat-Thin.otf"));

var _MontserratRegular = _interopRequireDefault(require("../fonts/Montserrat/Montserrat-Regular.otf"));

var _MontserratBlack = _interopRequireDefault(require("../fonts/Montserrat/Montserrat-Black.otf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        @font-face {\n            font-family: 'Montserrat-Bold';\n            src: url(", ");\n            src: url(", ") format('opentype');\n        }\n\n        @font-face {\n            font-family: 'Montserrat-Light';\n            src: url(", ");\n            src: url(", ") format('opentype');\n        }\n        @font-face {\n            font-family: 'Montserrat-Thin';\n            src: url(", ");\n            src: url(", ") format('opentype');\n        }\n        @font-face {\n            font-family: 'Montserrat-Regular';\n            src: url(", ");\n            src: url(", ") format('opentype');\n        }\n        @font-face {\n            font-family: 'Montserrat-Black';\n            src: url(", ");\n            src: url(", ") format('opentype');\n        }\n\n    body {\n        display: block;\n        background-color: ", ";\n        background-image: url('https://s3.amazonaws.com/mmportfolioreact/Memphis-Grape-Design.jpg');\n        background-position: center;\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover; \n        color: ", ";\n    } \n    img {\n        max-width: 100%;\n        height: auto;\n    }\n\n    a {\n        color: ", ";\n        text-decoration: none;\n        &:focus {\n            color: ", ";\n        }   \n        &:link {\n            color: ", ";\n        }\n        &:visited {\n            color: ", ";\n        }\n        &:hover {\n            color: ", ";\n        }\n        &:active {\n            color: ", ";\n        }\n    }\n    \n    nav ul a {\n        &:link {\n            color: ", ";\n        }\n        &:visited {\n            color: ", ";\n        }\n        &:hover {\n            color: ", ";\n        }\n        &:active {\n            color: ", ";\n        }\n    }\n\n    p {\n        font-family: 'Montserrat-Light';\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _MontserratBold["default"], _MontserratBold["default"], _MontserratLight["default"], _MontserratLight["default"], _MontserratThin["default"], _MontserratThin["default"], _MontserratRegular["default"], _MontserratRegular["default"], _MontserratBlack["default"], _MontserratBlack["default"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.GlobalStyle = GlobalStyle;