import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from './navLinksProjects.js';
export default class SegaParadise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {

            }
        };
    }

    componentDidMount() {
        this.segaParadiseContent();
      }

      segaParadiseContent() {
        this.setState({
            project: {
                projectName: "Sega Paradise",
                projectRole: "Developer & Designer",
                projectDescription: "Sega Paradise is a wikipedia-like website dedicated to the games of the classic videogame console, Sega Genesis. Once a user creates an account, they are given the ability to upload, modify, or delete anything they have contributed to the site.",
                projectUtilities: "Built with Ruby on Rails, Bootstrap, HTML5, CSS3, JQuery, Devise, Amazon S3, Paperclip",
                projectSite: "https://segaparadise.herokuapp.com/",
                projectGithub: "https://github.com/murphym757/sega_fansite",
                projectImage1: "https://s3.amazonaws.com/mmportfolioreact/segaParadise/sp-image.png",
                projectImage2: "https://s3.amazonaws.com/mmportfolioreact/segaParadise/sp-image2.png"
            }
        });
      }

      render() {
        return (
            <div> 
                <div class="container-fluid swing-in-top-fwd">
                        <div class="row"> {/* Project Name (Lines 44-46) */}
                            <h3 class="heading-title-project col-sm-6">{this.state.project.projectName}</h3>
                        </div>
                        <div class="row"> {/* Role (Lines 47-49) */}
                            <h6 class="heading-title-role pb-2 col-sm-6">{this.state.project.projectRole}</h6>
                        </div>
                        <div class="row"> {/* Description (Left Side of Page) & Carousel (Right Side of Page) (Lines 50-87) */}
                            <div class="col-sm-6 pb-5"> {/* Description Section (Lines 51-58) */}
                                <p class="project-description float-left"> 
                                    {this.state.project.projectDescription}
                                </p>
                                <p class="project-description float-left">
                                    {this.state.project.projectUtilities}
                                </p>
                            </div>
                            <div class="col-sm-6 contactSection"> {/* Carousel Section (Lines 61-88) */}
                                <div class="container-fluid pb-2">
                                    <div class="container">
                                        <div id="segaParadiseCarousel" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#segaParadiseCarousel" data-slide-to="0" class="active"></li>
                                                <li data-target="#segaParadiseCarousel" data-slide-to="1"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block w-100" src={this.state.project.projectImage1} alt="First slide" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src={this.state.project.projectImage2} alt="Second slide" />
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#segaParadiseCarousel" role="button" data-slide="prev">
                                                <span aria-hidden="true"><i class="fas fa-chevron-left fa-2x"></i></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#segaParadiseCarousel" role="button" data-slide="next">
                                                <span aria-hidden="true"><i class="fas fa-chevron-right fa-2x"></i></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row"> {/* Links Section (Lines 88-109) */}
                            <div class="col-sm-6 pt-1">
                                <div class="row">
                                    <div class="col-6"> {/* Site Link (Lines 93-100) */}
                                        <a class="projectPageLink float-left" href={this.state.project.projectSite} target="_blank">
                                            <div class="row">
                                                <i class="fas fa-external-link-square-alt fa-2x pr-1"></i>
                                                <h3 class="linkTo pl-1">Site</h3>
                                            </div>    
                                        </a>
                                    </div>
                                    <div class="col-6"> {/* Github Link (Lines 100-108) */}
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