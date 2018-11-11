import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class OGPortfolioCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card og-card">
                            <div class="pt-5 pb-5 pl-4 pr-4">
                                <img class="img-thumbnail-og img-fluid pulsate-fwd img-thumbnail" src="./src/app/components/projects/mmPortfolio/personalLogo.svg" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h6 class="projectName">Portfolio (RoR)</h6> <i class="far fa-gem"></i>
                    </div>
                </div>
            </div>
        )
    }
}