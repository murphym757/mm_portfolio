import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class OGPortfolioCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card og-card">
                            <div class="pt-5 pb-5">
                                <img class="img-thumbnail-og img-fluid" src="./src/app/assets/images/personalLogo.svg" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">Portfolio (RoR)</h5>
                    </div>
                </div>
            </div>
        )
    }
}