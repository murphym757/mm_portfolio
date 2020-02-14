import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { souseMediaQueries } from './mediaQueries';

// Header.js
export const NameHeaderLink = styled(Link) `
    &:hover {
        text-decoration: none;
    }
`;

export const NameHeader = styled.h1 `
    font-family: 'Montserrat-Black';
    color: ${props => props.theme.secondaryColor};
    text-align: center;
    justify-content: center;
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 1.375em;
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    font-size: 1.375em;
                } 
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 1.75em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                   font-size: 1.875em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 1.5em;
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    font-size: 1.5em;
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 1.5em;
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    font-size: 1.5em;
                } 
            /* Tablets */
                @media ${souseMediaQueries.tablet.portrait} {
                    font-size: 2em;
                }
                @media ${souseMediaQueries.tablet.landscape} {
                    font-size: 2em;
                } 
            /* Laptops and Large Tablets */
                @media ${souseMediaQueries.laptop.portrait} {
                    font-size: 2em;
                }
                @media ${souseMediaQueries.laptop.landscape} {
                    font-size: 2em;
                } 
            /* Large Laptops */
                @media ${souseMediaQueries.laptopL.landscape} {
                    font-size: 2em;
                } 
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 3.5em;
                } 
        /* ----------------------------------------- */
`;

// Footer.js
export const FooterStyling = styled.h6 `
    color: ${props => props.theme.primaryColorAlt};
    font-family: 'Montserrat-Black';
    text-align: center;
    justify-content: center;
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.5em;
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    font-size: 0.5em;
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
                    font-size: 0.75em;
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    font-size: 0.75em;
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    
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
                    font-size: 1.875em;
                }   
        /* ----------------------------------------- */
`;
export const FooterContainer = styled.div `
    /* Media Queries */
        /* ----------------------------------------- */
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    padding-top: 14rem;
                } 
        /* ----------------------------------------- */
`;

// navigation.js
export const JobTitleHeader = styled.h3 `
    font-family: 'Montserrat-Light';
    color: ${props => props.theme.primaryColor};
    text-align: center;
    justify-content: center;
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 1.125em;
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    font-size: 1.125em;
                } 
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 1.25em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 1.25em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    
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
                    font-size: 3em;
                    padding-bottom: 1rem;
                } 
        /* ----------------------------------------- */
`;

export const HeadingTitle = styled.h3 `
    font-family: 'Montserrat-Black';
    color: ${props => props.theme.primaryColor};
    -webkit-text-stroke-width: 0.031em;
    -webkit-text-stroke-color: ${props => props.theme.secondaryColor};
    -moz-text-stroke-width: 0.031em;
    -moz-text-stroke-color: ${props => props.theme.secondaryColor};
    text-align: center;
    justify-content: center;
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    
                } 
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 2em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 2em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    
                } 
            /* Tablets */
                @media ${souseMediaQueries.tablet.portrait} {
                    font-size: 2.5em;
                }
                @media ${souseMediaQueries.tablet.landscape} {
                    font-size: 2.5em;
                } 
            /* Laptops and Large Tablets */
                @media ${souseMediaQueries.laptop.portrait} {
                    font-size: 3em;
                }
                @media ${souseMediaQueries.laptop.landscape} {
                    font-size: 3em;
                } 
            /* Large Laptops */
                @media ${souseMediaQueries.laptopL.landscape} {
                
                } 
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 3.5em;
                    font-family: 'Montserrat-Black';
                    color: ${props => props.theme.primaryColor};
                    -webkit-text-stroke-width: 0.03em; 
                    -webkit-text-stroke-color: ${props => props.theme.secondaryColor};
                    -moz-text-stroke-width: 0.03em; 
                    -moz-text-stroke-color: ${props => props.theme.secondaryColor};
                } 
        /* ----------------------------------------- */
`;

export const HeadingTitleProject = styled.h3 `
    float: left;
    font-family: 'Montserrat-Black';
    color: ${props => props.theme.primaryColor};
    -webkit-text-stroke-width: 0.031em;
    -webkit-text-stroke-color: ${props => props.theme.secondaryColor};
    -moz-text-stroke-width: 0.031em;
    -moz-text-stroke-color: ${props => props.theme.secondaryColor};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 1em;
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    
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
                    font-size: 1.25em;
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    font-size: 1.25em;
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    
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
                    font-family: 'Montserrat-Black';
                    color: ${props => props.theme.primaryColor};
                    -webkit-text-stroke-width: 0.03em; 
                    -webkit-text-stroke-color: ${props => props.theme.secondaryColor};
                    -moz-text-stroke-width: 0.03em; 
                    -moz-text-stroke-color: ${props => props.theme.secondaryColor};
                } 
        /* ----------------------------------------- */
`;

export const HeadingTitleRole = styled.h6 `
    float: left;
    color: ${props => props.theme.primaryFontColor};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.75em;
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    
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
                    font-size: 0.75em;
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    
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
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;