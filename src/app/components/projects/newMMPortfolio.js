import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from './navLinksProjects.js';
export default class NewMMPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {

            }
        };
    }

    componentDidMount() {
        this.bvBlogContent();
      }

      bvBlogContent() {
        this.setState({
            project: {
                projectName: "Portfolio (React)",
                projectRole: "Developer & Designer",
                projectDescription: "The purpose is to give a viewer a small glimpse of how I create. Whether it’d be the process behind designing and developing the site. Perhaps, even creating the background from scratch in Adobe Illustrator. Speaking of which, the influence behind the design for the background comes directly from the Memphis Design Group. In the end, my goal is show the growth between my old and new portfolio and beyond.",
                projectUtilities: "Built with React, React-Router, Node.js, HTML5, CSS3/SASS, Javascript ES2015 (formally ES6), JSX, Bootstrap, Webpack, Babel, and npm",
                projectSite: "https://mauricemurphy.herokuapp.com/",
                projectGithub: "https://github.com/murphym757/mm_portfolio",
                projectImage1: "https://s3.amazonaws.com/mmportfolioreact/mmportfolio/portfolioimg.png",
                projectImage2: "https://s3.amazonaws.com/mmportfolioreact/mmportfolio/portfolioimg2.png",
                projectImage3: "https://s3.amazonaws.com/mmportfolioreact/mmportfolio/portfolioimg4.png",
                projectImage4: "https://s3.amazonaws.com/mmportfolioreact/mmportfolio/portfolioimg3.png"
            }
        });
      }

      render() {
        return (
            <div> 
                <div class="container-fluid">
                        <div class="row"> {/* Project Name (Lines 39-41) */}
                            <h3 class="heading-title-project col-sm-6">{this.state.project.projectName}</h3>
                        </div>
                        <div class="row"> {/* Role (Lines 42-44) */}
                            <h6 class="heading-title-role pb-2 col-sm-6">{this.state.project.projectRole}</h6>
                        </div>
                        <div class="row"> {/* Description (Left Side of Page) & Carousel (Right Side of Page) (Lines 45-90) */}
                            <div class="col-sm-6 pb-3"> {/* Description Section (Lines 46-53) */}
                                <p class="project-description float-left"> 
                                    {this.state.project.projectDescription}
                                </p>
                                <p class="project-description float-left">
                                    {this.state.project.projectUtilities}
                                </p>
                            </div>
                            <div class="col-sm-6 contactSection"> {/* Carousel Section (Lines 54-87) */}
                                <div class="pb-2">
                                    <div id="newMMCarousel" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#newMMCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#newMMCarousel" data-slide-to="1"></li>
                                            <li data-target="#newMMCarousel" data-slide-to="2"></li>
                                            <li data-target="#newMMCarousel" data-slide-to="3"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src={this.state.project.projectImage1} alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={this.state.project.projectImage2} alt="Second slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={this.state.project.projectImage3} alt="Third slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={this.state.project.projectImage4} alt="Fourth slide" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#newMMCarousel" role="button" data-slide="prev">
                                            <span aria-hidden="true"><i class="fas fa-chevron-left fa-2x"></i></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#newMMCarousel" role="button" data-slide="next">
                                            <span aria-hidden="true"><i class="fas fa-chevron-right fa-2x"></i></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row"> {/* Links Section (Lines 91-113) */}
                            <div class="col-sm-6 pt-1">
                                <div class="row">
                                    <div class="col-6"> {/* Site Link (Lines 94-101) */}
                                        <a class="projectPageLink float-left" href={this.state.project.projectSite} target="_blank">
                                            <div class="row">
                                                <i class="fas fa-external-link-square-alt fa-2x pr-1"></i>
                                                <h3 class="linkTo pl-1">Site</h3>
                                            </div>    
                                        </a>
                                    </div>
                                    <div class="col-6"> {/* Github Link (Lines 102-109) */}
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