'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _navigation = require('../design/navigation.js');

var _navigation2 = _interopRequireDefault(_navigation);

var _projectCards = require('../projectCards/projectCards.js');

var _projectCards2 = _interopRequireDefault(_projectCards);

var _header = require('../design/header.js');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../design/footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { 'class': 'container-fluid p-auto' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'container-fluid pt-3' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'card main-card' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'nameHeader-Link', to: '/' },
                                    _react2.default.createElement(_header2.default, null)
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Switch,
                                    null,
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _navigation2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects', component: _projectCards2.default })
                                ),
                                _react2.default.createElement(_footer2.default, null)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;