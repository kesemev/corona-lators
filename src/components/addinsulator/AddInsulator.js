import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

 
function AddInsulator() {
    const [value, setValue] = useState();

    return (
        <div>
            <Jumbotron>
                <h1>Hello, Supervisor!</h1>
                <p>
                Enter the details of the new insulator: email and phone number <br></br>
                As soon as you register him, the system will send him an SMS message and an email to complete the registration details.
                </p>
            </Jumbotron>
                <Form>
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                        <Form.Label column sm="2">Email address</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Phone number</Form.Label>
                        <Col sm="10">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Register and text</Button>
                        </Col>
                    </Form.Group>
                </Form>
        </div>
    );
}

export default AddInsulator;