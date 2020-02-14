import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { souseMediaQueries } from './mediaQueries';

export const CustomIcon = styled.i `
    color: ${props => props.theme.primaryColor};
    &.fa-github,
    &.fa-external-link-square-alt,
    &.fa-github-square {
        color: ${props => props.theme.primaryColor};
    }
    &.fa-copyright {
        color: ${props => props.theme.secondaryColor};
    }
    &.fa-node-js {
        padding-left: 1%;
    }
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    &.fa-external-link-square-alt,
                    &.fa-github-square {
                        font-size: 1em;
                    }
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    &.fa-external-link-square-alt,
                    &.fa-github-square {
                        font-size: 1.250em;
                    }
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    &.fa-external-link-square-alt,
                    &.fa-github-square {
                        font-size: 1.125em;
                    }
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    &.fa-external-link-square-alt,
                    &.fa-github-square {
                        font-size: 1.75em;
                    }
                }
                @media ${souseMediaQueries.mobileL.landscape} {
                    &.fa-external-link-square-alt,
                    &.fa-github-square {
                        font-size: 1.25em;
                    }
                } 
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    &.fa-external-link-square-alt,
                    &.fa-github-square {
                        font-size: 1.75em;
                    }
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    &.fa-external-link-square-alt,
                    &.fa-github-square {
                        font-size: 1.25em;
                    }
                } 
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    &.fa-envelope {
                        font-size: 5rem;
                    }
                    &.fa-mobile {
                        font-size: 4rem;
                        padding-bottom: 3rem;
                    }
                    &.fa-external-link-square-alt,
                    &.fa-github-square {
                        font-size: 3rem;
                    }
                } 
        /* ----------------------------------------- */
`;