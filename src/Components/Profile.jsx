import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';

import ProfilePicture from './ProfilePicture';
import MatchMsgButton from './MatchMsgButton';

const Profile = props => {
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <ProfilePicture imageLink="https://vignette.wikia.nocookie.net/shrek/images/5/58/Un-wallpaper-del-drago-per-il-film-shrek-terzo-118322.jpg/revision/latest?cb=20160819000447"/>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1 className="user-name">Dragon</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
                    <div className="about-me">
                        <p>Looking for a new mans that can handle all this 🔥🔥</p>
                        <ul>
                            <li>NO ASSES</li>
                            <li>Treasure 💎</li>
                            
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
                    <MatchMsgButton />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile