import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SegaCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card sp-card">
                            <div class="pt-5 pb-5">
                                <img src="./src/app/assets/images/segaParadise/LogoSP.svg" alt="Card Image" height="240" width="240" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">Sega Paradise</h5>
                    </div>
                </div>
            </div>
          )
      }
}