"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavLinksResume;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Navs = require("../../assets/styles/Navs");

var _fontAwesomeStyling = require("../../assets/styles/fontAwesomeStyling");

var _quickDB = require("../../../server/quickDB");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function NavLinksResume(props) {
  return _react["default"].createElement(_Navs.NavLinksHeader, null, _react["default"].createElement("h6", null, _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement(_Navs.HomeLink, {
    to: "/"
  }, "About")), _react["default"].createElement(_Navs.LinkDivider, {
    className: "pl-2 pr-2"
  }, "|"), _react["default"].createElement("li", null, _react["default"].createElement(_Navs.HomeLinkActive, {
    to: "/resume"
  }, "Resume")), _react["default"].createElement(_Navs.LinkDivider, {
    className: "pl-2 pr-2"
  }, "|"), _react["default"].createElement("li", null, _react["default"].createElement(_Navs.HomeLink, {
    to: "/projects"
  }, "Projects")), _react["default"].createElement(_Navs.LinkDivider, {
    className: "pl-2 pr-2"
  }, "|"), _react["default"].createElement("li", null, _react["default"].createElement(_Navs.HomeLinkStandard, {
    href: _quickDB.githubHome,
    target: "_blank"
  }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
    className: "fab fa-github"
  }), " Github")))));
}