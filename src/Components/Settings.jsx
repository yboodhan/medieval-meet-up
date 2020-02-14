import React from 'react';
import { Container, Form, Input, Label, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const Settings = props => {
    return (
        <Container>
            <h1>Filter Your Matches</h1>
            <Form>
                <FormGroup>
                    <Label>Location:</Label>
                    <Input type="select" name="location" id="location">
                        <option>Any</option>
                        <option>Pirate Island</option>
                        <option>Doloc</option>
                        <option>Sherwood Forest</option>
                        <option>Merlin's Island</option>
                        <option>Neverland</option>
                    </Input>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default Settings