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
                                <img class="img-thumbnail-sp img-fluid" src="./src/app/components/projects/segaParadise/spLogo.svg" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">Sega Paradise</h5> <i class="far fa-gem"></i>
                    </div>
                </div>
            </div>
          )
      }
}