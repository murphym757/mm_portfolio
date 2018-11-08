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

var SegaCard = function (_Component) {
    _inherits(SegaCard, _Component);

    function SegaCard() {
        _classCallCheck(this, SegaCard);

        return _possibleConstructorReturn(this, (SegaCard.__proto__ || Object.getPrototypeOf(SegaCard)).apply(this, arguments));
    }

    _createClass(SegaCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { 'class': 'row project-card' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-12' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'card sp-card' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'pt-5 pb-5' },
                                _react2.default.createElement('img', { src: './src/app/assets/images/segaParadise/LogoSP.svg', alt: 'Card Image', height: '240', width: '240' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-12' },
                        _react2.default.createElement(
                            'h5',
                            { 'class': 'projectName' },
                            'Sega Paradise'
                        )
                    )
                )
            );
        }
    }]);

    return SegaCard;
}(_react.Component);

exports.default = SegaCard;