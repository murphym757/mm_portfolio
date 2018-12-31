import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from './navLinksProjects.js';
export default class SegaParadise2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {

            }
        };
    }

    componentDidMount() {
        this.segaParadise2Content();
      }

      segaParadise2Content() {
        this.setState({
            project: {
                projectName: "Sega Paradise 2",
                projectRole: "Developer & Designer",
                projectDescription: "Sega Paradise 2 is a React remake of the original Ruby on Rails app. Similar to the original, Sega Paradise 2 is still a wikipedia-like website dedicated to the games of the classic videogame console, Sega Genesis. It lacks the CRUD capabilities, but with the Giant Bomb API, the user is still able to view the same games from the original. The styling was also a major point of interest. Using Sass, I improved upon the Outrun style of the original Sega Paradise. The overall goal was to revamp Sega Paradise by adding new flair to an otherwise older design.",
                projectUtilities: "Built with React, React-Router, Node.js, HTML5, CSS3/SASS, Javascript ES2015 (formally ES6), JSX, Bootstrap, Webpack, Babel, npm, and Giant Bomb API",
                projectSite: "https://segaparadise2.herokuapp.com/",
                projectGithub: "https://github.com/murphym757/segaparadise2.0",
                projectImage1: "https://s3.amazonaws.com/mmportfolioreact/segaParadise2/sp2-img.png",
                projectImage2: "https://s3.amazonaws.com/mmportfolioreact/segaParadise2/sp2-img2.png"
            }
        });
      }

      render() {
        return (
            <div> 
                <div class="container-fluid">
                        <div class="row"> {/* Project Name (Lines 37-39) */}
                            <h3 class="heading-title-project col-sm-6">{this.state.project.projectName}</h3>
                        </div>
                        <div class="row"> {/* Role (Lines 40-42) */}
                            <h6 class="heading-title-role pb-2 col-sm-6">{this.state.project.projectRole}</h6>
                        </div>
                        <div class="row"> {/* Description (Left Side of Page) & Carousel (Right Side of Page) (Lines 43-80) */}
                            <div class="col-sm-6 pb-3"> {/* Description Section (Lines 44-51) */}
                                <p class="project-description float-left"> 
                                    {this.state.project.projectDescription}
                                </p>
                                <p class="project-description float-left">
                                    {this.state.project.projectUtilities}
                                </p>
                            </div>
                            <div class="col-sm-6 contactSection"> {/* Carousel Section (Lines 52-77) */}
                                <div class="pb-2">
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
                        <div class="row"> {/* Links Section (Lines 81-102) */}
                            <div class="col-sm-6 pt-1">
                                <div class="row">
                                    <div class="col-6"> {/* Site Link (Lines 84-91) */}
                                        <a class="projectPageLink float-left" href={this.state.project.projectSite} target="_blank">
                                            <div class="row">
                                                <i class="fas fa-external-link-square-alt fa-2x pr-1"></i>
                                                <h3 class="linkTo pl-1">Site</h3>
                                            </div>    
                                        </a>
                                    </div>
                                    <div class="col-6"> {/* Github Link (Lines 92-99) */}
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