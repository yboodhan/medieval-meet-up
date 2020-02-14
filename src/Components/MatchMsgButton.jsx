import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const MatchMsgButton = props => {
    
    let [referRedirect, setReferRedirect] = useState(false)

    const handleMatch = () => {
        setReferRedirect(true)
    }

    if (referRedirect) {
        return (
            <Redirect to="/matches" />
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <button onClick={handleMatch} className="button-style">
                        Find Love!
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default MatchMsgButton