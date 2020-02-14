import React from 'react'
import { Container, Row, Col, Button, Image } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const AppHeader = props => {

    return (
        <Container>
            <div className="app-name">
                <h2>50 Shades of Green</h2>
            </div>
        </Container>
    )
}
export default AppHeader