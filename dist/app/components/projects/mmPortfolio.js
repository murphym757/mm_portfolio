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

var MMPortfolio = function (_Component) {
    _inherits(MMPortfolio, _Component);

    function MMPortfolio(props) {
        _classCallCheck(this, MMPortfolio);

        var _this = _possibleConstructorReturn(this, (MMPortfolio.__proto__ || Object.getPrototypeOf(MMPortfolio)).call(this, props));

        _this.state = {
            project: {}
        };
        return _this;
    }

    _createClass(MMPortfolio, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.mmPortfolioContent();
        }
    }, {
        key: 'mmPortfolioContent',
        value: function mmPortfolioContent() {
            this.setState({
                project: {
                    projectName: "Portfolio (Ruby on Rails)",
                    projectRole: "Developer & Designer",
                    projectDescription: "This is my former personal portfolio and its primary purpose is to inform, as well as, give the visitor a glimpse of who I am.",
                    projectUtilities: "Built with Ruby on Rails, Bootstrap, HTML5, CSS3, JavaScript",
                    projectSite: "https://mauricemurphyjr.herokuapp.com/",
                    projectGithub: "https://github.com/murphym757/portfolio_website",
                    projectImage1: "https://s3.amazonaws.com/mmportfolioreact/portfolioRubyonRails/port-img.png",
                    projectImage2: "https://s3.amazonaws.com/mmportfolioreact/portfolioRubyonRails/port-img2.png"
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
                                    { id: 'mmPortfolioCarousel', 'class': 'carousel slide', 'data-ride': 'carousel' },
                                    _react2.default.createElement(
                                        'ol',
                                        { 'class': 'carousel-indicators' },
                                        _react2.default.createElement('li', { 'data-target': '#mmPortfolioCarousel', 'data-slide-to': '0', 'class': 'active' }),
                                        _react2.default.createElement('li', { 'data-target': '#mmPortfolioCarousel', 'data-slide-to': '1' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'carousel-inner' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'carousel-item active' },
                                            _react2.default.createElement('img', { 'class': 'd-block w-100', src: this.state.project.projectImage1, alt: 'First slide' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'carousel-item' },
                                            _react2.default.createElement('img', { 'class': 'd-block w-100', src: this.state.project.projectImage2, alt: 'Second slide' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { 'class': 'carousel-control-prev', href: '#mmPortfolioCarousel', role: 'button', 'data-slide': 'prev' },
                                        _react2.default.createElement(
                                            'span',
                                            { 'aria-hidden': 'true' },
                                            _react2.default.createElement('i', { 'class': 'fas fa-chevron-left fa-2x' })
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'sr-only' },
                                            'Previous'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'a',
                                        { 'class': 'carousel-control-next', href: '#mmPortfolioCarousel', role: 'button', 'data-slide': 'next' },
                                        _react2.default.createElement(
                                            'span',
                                            { 'aria-hidden': 'true' },
                                            _react2.default.createElement('i', { 'class': 'fas fa-chevron-right fa-2x' })
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'sr-only' },
                                            'Next'
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

    return MMPortfolio;
}(_react.Component);

exports.default = MMPortfolio;