"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingTitleRole = exports.HeadingTitleProject = exports.HeadingTitle = exports.JobTitleHeader = exports.FooterContainer = exports.FooterStyling = exports.NameHeader = exports.NameHeaderLink = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _mediaQueries = require("./mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Header.js
var NameHeaderLink = (0, _styledComponents["default"])(_reactRouterDom.Link).withConfig({
  displayName: "designStyling__NameHeaderLink",
  componentId: "sc-1qlcv4j-0"
})(["&:hover{text-decoration:none;}"]);
exports.NameHeaderLink = NameHeaderLink;

var NameHeader = _styledComponents["default"].h1.withConfig({
  displayName: "designStyling__NameHeader",
  componentId: "sc-1qlcv4j-1"
})(["font-family:'Montserrat-Black';color:", ";text-align:center;justify-content:center;@media ", "{font-size:1.375em;}@media ", "{font-size:1.375em;}@media ", "{font-size:1.75em;}@media ", "{font-size:1.875em;}@media ", "{font-size:1.5em;}@media ", "{font-size:1.5em;}@media ", "{font-size:1.5em;}@media ", "{font-size:1.5em;}@media ", "{font-size:2em;}@media ", "{font-size:2em;}@media ", "{font-size:2em;}@media ", "{font-size:2em;}@media ", "{font-size:2em;}@media ", "{font-size:3.5em;}"], function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape); // Footer.js


exports.NameHeader = NameHeader;

var FooterStyling = _styledComponents["default"].h6.withConfig({
  displayName: "designStyling__FooterStyling",
  componentId: "sc-1qlcv4j-2"
})(["color:", ";font-family:'Montserrat-Black';text-align:center;justify-content:center;@media ", "{font-size:0.5em;}@media ", "{font-size:0.5em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{font-size:1.875em;}"], function (props) {
  return props.theme.primaryColorAlt;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.FooterStyling = FooterStyling;

var FooterContainer = _styledComponents["default"].div.withConfig({
  displayName: "designStyling__FooterContainer",
  componentId: "sc-1qlcv4j-3"
})(["@media ", "{padding-top:14rem;}"], _mediaQueries.souseMediaQueries.desktop.landscape); // navigation.js


exports.FooterContainer = FooterContainer;

var JobTitleHeader = _styledComponents["default"].h3.withConfig({
  displayName: "designStyling__JobTitleHeader",
  componentId: "sc-1qlcv4j-4"
})(["font-family:'Montserrat-Light';color:", ";text-align:center;justify-content:center;@media ", "{font-size:1.125em;}@media ", "{font-size:1.125em;}@media ", "{font-size:1.25em;}@media ", "{font-size:1.25em;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{font-size:3em;padding-bottom:1rem;}"], function (props) {
  return props.theme.primaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.JobTitleHeader = JobTitleHeader;

var HeadingTitle = _styledComponents["default"].h3.withConfig({
  displayName: "designStyling__HeadingTitle",
  componentId: "sc-1qlcv4j-5"
})(["font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.031em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.031em;-moz-text-stroke-color:", ";text-align:center;justify-content:center;@media ", "{}@media ", "{}@media ", "{font-size:2em;}@media ", "{font-size:2em;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{font-size:2.5em;}@media ", "{font-size:2.5em;}@media ", "{font-size:3em;}@media ", "{font-size:3em;}@media ", "{}@media ", "{font-size:3.5em;font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.03em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.03em;-moz-text-stroke-color:", ";}"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});

exports.HeadingTitle = HeadingTitle;

var HeadingTitleProject = _styledComponents["default"].h3.withConfig({
  displayName: "designStyling__HeadingTitleProject",
  componentId: "sc-1qlcv4j-6"
})(["float:left;font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.031em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.031em;-moz-text-stroke-color:", ";@media ", "{font-size:1em;}@media ", "{}@media ", "{font-size:1.125em;}@media ", "{font-size:1.125em;}@media ", "{font-size:1.25em;}@media ", "{font-size:1.25em;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{font-size:3.25em;font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.03em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.03em;-moz-text-stroke-color:", ";}"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});

exports.HeadingTitleProject = HeadingTitleProject;

var HeadingTitleRole = _styledComponents["default"].h6.withConfig({
  displayName: "designStyling__HeadingTitleRole",
  componentId: "sc-1qlcv4j-7"
})(["float:left;color:", ";@media ", "{font-size:0.75em;}@media ", "{}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.75em;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{font-size:1.25em;}"], function (props) {
  return props.theme.primaryFontColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.HeadingTitleRole = HeadingTitleRole;