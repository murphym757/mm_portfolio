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
                    'nav',
                    { 'class': 'navbar navbar-expand-lg navbar-dark navbar-custom border-bottom py-1', 'data-spy': 'affix', 'data-offset-top': '197' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { 'class': 'navbar-brand', to: '/' },
                        _react2.default.createElement('i', { 'class': 'navbar-home-icon fa fa-home' }),
                        ' Maurice ',
                        _react2.default.createElement(
                            'span',
                            { 'class': 'light' },
                            'Murphy'
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { 'class': 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls': 'navbarNav', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                        _react2.default.createElement('span', { 'class': 'navbar-toggler-icon' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'collapse navbar-collapse', id: 'navbarNav' },
                        _react2.default.createElement(
                            'ul',
                            { 'class': 'navbar-nav ml-auto' },
                            _react2.default.createElement(
                                'li',
                                { 'class': 'nav-item' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { className: 'nav-link', to: '/resume' },
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'light' },
                                        'Resume'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { 'class': 'nav-item' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { className: 'nav-link', to: '/projects' },
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'light' },
                                        'Projects'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { 'class': 'nav-item' },
                                _react2.default.createElement(
                                    'a',
                                    { 'class': 'nav-link', href: 'https://github.com/murphym757', target: '_blank' },
                                    _react2.default.createElement(
                                        'h5',
                                        { 'class': 'light' },
                                        'Github'
                                    )
                                )
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