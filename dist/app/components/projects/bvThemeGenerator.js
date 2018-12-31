'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _navLinksProjects = require('./navLinksProjects.js');

var _navLinksProjects2 = _interopRequireDefault(_navLinksProjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BVThemeGenerator = function (_Component) {
    _inherits(BVThemeGenerator, _Component);

    function BVThemeGenerator(props) {
        _classCallCheck(this, BVThemeGenerator);

        var _this = _possibleConstructorReturn(this, (BVThemeGenerator.__proto__ || Object.getPrototypeOf(BVThemeGenerator)).call(this, props));

        _this.state = {
            project: {}
        };
        return _this;
    }

    _createClass(BVThemeGenerator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.bvThemeContent();
        }
    }, {
        key: 'bvThemeContent',
        value: function bvThemeContent() {
            this.setState({
                project: {
                    projectName: "BV Theme Generator",
                    projectRole: "Developer & Designer",
                    projectDescription: "I created a useful tool that allows the user to change the theme of a webpage. The concept completely utilizing the Javascript DOM.",
                    projectUtilities: "Built with Ruby on Rails, HTML5, CSS3, Devise, Bootstrap, JavaScript (ES6)",
                    projectSite: "http://bvthemegenerator.herokuapp.com/",
                    projectGithub: "https://github.com/murphym757/bvthemegenerator",
                    projectImage1: "https://s3.amazonaws.com/mmportfolioreact/bvThemeGenerator/bvtheme-image.jpg"
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { 'class': 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row' },
                        ' ',
                        _react2.default.createElement(
                            'h3',
                            { 'class': 'heading-title-project col-sm-6' },
                            this.state.project.projectName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row' },
                        ' ',
                        _react2.default.createElement(
                            'h6',
                            { 'class': 'heading-title-role pb-2 col-sm-6' },
                            this.state.project.projectRole
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row' },
                        ' ',
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-sm-6 pb-3' },
                            ' ',
                            _react2.default.createElement(
                                'p',
                                { 'class': 'project-description float-left' },
                                this.state.project.projectDescription
                            ),
                            _react2.default.createElement(
                                'p',
                                { 'class': 'project-description float-left' },
                                this.state.project.projectUtilities
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-sm-6 contactSection' },
                            ' ',
                            _react2.default.createElement(
                                'div',
                                { 'class': 'pb-2' },
                                _react2.default.createElement(
                                    'div',
                                    { id: 'bvThemeGeneratorCarousel', 'class': 'carousel slide', 'data-ride': 'carousel' },
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'carousel-inner' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'carousel-item active' },
                                            _react2.default.createElement('img', { 'class': 'd-block w-100', src: this.state.project.projectImage1, alt: 'First slide' })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row' },
                        ' ',
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-sm-6 pt-1' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'col-6' },
                                    ' ',
                                    _react2.default.createElement(
                                        'a',
                                        { 'class': 'projectPageLink float-left', href: this.state.project.projectSite, target: '_blank' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'row' },
                                            _react2.default.createElement('i', { 'class': 'fas fa-external-link-square-alt fa-2x pr-1' }),
                                            _react2.default.createElement(
                                                'h3',
                                                { 'class': 'linkTo pl-1' },
                                                'Site'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'col-6' },
                                    ' ',
                                    _react2.default.createElement(
                                        'a',
                                        { 'class': 'projectPageLink float-right', href: this.state.project.projectGithub, target: '_blank' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'row' },
                                            _react2.default.createElement(
                                                'h3',
                                                { 'class': 'linkTo pr-1' },
                                                'Github'
                                            ),
                                            _react2.default.createElement('i', { 'class': 'fab fa-github-square fa-2x pl-1' })
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

    return BVThemeGenerator;
}(_react.Component);

exports.default = BVThemeGenerator;