import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const MatchMsgButton = props => {
    return (
        <Container>
            <Row>
                <Col>
                    <button className="button-style">
                        FIND MATCH
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default MatchMsgButton