import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBottom = props => {
    return (
        <Container>
                <Row>
                    <Col>
                        <div className="nav-button-bar">
                            <div className="nav-button">
                                <a href="/"><FontAwesomeIcon color="#668300" size="2x" icon={faUser} /></a>
                            </div>
                            <div className="nav-button">
                                <FontAwesomeIcon color="#668300" size="2x" icon={faHeart} />
                            </div>
                            <div className="nav-button">
                                <FontAwesomeIcon color="#668300" size="2x" icon={faEnvelope} />
                            </div>
                            <div className="nav-button">
                                <FontAwesomeIcon color="#668300" size="2x" icon={faCog} />
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}

export default NavBottom