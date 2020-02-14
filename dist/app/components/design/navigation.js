"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navigation;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _header = _interopRequireDefault(require("./header.js"));

var _contact = _interopRequireDefault(require("../personalInfo/contact.js"));

var _aboutMe = _interopRequireDefault(require("../personalInfo/aboutMe.js"));

var _navLinksAboutMe = _interopRequireDefault(require("./navLinksAboutMe"));

var _footer = _interopRequireDefault(require("./footer"));

var _designStyling = require("../../assets/styles/designStyling");

var _projectsStyling = require("../../assets/styles/projectsStyling");

var _mainStyling = require("../../assets/styles/mainStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Navigation(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_mainStyling.SwingInTopDiv, {
    className: "container-fluid m-0 p-0"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_designStyling.JobTitleHeader, {
    className: "col-sm-6"
  }, "Full-Stack Developer"), _react["default"].createElement("div", {
    "class": "col-sm-6 pb-3"
  }, _react["default"].createElement(_navLinksAboutMe["default"], null))), _react["default"].createElement("div", {
    "class": "container-fluid pt-3"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_designStyling.HeadingTitle, {
    className: "pb-2 col-sm-6"
  }, "About Me")), _react["default"].createElement("div", {
    "class": "d-none d-xl-block container-fluid pt-2"
  }, " ", _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement("div", {
    "class": "col-12 pb-5"
  }, _react["default"].createElement(_aboutMe["default"], null)), _react["default"].createElement(_projectsStyling.ContactSection, {
    className: "col-12"
  }, _react["default"].createElement(_contact["default"], null)))), _react["default"].createElement("div", {
    "class": "d-xl-none container-fluid"
  }, " ", _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement("div", {
    "class": "col-sm-6 pb-5"
  }, _react["default"].createElement(_aboutMe["default"], null)), _react["default"].createElement(_projectsStyling.ContactSection, {
    className: "col-sm-6"
  }, _react["default"].createElement(_contact["default"], null)))), _react["default"].createElement(_footer["default"], null))));
}