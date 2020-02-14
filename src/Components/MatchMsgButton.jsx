import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const MatchMsgButton = props => {
    
    let [referRedirect, setReferRedirect] = useState(false)

    const handleMatchMsg = () => {
        setReferRedirect(true)
    }

    if (referRedirect) {
        return (
            <Redirect to={props.link} />
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <button onClick={handleMatchMsg} className="button-style">
                        {props.text}
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default MatchMsgButton