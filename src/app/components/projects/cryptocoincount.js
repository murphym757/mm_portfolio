import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from './navLinksProjects.js';
export default class CryptoCoinCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {

            }
        };
    }

    componentDidMount() {
        this.cryptoCoinCountContent();
      }

      cryptoCoinCountContent() {
        this.setState({
            project: {
                projectName: "CryptoCoinCount",
                projectRole: "Developer & Designer",
                projectDescription: "CryptoCoinCount is a cryptocurrency-monitoring app. With the CryptoCompare API, the user is given an up-to-date reflection of the status of a particular coin. Based on their popularity, only six coins are being provided at the moment.",
                projectUtilities: "Built with React, React-Router, Node.js, HTML5, CSS3/SASS, Javascript ES2015 (formally ES6), JSX, Bootstrap, Webpack, Babel, npm, CryptoCompare API, Axios",
                projectSite: "https://cryptocoincount.herokuapp.com/",
                projectGithub: "https://github.com/murphym757/cryptocoincount",
                projectImage1: "https://s3.amazonaws.com/mmportfolioreact/cryptocoincount/CryptoCoinCount-home.png",
                projectImage2: "https://s3.amazonaws.com/mmportfolioreact/cryptocoincount/CryptoCoinCount-litecoin.png"
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
                                    <div id="cryptoCoinCountCarousel" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#cryptoCoinCountCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#cryptoCoinCountCarousel" data-slide-to="1"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src={this.state.project.projectImage1} alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={this.state.project.projectImage2} alt="Second slide" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#cryptoCoinCountCarousel" role="button" data-slide="prev">
                                            <span aria-hidden="true"><i class="fas fa-chevron-left fa-2x"></i></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#cryptoCoinCountCarousel" role="button" data-slide="next">
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