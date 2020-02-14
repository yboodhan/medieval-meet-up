import React from 'react';
import MatchProfile from './MatchProfile';

let user = {
    id: 4,
    name: 'Big Bad Wolf',
    interest: 'Thighs, legs, arms, any meat really',
    about: 'Like hairy guys? Looking for a Big Bad boy to huff and puff and blow your mind? Not all the guys are wolves, but this one is.',
    picture: ['https://i.pinimg.com/originals/1f/c0/58/1fc0584cfa9234edd54bce17f430c37b.jpg']
}

const Show4 = props => {
    return (
        <MatchProfile user={user} />
    )
}

export default Show4