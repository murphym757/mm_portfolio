import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    EmailLink,
    PhoneLink,
    ContactCard,
    ContactCardRow,
    ContactHeading
} from '../../assets/styles/personalInfoStyling';
import {
    CustomIcon
} from '../../assets/styles/fontAwesomeStyling';
import {
    contactInfo
} from '../../../server/quickDB';

export default function Contact(props) {
    return (
        <div>
            <div class="container-fluid">
            <ContactHeading className="pb-4">Please feel free to reach me at: </ContactHeading>
                <ContactCardRow className="row pb-4">
                    <div class="col-6">
                        <ContactCard className="card-transparent pb-3">
                            <CustomIcon className="fa fa-envelope fa-4x"></CustomIcon>
                        </ContactCard>
                            <h6>
                                <EmailLink href={contactInfo.emailLinkFormat}>
                                    {contactInfo.emailLink}
                                </EmailLink>
                            </h6>
                    </div>
                    <div class="col-6">
                        <ContactCard className="card-transparent pb-3">
                            <CustomIcon className="fa fa-mobile fa-3x pt-2 pb-2"></CustomIcon>
                        </ContactCard>
                        <h6>
                            <PhoneLink href={contactInfo.phoneLinkFormat}>
                                {contactInfo.phoneLink}
                            </PhoneLink>
                        </h6>
                    </div>
                </ContactCardRow>
            </div>
        </div>
    )
}