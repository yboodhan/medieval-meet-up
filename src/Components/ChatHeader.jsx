import React from 'react'
import { Container, Row, Col, Button, Image } from 'reactstrap'

const ChatHeader = props => {



    return (
        <Container>
            <div className="chat-header">

            <h2>Donkey</h2>
            <img className="img-fluid chat-picture" src='https://data.whicdn.com/images/130896373/original.jpg' />
            </div>
            
        </Container>
    )
}
export default ChatHeader