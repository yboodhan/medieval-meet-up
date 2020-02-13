import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';

import ProfilePicture from './ProfilePicture';
import MatchMsgButton from './MatchMsgButton';

const Profile = props => {
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <ProfilePicture imageLink="https://placekitten.com/300/300"/>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1 className="user-name">Kitten</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
                    <p className="about-me">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur adipisci doloribus at, sunt, unde est, incidunt cupiditate beatae similique odit natus distinctio hic possimus ex facilis! Esse neque vitae libero!</p>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <MatchMsgButton />g
                </Col>
            </Row>
        </Container>
    )
}

export default Profile