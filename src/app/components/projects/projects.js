import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavLinksProjects from '../projects/navLinksProjects.js';
import ProjectName from './projectName.js';
import Footer from '../design/footer.js';
import {
    segaParadise,
    mmPortfolio,
    bvVinyl,
    bvThemeGenerator,
    breakout,
    cfBlog,
    bvBlog,
    baysideVaporwave,
    cryptocoincount,
    newMMPortfolio,
    popArtWeather,
    segaParadise2,
    souse
} from '../../../server/quickDB';
import {
    HeadingTitle,
    JobTitleHeader
} from '../../assets/styles/designStyling';
import {
    BtnLink,
    CardHeader,
    CardBody
} from '../../assets/styles/projectsStyling';
import {
    CustomIcon
} from '../../assets/styles/fontAwesomeStyling';
import {
    SwingInTopDiv
} from '../../assets/styles/mainStyling';

export default function Projects(props) {
    const [card13, setStateCard13] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading13">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                            <div class="row pl-2 pr-2">
                                Souse <CustomIcon className="fab fa-react fa-react-ccc"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse13" class="collapse" aria-labelledby="heading13" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {souse.projectName}
                            projectRoleProp = {souse.projectRole}
                            projectDescriptionProp = {souse.projectDescription}
                            projectUtilitiesProp = {souse.projectUtilities}
                            projectSiteProp = {souse.projectSite}
                            projectGithubProp = {souse.projectGithub}
                            projectImage1Prop = {souse.projectImage1}
                            projectImage2Prop = {souse.projectImage2}
                            projectImage3Prop = {souse.projectImage3}
                            projectImage4Prop = {souse.projectImage4}
                            projectCarouselProp = {"souseCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card12, setStateCard12] = useState({
        card: 
            <div class="card">
                <CardHeader className="container" id="heading12">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                            <div class="row pl-2 pr-2">
                                Sega Paradise 2 <CustomIcon className="fab fa-react fa-react-ccc"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse12" class="collapse" aria-labelledby="heading12" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {segaParadise2.projectName}
                            projectRoleProp = {segaParadise2.projectRole}
                            projectDescriptionProp = {segaParadise2.projectDescription}
                            projectUtilitiesProp = {segaParadise2.projectUtilities}
                            projectSiteProp = {segaParadise2.projectSite}
                            projectGithubProp = {segaParadise2.projectGithub}
                            projectImage1Prop = {segaParadise2.projectImage1}
                            projectImage2Prop = {segaParadise2.projectImage2}
                            projectImage3Prop = {segaParadise2.projectImage3}
                            projectImage4Prop = {segaParadise2.projectImage4}
                            projectCarouselProp = {"segaParadise2Carousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card11, setStateCard11] = useState({
        card: 
            <div class="card">
                <CardHeader className="container" id="heading11">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                            <div class="row pl-2 pr-2">
                            PopArtWeather <CustomIcon className="fab fa-react fa-react-ccc"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse11" class="collapse" aria-labelledby="heading11" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {popArtWeather.projectName}
                            projectRoleProp = {popArtWeather.projectRole}
                            projectDescriptionProp = {popArtWeather.projectDescription}
                            projectUtilitiesProp = {popArtWeather.projectUtilities}
                            projectSiteProp = {popArtWeather.projectSite}
                            projectGithubProp = {popArtWeather.projectGithub}
                            projectImage1Prop = {popArtWeather.projectImage1}
                            projectImage2Prop = {popArtWeather.projectImage2}
                            projectImage3Prop = {popArtWeather.projectImage3}
                            projectImage4Prop = {popArtWeather.projectImage4}
                            projectCarouselProp = {"popArtWeatherCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card10, setStateCard10] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading10">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                            <div class="row pl-2 pr-2">
                                Portfolio (React) <CustomIcon className="fab fa-react fa-react-ccc"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse10" class="collapse" aria-labelledby="heading10" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {newMMPortfolio.projectName}
                            projectRoleProp = {newMMPortfolio.projectRole}
                            projectDescriptionProp = {newMMPortfolio.projectDescription}
                            projectUtilitiesProp = {newMMPortfolio.projectUtilities}
                            projectSiteProp = {newMMPortfolio.projectSite}
                            projectGithubProp = {newMMPortfolio.projectGithub}
                            projectImage1Prop = {newMMPortfolio.projectImage1}
                            projectImage2Prop = {newMMPortfolio.projectImage2}
                            projectImage3Prop = {newMMPortfolio.projectImage3}
                            projectImage4Prop = {newMMPortfolio.projectImage4}
                            projectCarouselProp = {"newMMPortfolioCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card9, setStateCard9] = useState({
        card: 
            <div class="card">
                <CardHeader className="container" id="heading9">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                            <div class="row pl-2 pr-2">
                                CryptoCoinCount <CustomIcon className="fab fa-react fa-react-ccc"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse9" class="collapse" aria-labelledby="heading9" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {cryptocoincount.projectName}
                            projectRoleProp = {cryptocoincount.projectRole}
                            projectDescriptionProp = {cryptocoincount.projectDescription}
                            projectUtilitiesProp = {cryptocoincount.projectUtilities}
                            projectSiteProp = {cryptocoincount.projectSite}
                            projectGithubProp = {cryptocoincount.projectGithub}
                            projectImage1Prop = {cryptocoincount.projectImage1}
                            projectImage2Prop = {cryptocoincount.projectImage2}
                            projectImage3Prop = {cryptocoincount.projectImage3}
                            projectImage4Prop = {cryptocoincount.projectImage4}
                            projectCarouselProp = {"cryptocoincountCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card8, setStateCard8] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading8">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            <div class="row pl-2 pr-2">
                                Bayside Vaporwave <CustomIcon className="fab fa-react fa-react-bvv"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse8" class="collapse" aria-labelledby="heading8" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {baysideVaporwave.projectName}
                            projectRoleProp = {baysideVaporwave.projectRole}
                            projectDescriptionProp = {baysideVaporwave.projectDescription}
                            projectUtilitiesProp = {baysideVaporwave.projectUtilities}
                            projectSiteProp = {baysideVaporwave.projectSite}
                            projectGithubProp = {baysideVaporwave.projectGithub}
                            projectImage1Prop = {baysideVaporwave.projectImage1}
                            projectImage2Prop = {baysideVaporwave.projectImage2}
                            projectImage3Prop = {baysideVaporwave.projectImage3}
                            projectImage4Prop = {baysideVaporwave.projectImage4}
                            projectCarouselProp = {"baysideVaporwaveCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card7, setStateCard7] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading7">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            <div class="row pl-2 pr-2">
                                BV Blog <CustomIcon className="fab fa-node-js fa-node-js-bvb"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse7" class="collapse" aria-labelledby="heading7" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {bvBlog.projectName}
                            projectRoleProp = {bvBlog.projectRole}
                            projectDescriptionProp = {bvBlog.projectDescription}
                            projectUtilitiesProp = {bvBlog.projectUtilities}
                            projectSiteProp = {bvBlog.projectSite}
                            projectGithubProp = {bvBlog.projectGithub}
                            projectImage1Prop = {bvBlog.projectImage1}
                            projectImage2Prop = {bvBlog.projectImage2}
                            projectImage3Prop = {bvBlog.projectImage3}
                            projectImage4Prop = {bvBlog.projectImage4}
                            projectCarouselProp = {"bvBlogCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card6, setStateCard6] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading6">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            <div class="row pl-2 pr-2">
                                Crossfader Blog <CustomIcon className="far fa-gem fa-gem-cf"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {cfBlog.projectName}
                            projectRoleProp = {cfBlog.projectRole}
                            projectDescriptionProp = {cfBlog.projectDescription}
                            projectUtilitiesProp = {cfBlog.projectUtilities}
                            projectSiteProp = {cfBlog.projectSite}
                            projectGithubProp = {cfBlog.projectGithub}
                            projectImage1Prop = {cfBlog.projectImage1}
                            projectImage2Prop = {cfBlog.projectImage2}
                            projectImage3Prop = {cfBlog.projectImage3}
                            projectImage4Prop = {cfBlog.projectImage4}
                            projectCarouselProp = {"cfBlogCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card5, setStateCard5] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading5">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            <div class="row pl-2 pr-2">
                                BREAKOUT! JS Game <CustomIcon className="fab fa-node-js fa-node-js-bo"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {breakout.projectName}
                            projectRoleProp = {breakout.projectRole}
                            projectDescriptionProp = {breakout.projectDescription}
                            projectUtilitiesProp = {breakout.projectUtilities}
                            projectSiteProp = {breakout.projectSite}
                            projectGithubProp = {breakout.projectGithub}
                            projectImage1Prop = {breakout.projectImage1}
                            projectImage2Prop = {breakout.projectImage2}
                            projectImage3Prop = {breakout.projectImage3}
                            projectImage4Prop = {breakout.projectImage4}
                            projectCarouselProp = {"breakoutCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card4, setStateCard4] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading4">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            <div class="row pl-2 pr-2">
                                BV Theme Generator <CustomIcon className="far fa-gem fa-gem-bvt"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {bvThemeGenerator.projectName}
                            projectRoleProp = {bvThemeGenerator.projectRole}
                            projectDescriptionProp = {bvThemeGenerator.projectDescription}
                            projectUtilitiesProp = {bvThemeGenerator.projectUtilities}
                            projectSiteProp = {bvThemeGenerator.projectSite}
                            projectGithubProp = {bvThemeGenerator.projectGithub}
                            projectImage1Prop = {bvThemeGenerator.projectImage1}
                            projectImage2Prop = {bvThemeGenerator.projectImage2}
                            projectImage3Prop = {bvThemeGenerator.projectImage3}
                            projectImage4Prop = {bvThemeGenerator.projectImage4}
                            projectCarouselProp = {"bvThemeGeneratorCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card3, setStateCard3] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading3">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            <div class="row pl-2 pr-2">
                                Bayside Vinyl <CustomIcon className="far fa-gem fa-gem-bv"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {bvVinyl.projectName}
                            projectRoleProp = {bvVinyl.projectRole}
                            projectDescriptionProp = {bvVinyl.projectDescription}
                            projectUtilitiesProp = {bvVinyl.projectUtilities}
                            projectSiteProp = {bvVinyl.projectSite}
                            projectGithubProp = {bvVinyl.projectGithub}
                            projectImage1Prop = {bvVinyl.projectImage1}
                            projectImage2Prop = {bvVinyl.projectImage2}
                            projectImage3Prop = {bvVinyl.projectImage3}
                            projectImage4Prop = {bvVinyl.projectImage4}
                            projectCarouselProp = {"bvVinylCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card2, setStateCard2] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading2">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            <div class="row pl-2 pr-2">
                                Portfolio (RoR) <CustomIcon className="far fa-gem fa-gem-mm"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {mmPortfolio.projectName}
                            projectRoleProp = {mmPortfolio.projectRole}
                            projectDescriptionProp = {mmPortfolio.projectDescription}
                            projectUtilitiesProp = {mmPortfolio.projectUtilities}
                            projectSiteProp = {mmPortfolio.projectSite}
                            projectGithubProp = {mmPortfolio.projectGithub}
                            projectImage1Prop = {mmPortfolio.projectImage1}
                            projectImage2Prop = {mmPortfolio.projectImage2}
                            projectImage3Prop = {mmPortfolio.projectImage3}
                            projectImage4Prop = {mmPortfolio.projectImage4}
                            projectCarouselProp = {"mmPortfolioCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });
    const [card1, setStateCard1] = useState({
        card:
            <div class="card">
                <CardHeader className="container" id="heading1">
                    <h5 class="mb-auto">
                        <BtnLink className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                            <div class="row pl-2 pr-2">
                                Sega Paradise <CustomIcon className="far fa-gem fa-gem-sp"></CustomIcon>
                            </div>
                        </BtnLink>
                    </h5>
                </CardHeader>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#accordionExample">
                    <CardBody>
                        <ProjectName 
                            projectNameProp = {segaParadise.projectName}
                            projectRoleProp = {segaParadise.projectRole}
                            projectDescriptionProp = {segaParadise.projectDescription}
                            projectUtilitiesProp = {segaParadise.projectUtilities}
                            projectSiteProp = {segaParadise.projectSite}
                            projectGithubProp = {segaParadise.projectGithub}
                            projectImage1Prop = {segaParadise.projectImage1}
                            projectImage2Prop = {segaParadise.projectImage2}
                            projectImage3Prop = {segaParadise.projectImage3}
                            projectImage4Prop = {segaParadise.projectImage4}
                            projectCarouselProp = {"segaParadiseCarousel"}/>
                    </CardBody>
                </div>
            </div>
    });

    return (
        <div> 
            <SwingInTopDiv className="container-fluid">
                <div class="row">
                    <JobTitleHeader className="col-sm-6">Full-Stack Developer</JobTitleHeader>
                    <div class="col-sm-6 pb-3">
                        <NavLinksProjects />
                    </div>
                </div>
                <div class="pt-3">
                    <div class="container-fluid">
                        <div class="row pb-3">
                            <HeadingTitle className="pb-2 col-sm-6">Projects</HeadingTitle>
                        </div>
                        <div class="row justify-content-center">
                            <div class="container-fluid m-0 p-0">
                                <div class="accordion" id="accordionExample">
                                    {card13.card}
                                    {card12.card}
                                    {card11.card}
                                    {card10.card}
                                    {card9.card}
                                    {card8.card}
                                    {card7.card}
                                    {card6.card}
                                    {card5.card}
                                    {card4.card}
                                    {card3.card}
                                    {card2.card}
                                    {card1.card}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwingInTopDiv>
            <Footer/>
        </div>
    )
}