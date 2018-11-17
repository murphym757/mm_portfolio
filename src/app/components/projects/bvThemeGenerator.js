import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from './navLinksProjects.js';
export default class BVThemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {

            }
        };
    }

    componentDidMount() {
        this.bvThemeContent();
      }

      bvThemeContent() {
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

      render() {
        return (
            <div> 
                <div class="container-fluid">
                        <div class="row"> {/* Project Name (Lines 36-38) */}
                            <h3 class="heading-title-project col-sm-6">{this.state.project.projectName}</h3>
                        </div>
                        <div class="row"> {/* Role (Lines 39-41) */}
                            <h6 class="heading-title-role pb-2 col-sm-6">{this.state.project.projectRole}</h6>
                        </div>
                        <div class="row"> {/* Description (Left Side of Page) & Carousel (Right Side of Page) (Lines 42-64) */}
                            <div class="col-sm-6 pb-3"> {/* Description Section (Lines 43-50) */}
                                <p class="project-description float-left"> 
                                    {this.state.project.projectDescription}
                                </p>
                                <p class="project-description float-left">
                                    {this.state.project.projectUtilities}
                                </p>
                            </div>
                            <div class="col-sm-6 contactSection"> {/* Carousel Section (Lines 51-61) */}
                                <div class="pb-2">
                                    <div id="bvThemeGeneratorCarousel" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src={this.state.project.projectImage1} alt="First slide" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row"> {/* Links Section (Lines 65-86) */}
                            <div class="col-sm-6 pt-1">
                                <div class="row">
                                    <div class="col-6"> {/* Site Link (Lines 68-75) */}
                                        <a class="projectPageLink float-left" href={this.state.project.projectSite} target="_blank">
                                            <div class="row">
                                                <i class="fas fa-external-link-square-alt fa-2x pr-1"></i>
                                                <h3 class="linkTo pl-1">Site</h3>
                                            </div>    
                                        </a>
                                    </div>
                                    <div class="col-6"> {/* Github Link (Lines 76-83) */}
                                        <a class="projectPageLink float-right" href={this.state.project.projectGithub} target="_blank">
                                            <div class="row">
                                                <h3 class="linkTo pr-1">Github</h3>
                                                <i class="fab fa-github-square fa-2x pl-1"></i>
                                            </div>    
                                        </a>  
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}