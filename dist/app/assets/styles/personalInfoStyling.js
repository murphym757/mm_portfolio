"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResumeCollegeGrad = exports.ResumeCollegeGPA = exports.ResumeCollege = exports.ResumeSkillsHeaderColon = exports.ResumeSkillsHeader = exports.ResumeSkillsSection = exports.JobDescription = exports.JobTitle = exports.JobName = exports.ResumeSectionHeader = exports.ContactHeading = exports.ContactCardRow = exports.ContactCard = exports.PhoneLink = exports.EmailLink = exports.AboutMeSection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _mediaQueries = require("./mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// aboutMe.js
var AboutMeSection = _styledComponents["default"].p.withConfig({
  displayName: "personalInfoStyling__AboutMeSection",
  componentId: "jop6pq-0"
})(["text-align:center;justify-content:center;&::first-letter{font-size:150%;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:1.25em;}"], _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.desktop.landscape); // contact.js


exports.AboutMeSection = AboutMeSection;

var EmailLink = _styledComponents["default"].a.withConfig({
  displayName: "personalInfoStyling__EmailLink",
  componentId: "jop6pq-1"
})(["&:link,&:active{color:", ";}&:visited,&:hover{color:", ";text-decoration:none;}@media ", "{font-size:0.438em;}@media ", "{}@media ", "{font-size:0.625em}@media ", "{font-size:0.5em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.6em;}@media ", "{font-size:1.125em;}@media ", "{font-size:1.125em;}@media ", "{font-size:0.88em;}@media ", "{font-size:1.25em;}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.EmailLink = EmailLink;

var PhoneLink = _styledComponents["default"].a.withConfig({
  displayName: "personalInfoStyling__PhoneLink",
  componentId: "jop6pq-2"
})(["&:link,&:active{color:", ";}&:visited,&:hover{color:", ";text-decoration:none;}@media ", "{font-size:0.438em;}@media ", "{}@media ", "{ont-size:0.625em}@media ", "{font-size:0.5em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.75em;}@media ", "{font-size:0.6em;}@media ", "{font-size:1.125em;}@media ", "{font-size:1.125em;}@media ", "{font-size:0.88em;}@media ", "{font-size:1.25em;}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.PhoneLink = PhoneLink;

var ContactCard = _styledComponents["default"].div.withConfig({
  displayName: "personalInfoStyling__ContactCard",
  componentId: "jop6pq-3"
})(["border:none;"]);

exports.ContactCard = ContactCard;

var ContactCardRow = _styledComponents["default"].div.withConfig({
  displayName: "personalInfoStyling__ContactCardRow",
  componentId: "jop6pq-4"
})(["@media ", "{padding-top:1rem;}"], _mediaQueries.souseMediaQueries.desktop.landscape);

exports.ContactCardRow = ContactCardRow;

var ContactHeading = _styledComponents["default"].h5.withConfig({
  displayName: "personalInfoStyling__ContactHeading",
  componentId: "jop6pq-5"
})(["font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.031em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.031em;-moz-text-stroke-color:", ";@media ", "{font-size:2em;font-family:'Montserrat-Black';color:", ";-webkit-text-stroke-width:0.03em;-webkit-text-stroke-color:", ";-moz-text-stroke-width:0.03em;-moz-text-stroke-color:", ";}"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.desktop.landscape, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}); // resume.js


exports.ContactHeading = ContactHeading;

var ResumeSectionHeader = _styledComponents["default"].h3.withConfig({
  displayName: "personalInfoStyling__ResumeSectionHeader",
  componentId: "jop6pq-6"
})(["text-align:center;justify-content:center;text-transform:uppercase;font-family:'Montserrat-Bold';color:", ";@media ", "{font-size:1.250em;}@media ", "{font-size:1.125em;}@media ", "{font-size:1.5em;}@media ", "{font-size:1.5em;}@media ", "{font-size:1.5em;}@media ", "{font-size:2.5em;padding-top:1rem;padding-bottom:3rem;}"], function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.ResumeSectionHeader = ResumeSectionHeader;

var JobName = _styledComponents["default"].h4.withConfig({
  displayName: "personalInfoStyling__JobName",
  componentId: "jop6pq-7"
})(["text-transform:uppercase;font-family:'Montserrat-Bold';color:", ";@media ", "{font-size:0.750em;}@media ", "{font-size:0.750em;}@media ", "{font-size:1em;}@media ", "{font-size:1.250em;}@media ", "{font-size:1.250em;}@media ", "{font-size:2em;}"], function (props) {
  return props.theme.primaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.JobName = JobName;

var JobTitle = _styledComponents["default"].h5.withConfig({
  displayName: "personalInfoStyling__JobTitle",
  componentId: "jop6pq-8"
})(["font-family:'Montserrat-Light';font-weight:700;color:", ";@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.875em;}@media ", "{font-size:1em;}@media ", "{font-size:1em;}@media ", "{font-size:1.3em;}"], function (props) {
  return props.theme.primaryColorAlt;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.JobTitle = JobTitle;

var JobDescription = _styledComponents["default"].p.withConfig({
  displayName: "personalInfoStyling__JobDescription",
  componentId: "jop6pq-9"
})(["font-family:'Montserrat-Light';&::first-letter{font-size:150%;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:1.25em;}"], _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.JobDescription = JobDescription;

var ResumeSkillsSection = _styledComponents["default"].p.withConfig({
  displayName: "personalInfoStyling__ResumeSkillsSection",
  componentId: "jop6pq-10"
})(["@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:1.25em;}"], _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.ResumeSkillsSection = ResumeSkillsSection;

var ResumeSkillsHeader = _styledComponents["default"].span.withConfig({
  displayName: "personalInfoStyling__ResumeSkillsHeader",
  componentId: "jop6pq-11"
})(["color:", ";font-family:'Montserrat-Bold';"], function (props) {
  return props.theme.primaryColor;
});

exports.ResumeSkillsHeader = ResumeSkillsHeader;

var ResumeSkillsHeaderColon = _styledComponents["default"].span.withConfig({
  displayName: "personalInfoStyling__ResumeSkillsHeaderColon",
  componentId: "jop6pq-12"
})(["color:", ";font-family:'Montserrat-Bold';"], function (props) {
  return props.theme.secondaryColor;
});

exports.ResumeSkillsHeaderColon = ResumeSkillsHeaderColon;

var ResumeCollege = _styledComponents["default"].h6.withConfig({
  displayName: "personalInfoStyling__ResumeCollege",
  componentId: "jop6pq-13"
})(["text-transform:uppercase;font-family:'Montserrat-Bold';color:", ";@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.750em;}@media ", "{font-size:0.750em;}@media ", "{font-size:0.750em;}@media ", "{font-size:1.25em;}"], function (props) {
  return props.theme.primaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.ResumeCollege = ResumeCollege;

var ResumeCollegeGPA = _styledComponents["default"].h6.withConfig({
  displayName: "personalInfoStyling__ResumeCollegeGPA",
  componentId: "jop6pq-14"
})(["text-transform:uppercase;font-family:'Montserrat-Bold';color:", ";@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.750em;}@media ", "{font-size:0.750em;}@media ", "{font-size:0.750em;}@media ", "{font-size:1.25em;}"], function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.ResumeCollegeGPA = ResumeCollegeGPA;

var ResumeCollegeGrad = _styledComponents["default"].span.withConfig({
  displayName: "personalInfoStyling__ResumeCollegeGrad",
  componentId: "jop6pq-15"
})(["text-transform:uppercase;font-family:'Montserrat-Bold';color:", ";@media ", "{font-size:0.625em;}@media ", "{font-size:0.625em;}@media ", "{font-size:0.750em;}@media ", "{font-size:0.750em;}@media ", "{font-size:0.750em;}@media ", "{font-size:1.25em;}"], function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.ResumeCollegeGrad = ResumeCollegeGrad;