import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navigation from '../design/navigation.js';
import Projects from '../projects/projects.js';
import Header from '../design/header.js';
import Footer from '../design/footer.js';

// Routes
import SegaParadise from '../projects/segaParadise.js';
import MMPortfolio from '../projects/mmPortfolio.js';
import BVVinyl from '../projects/bvVinyl.js';
import BVThemeGenerator from '../projects/bvThemeGenerator.js';
import Breakout from '../projects/breakout.js';
import CFBlog from '../projects/cfBlog.js';
import BVBlog from '../projects/bvBlog.js';
import BaysideVaporwave from '../projects/baysideVaporwave.js';
import CryptoCoinCount from '../projects/cryptocoincount.js';

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div class="container-fluid p-auto">
                        <div class="container-fluid pt-3 pb-3">
                            <div class="card main-card">
                            <Link class="nameHeader-Link" to="/">
                                <Header />
                            </Link>   
                                {/*Routes*/}
                                <Switch>
                                    <Route exact path="/" component={Navigation}/>
                                    <Route exact path="/projects" component={Projects}/>
                                    <Route exact path="/projects/sega-paradise" component={SegaParadise}/>
                                    <Route exact path="/projects/maurice-murphy-portfolio" component={MMPortfolio}/>
                                    <Route exact path="/projects/bayside-vinyl" component={BVVinyl}/>
                                    <Route exact path="/projects/bv-theme-generator" component={BVThemeGenerator}/>
                                    <Route exact path="/projects/breakout" component={Breakout}/>
                                    <Route exact path="/projects/crossfader-blog" component={CFBlog}/>
                                    <Route exact path="/projects/bv-blog" component={BVBlog}/>
                                    <Route exact path="/projects/bayside-vaporwave" component={BaysideVaporwave}/>
                                    <Route exact path="/projects/cryptocoincount" component={CryptoCoinCount}/>
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