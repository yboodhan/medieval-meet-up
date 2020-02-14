import React from 'react';
import MatchProfile from './MatchProfile';

let user = {
    id: 2,
    name: 'Lord Farquaad',
    interest: 'Princesses',
    about: ['6\'9", SIGMA EPSILON THETA ΣΕΘ, NO MYTHICAL CREATURES 🚫'],
    matches: 2,
    messages: 0,
    picture: [
        'https://vignette.wikia.nocookie.net/shrek/images/6/60/Farquad_l8.jpeg/revision/latest/scale-to-width-down/150?cb=20110419003358',
        'https://vignette.wikia.nocookie.net/shrek/images/f/f6/What_do_you_think.jpg/revision/latest?cb=20150308131141'
    ]
}

const Show2 = props => {
    return (
        <MatchProfile user={user} />
    )
}

export default Show2