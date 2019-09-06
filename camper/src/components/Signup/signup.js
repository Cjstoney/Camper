import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function Signup() {
    return (
        <div className="signupdiv" style={{ marginTop: '100px' }}>

            <Form>
                <h1>Sign Up!</h1>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Username (anything you desire)" />
                </Col>
                {/* <Form.Group controlId="formGroupEmail"> */}
                <Form.Control type="email" placeholder="Enter email" />
                {/* </Form.Group> */}
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>

    )
}

export default Signup;