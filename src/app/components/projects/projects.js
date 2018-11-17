import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavLinksProjects from '../projects/navLinksProjects.js';

import CryptoCoinCount from './cryptocoincount.js';
import BaysideVaporwave from './baysideVaporwave.js';
import BVBlog from './bvBlog.js';
import CFBlog from './cfBlog.js';
import Breakout from './breakout.js';
import BVThemeGenerator from './bvThemeGenerator.js';
import BaysideVinyl from './bvVinyl.js';
import MMPortfolio from './mmPortfolio.js';
import SegaParadise from './segaParadise.js';

export default class Projects extends Component {
    render() {
        return (
            <div> 
                <div class="swing-in-top-fwd">
                    <div class="row">
                        <h3 class="jobTitleHeader col-sm-6">Full-Stack Developer</h3>
                        <div class="col-sm-6 pb-3">
                            <NavLinksProjects />
                        </div>
                    </div>
                    <div class="pt-3">
                    <div class="container-fluid">
                        <div class="row">
                            <h3 class="heading-title pb-2 col-sm-6">Projects</h3>
                        </div>
                        <div class="row justify-content-center">
                        <div class="container-fluid">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <div class="row">
                                                    CryptoCoinCount <i class="fab fa-react fa-react-ccc"></i>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <CryptoCoinCount />
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <div class="row">
                                                    Bayside Vaporwave <i class="fab fa-react fa-react-bvv"></i>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <BaysideVaporwave />
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <div class="row">
                                                BV Blog <i class="fab fa-node-js fa-node-js-bvb"></i>
                                            </div>
                                        </button>
                                    </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body">
                                           <BVBlog />
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <div class="row">
                                                    Crossfader Blog <i class="far fa-gem fa-gem-cf"></i>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <CFBlog />
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFive">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <div class="row">
                                                    BREAKOUT! JS Game <i class="fab fa-node-js fa-node-js-bo"></i>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <Breakout />
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingSix">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                <div class="row">
                                                    BV Theme Generator <i class="far fa-gem fa-gem-bvt"></i>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <BVThemeGenerator />
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingSeven">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                <div class="row">
                                                    Bayside Vinyl <i class="far fa-gem fa-gem-bv"></i>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <BaysideVinyl />
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingEight">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                <div class="row">
                                                    Portfolio (RoR) <i class="far fa-gem fa-gem-mm"></i>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <MMPortfolio />
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingNine">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                <div class="row">
                                                    Sega Paradise <i class="far fa-gem fa-gem-sp"></i>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <SegaParadise />
                                        </div>
                                    </div>
                                </div>
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