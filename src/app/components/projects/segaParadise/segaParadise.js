import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from '../navLinksProjects';
import SPCarousel from './segaParadiseCarousel.js';


export default class SegaParadise extends Component {
    render() {
        return (
            <div> 
                <div class="container-fluid">
                <div class="row">
                    <h3 class="jobTitleHeader col-sm-6">Full-Stack Developer</h3>
                    <div class="col-sm-6 pb-3">
                        <NavLinksProjects />
                    </div>
                </div>
                <div class="container-fluid pt-3">
                    <div class="row">
                        <h3 class="heading-title-project col-sm-6">Sega Paradise</h3>
                    </div>
                    <div class="row">
                        <h6 class="heading-title-role pb-2 col-sm-6">Developer & Designer</h6>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 pb-5">
                            <p class="project-description">
                                Sega Paradise is a wikipedia-like website 
                                dedicated to the games of the classic video 
                                game console, Sega Genesis. Once a user creates
                                an account, they are given the ability to upload, 
                                modify, or delete anything they have contributed to the site.
                            </p>
                            <p class="project-description">
                                Built with Ruby on Rails, Bootstrap, HTML5, 
                                CSS3, JQuery, Devise, Amazon S3, Paperclip
                            </p>
                        </div>
                        <div class="col-sm-6 contactSection">
                            <div class="container-fluid pb-2">
                                <SPCarousel />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          )
      }
}