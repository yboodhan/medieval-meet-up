import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const DualButton = props => {
    
    let [referRedirect, setReferRedirect] = useState(false)

    const switchToMsg = () => {
        if (props.text == "Message Now!") {
            setReferRedirect(true)
        }
    }

    if (referRedirect) {
        return (
            <Redirect to={props.link} />
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <button onClick={switchToMsg} className="button-style">
                        {props.text}
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default DualButton