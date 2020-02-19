"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Resume;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _NavLinksResume = _interopRequireDefault(require("../personalInfo/NavLinksResume.js"));

var _designStyling = require("../../assets/styles/designStyling");

var _footer = _interopRequireDefault(require("../design/footer.js"));

var _personalInfoStyling = require("../../assets/styles/personalInfoStyling");

var _fontAwesomeStyling = require("../../assets/styles/fontAwesomeStyling");

var _mainStyling = require("../../assets/styles/mainStyling");

var _quickDB = require("../../../server/quickDB");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Resume(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_mainStyling.SwingInTopDiv, {
    className: "container-fluid m-0 p-0"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_designStyling.JobTitleHeader, {
    className: "col-sm-6"
  }, "Full-Stack Developer"), _react["default"].createElement("div", {
    "class": "col-sm-6 pb-3"
  }, _react["default"].createElement(_NavLinksResume["default"], null))), _react["default"].createElement("div", {
    "class": "container-fluid pt-3"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_designStyling.HeadingTitle, {
    className: "pb-2 col-sm-6"
  }, "Resume")), _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSectionHeader, {
    className: "container-fluid pt-2 pb-1"
  }, "Work"), _react["default"].createElement("div", {
    "class": "col-sm-12 pb-3"
  }, _react["default"].createElement(_personalInfoStyling.JobName, null, _quickDB.resume.job1.jobName), _react["default"].createElement(_personalInfoStyling.JobTitle, null, _quickDB.resume.job1.jobTitleYears), _react["default"].createElement(_personalInfoStyling.JobDescription, null, _quickDB.resume.job1.jobDescription))), _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement("div", {
    "class": "d-none d-xl-block"
  }, " ", _react["default"].createElement(_personalInfoStyling.ResumeSectionHeader, {
    className: "container-fluid pb-1 pt-2"
  }, "Skills"), _react["default"].createElement(_personalInfoStyling.ResumeSkillsSection, {
    className: "container-fluid pb-3"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Version Control", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.versionControl, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Package Managers", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.packageManagers, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Development Tools", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.developmentTools, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Languages", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.languages, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Frameworks & Libraries", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.frameworksLibraries, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Design Tools", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.designTools)), _react["default"].createElement("div", {
    "class": "d-xl-none"
  }, " ", _react["default"].createElement(_personalInfoStyling.ResumeSectionHeader, {
    className: "container-fluid pb-1 pt-2"
  }, "Skills"), _react["default"].createElement(_personalInfoStyling.ResumeSkillsSection, {
    className: "container-fluid pb-3"
  }, _react["default"].createElement("div", {
    "class": "row m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Version Control", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.versionControl.slice(0, -2)), _react["default"].createElement("div", {
    "class": "row m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Package Managers", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.packageManagers.slice(0, -2)), _react["default"].createElement("div", {
    "class": "row m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Development Tools", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.developmentTools.slice(0, -2)), _react["default"].createElement("div", {
    "class": "row m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Languages", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.languages.slice(0, -2)), _react["default"].createElement("div", {
    "class": "row m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Frameworks & Libraries", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.frameworksLibrariesMobile1), _react["default"].createElement("div", {
    "class": "row m-0 p-0"
  }, _quickDB.resume.skills.frameworksLibrariesMobile2.slice(0, -2)), _react["default"].createElement("div", {
    "class": "row m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeader, null, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, null, "Design Tools", _react["default"].createElement(_personalInfoStyling.ResumeSkillsHeaderColon, {
    className: "pr-1"
  }, ":"))), _quickDB.resume.skills.designTools.slice(0, -2))))), _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_personalInfoStyling.ResumeSectionHeader, {
    className: "container-fluid pb-2 pt-2"
  }, "Education"), _react["default"].createElement("div", {
    "class": "col-sm-6 pb-3"
  }, " ", _react["default"].createElement("div", {
    "class": "row mb-2 ml-1"
  }, _react["default"].createElement("div", {
    "class": "col-12 m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeCollege, {
    className: "mb-0"
  }, _quickDB.resume.education.college1.collegeName)), _react["default"].createElement("div", {
    "class": "col-12 m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeCollegeGrad, null, _quickDB.resume.education.college1.collegeLocationGradYear))), _react["default"].createElement("div", {
    "class": "row mb-2 ml-1"
  }, _react["default"].createElement("div", {
    "class": "col-12 m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeCollege, {
    className: "mb-0"
  }, _quickDB.resume.education.college1.collegeDegree)), _react["default"].createElement("div", {
    "class": "col-12 m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeCollegeGPA, null, _quickDB.resume.education.college1.collegeGPA)))), _react["default"].createElement("div", {
    "class": "col-sm-6"
  }, " ", _react["default"].createElement("div", {
    "class": "row mb-2 ml-1"
  }, _react["default"].createElement("div", {
    "class": "col-12 m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeCollege, {
    className: "mb-0"
  }, _quickDB.resume.education.college2.collegeName)), _react["default"].createElement("div", {
    "class": "col-12 m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeCollegeGrad, null, _quickDB.resume.education.college2.collegeLocationGradYear))), _react["default"].createElement("div", {
    "class": "row mb-2 ml-1"
  }, _react["default"].createElement("div", {
    "class": "col-12 m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeCollege, {
    className: "mb-0"
  }, _quickDB.resume.education.college2.collegeDegree)), _react["default"].createElement("div", {
    "class": "col-12 m-0 p-0"
  }, _react["default"].createElement(_personalInfoStyling.ResumeCollegeGPA, null, _quickDB.resume.education.college2.collegeGPA))))))), _react["default"].createElement(_footer["default"], null));
}