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

var _projects = require('../projects/projects.js');

var _projects2 = _interopRequireDefault(_projects);

var _header = require('../design/header.js');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../design/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _segaParadise = require('../projects/segaParadise.js');

var _segaParadise2 = _interopRequireDefault(_segaParadise);

var _mmPortfolio = require('../projects/mmPortfolio.js');

var _mmPortfolio2 = _interopRequireDefault(_mmPortfolio);

var _bvVinyl = require('../projects/bvVinyl.js');

var _bvVinyl2 = _interopRequireDefault(_bvVinyl);

var _bvThemeGenerator = require('../projects/bvThemeGenerator.js');

var _bvThemeGenerator2 = _interopRequireDefault(_bvThemeGenerator);

var _breakout = require('../projects/breakout.js');

var _breakout2 = _interopRequireDefault(_breakout);

var _cfBlog = require('../projects/cfBlog.js');

var _cfBlog2 = _interopRequireDefault(_cfBlog);

var _bvBlog = require('../projects/bvBlog.js');

var _bvBlog2 = _interopRequireDefault(_bvBlog);

var _baysideVaporwave = require('../projects/baysideVaporwave.js');

var _baysideVaporwave2 = _interopRequireDefault(_baysideVaporwave);

var _cryptocoincount = require('../projects/cryptocoincount.js');

var _cryptocoincount2 = _interopRequireDefault(_cryptocoincount);

var _resume = require('../personalInfo/resume.js');

var _resume2 = _interopRequireDefault(_resume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Routes


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
                            { 'class': 'container-fluid pt-3 pb-3' },
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
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/resume', component: _resume2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects', component: _projects2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/sega-paradise', component: _segaParadise2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/maurice-murphy-portfolio', component: _mmPortfolio2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/bayside-vinyl', component: _bvVinyl2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/bv-theme-generator', component: _bvThemeGenerator2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/breakout', component: _breakout2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/crossfader-blog', component: _cfBlog2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/bv-blog', component: _bvBlog2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/bayside-vaporwave', component: _baysideVaporwave2.default }),
                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/projects/cryptocoincount', component: _cryptocoincount2.default })
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