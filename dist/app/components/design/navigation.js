'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _header = require('./header.js');

var _header2 = _interopRequireDefault(_header);

var _contact = require('../personalInfo/contact.js');

var _contact2 = _interopRequireDefault(_contact);

var _aboutMe = require('../personalInfo/aboutMe.js');

var _aboutMe2 = _interopRequireDefault(_aboutMe);

var _navLinksAboutMe = require('../design/navLinksAboutMe.js');

var _navLinksAboutMe2 = _interopRequireDefault(_navLinksAboutMe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation() {
        _classCallCheck(this, Navigation);

        return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
    }

    _createClass(Navigation, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { 'class': 'container-fluid swing-in-top-fwd' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row' },
                        _react2.default.createElement(
                            'h3',
                            { 'class': 'jobTitleHeader col-sm-6' },
                            'Full-Stack Developer'
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-sm-6 pb-3' },
                            _react2.default.createElement(_navLinksAboutMe2.default, null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'container-fluid pt-3' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'heading-title pb-2 col-sm-6' },
                                'About Me'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6 pb-5' },
                                _react2.default.createElement(_aboutMe2.default, null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6 contactSection' },
                                _react2.default.createElement(_contact2.default, null)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navigation;
}(_react.Component);

exports.default = Navigation;