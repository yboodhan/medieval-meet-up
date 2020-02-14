import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';

import ProfilePicture from './ProfilePicture';
import MatchMsgButton from './MatchMsgButton';

const MatchProfile = props => {

    let [buttonText, setButtonText] = useState("Match Now!")
    let [nextButtonLink, setNextButtonLink] = useState(`/${parseInt(props.user.id) + 1}`)

    let matchChoice

    const makeMatch = () => {
        setButtonText("Message Now!")
        setNextButtonLink("/chat")
        matchChoice = <a href={nextButtonLink}>No, message later.</a>
    }

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <ProfilePicture imageLink={props.user.picture[0]}/>
                    <span>add arrow to switch</span>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1 className="user-name">{props.user.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
                    <div className="about-me">
                        <p>Looking for: {props.user.interest}</p>
                        <p>{props.user.about}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
                    <MatchMsgButton onClick={makeMatch} text={buttonText} link={nextButtonLink} />
                </Col>
                <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
                    {matchChoice}
                </Col>
            </Row>
        </Container>
    )
}

export default MatchProfile