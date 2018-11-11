import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class CCCCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card ccc-card">
                            <div class="pt-5 pb-5 pl-4 pr-4">
                                <img class="img-thumbnail-ccc img-fluid pulsate-fwd img-thumbnail" src="./src/app/components/projects/cryptocoincount/cccLogo.svg" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h6 class="projectName">CryptoCoinCount</h6> <i class="fab fa-react"></i>
                    </div>
                </div>
            </div>
        )
    }
}