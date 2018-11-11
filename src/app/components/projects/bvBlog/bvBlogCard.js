import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class BVBlogCard extends Component {
    render() {
        return (
            <div>
                <div class="row project-card">
                    <div class="col-12">
                        <div class="card bvb-card">
                            <div class="pt-5 pb-5">
                                <img class="img-thumbnail-bvb img-fluid" src="./src/app/components/projects/bvBlog/bvbLogo.svg" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <h5 class="projectName">BV Blog</h5> <i class="fab fa-node-js"></i>
                    </div>
                </div>
            </div>
        )
    }
}