import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import ProfilePicture from './ProfilePicture';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MatchProfile = props => {

    let [buttonText, setButtonText] = useState("Match Now!")
    let [about, setAbout] = useState(props.user.about)
    let [interest, setInterest] = useState('Looking for: ' + props.user.interest)
    let [nextButtonLink, setNextButtonLink] = useState(`/${parseInt(props.user.id) + 1}`)
    let [nextProfileLink, setNextProfileLink] = useState(`/${parseInt(props.user.id) + 1}`)
    let [previousProfileLink, setPreviousProfileLink] = useState(`/${parseInt(props.user.id) - 1}`)
    let [matchChoice, setMatchChoice] = useState("")
    let [referRedirect, setReferRedirect] = useState(false)

    const makeMatch = () => {
        setInterest("")
        setAbout("IT'S A MATCH!")
        setButtonText("Message Now!")
        setNextButtonLink("/chat")
        setMatchChoice("No, message later.")
        if (buttonText == "Message Now!") {
            setReferRedirect(true)
        }
    }

    if (referRedirect) {
        return (
            <Redirect to={nextButtonLink} />
        )
    }

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <ProfilePicture imageLink={props.user.picture[0]}/>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className="nav-profiles">
                        <a href={previousProfileLink}><FontAwesomeIcon color="#D5DE2E" size="3x" icon={faChevronLeft} /></a>
                        <h1 className="user-name">{props.user.name}</h1>
                        <a href={nextProfileLink}><FontAwesomeIcon color="#D5DE2E" size="3x" icon={faChevronRight} /></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
                    <div className="about-me">
                        <p>{interest}</p>
                        <p>{about}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
                    <button className="button-style" onClick={makeMatch}>{buttonText}</button>
                    <p className="message-later"><a href={nextProfileLink}>{matchChoice}</a></p>
                </Col>
            </Row>
        </Container>
    )
}

export default MatchProfile