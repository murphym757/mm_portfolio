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

var _cryptocoincount = require('./cryptocoincount.js');

var _cryptocoincount2 = _interopRequireDefault(_cryptocoincount);

var _baysideVaporwave = require('./baysideVaporwave.js');

var _baysideVaporwave2 = _interopRequireDefault(_baysideVaporwave);

var _bvBlog = require('./bvBlog.js');

var _bvBlog2 = _interopRequireDefault(_bvBlog);

var _cfBlog = require('./cfBlog.js');

var _cfBlog2 = _interopRequireDefault(_cfBlog);

var _breakout = require('./breakout.js');

var _breakout2 = _interopRequireDefault(_breakout);

var _bvThemeGenerator = require('./bvThemeGenerator.js');

var _bvThemeGenerator2 = _interopRequireDefault(_bvThemeGenerator);

var _bvVinyl = require('./bvVinyl.js');

var _bvVinyl2 = _interopRequireDefault(_bvVinyl);

var _mmPortfolio = require('./mmPortfolio.js');

var _mmPortfolio2 = _interopRequireDefault(_mmPortfolio);

var _segaParadise = require('./segaParadise.js');

var _segaParadise2 = _interopRequireDefault(_segaParadise);

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
                    { 'class': 'swing-in-top-fwd' },
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
                        { 'class': 'pt-3' },
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
                            { 'class': 'row justify-content-center' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'container' },
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'accordion', id: 'accordionExample' },
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingOne' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseOne', 'aria-expanded': 'false', 'aria-controls': 'collapseOne' },
                                                    'CryptoCoinCount'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseOne', 'class': 'collapse', 'aria-labelledby': 'headingOne', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_cryptocoincount2.default, null)
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingTwo' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseTwo', 'aria-expanded': 'false', 'aria-controls': 'collapseTwo' },
                                                    'Bayside Vaporwave'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseTwo', 'class': 'collapse', 'aria-labelledby': 'headingTwo', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_baysideVaporwave2.default, null)
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingThree' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseThree', 'aria-expanded': 'false', 'aria-controls': 'collapseThree' },
                                                    'BV Blog'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseThree', 'class': 'collapse', 'aria-labelledby': 'headingThree', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_bvBlog2.default, null)
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingFour' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseFour', 'aria-expanded': 'false', 'aria-controls': 'collapseFour' },
                                                    'Crossfader Blog'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseFour', 'class': 'collapse', 'aria-labelledby': 'headingFour', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_cfBlog2.default, null)
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingFive' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseFive', 'aria-expanded': 'false', 'aria-controls': 'collapseFive' },
                                                    'BREAKOUT! JS Game'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseFive', 'class': 'collapse', 'aria-labelledby': 'headingFive', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_breakout2.default, null)
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingSix' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseSix', 'aria-expanded': 'false', 'aria-controls': 'collapseSix' },
                                                    'BV Theme Generator'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseSix', 'class': 'collapse', 'aria-labelledby': 'headingSix', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_bvThemeGenerator2.default, null)
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingSeven' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseSeven', 'aria-expanded': 'false', 'aria-controls': 'collapseSeven' },
                                                    'Bayside Vinyl'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseSeven', 'class': 'collapse', 'aria-labelledby': 'headingSeven', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_bvVinyl2.default, null)
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingEight' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseEight', 'aria-expanded': 'false', 'aria-controls': 'collapseEight' },
                                                    'Portfolio (RoR)'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseEight', 'class': 'collapse', 'aria-labelledby': 'headingEight', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_mmPortfolio2.default, null)
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'card' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'card-header', id: 'headingNine' },
                                            _react2.default.createElement(
                                                'h5',
                                                { 'class': 'mb-0' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { 'class': 'btn btn-link collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapseNine', 'aria-expanded': 'false', 'aria-controls': 'collapseNine' },
                                                    'Sega Paradise'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'collapseNine', 'class': 'collapse', 'aria-labelledby': 'headingNine', 'data-parent': '#accordionExample' },
                                            _react2.default.createElement(
                                                'div',
                                                { 'class': 'card-body' },
                                                _react2.default.createElement(_segaParadise2.default, null)
                                            )
                                        )
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