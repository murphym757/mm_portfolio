import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header.js';
import Contact from '../personalInfo/contact.js';
import AboutMe from '../personalInfo/aboutMe.js';
import NavLinksAboutMe from '../design/navLinksAboutMe.js';


export default class Navigation extends Component {
    render() {
        return (
            <div> 
                <div class="container-fluid">
                <div class="row">
                    <h3 class="jobTitleHeader col-sm-6">Full-Stack Developer</h3>
                    <div class="col-sm-6 pb-3">
                        <NavLinksAboutMe />
                    </div>
                </div>
                <div class="container-fluid pt-3">
                    <div class="row">
                    <h3 class="heading-title pb-2 col-sm-6">About Me</h3>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 pb-5">
                        <AboutMe />
                        </div>
                        <div class="col-sm-6 contactSection">
                        <Contact />
                    </div>
                    </div>
                </div>
                </div>
            </div>
          )
      }
}