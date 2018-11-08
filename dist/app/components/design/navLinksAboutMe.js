'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavLinksAboutMe = function (_Component) {
    _inherits(NavLinksAboutMe, _Component);

    function NavLinksAboutMe() {
        _classCallCheck(this, NavLinksAboutMe);

        return _possibleConstructorReturn(this, (NavLinksAboutMe.__proto__ || Object.getPrototypeOf(NavLinksAboutMe)).apply(this, arguments));
    }

    _createClass(NavLinksAboutMe, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'navLinksHeader' },
                _react2.default.createElement(
                    'h6',
                    null,
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { 'class': 'homeLink-active', to: '/' },
                                'About'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { 'class': 'pl-2 pr-2 homeDivider' },
                            '|'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { 'class': 'homeLink', to: '/' },
                                'Resume'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { 'class': 'pl-2 pr-2 homeDivider' },
                            '|'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { 'class': 'homeLink', to: '/projects' },
                                'Projects'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { 'class': 'pl-2 pr-2 homeDivider' },
                            '|'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                {
                                    'class': 'homeLink',
                                    href: 'https://github.com/murphym757',
                                    target: '_blank' },
                                _react2.default.createElement('i', { 'class': 'fab fa-github' }),
                                ' Github'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NavLinksAboutMe;
}(_react.Component);

exports.default = NavLinksAboutMe;