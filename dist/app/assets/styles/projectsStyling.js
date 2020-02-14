"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardBody = exports.CardHeader = exports.BtnLink = exports.ProjectDescription = exports.ProjectPageLink = exports.LinkTo = exports.ContactSection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _mediaQueries = require("./mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// projects.js
var ContactSection = _styledComponents["default"].div.withConfig({
  displayName: "projectsStyling__ContactSection",
  componentId: "sc-11u1bqo-0"
})(["text-align:center;justify-content:center;"]);

exports.ContactSection = ContactSection;

var LinkTo = _styledComponents["default"].h3.withConfig({
  displayName: "projectsStyling__LinkTo",
  componentId: "sc-11u1bqo-1"
})(["font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.031em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.031em;-moz-text-stroke-color:", ";@media ", "{font-size:1em;}@media ", "{font-size:1.125em;}@media ", "{font-size:1.125em;}@media ", "{font-size:1.5em;}@media ", "{}@media ", "{font-size:1.5em;}@media ", "{font-size:1.250em;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{font-size:3.25em;}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.primaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.LinkTo = LinkTo;

var ProjectPageLink = _styledComponents["default"].a.withConfig({
  displayName: "projectsStyling__ProjectPageLink",
  componentId: "sc-11u1bqo-2"
})(["&:link,&:active{color:", ";}&:visited,&:hover{color:", ";text-decoration:none;}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColor;
});

exports.ProjectPageLink = ProjectPageLink;

var ProjectDescription = _styledComponents["default"].p.withConfig({
  displayName: "projectsStyling__ProjectDescription",
  componentId: "sc-11u1bqo-3"
})(["float:right;&::first-letter{font-size:150%;}@media ", "{font-size:0.625em}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{font-size:1.25em;}"], _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.ProjectDescription = ProjectDescription;

var BtnLink = _styledComponents["default"].button.withConfig({
  displayName: "projectsStyling__BtnLink",
  componentId: "sc-11u1bqo-4"
})(["font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.031em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.031em;-moz-text-stroke-color:", ";&:hover,&:active{font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.031em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.031em;-moz-text-stroke-color:", ";text-decoration:none;};&:visited,&:hover{text-decoration:none;};"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.primaryColor;
});

exports.BtnLink = BtnLink;

var CardHeader = _styledComponents["default"].div.withConfig({
  displayName: "projectsStyling__CardHeader",
  componentId: "sc-11u1bqo-5"
})(["background-color:", ";"], function (props) {
  return props.theme.white;
});

exports.CardHeader = CardHeader;

var CardBody = _styledComponents["default"].div.withConfig({
  displayName: "projectsStyling__CardBody",
  componentId: "sc-11u1bqo-6"
})(["background-color:", ";"], function (props) {
  return props.theme.white;
});

exports.CardBody = CardBody;