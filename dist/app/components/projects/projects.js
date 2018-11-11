'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _navLinksProjects = require('../projects/navLinksProjects.js');

var _navLinksProjects2 = _interopRequireDefault(_navLinksProjects);

var _segaCard = require('./segaParadise/segaCard.js');

var _segaCard2 = _interopRequireDefault(_segaCard);

var _ogPortfolioCard = require('./mmPortfolio/ogPortfolioCard.js');

var _ogPortfolioCard2 = _interopRequireDefault(_ogPortfolioCard);

var _breakoutCard = require('./breakout/breakoutCard.js');

var _breakoutCard2 = _interopRequireDefault(_breakoutCard);

var _bvCard = require('./baysideVinyl/bvCard.js');

var _bvCard2 = _interopRequireDefault(_bvCard);

var _bvThemeCard = require('./bvThemeGenerator/bvThemeCard.js');

var _bvThemeCard2 = _interopRequireDefault(_bvThemeCard);

var _cccCard = require('./cryptocoincount/cccCard.js');

var _cccCard2 = _interopRequireDefault(_cccCard);

var _bvVaporwaveCard = require('./baysideVaporwave/bvVaporwaveCard.js');

var _bvVaporwaveCard2 = _interopRequireDefault(_bvVaporwaveCard);

var _cfBlogCard = require('./crossfaderBlog/cfBlogCard.js');

var _cfBlogCard2 = _interopRequireDefault(_cfBlogCard);

var _bvBlogCard = require('./bvBlog/bvBlogCard.js');

var _bvBlogCard2 = _interopRequireDefault(_bvBlogCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_Component) {
    _inherits(Projects, _Component);

    function Projects() {
        _classCallCheck(this, Projects);

        return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
    }

    _createClass(Projects, [{
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
                            _react2.default.createElement(_navLinksProjects2.default, null)
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
                                'Projects'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-3 pb-3' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'cardLink', to: '/projects/sega-paradise' },
                                    _react2.default.createElement(_segaCard2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-3 pb-3' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'cardLink', to: '/projects/maurice-murphy-portfolio' },
                                    _react2.default.createElement(_ogPortfolioCard2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-3 pb-3' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'cardLink', to: '/projects/bayside-vinyl' },
                                    _react2.default.createElement(_bvCard2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-3 pb-3' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'cardLink', to: '/projects/bv-theme-generator' },
                                    _react2.default.createElement(_bvThemeCard2.default, null)
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-3 pb-3' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'cardLink', to: '/projects/breakout' },
                                    _react2.default.createElement(_breakoutCard2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-3 pb-3' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'cardLink', to: '/projects/crossfader-blog' },
                                    _react2.default.createElement(_cfBlogCard2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-3 pb-3' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'cardLink', to: '/projects/bv-blog' },
                                    _react2.default.createElement(_bvBlogCard2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-3 pb-3' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { 'class': 'cardLink', to: '/projects/bayside-vaporwave' },
                                    _react2.default.createElement(_bvVaporwaveCard2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'col-sm-3 pb-3' },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { 'class': 'cardLink', to: '/projects/cryptocoincount' },
                                        _react2.default.createElement(_cccCard2.default, null)
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Projects;
}(_react.Component);

exports.default = Projects;