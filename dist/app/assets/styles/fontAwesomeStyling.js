"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _mediaQueries = require("./mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomIcon = _styledComponents["default"].i.withConfig({
  displayName: "fontAwesomeStyling__CustomIcon",
  componentId: "lrlfwd-0"
})(["color:", ";&.fa-github,&.fa-external-link-square-alt,&.fa-github-square{color:", ";}&.fa-copyright{color:", ";}&.fa-node-js{padding-left:1%;}@media ", "{&.fa-external-link-square-alt,&.fa-github-square{font-size:1em;}}@media ", "{&.fa-external-link-square-alt,&.fa-github-square{font-size:1.250em;}}@media ", "{&.fa-external-link-square-alt,&.fa-github-square{font-size:1.125em;}}@media ", "{&.fa-external-link-square-alt,&.fa-github-square{font-size:1.75em;}}@media ", "{&.fa-external-link-square-alt,&.fa-github-square{font-size:1.25em;}}@media ", "{&.fa-external-link-square-alt,&.fa-github-square{font-size:1.75em;}}@media ", "{&.fa-external-link-square-alt,&.fa-github-square{font-size:1.25em;}}@media ", "{&.fa-envelope{font-size:5rem;}&.fa-mobile{font-size:4rem;padding-bottom:3rem;}&.fa-external-link-square-alt,&.fa-github-square{font-size:3rem;}}"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.CustomIcon = CustomIcon;