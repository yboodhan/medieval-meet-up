import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';

const Profile = props => {
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <img className="img-fluid" src="https://placekitten.com/300/300" />
                </Col>
            </Row>
            <Row>
                <Col>
                    Name
                </Col>
            </Row>
            <Row>
                <Col>
                    About me
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        Button
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile