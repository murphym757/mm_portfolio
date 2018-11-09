import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class BVVaporwaveCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card bvv-card">
                            <div class="pt-5 pb-5">
                                <img src="./src/app/assets/images/baysideVaporwave/BVVLogo.svg" alt="Card Image" height="130" width="130" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">Bayside Vaporwave</h5>
                    </div>
                </div>
            </div>
        )
    }
}