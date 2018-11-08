import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <h6 class="footer col-12 pt-3 pb-1"><i class="fas fa-copyright"></i> Maurice Murphy</h6>
                </div>
            </div>
          )
      }
}