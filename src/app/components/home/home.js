import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import BootstrapProvider from '@bootstrap-styled/provider';
import { makeTheme } from 'bootstrap-styled/lib/theme';
import { GlobalStyle } from '../../assets/styles/globalStyling';
import Navigation from '../design/navigation.js';
import Projects from '../projects/projects.js';
import Header from '../design/header.js';
import Footer from '../design/footer.js';
import {
    souseDefaultTheme,
    souseDefaultThemeDark
} from '../../assets/styles/globalTheme';
import {
    CardContainer,
    MainCard
} from '../../assets/styles/mainStyling';
import {
    nameHeaderLink
} from '../../assets/styles/designStyling';
import { CardBlock } from '@bootstrap-styled/v4';
import Resume from '../personalInfo/resume.js';

export default function Home(props) {
    const [currentTheme, setCurrentTheme] = useState();
     useEffect(() => {
        let currentTime = new Date();
        let time = currentTime.getHours();
        console.log(time);
        if (time >= 17 || time < 7) {
            setCurrentTheme(souseDefaultThemeDark);
        } else {
            setCurrentTheme(souseDefaultTheme);
        }
     }); 
    return (
        <Router>
            <div>
                <div class="container-fluid p-auto">
                    <CardContainer className="container-fluid pt-3 pb-3">
                        <BootstrapProvider theme={currentTheme}>
                            <GlobalStyle />
                                <MainCard className="container">
                                    <CardBlock className="m-0 pl-0 pr-0">
                                        <nameHeaderLink to="/">
                                            <Header />
                                        </nameHeaderLink>   
                                            {/*Routes*/}
                                            <Switch>
                                                <Route exact path="/" component={Navigation}/>
                                                <Route exact path="/resume" component={Resume}/>
                                                <Route exact path="/projects" component={Projects}/>
                                            </Switch>
                                    </CardBlock>
                                </MainCard>
                        </BootstrapProvider>
                    </CardContainer>
                </div>
            </div>
        </Router>
    );
}