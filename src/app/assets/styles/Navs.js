import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { souseMediaQueries } from './mediaQueries';

export const NavLinksHeader = styled.div `
    text-align: center;
    justify-content: center;
    float:left;
    width:100%;
    overflow:hidden;
    position:relative;
    text-transform: uppercase;

    ul {
        clear:left;
        float:left;
        list-style:none;
        margin:0;
        padding:0;
        position:relative;
        left:50%;
        text-align:center;
        & li {
            display:block;
            float:left;
            list-style:none;
            margin:0;
            padding:0;
            position:relative;
            right:50%;
        }
    }
`;
// Link Divider
export const LinkDivider = styled.li `
    color: ${props => props.theme.primaryColorAlt};
    font-family: 'Montserrat-Black';
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
       font-size: 0.45em;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        font-size: 0.45em;
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        font-size: 0.610em;
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        font-size: 0.610em;
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        font-size: 0.60em;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        font-size: 0.60em;
    } 
    /* Large Mobile Phones (Max) */
    @media ${souseMediaQueries.mobileLMax.portrait} {
        font-size: 0.70em;
    }
    @media ${souseMediaQueries.mobileLMax.landscape} {
        font-size: 0.70em;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        font-size: 0.70em;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        font-size: 0.70em;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        font-size: 1em;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        font-size: 1em;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
       font-size: 1.10em;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        font-size: 1.10em;
    } 
    /* ----------------------------------------- */
`;
// Standard Link
export const HomeLinkStandard = styled.a `
    :link,
    :active,
    :visited {
        color: ${props => props.theme.primaryColorAlt};
        font-family: 'Montserrat-Black';
    }
    :hover {
        color: ${props => props.theme.primaryColor}; 
        text-decoration: none;
    }
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
       font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        font-size: 0.1em;
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
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        font-size: 0.1em;
    } 
    /* Large Mobile Phones (Max) */
    @media ${souseMediaQueries.mobileLMax.portrait} {
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileLMax.landscape} {
        font-size: 0.1em;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        font-size: 0.1em;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        font-size: 1em;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        font-size: 1em;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
       font-size: 1.25em;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        font-size: 1.25em;
    } 
    /* ----------------------------------------- */
`;
// Standard Link
export const HomeLink = styled(Link) `
    :link,
    :active,
    :visited {
        color: ${props => props.theme.primaryColorAlt};
        font-family: 'Montserrat-Black';
    }
    :hover {
        color: ${props => props.theme.primaryColor}; 
        text-decoration: none;
    }
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
       font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        font-size: 0.1em;
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
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        font-size: 0.1em;
    } 
    /* Large Mobile Phones (Max) */
    @media ${souseMediaQueries.mobileLMax.portrait} {
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileLMax.landscape} {
        font-size: 0.1em;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        font-size: 0.1em;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        font-size: 1em;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        font-size: 1em;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
       font-size: 1.25em;
    } 
   /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        font-size: 1.25em;
    } 
    /* ----------------------------------------- */
`;


// Current Page Link
export const HomeLinkActive = styled(Link) `
    color: ${props => props.theme.primaryColor}; 
    font-family: 'Montserrat-Black';
    -webkit-text-stroke-width: 0.031em;
    -webkit-text-stroke-color: ${props => props.theme.secondaryColor};
    -moz-text-stroke-width: 0.031em;
    -moz-text-stroke-color: ${props => props.theme.secondaryColor};
    :hover {
        color: ${props => props.theme.white};
        text-decoration: none;
    }
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
       font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        font-size: 0.1em;
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
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        font-size: 0.1em;
    } 
    /* Large Mobile Phones (Max) */
    @media ${souseMediaQueries.mobileLMax.portrait} {
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.mobileLMax.landscape} {
        font-size: 0.1em;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        font-size: 0.1em;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        font-size: 0.1em;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        font-size: 1em;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        font-size: 1em;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
       font-size: 1.25em;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        color: ${props => props.theme.primaryColor}; 
        font-family: 'Montserrat-Black';
        -webkit-text-stroke-width: 0.1em;
        -webkit-text-stroke-color: ${props => props.theme.secondaryColor};;
        -moz-text-stroke-width: 0.1em;
        -moz-text-stroke-color: ${props => props.theme.secondaryColor};;
        font-size: 1.25em;
    } 
    /* ----------------------------------------- */
`;