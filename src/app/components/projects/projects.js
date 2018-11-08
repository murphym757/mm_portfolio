import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavLinksProjects from '../projects/navLinksProjects.js';
import SegaCard from '../projectCards/segaCard.js';

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
                            <SegaCard />
                            </div>
                            <div class="col-sm-3 pb-5">
                            <SegaCard />
                            </div>
                            <div class="col-sm-3 pb-5">
                            <SegaCard />
                            </div>
                            <div class="col-sm-3 pb-5">
                            <SegaCard />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3 pb-5">
                            <SegaCard />
                            </div>
                            <div class="col-sm-3 pb-5">
                            <SegaCard />
                            </div>
                            <div class="col-sm-3 pb-5">
                            <SegaCard />
                            </div>
                            <div class="col-sm-3 pb-5">
                            <SegaCard />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3 pb-5">
                            <SegaCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )
      }
}