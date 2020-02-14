import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from './navLinksProjects.js';
import {
    HeadingTitleProject,
    HeadingTitleRole
} from '../../assets/styles/designStyling';
import {
    ContactSection,
    ProjectPageLink,
    ProjectDescription,
    LinkTo
} from '../../assets/styles/projectsStyling';
import {
    CustomIcon
} from '../../assets/styles/fontAwesomeStyling';

export default function ProjectName(props) {
    const projectNameProp = props.projectNameProp;
    const projectRoleProp = props.projectRoleProp;
    const projectDescriptionProp = props.projectDescriptionProp;
    const projectUtilitiesProp = props.projectUtilitiesProp;
    const projectSiteProp = props.projectSiteProp;
    const projectGithubProp = props.projectGithubProp;
    const projectImage1Prop = props.projectImage1Prop;
    const projectImage2Prop = props.projectImage2Prop;
    const projectImage3Prop = props.projectImage3Prop;
    const projectImage4Prop = props.projectImage4Prop;
    const projectCarouselProp = props.projectCarouselProp;
    const [state, setState] = useState({
        projectName: projectNameProp,
        projectRole: projectRoleProp,
        projectDescription: projectDescriptionProp,
        projectUtilities: projectUtilitiesProp,
        projectSite: projectSiteProp,
        projectGithub: projectGithubProp,
        projectImage1: projectImage1Prop,
        projectImage2: projectImage2Prop,
        projectImage3: projectImage3Prop,
        projectImage4: projectImage4Prop,
        projectCarousel: projectCarouselProp,
        projectCarouselHash: "#" + projectCarouselProp
    });
    const [isProjectImage1Prop, setIsProjectImage1Prop] = useState({
        carousel: 
            <div id={state.projectCarousel} class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target={state.projectCarouselHash} data-slide-to="0" class="active"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={state.projectImage1} alt="First slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href={state.projectCarouselHash} role="button" data-slide="prev">
                    <span aria-hidden="true"><CustomIcon className="fas fa-chevron-left fa-2x"></CustomIcon></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href={state.projectCarouselHash} role="button" data-slide="next">
                    <span aria-hidden="true"><CustomIcon className="fas fa-chevron-right fa-2x"></CustomIcon></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    });
    const [isProjectImage2Prop, setIsProjectImage2Prop] = useState({
        carousel: 
            <div id={state.projectCarousel} class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target={state.projectCarouselHash} data-slide-to="0" class="active"></li>
                    <li data-target={state.projectCarouselHash} data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={state.projectImage1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={state.projectImage2} alt="Second slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href={state.projectCarouselHash} role="button" data-slide="prev">
                    <span aria-hidden="true"><CustomIcon className="fas fa-chevron-left fa-2x"></CustomIcon></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href={state.projectCarouselHash} role="button" data-slide="next">
                    <span aria-hidden="true"><CustomIcon className="fas fa-chevron-right fa-2x"></CustomIcon></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    });
    const [isProjectImage3Prop, setIsProjectImage3Prop] = useState({
        carousel: 
            <div id={state.projectCarousel} class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target={state.projectCarouselHash} data-slide-to="0" class="active"></li>
                    <li data-target={state.projectCarouselHash} data-slide-to="1"></li>
                    <li data-target={state.projectCarouselHash} data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={state.projectImage1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={state.projectImage2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={state.projectImage3} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href={state.projectCarouselHash} role="button" data-slide="prev">
                    <span aria-hidden="true"><CustomIcon className="fas fa-chevron-left fa-2x"></CustomIcon></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href={state.projectCarouselHash} role="button" data-slide="next">
                    <span aria-hidden="true"><CustomIcon className="fas fa-chevron-right fa-2x"></CustomIcon></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    });
    const [isProjectImage4Prop, setIsProjectImage4Prop] = useState({
        carousel: 
            <div id={state.projectCarousel} class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target={state.projectCarouselHash} data-slide-to="0" class="active"></li>
                    <li data-target={state.projectCarouselHash} data-slide-to="1"></li>
                    <li data-target={state.projectCarouselHash} data-slide-to="2"></li>
                    <li data-target={state.projectCarouselHash} data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={state.projectImage1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={state.projectImage2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={state.projectImage3} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={state.projectImage4} alt="Fourth slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href={state.projectCarouselHash} role="button" data-slide="prev">
                    <span aria-hidden="true"><CustomIcon className="fas fa-chevron-left fa-2x"></CustomIcon></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href={state.projectCarouselHash} role="button" data-slide="next">
                    <span aria-hidden="true"><CustomIcon className="fas fa-chevron-right fa-2x"></CustomIcon></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    });

    return (
        <div class="container-fluid"> 
            <div class="container-fluid">
                    <div class="row"> {/* Project Name (Lines 30-32) */}
                        <HeadingTitleProject className="col-sm-6">{state.projectName}</HeadingTitleProject>
                    </div>
                    <div class="row"> {/* Role (Lines 33-35) */}
                        <HeadingTitleRole className="pb-2 col-sm-6">{state.projectRole}</HeadingTitleRole>
                    </div>
                    <div class="row"> {/* Description (Left Side of Page) & Carousel (Right Side of Page) (Lines 36-103) */}
                        <div class="col-sm-6 pb-3"> {/* Description Section (Lines 37-44) */}
                            <ProjectDescription className="float-left"> 
                                {state.projectDescription}
                            </ProjectDescription>
                            <ProjectDescription className="float-left">
                                {state.projectUtilities}
                            </ProjectDescription>
                        </div>
                        <ContactSection className="col-sm-6"> {/* Carousel Section (Lines 45-102) */}
                            <div class="pb-2">  {/* Carousel Section */}
                                {state.projectImage4 != null
                                    ?   <div>
                                            {isProjectImage4Prop.carousel}
                                        </div>
                                    :   <div>
                                            {state.projectImage3 != null 
                                                ?   <div>{isProjectImage3Prop.carousel}</div>
                                                :   <div>
                                                        {state.projectImage2 != null 
                                                            ?   <div>{isProjectImage2Prop.carousel}</div>
                                                            :   <div>
                                                                    {state.projectImage1 != null 
                                                                        ?   <div>{isProjectImage1Prop.carousel}</div>
                                                                        :   <div></div>
                                                                    } 
                                                                </div>
                                                        }
                                                    </div>
                                            }
                                        </div>
                                }
                            </div>
                        </ContactSection>
                    </div>
                    <div class="row"> {/* Links Section (Lines 104-123) */}
                        <div class="col-sm-6 pt-1">
                            <div class="row">
                                <div class="col-6"> {/* Site Link (Lines 84-91) */}
                                    <ProjectPageLink className="float-left" href={state.projectSite} target="_blank">
                                        <div class="row">
                                            <CustomIcon className="fas fa-external-link-square-alt fa-2x pr-1"></CustomIcon>
                                            <LinkTo className="pl-1">Site</LinkTo>
                                        </div>    
                                    </ProjectPageLink>
                                </div>
                                <div class="col-6"> {/* Github Link (Lines 115-122) */}
                                    <ProjectPageLink className="float-right" href={state.projectGithub} target="_blank">
                                        <div class="row">
                                            <LinkTo className="pr-1">Github</LinkTo>
                                            <CustomIcon className="fab fa-github-square fa-2x pl-1"></CustomIcon>
                                        </div>    
                                    </ProjectPageLink>  
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}