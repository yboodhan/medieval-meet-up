import React from 'react';
import MatchProfile from './MatchProfile';
import MatchMsgButton from './MatchMsgButton';

let user = {
    id: 1,
    name: 'Donkey',
    interest: 'Ass',
    about: ['New sir on the block, looking for a sweet maiden'],
    matches: 69,
    messages: 420,
    picture: ['https://data.whicdn.com/images/130896373/original.jpg']
}

const Show1 = props => {
    return (
        <MatchProfile user={user} />
    )
}

export default Show1