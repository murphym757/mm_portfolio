import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class BVThemeCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card bvt-card">
                            <div class="pt-5 pb-5 pl-4 pr-4">
                                <img class="img-thumbnail-bvt img-fluid pulsate-fwd img-thumbnail" src="./src/app/components/projects/bvThemeGenerator/bvtLogo.svg" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h6 class="projectName">BV Theme Generator</h6> <i class="far fa-gem"></i>
                    </div>
                </div>
            </div>
        )
    }
}