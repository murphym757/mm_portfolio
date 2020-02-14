import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AboutMeSection
} from '../../assets/styles/personalInfoStyling';
import {
    aboutMe
} from '../../../server/quickDB';

export default function AboutMe(props) {
    return (
        <div>
            <AboutMeSection>
                {aboutMe.personalDedscription}
            </AboutMeSection>
        </div>
    )
}