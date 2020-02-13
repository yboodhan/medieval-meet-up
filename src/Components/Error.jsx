import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Error = props => {
    return (
        <Container>

            <div className="error-page">
                <div><FontAwesomeIcon color="grey" size="2x" icon={faExclamationCircle} /></div>
                <div>404 Error: Page Not Found</div>
            </div>
        </Container>
        
    )
}

export default Error