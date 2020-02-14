import React from 'react';
import { Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProfileTag = props => {
    return (
        <Container>
            <Row>
                <div className="tag">
                    <div>
                        <img className="scroll-image" src={props.user.picture[0]} />
                    </div>
                    <div>
                        <strong>{props.user.name}{' '}<FontAwesomeIcon color="#B0C400" icon={faHeart} /></strong>
                        <div className="text-truncate tag-about">Interested in: {props.user.interest}</div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default ProfileTag