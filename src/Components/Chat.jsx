import React, { useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import Message from './NewMessage'
import ChatInput from './ChatInput'
import ChatHeader from './ChatHeader'


const Chat = props => {

    // const printChat = () => {
    //     chatHistory.map((message, i) => {
    //         <div key={i}>
    //             <p>{message}</p>
    //         </div>
    //     })
    // }

    // useEffect(() => {
    //     printChat()
    // }, [])
    

    return (
        <Container>
            <Row>
                <Col sm="12" md="({ size: 6, offset: 3 })">
                    <div className="chat-header">
                        <ChatHeader />
                        {/* <p>Your chat with: Dragon</p> */}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="({ size: 6, offset: 3 })">
                    <div className="chat-container">
                        <p>This is the Chat container</p>
                        <p>Additional Chat divs should be added top-down</p>
                        <Message />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="({ size: 6, offset: 3 })">
                    <div className="chat-input">
                        <ChatInput />
                    </div>
                </Col>
            </Row>


            
        </Container>
    )
}

export default Chat