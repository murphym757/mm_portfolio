import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavLinksProjects from '../projects/navLinksProjects.js';
import SegaCard from '../projectCards/segaCard.js';
import OGPortfolioCard from '../projectCards/ogPortfolioCard.js';
import BreakoutCard from '../projectCards/breakoutCard.js';
import BVCard from '../projectCards/bvCard.js';
import BVThemeCard from '../projectCards/bvThemeCard.js';
import CCCCard from '../projectCards/cccCard.js';
import BVVaporwaveCard from '../projectCards/bvVaporwaveCard.js';
import CFBlogCard from '../projectCards/cfBlogCard.js';
import BVBlogCard from '../projectCards/bvBlogCard.js';

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
                            <div class="col-sm-3 pb-5">
                                <Link class="cardLink" to="/projects/Sega-Paradise">
                                    <SegaCard />
                                </Link>
                            </div>
                            <div class="col-sm-3 pb-5">
                                <Link class="cardLink" to="/projects/maurice-murphy-portfolio">
                                    <OGPortfolioCard />
                                </Link>
                            </div>
                            <div class="col-sm-3 pb-5">
                                <Link class="cardLink" to="/projects/bayside-vinyl">
                                    <BVCard />
                                </Link>
                            </div>
                            <div class="col-sm-3 pb-5">
                                <Link class="cardLink" to="/projects/bv-theme-generator">
                                    <BVThemeCard />
                                </Link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3 pb-5">
                                <Link class="cardLink" to="/projects/breakout">
                                    <BreakoutCard />
                                </Link>
                            </div>
                            <div class="col-sm-3 pb-5">
                                <Link class="cardLink" to="/projects/crossfader-blog">
                                    <CFBlogCard />
                                </Link>
                            </div>
                            <div class="col-sm-3 pb-5">
                                <Link class="cardLink" to="/projects/bv-blog">
                                    <BVBlogCard />
                                </Link>
                            </div>
                            <div class="col-sm-3 pb-5">
                                <Link class="cardLink" to="/projects/bayside-vaporwave">
                                    <BVVaporwaveCard />
                                </Link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3 pb-5">
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