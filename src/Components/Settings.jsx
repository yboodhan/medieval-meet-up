import React from 'react';
import { Container, Col, Row, Form, Input, Label, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const Settings = props => {
    return (
        <Container className="settings-page">
            <h1>Filter Your Matches</h1>
            <div className="settings">
                <Form>
                    <FormGroup>
                        <Label className="label">Location:</Label>
                        <Input className="input" type="select" name="location" id="location">
                            <option>Any</option>
                            <option>Pirate Island</option>
                            <option>Doloc</option>
                            <option>Sherwood Forest</option>
                            <option>Merlin's Island</option>
                            <option>Neverland</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label className="label">Miles:</Label>
                        <Input className="input" type="number" name="distance" id="distance" placeholder="50">
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label className="label">Age:</Label>
                        <Input className="input" type="select" name="age" id="age">
                            <option>Any</option>
                            <option>18-25</option>
                            <option>26-35</option>
                            <option>36-45</option>
                            <option>46-55</option>
                            <option>56+</option>
                        </Input>
                    </FormGroup>
                </Form>
            </div>

            <div className="preferences">
                <FormGroup check>
                    <Label className="label">Preferences:</Label>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Humans 🤷🏽‍♀️
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Ogres 🌳
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Donkeys 🎶
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Cats 🐈
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Dwarves 📏
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Fairies 🧚🏻‍♂️
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Eggs 🥚
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Cookies 🍪
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Woods 🌲
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Pigs 🐖
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Wolves 🐺
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Mice 🐭
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Cyclops 👁
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox"/> Gnomes 🌈
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input className="input" type="checkbox" checked="checked"/> Any 💚
                    </Label>
                </FormGroup>
            </div>
            <a href="/">
                <button className="button-style">
                    Update
                </button>
            </a>
        </Container>
    )
}

export default Settings