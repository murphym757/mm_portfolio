import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class BVCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card bv-card">
                            <div class="pt-5 pb-5">
                                <img class="img-thumbnail-bv img-fluid" src="./src/app/components/projects/baysideVinyl/baysideLogo.svg" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">Bayside Vinyl</h5> <i class="far fa-gem"></i>
                    </div>
                </div>
            </div>
        )
    }
}