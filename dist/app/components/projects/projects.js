"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Projects;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _navLinksProjects = _interopRequireDefault(require("../projects/navLinksProjects.js"));

var _projectName = _interopRequireDefault(require("./projectName.js"));

var _footer = _interopRequireDefault(require("../design/footer.js"));

var _quickDB = require("../../../server/quickDB");

var _designStyling = require("../../assets/styles/designStyling");

var _projectsStyling = require("../../assets/styles/projectsStyling");

var _fontAwesomeStyling = require("../../assets/styles/fontAwesomeStyling");

var _mainStyling = require("../../assets/styles/mainStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Projects(props) {
  var _useState = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading13"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse13",
      "aria-expanded": "false",
      "aria-controls": "collapse13"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "Souse ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fab fa-react fa-react-ccc"
    }))))), _react["default"].createElement("div", {
      id: "collapse13",
      "class": "collapse",
      "aria-labelledby": "heading13",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.souse.projectName,
      projectRoleProp: _quickDB.souse.projectRole,
      projectDescriptionProp: _quickDB.souse.projectDescription,
      projectUtilitiesProp: _quickDB.souse.projectUtilities,
      projectSiteProp: _quickDB.souse.projectSite,
      projectGithubProp: _quickDB.souse.projectGithub,
      projectImage1Prop: _quickDB.souse.projectImage1,
      projectImage2Prop: _quickDB.souse.projectImage2,
      projectImage3Prop: _quickDB.souse.projectImage3,
      projectImage4Prop: _quickDB.souse.projectImage4,
      projectCarouselProp: "souseCarousel"
    }))))
  }),
      _useState2 = _slicedToArray(_useState, 2),
      card13 = _useState2[0],
      setStateCard13 = _useState2[1];

  var _useState3 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading12"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse12",
      "aria-expanded": "false",
      "aria-controls": "collapse12"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "Sega Paradise 2 ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fab fa-react fa-react-ccc"
    }))))), _react["default"].createElement("div", {
      id: "collapse12",
      "class": "collapse",
      "aria-labelledby": "heading12",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.segaParadise2.projectName,
      projectRoleProp: _quickDB.segaParadise2.projectRole,
      projectDescriptionProp: _quickDB.segaParadise2.projectDescription,
      projectUtilitiesProp: _quickDB.segaParadise2.projectUtilities,
      projectSiteProp: _quickDB.segaParadise2.projectSite,
      projectGithubProp: _quickDB.segaParadise2.projectGithub,
      projectImage1Prop: _quickDB.segaParadise2.projectImage1,
      projectImage2Prop: _quickDB.segaParadise2.projectImage2,
      projectImage3Prop: _quickDB.segaParadise2.projectImage3,
      projectImage4Prop: _quickDB.segaParadise2.projectImage4,
      projectCarouselProp: "segaParadise2Carousel"
    }))))
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      card12 = _useState4[0],
      setStateCard12 = _useState4[1];

  var _useState5 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading11"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse11",
      "aria-expanded": "false",
      "aria-controls": "collapse11"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "PopArtWeather ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fab fa-react fa-react-ccc"
    }))))), _react["default"].createElement("div", {
      id: "collapse11",
      "class": "collapse",
      "aria-labelledby": "heading11",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.popArtWeather.projectName,
      projectRoleProp: _quickDB.popArtWeather.projectRole,
      projectDescriptionProp: _quickDB.popArtWeather.projectDescription,
      projectUtilitiesProp: _quickDB.popArtWeather.projectUtilities,
      projectSiteProp: _quickDB.popArtWeather.projectSite,
      projectGithubProp: _quickDB.popArtWeather.projectGithub,
      projectImage1Prop: _quickDB.popArtWeather.projectImage1,
      projectImage2Prop: _quickDB.popArtWeather.projectImage2,
      projectImage3Prop: _quickDB.popArtWeather.projectImage3,
      projectImage4Prop: _quickDB.popArtWeather.projectImage4,
      projectCarouselProp: "popArtWeatherCarousel"
    }))))
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      card11 = _useState6[0],
      setStateCard11 = _useState6[1];

  var _useState7 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading10"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse10",
      "aria-expanded": "false",
      "aria-controls": "collapse10"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "Portfolio (React) ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fab fa-react fa-react-ccc"
    }))))), _react["default"].createElement("div", {
      id: "collapse10",
      "class": "collapse",
      "aria-labelledby": "heading10",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.newMMPortfolio.projectName,
      projectRoleProp: _quickDB.newMMPortfolio.projectRole,
      projectDescriptionProp: _quickDB.newMMPortfolio.projectDescription,
      projectUtilitiesProp: _quickDB.newMMPortfolio.projectUtilities,
      projectSiteProp: _quickDB.newMMPortfolio.projectSite,
      projectGithubProp: _quickDB.newMMPortfolio.projectGithub,
      projectImage1Prop: _quickDB.newMMPortfolio.projectImage1,
      projectImage2Prop: _quickDB.newMMPortfolio.projectImage2,
      projectImage3Prop: _quickDB.newMMPortfolio.projectImage3,
      projectImage4Prop: _quickDB.newMMPortfolio.projectImage4,
      projectCarouselProp: "newMMPortfolioCarousel"
    }))))
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      card10 = _useState8[0],
      setStateCard10 = _useState8[1];

  var _useState9 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading9"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse9",
      "aria-expanded": "false",
      "aria-controls": "collapse9"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "CryptoCoinCount ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fab fa-react fa-react-ccc"
    }))))), _react["default"].createElement("div", {
      id: "collapse9",
      "class": "collapse",
      "aria-labelledby": "heading9",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.cryptocoincount.projectName,
      projectRoleProp: _quickDB.cryptocoincount.projectRole,
      projectDescriptionProp: _quickDB.cryptocoincount.projectDescription,
      projectUtilitiesProp: _quickDB.cryptocoincount.projectUtilities,
      projectSiteProp: _quickDB.cryptocoincount.projectSite,
      projectGithubProp: _quickDB.cryptocoincount.projectGithub,
      projectImage1Prop: _quickDB.cryptocoincount.projectImage1,
      projectImage2Prop: _quickDB.cryptocoincount.projectImage2,
      projectImage3Prop: _quickDB.cryptocoincount.projectImage3,
      projectImage4Prop: _quickDB.cryptocoincount.projectImage4,
      projectCarouselProp: "cryptocoincountCarousel"
    }))))
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      card9 = _useState10[0],
      setStateCard9 = _useState10[1];

  var _useState11 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading8"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse8",
      "aria-expanded": "false",
      "aria-controls": "collapse8"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "Bayside Vaporwave ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fab fa-react fa-react-bvv"
    }))))), _react["default"].createElement("div", {
      id: "collapse8",
      "class": "collapse",
      "aria-labelledby": "heading8",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.baysideVaporwave.projectName,
      projectRoleProp: _quickDB.baysideVaporwave.projectRole,
      projectDescriptionProp: _quickDB.baysideVaporwave.projectDescription,
      projectUtilitiesProp: _quickDB.baysideVaporwave.projectUtilities,
      projectSiteProp: _quickDB.baysideVaporwave.projectSite,
      projectGithubProp: _quickDB.baysideVaporwave.projectGithub,
      projectImage1Prop: _quickDB.baysideVaporwave.projectImage1,
      projectImage2Prop: _quickDB.baysideVaporwave.projectImage2,
      projectImage3Prop: _quickDB.baysideVaporwave.projectImage3,
      projectImage4Prop: _quickDB.baysideVaporwave.projectImage4,
      projectCarouselProp: "baysideVaporwaveCarousel"
    }))))
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      card8 = _useState12[0],
      setStateCard8 = _useState12[1];

  var _useState13 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading7"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse7",
      "aria-expanded": "false",
      "aria-controls": "collapse7"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "BV Blog ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fab fa-node-js fa-node-js-bvb"
    }))))), _react["default"].createElement("div", {
      id: "collapse7",
      "class": "collapse",
      "aria-labelledby": "heading7",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.bvBlog.projectName,
      projectRoleProp: _quickDB.bvBlog.projectRole,
      projectDescriptionProp: _quickDB.bvBlog.projectDescription,
      projectUtilitiesProp: _quickDB.bvBlog.projectUtilities,
      projectSiteProp: _quickDB.bvBlog.projectSite,
      projectGithubProp: _quickDB.bvBlog.projectGithub,
      projectImage1Prop: _quickDB.bvBlog.projectImage1,
      projectImage2Prop: _quickDB.bvBlog.projectImage2,
      projectImage3Prop: _quickDB.bvBlog.projectImage3,
      projectImage4Prop: _quickDB.bvBlog.projectImage4,
      projectCarouselProp: "bvBlogCarousel"
    }))))
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      card7 = _useState14[0],
      setStateCard7 = _useState14[1];

  var _useState15 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading6"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse6",
      "aria-expanded": "false",
      "aria-controls": "collapse6"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "Crossfader Blog ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "far fa-gem fa-gem-cf"
    }))))), _react["default"].createElement("div", {
      id: "collapse6",
      "class": "collapse",
      "aria-labelledby": "heading6",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.cfBlog.projectName,
      projectRoleProp: _quickDB.cfBlog.projectRole,
      projectDescriptionProp: _quickDB.cfBlog.projectDescription,
      projectUtilitiesProp: _quickDB.cfBlog.projectUtilities,
      projectSiteProp: _quickDB.cfBlog.projectSite,
      projectGithubProp: _quickDB.cfBlog.projectGithub,
      projectImage1Prop: _quickDB.cfBlog.projectImage1,
      projectImage2Prop: _quickDB.cfBlog.projectImage2,
      projectImage3Prop: _quickDB.cfBlog.projectImage3,
      projectImage4Prop: _quickDB.cfBlog.projectImage4,
      projectCarouselProp: "cfBlogCarousel"
    }))))
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      card6 = _useState16[0],
      setStateCard6 = _useState16[1];

  var _useState17 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading5"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse5",
      "aria-expanded": "false",
      "aria-controls": "collapse5"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "BREAKOUT! JS Game ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fab fa-node-js fa-node-js-bo"
    }))))), _react["default"].createElement("div", {
      id: "collapse5",
      "class": "collapse",
      "aria-labelledby": "heading5",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.breakout.projectName,
      projectRoleProp: _quickDB.breakout.projectRole,
      projectDescriptionProp: _quickDB.breakout.projectDescription,
      projectUtilitiesProp: _quickDB.breakout.projectUtilities,
      projectSiteProp: _quickDB.breakout.projectSite,
      projectGithubProp: _quickDB.breakout.projectGithub,
      projectImage1Prop: _quickDB.breakout.projectImage1,
      projectImage2Prop: _quickDB.breakout.projectImage2,
      projectImage3Prop: _quickDB.breakout.projectImage3,
      projectImage4Prop: _quickDB.breakout.projectImage4,
      projectCarouselProp: "breakoutCarousel"
    }))))
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      card5 = _useState18[0],
      setStateCard5 = _useState18[1];

  var _useState19 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading4"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse4",
      "aria-expanded": "false",
      "aria-controls": "collapse4"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "BV Theme Generator ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "far fa-gem fa-gem-bvt"
    }))))), _react["default"].createElement("div", {
      id: "collapse4",
      "class": "collapse",
      "aria-labelledby": "heading4",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.bvThemeGenerator.projectName,
      projectRoleProp: _quickDB.bvThemeGenerator.projectRole,
      projectDescriptionProp: _quickDB.bvThemeGenerator.projectDescription,
      projectUtilitiesProp: _quickDB.bvThemeGenerator.projectUtilities,
      projectSiteProp: _quickDB.bvThemeGenerator.projectSite,
      projectGithubProp: _quickDB.bvThemeGenerator.projectGithub,
      projectImage1Prop: _quickDB.bvThemeGenerator.projectImage1,
      projectImage2Prop: _quickDB.bvThemeGenerator.projectImage2,
      projectImage3Prop: _quickDB.bvThemeGenerator.projectImage3,
      projectImage4Prop: _quickDB.bvThemeGenerator.projectImage4,
      projectCarouselProp: "bvThemeGeneratorCarousel"
    }))))
  }),
      _useState20 = _slicedToArray(_useState19, 2),
      card4 = _useState20[0],
      setStateCard4 = _useState20[1];

  var _useState21 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading3"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse3",
      "aria-expanded": "false",
      "aria-controls": "collapse3"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "Bayside Vinyl ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "far fa-gem fa-gem-bv"
    }))))), _react["default"].createElement("div", {
      id: "collapse3",
      "class": "collapse",
      "aria-labelledby": "heading3",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.bvVinyl.projectName,
      projectRoleProp: _quickDB.bvVinyl.projectRole,
      projectDescriptionProp: _quickDB.bvVinyl.projectDescription,
      projectUtilitiesProp: _quickDB.bvVinyl.projectUtilities,
      projectSiteProp: _quickDB.bvVinyl.projectSite,
      projectGithubProp: _quickDB.bvVinyl.projectGithub,
      projectImage1Prop: _quickDB.bvVinyl.projectImage1,
      projectImage2Prop: _quickDB.bvVinyl.projectImage2,
      projectImage3Prop: _quickDB.bvVinyl.projectImage3,
      projectImage4Prop: _quickDB.bvVinyl.projectImage4,
      projectCarouselProp: "bvVinylCarousel"
    }))))
  }),
      _useState22 = _slicedToArray(_useState21, 2),
      card3 = _useState22[0],
      setStateCard3 = _useState22[1];

  var _useState23 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading2"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse2",
      "aria-expanded": "false",
      "aria-controls": "collapse2"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "Portfolio (RoR) ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "far fa-gem fa-gem-mm"
    }))))), _react["default"].createElement("div", {
      id: "collapse2",
      "class": "collapse",
      "aria-labelledby": "heading2",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.mmPortfolio.projectName,
      projectRoleProp: _quickDB.mmPortfolio.projectRole,
      projectDescriptionProp: _quickDB.mmPortfolio.projectDescription,
      projectUtilitiesProp: _quickDB.mmPortfolio.projectUtilities,
      projectSiteProp: _quickDB.mmPortfolio.projectSite,
      projectGithubProp: _quickDB.mmPortfolio.projectGithub,
      projectImage1Prop: _quickDB.mmPortfolio.projectImage1,
      projectImage2Prop: _quickDB.mmPortfolio.projectImage2,
      projectImage3Prop: _quickDB.mmPortfolio.projectImage3,
      projectImage4Prop: _quickDB.mmPortfolio.projectImage4,
      projectCarouselProp: "mmPortfolioCarousel"
    }))))
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      card2 = _useState24[0],
      setStateCard2 = _useState24[1];

  var _useState25 = (0, _react.useState)({
    card: _react["default"].createElement("div", {
      "class": "card"
    }, _react["default"].createElement(_projectsStyling.CardHeader, {
      className: "container",
      id: "heading1"
    }, _react["default"].createElement("h5", {
      "class": "mb-auto"
    }, _react["default"].createElement(_projectsStyling.BtnLink, {
      className: "btn collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapse1",
      "aria-expanded": "false",
      "aria-controls": "collapse1"
    }, _react["default"].createElement("div", {
      "class": "row pl-2 pr-2"
    }, "Sega Paradise ", _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "far fa-gem fa-gem-sp"
    }))))), _react["default"].createElement("div", {
      id: "collapse1",
      "class": "collapse",
      "aria-labelledby": "heading1",
      "data-parent": "#accordionExample"
    }, _react["default"].createElement(_projectsStyling.CardBody, null, _react["default"].createElement(_projectName["default"], {
      projectNameProp: _quickDB.segaParadise.projectName,
      projectRoleProp: _quickDB.segaParadise.projectRole,
      projectDescriptionProp: _quickDB.segaParadise.projectDescription,
      projectUtilitiesProp: _quickDB.segaParadise.projectUtilities,
      projectSiteProp: _quickDB.segaParadise.projectSite,
      projectGithubProp: _quickDB.segaParadise.projectGithub,
      projectImage1Prop: _quickDB.segaParadise.projectImage1,
      projectImage2Prop: _quickDB.segaParadise.projectImage2,
      projectImage3Prop: _quickDB.segaParadise.projectImage3,
      projectImage4Prop: _quickDB.segaParadise.projectImage4,
      projectCarouselProp: "segaParadiseCarousel"
    }))))
  }),
      _useState26 = _slicedToArray(_useState25, 2),
      card1 = _useState26[0],
      setStateCard1 = _useState26[1];

  return _react["default"].createElement("div", null, _react["default"].createElement(_mainStyling.SwingInTopDiv, {
    className: "container-fluid"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_designStyling.JobTitleHeader, {
    className: "col-sm-6"
  }, "Full-Stack Developer"), _react["default"].createElement("div", {
    "class": "col-sm-6 pb-3"
  }, _react["default"].createElement(_navLinksProjects["default"], null))), _react["default"].createElement("div", {
    "class": "pt-3"
  }, _react["default"].createElement("div", {
    "class": "container-fluid"
  }, _react["default"].createElement("div", {
    "class": "row pb-3"
  }, _react["default"].createElement(_designStyling.HeadingTitle, {
    className: "pb-2 col-sm-6"
  }, "Projects")), _react["default"].createElement("div", {
    "class": "row justify-content-center"
  }, _react["default"].createElement("div", {
    "class": "container-fluid m-0 p-0"
  }, _react["default"].createElement("div", {
    "class": "accordion",
    id: "accordionExample"
  }, card13.card, card12.card, card11.card, card10.card, card9.card, card8.card, card7.card, card6.card, card5.card, card4.card, card3.card, card2.card, card1.card)))))), _react["default"].createElement(_footer["default"], null));
}