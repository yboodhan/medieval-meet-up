import React from 'react';
import MatchProfile from './MatchProfile';

let user = {
    id: 4,
    name: 'Pinocchio',
    interest: 'an honest, real boy',
    about: ['REAL EYES, REALIZE, REAL LIES'],
    matches: 4,
    messages: 20,
    picture: ['https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/129052500/original/e978e4ecdb56607bcc8797591deed91732525da8.jpg']
}

const Show4 = props => {
    return (
        <MatchProfile user={user} />
    )
}

export default Show4