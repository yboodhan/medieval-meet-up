import React, { useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'reactstrap'




const Chat = props => {
    return (
        <Container>
            <Row>
                <Col sm="12" md="({ size: 6, offset: 3 })">
                    <div className="chat-header">
                        <p>This is the Chat header</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="({ size: 6, offset: 3 })">
                    <div className="chat-container">
                        <p>This is the Chat container</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="({ size: 6, offset: 3 })">
                    <div className="chat-input">
                        <p>This is the Chat input</p>
                        <input className="text-input" type="text" placeholder="Enter message here" onChange="" />
                        <Button type="submit">Send</Button>
                    </div>
                </Col>
            </Row>

            
        </Container>
    )
}

export default Chat