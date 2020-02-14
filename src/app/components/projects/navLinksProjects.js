import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
    NavLinksHeader,
    HomeLinkStandard,
    HomeLink,
    HomeLinkActive,
    LinkDivider
} from '../../assets/styles/Navs';
import {
    CustomIcon
} from '../../assets/styles/fontAwesomeStyling';
import {
    githubHome
} from '../../../server/quickDB';

export default function NavLinksProjects(props) {
    return (
        <NavLinksHeader>
            <h6>
                <ul>
                    <li><HomeLink to="/">About</HomeLink></li>
                        <LinkDivider className="pl-2 pr-2">|</LinkDivider>
                    <li><HomeLink to="/resume">Resume</HomeLink></li>
                        <LinkDivider className="pl-2 pr-2">|</LinkDivider>
                    <li><HomeLinkActive to="/projects">Projects</HomeLinkActive></li>
                        <LinkDivider className="pl-2 pr-2">|</LinkDivider>
                    <li>
                        <HomeLinkStandard
                        href={githubHome} 
                        target="_blank">
                            <CustomIcon className="fab fa-github"></CustomIcon> Github
                        </HomeLinkStandard>
                    </li>
                </ul>
            </h6>
        </NavLinksHeader>
    )
}