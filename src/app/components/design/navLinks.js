import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class NavLinks extends Component {
    render() {
        return (
                <div class="navLinksHeader">
                    <h6>
                        <ul>
                            <li><Link class="homeLink-active" to="/">About</Link></li>
                            <li class="pl-2 pr-2 homeDivider">-</li>
                            <li><Link class="homeLink" to="/">Resume</Link></li>
                            <li class="pl-2 pr-2 homeDivider">-</li>
                            <li><Link class="homeLink" to="/">Projects</Link></li>
                            <li class="pl-2 pr-2 homeDivider">-</li>
                            <li>
                                <a 
                                class="homeLink" 
                                href="https://github.com/murphym757" 
                                target="_blank">
                                    <i class="fab fa-github"></i> Github
                                </a>
                            </li>
                        </ul>
                    </h6>
                </div>
          )
      }
}