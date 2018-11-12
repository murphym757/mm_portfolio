import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksResume from '../personalInfo/NavLinksResume.js';
export default class Resume extends Component {
    render() {
        return (
            <div> 
                <div class="container-fluid swing-in-top-fwd">
                <div class="row">
                    <h3 class="jobTitleHeader col-sm-6">Full-Stack Developer</h3>
                    <div class="col-sm-6 pb-3">
                        <NavLinksResume />
                    </div>
                </div>
                <div class="container-fluid pt-3">
                    <div class="row">
                    <h3 class="heading-title pb-2 col-sm-6">Resume</h3>
                    </div>
                    <div class="row">
                        <h3 class="resumeSectionHeader container-fluid pt-2 pb-1">Work</h3>
                        <div class="col-sm-6 pb-3">
                            <h4 class="jobName">FREELANCE</h4>
                            <h5 class="jobTitle">DESIGNER & DEVELOPER, Jan. 2015 to present</h5>
                            <p class="jobDescription">Develop and design web-based apps with the use of the MEAN Stack, React, Ruby on Rails, Bootstrap and numerous other technologies. Consult with clients about web designs, develop products with the use of wire-framing techniques.</p>
                        </div>
                        <div class="col-sm-6">
                            <h4 class="jobName">FLORIDA INSTITUTE OF TECHNOLOGY</h4>
                            <h5 class="jobTitle">TECHNICAL SUPPORT TECHNICIAN, Melbourne, FL, Jan. 2015 to May. 2015</h5>
                            <p class="jobDescription">As a technical support technician, I assisted customers with navigating the school's website. As well as, provided a helping hand around the office when my assistance was needed.</p>
                        </div>
                    </div>
                    <div class="row">
                    <h3 class="resumeSectionHeader container-fluid pb-1 pt-2">Skills</h3>
                        <p class="container-fluid pb-3">
                            <span class="resumeSkillsHeader"><i>Version Control<span class="resumeSkillsHeader-colon">:</span> </i></span>Git, GitHub. 
                            <span class="resumeSkillsHeader"><i> Package Managers<span class="resumeSkillsHeader-colon">:</span> </i></span>npm. 
                            <span class="resumeSkillsHeader"><i> Development Tools<span class="resumeSkillsHeader-colon">:</span> </i></span>Heroku, Amazon Web Services, Compass, Agile, Gulp, Webpack. 
                            <span class="resumeSkillsHeader"><i> Languages<span class="resumeSkillsHeader-colon">:</span> </i></span>Ruby, JavaScript, SQL, noSQL, HTML, CSS, SASS. 
                            <span class="resumeSkillsHeader"><i> Frameworks & Libraries<span class="resumeSkillsHeader-colon">:</span> </i></span>MEAN Stack, React, JSX, Babel, Pug (formally Jade), Ruby on Rails, jQuery, Bootstrap. 
                            <span class="resumeSkillsHeader"><i> Design Tools<span class="resumeSkillsHeader-colon">:</span> </i></span>Photoshop.
                        </p>
                    </div>
                    <div class="row">
                    <h3 class="resumeSectionHeader container-fluid pb-2 pt-2">Education</h3>
                        <div class="col-sm-6 pb-3">
                            <h6 class="resumeCollege">FLORIDA INSTITUTE OF TECHNOLOGY<span class="resumeCollegeGrad"> (Melbourne, FL, 2015)</span></h6>
                            <h6 class="resumeCollege">BACHELOR OF SCIENCE, INFORMATION SYSTEMS</h6>
                            <h6 class="resumeCollegeGPA">GPA: 3.20/4.00</h6>
                        </div>
                        <div class="col-sm-6">
                            <h6 class="resumeCollege">EASTERN FLORIDA STATE COLLEGE<span class="resumeCollegeGrad"> (Melbourne, FL, 2013)</span></h6>
                            <h6 class="resumeCollege">ASSOCIATE OF ARTS, GENERAL EDUCATION</h6>
                            <h6 class="resumeCollegeGPA">GPA: 3.09/4.00</h6>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          )
      }
}