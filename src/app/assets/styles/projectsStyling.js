import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { souseMediaQueries } from './mediaQueries';

// projects.js
export const ContactSection = styled.div `
    text-align: center;
    justify-content: center;
`;

export const LinkTo = styled.h3 `
    font-family: 'Montserrat-Black';
    color: ${props => props.theme.secondaryColor};
    -webkit-text-stroke-width: 0.031em;
    -webkit-text-stroke-color: ${props => props.theme.primaryColor};
    -moz-text-stroke-width: 0.031em;
    -moz-text-stroke-color: ${props => props.theme.primaryColor};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 1em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 1.125em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 1.125em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 1.5em;
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 1.5em;
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    font-size: 1.250em;
                } 
            /* Tablets */
                @media ${souseMediaQueries.tablet.portrait} {
                    
                }
                @media ${souseMediaQueries.tablet.landscape} {
                    
                } 
            /* Laptops and Large Tablets */
                @media ${souseMediaQueries.laptop.portrait} {
                    
                }
                @media ${souseMediaQueries.laptop.landscape} {
                    
                } 
            /* Large Laptops */
                @media ${souseMediaQueries.laptopL.landscape} {
                    
                } 
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 3.25em;
                } 
        /* ----------------------------------------- */
`;

export const ProjectPageLink = styled.a `
    &:link,
    &:active {
       color: ${props => props.theme.secondaryColor}; 
    }

    &:visited,
    &:hover {
        color: ${props => props.theme.primaryColor};
        text-decoration: none;
    }
`;

export const ProjectDescription = styled.p `
    float: right;
    &::first-letter {
        font-size: 150%;
    }
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.625em
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    font-size: 0.625em;
                } 
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 0.625em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    font-size: 0.625em;
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    font-size: 0.625em;
                } 
            /* Tablets */
                @media ${souseMediaQueries.tablet.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.tablet.landscape} {
                    
                } 
            /* Laptops and Large Tablets */
                @media ${souseMediaQueries.laptop.portrait} {
                    
                }
                @media ${souseMediaQueries.laptop.landscape} {
                    
                } 
            /* Large Laptops */
                @media ${souseMediaQueries.laptopL.landscape} {
                    
                } 
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;

export const BtnLink = styled.button `
    font-family: 'Montserrat-Black';
    color: ${props => props.theme.primaryColor};
    -webkit-text-stroke-width: 0.031em;
    -webkit-text-stroke-color: ${props => props.theme.secondaryColor};
    -moz-text-stroke-width: 0.031em;
    -moz-text-stroke-color: ${props => props.theme.secondaryColor};
    &:hover,
    &:active {
        font-family: 'Montserrat-Black';
        color: ${props => props.theme.secondaryColor};
        -webkit-text-stroke-width: 0.031em;
        -webkit-text-stroke-color: ${props => props.theme.primaryColor};
        -moz-text-stroke-width: 0.031em;
        -moz-text-stroke-color: ${props => props.theme.primaryColor};
        text-decoration: none;
    };
    &:visited,
    &:hover {
        text-decoration: none;
    };
`;

export const CardHeader = styled.div `
    background-color: ${props => props.theme.white};
`;

export const CardBody = styled.div `
    background-color: ${props => props.theme.white};
`;