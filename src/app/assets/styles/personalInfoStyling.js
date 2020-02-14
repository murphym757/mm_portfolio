import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { souseMediaQueries } from './mediaQueries';

// aboutMe.js
export const AboutMeSection = styled.p `
    text-align: center;
    justify-content: center;
    &::first-letter {
        font-size: 150%;
    }
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.625em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 0.625em;
                } 
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;

// contact.js
export const EmailLink = styled.a `
    &:link,
    &:active {
        color: ${props => props.theme.secondaryColor};
    }
    &:visited,
    &:hover {
        color: ${props => props.theme.primaryColor};
        text-decoration: none;
    }
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.438em;
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    
                } 
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 0.5em;
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
                    font-size: 0.75em;
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    font-size: 0.75em;
                } 
            /* Tablets */
                @media ${souseMediaQueries.tablet.portrait} {
                    font-size: 0.75em;
                }
                @media ${souseMediaQueries.tablet.landscape} {
                    font-size: 0.6em;
                } 
            /* Laptops and Large Tablets */
                @media ${souseMediaQueries.laptop.portrait} {
                    font-size: 1.125em;
                }
                @media ${souseMediaQueries.laptop.landscape} {
                    font-size: 1.125em;
                } 
            /* Large Laptops */
                @media ${souseMediaQueries.laptopL.landscape} {
                    font-size: 0.88em;
                } 
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;
export const PhoneLink = styled.a `
    &:link,
    &:active {
        color: ${props => props.theme.secondaryColor};
    }
    &:visited,
    &:hover {
        color: ${props => props.theme.primaryColor};
        text-decoration: none;
    }
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.438em;
                }
                @media ${souseMediaQueries.mobileS.landscape} {
                    
                } 
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    ont-size: 0.625em
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 0.5em;
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
                    font-size: 0.75em;
                }
                @media ${souseMediaQueries.mobileLMax.landscape} {
                    font-size: 0.75em;
                } 
            /* Tablets */
                @media ${souseMediaQueries.tablet.portrait} {
                    font-size: 0.75em;
                }
                @media ${souseMediaQueries.tablet.landscape} {
                    font-size: 0.6em;
                } 
            /* Laptops and Large Tablets */
                @media ${souseMediaQueries.laptop.portrait} {
                    font-size: 1.125em;
                }
                @media ${souseMediaQueries.laptop.landscape} {
                    font-size: 1.125em;
                } 
            /* Large Laptops */
                @media ${souseMediaQueries.laptopL.landscape} {
                    font-size: 0.88em;
                } 
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;

export const ContactCard = styled.div `
    border: none;
`;

export const ContactCardRow = styled.div `
    /* Media Queries */
        /* ----------------------------------------- */
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    padding-top: 1rem;
                } 
        /* ----------------------------------------- */
`;

export const ContactHeading = styled.h5 `
    font-family: 'Montserrat-Black';
    color: ${props => props.theme.primaryColor};
    -webkit-text-stroke-width: 0.031em;
    -webkit-text-stroke-color: ${props => props.theme.secondaryColor};
    -moz-text-stroke-width: 0.031em;
    -moz-text-stroke-color: ${props => props.theme.secondaryColor};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 2em;
                    font-family: 'Montserrat-Black';
                    color: ${props => props.theme.primaryColor};
                    -webkit-text-stroke-width: 0.03em;
                    -webkit-text-stroke-color: ${props => props.theme.secondaryColor};
                    -moz-text-stroke-width: 0.03em;
                    -moz-text-stroke-color: ${props => props.theme.secondaryColor};
                } 
        /* ----------------------------------------- */
`;

// resume.js
export const ResumeSectionHeader = styled.h3 `
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Montserrat-Bold';
    color: ${props => props.theme.secondaryColor};
     /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 1.250em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 1.125em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 1.5em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 1.5em;
                }
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 1.5em;
                }
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 2.5em;
                    padding-top: 1rem;
                    padding-bottom: 3rem;
                } 
        /* ----------------------------------------- */
`;

export const JobName = styled.h4`
    text-transform: uppercase;
    font-family: 'Montserrat-Bold';
    color: ${props => props.theme.primaryColor};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.750em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.750em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 1em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 1.250em;
                }
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 1.250em;
                }
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 2em;
                } 
        /* ----------------------------------------- */
`;

export const JobTitle = styled.h5 `
    font-family: 'Montserrat-Light';
    font-weight: 700;
    color: ${props => props.theme.primaryColorAlt};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.625em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 0.875em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 1em;
                }
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 1em;
                }
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.3em;
                } 
        /* ----------------------------------------- */
`;

export const JobDescription = styled.p `
    font-family: 'Montserrat-Light';
    &::first-letter {
        font-size: 150%;
    }
     /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.625em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em;
                }
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 0.625em;
                }
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 0.625em;
                }
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;

export const ResumeSkillsSection = styled.p `
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.625em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em;
                }
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 0.625em;
                }
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 0.625em;
                }
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;

export const ResumeSkillsHeader = styled.span `
    color: ${props => props.theme.primaryColor};
    font-family: 'Montserrat-Bold';
`;

export const ResumeSkillsHeaderColon = styled.span `
    color: ${props => props.theme.secondaryColor};
    font-family: 'Montserrat-Bold';
`;

export const ResumeCollege = styled.h6 `
    text-transform: uppercase;
    font-family: 'Montserrat-Bold';
    color: ${props => props.theme.primaryColor};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.625em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 0.750em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 0.750em;
                }
            /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 0.750em;
                }
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;

export const ResumeCollegeGPA = styled.h6 `
    text-transform: uppercase;
    font-family: 'Montserrat-Bold';
    color: ${props => props.theme.secondaryColor};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.625em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 0.750em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 0.750em;
                }
             /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 0.750em;
                }
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;

export const ResumeCollegeGrad = styled.span `
    text-transform: uppercase;
    font-family: 'Montserrat-Bold';
    color: ${props => props.theme.secondaryColor};
    /* Media Queries */
        /* ----------------------------------------- */
            /* Small Mobile Phones */
                @media ${souseMediaQueries.mobileS.portrait} {
                    font-size: 0.625em;
                }
            /* Medium Mobile Phones */
                @media ${souseMediaQueries.mobileM.portrait} {
                    font-size: 0.625em;
                }
                @media ${souseMediaQueries.mobileM.landscape} {
                    font-size: 0.750em;
                } 
            /* Large Mobile Phones */
                @media ${souseMediaQueries.mobileL.portrait} {
                    font-size: 0.750em;
                }
             /* Large Mobile Phones (Max) */
                @media ${souseMediaQueries.mobileLMax.portrait} {
                    font-size: 0.750em;
                }
            /* Desktops */
                @media ${souseMediaQueries.desktop.landscape} {
                    font-size: 1.25em;
                } 
        /* ----------------------------------------- */
`;

