import React from 'react'
import { Container, Row, Col, Button, Image } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const ChatHeader = props => {

    return (
        <Container>
            <div className="chat-headerr">

                <a className='chat-back' href="/"><FontAwesomeIcon color="#D5DE2E" size="3x" icon={faArrowCircleLeft} /></a>

                <h2>Donkey</h2>
                <img className="img-fluid chat-picture" src='https://data.whicdn.com/images/130896373/original.jpg' />
            </div>
        </Container>
    )
}
export default ChatHeader