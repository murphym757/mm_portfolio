'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _NavLinksResume = require('../personalInfo/NavLinksResume.js');

var _NavLinksResume2 = _interopRequireDefault(_NavLinksResume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resume = function (_Component) {
    _inherits(Resume, _Component);

    function Resume() {
        _classCallCheck(this, Resume);

        return _possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).apply(this, arguments));
    }

    _createClass(Resume, [{
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
                            _react2.default.createElement(_NavLinksResume2.default, null)
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
                                'Resume'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'resumeSectionHeader container-fluid pt-2 pb-1' },
                                'Work'
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6 pb-3' },
                                _react2.default.createElement(
                                    'h4',
                                    { 'class': 'jobName' },
                                    'FREELANCE'
                                ),
                                _react2.default.createElement(
                                    'h5',
                                    { 'class': 'jobTitle' },
                                    'DESIGNER & DEVELOPER, Jan. 2015 to present'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { 'class': 'jobDescription' },
                                    'Develop and design web-based apps with the use of the MEAN Stack, React, Ruby on Rails, Bootstrap and numerous other technologies. Consult with clients about web designs, develop products with the use of wire-framing techniques.'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6' },
                                _react2.default.createElement(
                                    'h4',
                                    { 'class': 'jobName' },
                                    'FLORIDA INSTITUTE OF TECHNOLOGY'
                                ),
                                _react2.default.createElement(
                                    'h5',
                                    { 'class': 'jobTitle' },
                                    'TECHNICAL SUPPORT TECHNICIAN, Melbourne, FL, Jan. 2015 to May. 2015'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { 'class': 'jobDescription' },
                                    'As a technical support technician, I assisted customers with navigating the school\'s website. As well as, provided a helping hand around the office when my assistance was needed.'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'resumeSectionHeader container-fluid pb-1 pt-2' },
                                'Skills'
                            ),
                            _react2.default.createElement(
                                'p',
                                { 'class': 'container-fluid pb-3' },
                                _react2.default.createElement(
                                    'span',
                                    { 'class': 'resumeSkillsHeader' },
                                    _react2.default.createElement(
                                        'i',
                                        null,
                                        'Version Control',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'resumeSkillsHeader-colon' },
                                            ':'
                                        ),
                                        ' '
                                    )
                                ),
                                'Git, GitHub.',
                                _react2.default.createElement(
                                    'span',
                                    { 'class': 'resumeSkillsHeader' },
                                    _react2.default.createElement(
                                        'i',
                                        null,
                                        ' Package Managers',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'resumeSkillsHeader-colon' },
                                            ':'
                                        ),
                                        ' '
                                    )
                                ),
                                'npm.',
                                _react2.default.createElement(
                                    'span',
                                    { 'class': 'resumeSkillsHeader' },
                                    _react2.default.createElement(
                                        'i',
                                        null,
                                        ' Development Tools',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'resumeSkillsHeader-colon' },
                                            ':'
                                        ),
                                        ' '
                                    )
                                ),
                                'Heroku, Amazon Web Services, Compass, Agile, Gulp, Webpack.',
                                _react2.default.createElement(
                                    'span',
                                    { 'class': 'resumeSkillsHeader' },
                                    _react2.default.createElement(
                                        'i',
                                        null,
                                        ' Languages',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'resumeSkillsHeader-colon' },
                                            ':'
                                        ),
                                        ' '
                                    )
                                ),
                                'Ruby, JavaScript, SQL, noSQL, HTML, CSS, SASS.',
                                _react2.default.createElement(
                                    'span',
                                    { 'class': 'resumeSkillsHeader' },
                                    _react2.default.createElement(
                                        'i',
                                        null,
                                        ' Frameworks & Libraries',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'resumeSkillsHeader-colon' },
                                            ':'
                                        ),
                                        ' '
                                    )
                                ),
                                'MEAN Stack, React, JSX, Babel, Pug (formally Jade), Ruby on Rails, jQuery, Bootstrap.',
                                _react2.default.createElement(
                                    'span',
                                    { 'class': 'resumeSkillsHeader' },
                                    _react2.default.createElement(
                                        'i',
                                        null,
                                        ' Design Tools',
                                        _react2.default.createElement(
                                            'span',
                                            { 'class': 'resumeSkillsHeader-colon' },
                                            ':'
                                        ),
                                        ' '
                                    )
                                ),
                                'Photoshop.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'row' },
                            _react2.default.createElement(
                                'h3',
                                { 'class': 'resumeSectionHeader container-fluid pb-2 pt-2' },
                                'Education'
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6 pb-3' },
                                _react2.default.createElement(
                                    'h6',
                                    { 'class': 'resumeCollege' },
                                    'FLORIDA INSTITUTE OF TECHNOLOGY',
                                    _react2.default.createElement(
                                        'span',
                                        { 'class': 'resumeCollegeGrad' },
                                        ' (Melbourne, FL, 2015)'
                                    )
                                ),
                                _react2.default.createElement(
                                    'h6',
                                    { 'class': 'resumeCollege' },
                                    'BACHELOR OF SCIENCE, INFORMATION SYSTEMS'
                                ),
                                _react2.default.createElement(
                                    'h6',
                                    { 'class': 'resumeCollegeGPA' },
                                    'GPA: 3.20/4.00'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { 'class': 'col-sm-6' },
                                _react2.default.createElement(
                                    'h6',
                                    { 'class': 'resumeCollege' },
                                    'EASTERN FLORIDA STATE COLLEGE',
                                    _react2.default.createElement(
                                        'span',
                                        { 'class': 'resumeCollegeGrad' },
                                        ' (Melbourne, FL, 2013)'
                                    )
                                ),
                                _react2.default.createElement(
                                    'h6',
                                    { 'class': 'resumeCollege' },
                                    'ASSOCIATE OF ARTS, GENERAL EDUCATION'
                                ),
                                _react2.default.createElement(
                                    'h6',
                                    { 'class': 'resumeCollegeGPA' },
                                    'GPA: 3.09/4.00'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Resume;
}(_react.Component);

exports.default = Resume;