import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class CFBlogCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card cf-card">
                        <div class="container-fluid card-img">
                            <div class="pt-5 pb-5">
                                <img class="img-thumbnail-cf img-fluid" src="./src/app/assets/images/cfBlog/cf-blog_logo.svg" alt="Card Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">Crossfader Blog</h5> <i class="far fa-gem"></i>
                    </div>
                </div>
            </div>
        )
    }
}