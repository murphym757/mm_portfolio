"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProjectName;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _navLinksProjects = _interopRequireDefault(require("./navLinksProjects.js"));

var _designStyling = require("../../assets/styles/designStyling");

var _projectsStyling = require("../../assets/styles/projectsStyling");

var _fontAwesomeStyling = require("../../assets/styles/fontAwesomeStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ProjectName(props) {
  var projectNameProp = props.projectNameProp;
  var projectRoleProp = props.projectRoleProp;
  var projectDescriptionProp = props.projectDescriptionProp;
  var projectUtilitiesProp = props.projectUtilitiesProp;
  var projectSiteProp = props.projectSiteProp;
  var projectGithubProp = props.projectGithubProp;
  var projectImage1Prop = props.projectImage1Prop;
  var projectImage2Prop = props.projectImage2Prop;
  var projectImage3Prop = props.projectImage3Prop;
  var projectImage4Prop = props.projectImage4Prop;
  var projectCarouselProp = props.projectCarouselProp;

  var _useState = (0, _react.useState)({
    projectName: projectNameProp,
    projectRole: projectRoleProp,
    projectDescription: projectDescriptionProp,
    projectUtilities: projectUtilitiesProp,
    projectSite: projectSiteProp,
    projectGithub: projectGithubProp,
    projectImage1: projectImage1Prop,
    projectImage2: projectImage2Prop,
    projectImage3: projectImage3Prop,
    projectImage4: projectImage4Prop,
    projectCarousel: projectCarouselProp,
    projectCarouselHash: "#" + projectCarouselProp
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    carousel: _react["default"].createElement("div", {
      id: state.projectCarousel,
      "class": "carousel slide",
      "data-ride": "carousel"
    }, _react["default"].createElement("ol", {
      "class": "carousel-indicators"
    }, _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "0",
      "class": "active"
    })), _react["default"].createElement("div", {
      "class": "carousel-inner"
    }, _react["default"].createElement("div", {
      "class": "carousel-item active"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage1,
      alt: "First slide"
    }))), _react["default"].createElement("a", {
      "class": "carousel-control-prev",
      href: state.projectCarouselHash,
      role: "button",
      "data-slide": "prev"
    }, _react["default"].createElement("span", {
      "aria-hidden": "true"
    }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fas fa-chevron-left fa-2x"
    })), _react["default"].createElement("span", {
      "class": "sr-only"
    }, "Previous")), _react["default"].createElement("a", {
      "class": "carousel-control-next",
      href: state.projectCarouselHash,
      role: "button",
      "data-slide": "next"
    }, _react["default"].createElement("span", {
      "aria-hidden": "true"
    }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fas fa-chevron-right fa-2x"
    })), _react["default"].createElement("span", {
      "class": "sr-only"
    }, "Next")))
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      isProjectImage1Prop = _useState4[0],
      setIsProjectImage1Prop = _useState4[1];

  var _useState5 = (0, _react.useState)({
    carousel: _react["default"].createElement("div", {
      id: state.projectCarousel,
      "class": "carousel slide",
      "data-ride": "carousel"
    }, _react["default"].createElement("ol", {
      "class": "carousel-indicators"
    }, _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "0",
      "class": "active"
    }), _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "1"
    })), _react["default"].createElement("div", {
      "class": "carousel-inner"
    }, _react["default"].createElement("div", {
      "class": "carousel-item active"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage1,
      alt: "First slide"
    })), _react["default"].createElement("div", {
      "class": "carousel-item"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage2,
      alt: "Second slide"
    }))), _react["default"].createElement("a", {
      "class": "carousel-control-prev",
      href: state.projectCarouselHash,
      role: "button",
      "data-slide": "prev"
    }, _react["default"].createElement("span", {
      "aria-hidden": "true"
    }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fas fa-chevron-left fa-2x"
    })), _react["default"].createElement("span", {
      "class": "sr-only"
    }, "Previous")), _react["default"].createElement("a", {
      "class": "carousel-control-next",
      href: state.projectCarouselHash,
      role: "button",
      "data-slide": "next"
    }, _react["default"].createElement("span", {
      "aria-hidden": "true"
    }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fas fa-chevron-right fa-2x"
    })), _react["default"].createElement("span", {
      "class": "sr-only"
    }, "Next")))
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      isProjectImage2Prop = _useState6[0],
      setIsProjectImage2Prop = _useState6[1];

  var _useState7 = (0, _react.useState)({
    carousel: _react["default"].createElement("div", {
      id: state.projectCarousel,
      "class": "carousel slide",
      "data-ride": "carousel"
    }, _react["default"].createElement("ol", {
      "class": "carousel-indicators"
    }, _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "0",
      "class": "active"
    }), _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "1"
    }), _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "2"
    })), _react["default"].createElement("div", {
      "class": "carousel-inner"
    }, _react["default"].createElement("div", {
      "class": "carousel-item active"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage1,
      alt: "First slide"
    })), _react["default"].createElement("div", {
      "class": "carousel-item"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage2,
      alt: "Second slide"
    })), _react["default"].createElement("div", {
      "class": "carousel-item"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage3,
      alt: "Third slide"
    }))), _react["default"].createElement("a", {
      "class": "carousel-control-prev",
      href: state.projectCarouselHash,
      role: "button",
      "data-slide": "prev"
    }, _react["default"].createElement("span", {
      "aria-hidden": "true"
    }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fas fa-chevron-left fa-2x"
    })), _react["default"].createElement("span", {
      "class": "sr-only"
    }, "Previous")), _react["default"].createElement("a", {
      "class": "carousel-control-next",
      href: state.projectCarouselHash,
      role: "button",
      "data-slide": "next"
    }, _react["default"].createElement("span", {
      "aria-hidden": "true"
    }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fas fa-chevron-right fa-2x"
    })), _react["default"].createElement("span", {
      "class": "sr-only"
    }, "Next")))
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      isProjectImage3Prop = _useState8[0],
      setIsProjectImage3Prop = _useState8[1];

  var _useState9 = (0, _react.useState)({
    carousel: _react["default"].createElement("div", {
      id: state.projectCarousel,
      "class": "carousel slide",
      "data-ride": "carousel"
    }, _react["default"].createElement("ol", {
      "class": "carousel-indicators"
    }, _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "0",
      "class": "active"
    }), _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "1"
    }), _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "2"
    }), _react["default"].createElement("li", {
      "data-target": state.projectCarouselHash,
      "data-slide-to": "3"
    })), _react["default"].createElement("div", {
      "class": "carousel-inner"
    }, _react["default"].createElement("div", {
      "class": "carousel-item active"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage1,
      alt: "First slide"
    })), _react["default"].createElement("div", {
      "class": "carousel-item"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage2,
      alt: "Second slide"
    })), _react["default"].createElement("div", {
      "class": "carousel-item"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage3,
      alt: "Third slide"
    })), _react["default"].createElement("div", {
      "class": "carousel-item"
    }, _react["default"].createElement("img", {
      "class": "d-block w-100",
      src: state.projectImage4,
      alt: "Fourth slide"
    }))), _react["default"].createElement("a", {
      "class": "carousel-control-prev",
      href: state.projectCarouselHash,
      role: "button",
      "data-slide": "prev"
    }, _react["default"].createElement("span", {
      "aria-hidden": "true"
    }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fas fa-chevron-left fa-2x"
    })), _react["default"].createElement("span", {
      "class": "sr-only"
    }, "Previous")), _react["default"].createElement("a", {
      "class": "carousel-control-next",
      href: state.projectCarouselHash,
      role: "button",
      "data-slide": "next"
    }, _react["default"].createElement("span", {
      "aria-hidden": "true"
    }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
      className: "fas fa-chevron-right fa-2x"
    })), _react["default"].createElement("span", {
      "class": "sr-only"
    }, "Next")))
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      isProjectImage4Prop = _useState10[0],
      setIsProjectImage4Prop = _useState10[1];

  return _react["default"].createElement("div", {
    "class": "container-fluid"
  }, _react["default"].createElement("div", {
    "class": "container-fluid"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, " ", _react["default"].createElement(_designStyling.HeadingTitleProject, {
    className: "col-sm-6"
  }, state.projectName)), _react["default"].createElement("div", {
    "class": "row"
  }, " ", _react["default"].createElement(_designStyling.HeadingTitleRole, {
    className: "pb-2 col-sm-6"
  }, state.projectRole)), _react["default"].createElement("div", {
    "class": "row"
  }, " ", _react["default"].createElement("div", {
    "class": "col-sm-6 pb-3"
  }, " ", _react["default"].createElement(_projectsStyling.ProjectDescription, {
    className: "float-left"
  }, state.projectDescription), _react["default"].createElement(_projectsStyling.ProjectDescription, {
    className: "float-left"
  }, state.projectUtilities)), _react["default"].createElement(_projectsStyling.ContactSection, {
    className: "col-sm-6"
  }, " ", _react["default"].createElement("div", {
    "class": "pb-2"
  }, "  ", state.projectImage4 != null ? _react["default"].createElement("div", null, isProjectImage4Prop.carousel) : _react["default"].createElement("div", null, state.projectImage3 != null ? _react["default"].createElement("div", null, isProjectImage3Prop.carousel) : _react["default"].createElement("div", null, state.projectImage2 != null ? _react["default"].createElement("div", null, isProjectImage2Prop.carousel) : _react["default"].createElement("div", null, state.projectImage1 != null ? _react["default"].createElement("div", null, isProjectImage1Prop.carousel) : _react["default"].createElement("div", null))))))), _react["default"].createElement("div", {
    "class": "row"
  }, " ", _react["default"].createElement("div", {
    "class": "col-sm-6 pt-1"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement("div", {
    "class": "col-6"
  }, " ", _react["default"].createElement(_projectsStyling.ProjectPageLink, {
    className: "float-left",
    href: state.projectSite,
    target: "_blank"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
    className: "fas fa-external-link-square-alt fa-2x pr-1"
  }), _react["default"].createElement(_projectsStyling.LinkTo, {
    className: "pl-1"
  }, "Site")))), _react["default"].createElement("div", {
    "class": "col-6"
  }, " ", _react["default"].createElement(_projectsStyling.ProjectPageLink, {
    className: "float-right",
    href: state.projectGithub,
    target: "_blank"
  }, _react["default"].createElement("div", {
    "class": "row"
  }, _react["default"].createElement(_projectsStyling.LinkTo, {
    className: "pr-1"
  }, "Github"), _react["default"].createElement(_fontAwesomeStyling.CustomIcon, {
    className: "fab fa-github-square fa-2x pl-1"
  })))))))));
}