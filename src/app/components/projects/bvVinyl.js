import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinksProjects from '../projects/navLinksProjects.js';


export default class BVVinyl extends Component {
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
                    <h3 class="heading-title pb-2 col-sm-6">Bayside Vinyl</h3>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 pb-5">
                        <h3>Ma$e</h3>
                        </div>
                        <div class="col-sm-6 contactSection">
                        <h3>Cam'Ron</h3>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          )
      }
}