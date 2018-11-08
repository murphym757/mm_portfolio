'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _aboutMe = require('../personalInfo/aboutMe.js');

var _aboutMe2 = _interopRequireDefault(_aboutMe);

var _contact = require('../personalInfo/contact.js');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPage = function (_Component) {
    _inherits(LandingPage, _Component);

    function LandingPage() {
        _classCallCheck(this, LandingPage);

        return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
    }

    _createClass(LandingPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { 'class': 'container-fluid pt-5' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'card main-card' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'conatiner second-title' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'row' },
                                _react2.default.createElement(
                                    'h1',
                                    { 'class': 'nameHeader col-sm-6' },
                                    'Maurice Murphy'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'row' },
                                _react2.default.createElement(
                                    'h5',
                                    { 'class': 'jobTitleHeader col-sm-6' },
                                    'Full-Stack Developer'
                                ),
                                _react2.default.createElement(
                                    'h5',
                                    { 'class': 'navLinksHeader col-sm-6 pb-2' },
                                    'About - Resume - Projects'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LandingPage;
}(_react.Component);

exports.default = LandingPage;