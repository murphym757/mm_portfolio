import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from '../navLinksProjects';
export default class BVBlog extends Component {
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
                projectName: "Bayside Blog",
                projectRole: "Developer & Designer",
                projectDescription: "A Restful CRUD API built with Node.js, Express and MongoDB. This is essentially an extension to the Bayside Vinyl brand. It gives the user (once they’ve signed up) CRUD abilities over all posts. The intent is to create a community of like-minded individuals who love discovering new music.",
                projectUtilities: "Built with MEAN Stack, Pug (formally Jade), HTML5, CSS3/SASS, Javascript (ES6), Bootstrap, Gulp, npm",
                projectSite: "https://bvblog.herokuapp.com/posts",
                projectGithub: "https://github.com/murphym757/bvblog",
                projectImage1: "https://s3.amazonaws.com/mmportfolioreact/bvBlog/bvblog-landingpage.png",
                projectImage2: "https://s3.amazonaws.com/mmportfolioreact/bvBlog/bvblog-home.png",
                projectImage3: "https://s3.amazonaws.com/mmportfolioreact/bvBlog/bvblog-show.png",
                projectImage4: "https://s3.amazonaws.com/mmportfolioreact/bvBlog/bvblog-update.png"
            }
        });
      }

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
                                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
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
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span aria-hidden="true"><i class="fas fa-chevron-left fa-2x"></i></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span aria-hidden="true"><i class="fas fa-chevron-right fa-2x"></i></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row"> {/* Links Section (Lines 88-109) */}
                            <div class="col-sm-6 pt-1 pb-1">
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
            </div>
          )
      }
}