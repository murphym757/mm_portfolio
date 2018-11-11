'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _navLinksProjects = require('../navLinksProjects');

var _navLinksProjects2 = _interopRequireDefault(_navLinksProjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BVBlog = function (_Component) {
    _inherits(BVBlog, _Component);

    function BVBlog(props) {
        _classCallCheck(this, BVBlog);

        var _this = _possibleConstructorReturn(this, (BVBlog.__proto__ || Object.getPrototypeOf(BVBlog)).call(this, props));

        _this.state = {
            project: {}
        };
        return _this;
    }

    _createClass(BVBlog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.bvBlogContent();
        }
    }, {
        key: 'bvBlogContent',
        value: function bvBlogContent() {
            this.setState({
                project: {
                    projectName: "Bayside Vinyl",
                    projectRole: "Developer & Designer",
                    projectDescription: "A business plan dedicated to a personal project of mine. The user has login abilities. Once the user creates an account, they will have the ability to upload mp3 files to be played with the custom MP3 player. Each user (once logged in) has CRUD abilities for any of their contributed content.",
                    projectUtilities: "Built with Ruby on Rails, Bootstrap, HTML5, CSS3, JQuery, Devise, Amazon S3, Paperclip",
                    projectSite: "http://baysidevinyl.herokuapp.com/",
                    projectGithub: "https://github.com/murphym757/baysidevinyl",
                    projectImage1: "https://s3.amazonaws.com/mmportfolioreact/baysideVinyl/bv-image.png",
                    projectImage2: "https://s3.amazonaws.com/mmportfolioreact/baysideVinyl/bv-image2.png",
                    projectImage3: "https://s3.amazonaws.com/mmportfolioreact/baysideVinyl/bv-image3.png",
                    projectImage4: "https://s3.amazonaws.com/mmportfolioreact/baysideVinyl/bv-image4.png"
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
                                { 'class': 'col-sm-6 pb-5' },
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
                                    { 'class': 'container-fluid pb-2' },
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'container' },
                                        _react2.default.createElement(
                                            'div',
                                            { id: 'carouselExampleIndicators', 'class': 'carousel slide', 'data-ride': 'carousel' },
                                            _react2.default.createElement(
                                                'ol',
                                                { 'class': 'carousel-indicators' },
                                                _react2.default.createElement('li', { 'data-target': '#carouselExampleIndicators', 'data-slide-to': '0', 'class': 'active' }),
                                                _react2.default.createElement('li', { 'data-target': '#carouselExampleIndicators', 'data-slide-to': '1' }),
                                                _react2.default.createElement('li', { 'data-target': '#carouselExampleIndicators', 'data-slide-to': '2' }),
                                                _react2.default.createElement('li', { 'data-target': '#carouselExampleIndicators', 'data-slide-to': '3' })
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
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { 'class': 'carousel-item' },
                                                    _react2.default.createElement('img', { 'class': 'd-block w-100', src: this.state.project.projectImage3, alt: 'Third slide' })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { 'class': 'carousel-item' },
                                                    _react2.default.createElement('img', { 'class': 'd-block w-100', src: this.state.project.projectImage4, alt: 'Fourth slide' })
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'a',
                                                { 'class': 'carousel-control-prev', href: '#carouselExampleIndicators', role: 'button', 'data-slide': 'prev' },
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
                                                { 'class': 'carousel-control-next', href: '#carouselExampleIndicators', role: 'button', 'data-slide': 'next' },
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
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            ' ',
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6 pt-1 pb-1' },
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
                )
            );
        }
    }]);

    return BVBlog;
}(_react.Component);

exports.default = BVBlog;