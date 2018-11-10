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

var BVVaporwaveCard = function (_Component) {
    _inherits(BVVaporwaveCard, _Component);

    function BVVaporwaveCard() {
        _classCallCheck(this, BVVaporwaveCard);

        return _possibleConstructorReturn(this, (BVVaporwaveCard.__proto__ || Object.getPrototypeOf(BVVaporwaveCard)).apply(this, arguments));
    }

    _createClass(BVVaporwaveCard, [{
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
                            { 'class': 'card bvv-card' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'pt-5 pb-5' },
                                _react2.default.createElement('img', { 'class': 'img-thumbnail-bvv img-fluid', src: './src/app/assets/images/baysideVaporwave/BVVLogo.svg', alt: 'Card Image', height: '130', width: '130' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'col-12' },
                        _react2.default.createElement(
                            'h5',
                            { 'class': 'projectName' },
                            'Bayside Vaporwave'
                        ),
                        ' ',
                        _react2.default.createElement('i', { 'class': 'fab fa-react' })
                    )
                )
            );
        }
    }]);

    return BVVaporwaveCard;
}(_react.Component);

exports.default = BVVaporwaveCard;