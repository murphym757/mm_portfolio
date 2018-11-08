import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Contact extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
                <h5 class="contactHeading pb-4">Please feel free to reach me at: </h5>
                    <div class="row pb-4">
                        <div class="col-6">
                            <div class="card contact-card pb-3">
                                <i class="fa fa-envelope fa-4x"></i>
                            </div>
                                <h6><a class="email-link" href="mailto:maurice.murphy757@gmail.com">maurice.murphy757@gmail.com</a></h6>
                        </div>
                        <div class="col-6">
                            <div class="card contact-card pb-3">
                                <i class="fa fa-mobile fa-3x pt-2 pb-2"></i>
                            </div>
                            <h6><a class="phone-link" href="tel:+17864233489">786-423-3489</a></h6>
                        </div>
                    </div>
                </div>
            </div>
          )
      }
}