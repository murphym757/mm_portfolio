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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SegaParadise = function (_Component) {
    _inherits(SegaParadise, _Component);

    function SegaParadise() {
        _classCallCheck(this, SegaParadise);

        return _possibleConstructorReturn(this, (SegaParadise.__proto__ || Object.getPrototypeOf(SegaParadise)).apply(this, arguments));
    }

    _createClass(SegaParadise, [{
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
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'heading-title-project col-sm-6' },
                                'Sega Paradise'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'h6',
                                { 'class': 'heading-title-role pb-2 col-sm-6' },
                                'Developer & Designer'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6 pb-5' },
                                _react2.default.createElement(
                                    'p',
                                    { 'class': 'project-description' },
                                    'Sega Paradise is a wikipedia-like website dedicated to the games of the classic video game console, Sega Genesis. Once a user creates an account, they are given the ability to upload, modify, or delete anything they have contributed to the site.'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { 'class': 'project-description' },
                                    'Built with Ruby on Rails, Bootstrap, HTML5, CSS3, JQuery, Devise, Amazon S3, Paperclip'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6 contactSection' },
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'row pb-1' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'container-fluid' },
                                            _react2.default.createElement('img', { src: require('../../assets/images/segaParadise/sp-image.jpg') }),
                                            _react2.default.createElement('img', { src: 'https://public.adobecc.com/files/1UOATWCTTDGVFU2LXP2OE5OEOI4FFF', alt: 'Project Image', height: '100', width: '500' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { 'class': 'row pt-1' },
                                        _react2.default.createElement(
                                            'div',
                                            { 'class': 'container-fluid' },
                                            _react2.default.createElement('img', { src: 'https://public.adobecc.com/files/1UOATWCTTDGVFU2LXP2OE5OEOI4FFF', alt: 'Project Image', height: '100', width: '500' })
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

    return SegaParadise;
}(_react.Component);

exports.default = SegaParadise;