import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navigation from '../design/navigation.js';
import ProjectCards from '../projectCards/projectCards.js';
import Header from '../design/header.js';
import Footer from '../design/footer.js'

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div class="container-fluid p-auto">
                        <div class="container-fluid pt-3">
                            <div class="card main-card">
                            <Link class="nameHeader-Link" to="/">
                                <Header />
                            </Link>   
                                {/*Routes*/}
                                <Switch>
                                    <Route exact path="/" component={Navigation}/>
                                    <Route exact path="/projects" component={ProjectCards}/>
                                </Switch>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
          );
      }
}