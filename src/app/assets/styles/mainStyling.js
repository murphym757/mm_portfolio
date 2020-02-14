import styled, { keyframes } from 'styled-components';
import { Card } from '@bootstrap-styled/v4';

export const CardContainer = styled.div `
    opacity: ${props => props.theme.themeOpacity}; 
`;

export const MainCard = styled(Card) `
    &.card {
        display: block;
        z-index: 9999;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: auto;
        opacity: ${props => props.theme.themeOpacity}; 
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.black};
    }
`;

const SwingInTop = keyframes `
    0% {
        -webkit-transform: rotateX(-100deg);
                transform: rotateX(-100deg);
        -webkit-transform-origin: top;
                transform-origin: top;
        opacity: 0;
    }
    100% {
        -webkit-transform: rotateX(0deg);
                transform: rotateX(0deg);
        -webkit-transform-origin: top;
                transform-origin: top;
        opacity: 1;
    }
`;

export const SwingInTopDiv = styled.div `
	-webkit-animation: ${SwingInTop} 1s ease-out both;
	        animation: ${SwingInTop} 1s ease-out both;
`;
