import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class BreakoutCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card bo-card">
                            <div class="pt-5 pb-5">
                                <img src="./src/app/assets/images/BreakoutJSGame/breakOutLogo.svg" alt="Card Image" height="225" width="225" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">BREAKOUT! JS Game</h5>
                    </div>
                </div>
            </div>
        )
    }
}