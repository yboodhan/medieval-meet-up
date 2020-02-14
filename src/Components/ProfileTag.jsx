import React from 'react';
import { Container, Row } from 'reactstrap';

const ProfileTag = props => {
    return (
        <Container>
            <Row>
                <div className="tag">
                    <div>
                        <img className="scroll-image" src={props.user.picture[0]} />
                    </div>
                    <div>
                        <p>{props.user.name}</p>
                        <div className="text-truncate tag-about">{props.user.about}</div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default ProfileTag