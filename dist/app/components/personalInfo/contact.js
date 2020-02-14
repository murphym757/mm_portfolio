"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Contact;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _personalInfoStyling = require("../../assets/styles/personalInfoStyling");

var _fontAwesomeStyling = require("../../assets/styles/fontAwesomeStyling");

var _quickDB = require("../../../server/quickDB");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Contact(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    "class": "container-fluid"
  }, _react["default"].createElement(_personalInfoStyling.ContactHeading, {
    className: "pb-4"
  }, "Please feel free to reach me at: "), _react["default"].createElement(_personalInfoStyling.ContactCardRow, {
    className: "row pb-4"
  }, _react["default"].createElement("div", {
    "class": "col-6"
  }, _react["default"].createElement(_personalInfoStyling.ContactCard, {
    className: "card-transparent pb-3"
  }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
    className: "fa fa-envelope fa-4x"
  })), _react["default"].createElement("h6", null, _react["default"].createElement(_personalInfoStyling.EmailLink, {
    href: _quickDB.contactInfo.emailLinkFormat
  }, _quickDB.contactInfo.emailLink))), _react["default"].createElement("div", {
    "class": "col-6"
  }, _react["default"].createElement(_personalInfoStyling.ContactCard, {
    className: "card-transparent pb-3"
  }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
    className: "fa fa-mobile fa-3x pt-2 pb-2"
  })), _react["default"].createElement("h6", null, _react["default"].createElement(_personalInfoStyling.PhoneLink, {
    href: _quickDB.contactInfo.phoneLinkFormat
  }, _quickDB.contactInfo.phoneLink))))));
}