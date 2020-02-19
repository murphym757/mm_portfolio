"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeLinkActive = exports.HomeLink = exports.HomeLinkStandard = exports.LinkDivider = exports.NavLinksHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _mediaQueries = require("./mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NavLinksHeader = _styledComponents["default"].div.withConfig({
  displayName: "Navs__NavLinksHeader",
  componentId: "sc-1qvjclo-0"
})(["text-align:center;justify-content:center;float:left;width:100%;overflow:hidden;position:relative;text-transform:uppercase;ul{clear:left;float:left;list-style:none;margin:0;padding:0;position:relative;left:50%;text-align:center;& li{display:block;float:left;list-style:none;margin:0;padding:0;position:relative;right:50%;}}"]); // Link Divider


exports.NavLinksHeader = NavLinksHeader;

var LinkDivider = _styledComponents["default"].li.withConfig({
  displayName: "Navs__LinkDivider",
  componentId: "sc-1qvjclo-1"
})(["color:", ";font-family:'Montserrat-Black';@media ", "{font-size:0.45em;}@media ", "{font-size:0.45em;}@media ", "{font-size:0.610em;}@media ", "{font-size:0.610em;}@media ", "{font-size:0.60em;}@media ", "{font-size:0.60em;}@media ", "{font-size:0.70em;}@media ", "{font-size:0.70em;}@media ", "{font-size:0.70em;}@media ", "{font-size:0.70em;}@media ", "{font-size:1em;}@media ", "{font-size:1em;}@media ", "{font-size:1.10em;}@media ", "{font-size:1.10em;}"], function (props) {
  return props.theme.primaryColorAlt;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape); // Standard Link


exports.LinkDivider = LinkDivider;

var HomeLinkStandard = _styledComponents["default"].a.withConfig({
  displayName: "Navs__HomeLinkStandard",
  componentId: "sc-1qvjclo-2"
})([":link,:active,:visited{color:", ";font-family:'Montserrat-Black';}:hover{color:", ";text-decoration:none;}@media ", "{font-size:0.6em;}@media ", "{font-size:0.6em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:1em;}@media ", "{font-size:1em;}@media ", "{font-size:1.25em;}@media ", "{font-size:1.25em;}"], function (props) {
  return props.theme.primaryColorAlt;
}, function (props) {
  return props.theme.primaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape); // Standard Link


exports.HomeLinkStandard = HomeLinkStandard;
var HomeLink = (0, _styledComponents["default"])(_reactRouterDom.Link).withConfig({
  displayName: "Navs__HomeLink",
  componentId: "sc-1qvjclo-3"
})([":link,:active,:visited{color:", ";font-family:'Montserrat-Black';}:hover{color:", ";text-decoration:none;}@media ", "{font-size:0.6em;}@media ", "{font-size:0.6em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:1em;}@media ", "{font-size:1em;}@media ", "{font-size:1.25em;}@media ", "{font-size:1.25em;}"], function (props) {
  return props.theme.primaryColorAlt;
}, function (props) {
  return props.theme.primaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape); // Current Page Link

exports.HomeLink = HomeLink;
var HomeLinkActive = (0, _styledComponents["default"])(_reactRouterDom.Link).withConfig({
  displayName: "Navs__HomeLinkActive",
  componentId: "sc-1qvjclo-4"
})(["color:", ";font-family:'Montserrat-Black';-webkit-text-stroke-width:0.031em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.031em;-moz-text-stroke-color:", ";:hover{color:", ";text-decoration:none;}@media ", "{font-size:0.6em;}@media ", "{font-size:0.6em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:0.8em;}@media ", "{font-size:1em;}@media ", "{font-size:1em;}@media ", "{font-size:1.25em;}@media ", "{color:", ";font-family:'Montserrat-Black';-webkit-text-stroke-width:0.1em;-webkit-text-stroke-color:", ";;-moz-text-stroke-width:0.1em;-moz-text-stroke-color:", ";;font-size:1.25em;}"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.white;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.HomeLinkActive = HomeLinkActive;