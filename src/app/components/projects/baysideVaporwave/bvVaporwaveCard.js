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
                                <img class="img-thumbnail-bvv img-fluid" src="./src/app/components/projects/baysideVaporwave/bvvLogo.svg" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">Bayside Vaporwave</h5> <i class="fab fa-react"></i>
                    </div>
                </div>
            </div>
        )
    }
}