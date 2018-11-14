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

var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { 'class': 'container-fluid' },
                    _react2.default.createElement(
                        'h5',
                        { 'class': 'contactHeading pb-4' },
                        'Please feel free to reach me at: '
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row contactCardRow pb-4' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-6' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'card contact-card pb-3' },
                                _react2.default.createElement('i', { 'class': 'fa fa-envelope fa-4x' })
                            ),
                            _react2.default.createElement(
                                'h6',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { 'class': 'email-link', href: 'mailto:maurice.murphy757@gmail.com' },
                                    'maurice.murphy757@gmail.com'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-6' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'card contact-card pb-3' },
                                _react2.default.createElement('i', { 'class': 'fa fa-mobile fa-3x pt-2 pb-2' })
                            ),
                            _react2.default.createElement(
                                'h6',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { 'class': 'phone-link', href: 'tel:+17864233489' },
                                    '786-423-3489'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Contact;
}(_react.Component);

exports.default = Contact;