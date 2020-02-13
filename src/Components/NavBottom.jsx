import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBottom = props => {
    return (
        <Container>
                <Row>
                    <Col>
                        <div className="nav-button-bar">
                            <div className="nav-button">
                                <FontAwesomeIcon color="white" size="2x" icon={faHome} />
                            </div>
                            <div className="nav-button">
                                <FontAwesomeIcon color="white" size="2x" icon={faCog} />
                            </div>
                            <div className="nav-button">
                                <FontAwesomeIcon color="white" size="2x" icon={faHeart} />
                            </div>
                            <div className="nav-button">
                                <FontAwesomeIcon color="white" size="2x" icon={faEnvelope} />
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}

export default NavBottom