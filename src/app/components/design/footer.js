import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FooterStyling,
    FooterContainer
} from '../../assets/styles/designStyling';
import {
    CustomIcon
} from '../../assets/styles/fontAwesomeStyling';

export default function Footer(props) {
    return (
        <FooterContainer className="container-fluid">
            <div class="row align-bottom">
                <FooterStyling className="col-12 pt-3 pb-1"><CustomIcon className="fas fa-copyright"></CustomIcon> Maurice Murphy</FooterStyling>
            </div>
        </FooterContainer>
    )
}