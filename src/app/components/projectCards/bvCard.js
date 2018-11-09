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
                                <img src="./src/app/assets/images/baysideVinyl/Bayside Logo.svg" alt="Card Image" height="135" width="135" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">Bayside Vinyl</h5>
                    </div>
                </div>
            </div>
        )
    }
}