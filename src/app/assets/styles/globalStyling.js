import { createGlobalStyle } from 'styled-components';
import montserratBold from '../fonts/Montserrat/Montserrat-Bold.otf';
import montserratLight from '../fonts/Montserrat/Montserrat-Light.otf';
import montserratThin from '../fonts/Montserrat/Montserrat-Thin.otf';
import montserratRegular from '../fonts/Montserrat/Montserrat-Regular.otf';
import montserratBlack from '../fonts/Montserrat/Montserrat-Black.otf';


export const GlobalStyle = createGlobalStyle `
        @font-face {
            font-family: 'Montserrat-Bold';
            src: url(${montserratBold});
            src: url(${montserratBold}) format('opentype');
        }

        @font-face {
            font-family: 'Montserrat-Light';
            src: url(${montserratLight});
            src: url(${montserratLight}) format('opentype');
        }
        @font-face {
            font-family: 'Montserrat-Thin';
            src: url(${montserratThin});
            src: url(${montserratThin}) format('opentype');
        }
        @font-face {
            font-family: 'Montserrat-Regular';
            src: url(${montserratRegular});
            src: url(${montserratRegular}) format('opentype');
        }
        @font-face {
            font-family: 'Montserrat-Black';
            src: url(${montserratBlack});
            src: url(${montserratBlack}) format('opentype');
        }

    body {
        display: block;
        background-color: ${props => props.theme.white};
        background-image: url('https://s3.amazonaws.com/mmportfolioreact/Memphis-Grape-Design.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover; 
        color: ${props => props.theme.black};
    } 
    img {
        max-width: 100%;
        height: auto;
    }

    a {
        color: ${props => props.theme.primaryColor};
        text-decoration: none;
        &:focus {
            color: ${props => props.theme.secondaryColor};
        }   
        &:link {
            color: ${props => props.theme.secondaryColor};
        }
        &:visited {
            color: ${props => props.theme.secondaryColor};
        }
        &:hover {
            color: ${props => props.theme.secondaryColor};
        }
        &:active {
            color: ${props => props.theme.secondaryColor};
        }
    }
    
    nav ul a {
        &:link {
            color: ${props => props.theme.secondaryColor};
        }
        &:visited {
            color: ${props => props.theme.secondaryColor};
        }
        &:hover {
            color: ${props => props.theme.secondaryColor};
        }
        &:active {
            color: ${props => props.theme.secondaryColor};
        }
    }

    p {
        font-family: 'Montserrat-Light';
    }
`;