import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import ProfileTag from './ViewMatchProfile';

const ViewAllMatches = props => {
    let allMatches
    // put all matches into tags and load them!
    return (
        <Container>
            <Row>
                <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
                    <div className="scroll-bar">
                        SCROLL CONTENT
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewAllMatches