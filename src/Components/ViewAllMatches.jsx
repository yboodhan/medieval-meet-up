import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import ProfileTag from './ProfileTag';

let users = [{
    id: 1,
    name: 'Donkey',
    interest: 'Ass',
    about: ['New sir on the block, looking for a sweet maiden'],
    matches: 69,
    messages: 420,
    picture: ['https://data.whicdn.com/images/130896373/original.jpg']
},
{
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
},
{
    id: 3,
    name: 'Gingy',
    interest: "my gumdrop button 💘",
    about: ['cookie squire academy class of 1570 🍪, lemme pour some sugar on thee 🍭'],
    matches: 0,
    messages: 0,
    picture: ['https://i.pinimg.com/originals/1d/cd/ac/1dcdac15889534510548cd4c5abefda8.jpg']
},
{
    id: 4,
    name: 'Pinocchio',
    interest: 'an honest, real boy',
    about: ['REAL EYES, REALIZE, REAL LIES'],
    matches: 4,
    messages: 20,
    picture: ['https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/129052500/original/e978e4ecdb56607bcc8797591deed91732525da8.jpg']
},
{
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
},
{
    id: 6,
    name: 'Prince Charming',
    interest: 'Older Women',
    about: ['Thy rightful king of Far Far Away 👑, Only God can judge thee 🙏, Hiking 🌲 Travel 🛩, Fair maidens hmu and thine shalt show you thine "happily ever after" 😉'],
    matches: 9999999,
    messages: 9999999,
    picture: ['https://vignette.wikia.nocookie.net/deadliestfiction/images/7/70/Prince_Charming.jpg/revision/latest/top-crop/width/360/height/450?cb=20190803002322']
}
]

const ViewAllMatches = props => {
    let allMatches = users.map( (user) => {
        return <ProfileTag key={user.id}  user={user}/>
    })

    return (
        <Container>
            <Row>
                <Col className="scroll-bar" sm="12" md={{ size: 6, offset: 3 }}>
                    {allMatches}
                </Col>
            </Row>
        </Container>
    )
}

export default ViewAllMatches