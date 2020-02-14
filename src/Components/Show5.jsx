import React from 'react';
import MatchProfile from './MatchProfile';

let user = {
    id: 5,
    name: '💸Fairy Godmother💸',
    interest: 'Dominance',
    about: ['NEED A NEW PARTNER IN CRIME TO TAKE OVER THE KINGDOM. NOTHING OFF LIMITS: SCHEMING, BLACKMAIL, KIDNAPPING.👩‍👦SERIOUS BUSINESS INQUIRIES ONLY, ADD ME ON SNAP - @GODMOMMY'],
    matches: 2,
    messages:19,
    picture: [
        'https://i.ytimg.com/vi/h9rpAQDOrzk/hqdefault.jpg',
        'https://i.redd.it/h5aqabg4h0o31.png',
    ],
}

const Show5 = props => {
    return (
        <MatchProfile user={user} />
    )
}

export default Show5