import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class BVThemeCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card bvt-card">
                            <div class="pt-5 pb-5">
                                <img src="./src/app/assets/images/bvThemeGenerator/IMG_8723.JPG" alt="Card Image" height="135" width="135" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">BV Theme Generator</h5>
                    </div>
                </div>
            </div>
        )
    }
}