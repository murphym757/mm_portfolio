import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class CCCCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card ccc-card">
                        <div class="container-fluid card-img">
                            <div class="pt-5 pb-5">
                                <img src="./src/app/assets/images/cryptocoincount/CryptoCoinCount-logo.svg" alt="Card Image" height="240" width="240" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">CryptoCoinCount</h5>
                    </div>
                </div>
            </div>
        )
    }
}