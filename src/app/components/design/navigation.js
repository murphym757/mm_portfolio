import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header.js';
import Contact from '../personalInfo/contact.js';
import AboutMe from '../personalInfo/aboutMe.js';
import NavLinksAboutMe from './navLinksAboutMe';
import Footer from './footer';
import {
    JobTitleHeader,
    HeadingTitle
} from '../../assets/styles/designStyling';
import {
    ContactSection
} from '../../assets/styles/projectsStyling';
import {
    SwingInTopDiv
} from '../../assets/styles/mainStyling';

export default function Navigation(props) {
    return (
        <div> 
            <SwingInTopDiv className="container-fluid m-0 p-0">
                <div class="row">
                    <JobTitleHeader className="col-sm-6">Full-Stack Developer</JobTitleHeader>
                    <div class="col-sm-6 pb-3">
                        <NavLinksAboutMe />
                    </div>
                </div>
                <div class="container-fluid pt-3">
                    <div class="row">
                        <HeadingTitle className="pb-2 col-sm-6">About Me</HeadingTitle>
                    </div>
                        <div class="d-none d-xl-block container-fluid pt-2"> {/* For larger Sceens */}
                            <div class="row">
                                <div class="col-12 pb-5">
                                    <AboutMe />
                                </div>
                                <ContactSection className="col-12">
                                    <Contact />
                                </ContactSection>
                            </div>
                        </div>
                        <div class="d-xl-none container-fluid"> {/* For smaller Sceens */}
                            <div class="row">
                                <div class="col-sm-6 pb-5">
                                    <AboutMe />
                                </div>
                                <ContactSection className="col-sm-6">
                                    <Contact />
                                </ContactSection>
                            </div>
                        </div>
                    <Footer/>
                </div>
            </SwingInTopDiv>
        </div>
    )
}