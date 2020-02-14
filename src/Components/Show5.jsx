import React from 'react';
import MatchProfile from './MatchProfile';

let user = {
    id: 5,
    name: 'Donkey',
    interest: 'Ass',
    about: ['New sir on the block, looking for a sweet maiden'],
    matches: 69,
    messages: 420,
    picture: ['https://data.whicdn.com/images/130896373/original.jpg']
}

const Show5 = props => {
    return (
        <MatchProfile user={user} />
    )
}

export default Show5