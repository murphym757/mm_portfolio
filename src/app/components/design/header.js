import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    NameHeader
} from '../../assets/styles/designStyling';
import {
    SwingInTopDiv
} from '../../assets/styles/mainStyling';

export default function Header(props) {
    return (
        <SwingInTopDiv className="container-fluid second-title m-0 p-0 pt-4 pt-4">
            <div class="row">
                <NameHeader className="col-sm-6">Maurice Murphy</NameHeader>
            </div>
        </SwingInTopDiv>
    )
}