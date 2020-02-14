import React from 'react';
import MatchProfile from './MatchProfile';

let user = {
    id: 3,
    name: 'Gingy',
    interest: "my gumdrop button 💘",
    about: ['cookie squire academy class of 1570 🍪, lemme pour some sugar on thee 🍭'],
    matches: 0,
    messages: 0,
    picture: ['https://i.pinimg.com/originals/1d/cd/ac/1dcdac15889534510548cd4c5abefda8.jpg']
}

const Show3 = props => {
    return (
        <MatchProfile user={user} />
    )
}

export default Show3