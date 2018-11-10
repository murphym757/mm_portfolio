import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavLinksProjects from '../projects/navLinksProjects.js';
import SegaCard from './segaParadise/segaCard.js';
import OGPortfolioCard from './mmPortfolio/ogPortfolioCard.js';
import BreakoutCard from './breakout/breakoutCard.js';
import BVCard from './baysideVinyl/bvCard.js';
import BVThemeCard from './bvThemeGenerator/bvThemeCard.js';
import CCCCard from './cryptocoincount/cccCard.js';
import BVVaporwaveCard from './baysideVaporwave/bvVaporwaveCard.js';
import CFBlogCard from './crossfaderBlog/cfBlogCard.js';
import BVBlogCard from './bvBlog/bvBlogCard.js';

export default class Projects extends Component {
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
                            <h3 class="heading-title pb-2 col-sm-6">Projects</h3>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 pb-5">
                                <Link class="cardLink" to="/projects/sega-paradise">
                                    <SegaCard />
                                </Link>
                            </div>
                            <div class="col-sm-4 pb-5">
                                <Link class="cardLink" to="/projects/maurice-murphy-portfolio">
                                    <OGPortfolioCard />
                                </Link>
                            </div>
                            <div class="col-sm-4 pb-5">
                                <Link class="cardLink" to="/projects/bayside-vinyl">
                                    <BVCard />
                                </Link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 pb-5">
                                <Link class="cardLink" to="/projects/bv-theme-generator">
                                    <BVThemeCard />
                                </Link>
                            </div>
                            <div class="col-sm-4 pb-5">
                                <Link class="cardLink" to="/projects/breakout">
                                    <BreakoutCard />
                                </Link>
                            </div>
                            <div class="col-sm-4 pb-5">
                                <Link class="cardLink" to="/projects/crossfader-blog">
                                    <CFBlogCard />
                                </Link>
                            </div>
                            <div class="col-sm-4 pb-5 container-fluid">
                                <Link class="cardLink" to="/projects/bv-blog">
                                    <BVBlogCard />
                                </Link>
                            </div>
                            <div class="col-sm-4 pb-5">
                                <Link class="cardLink" to="/projects/bayside-vaporwave">
                                    <BVVaporwaveCard />
                                </Link>
                            </div>
                            <div class="col-sm-4 pb-5">
                                <Link class="cardLink" to="/projects/cryptocoincount">
                                    <CCCCard />
                                </Link>
                            </div>
                        </div>
 
                    </div>
                </div>
            </div>
          )
      }
}