import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function Signup() {
    return (
        <div className="signupdiv">

            <Form>
                <h1>Sign Up!</h1>
                <Col>
                    <Form.Control style={{marginBottom:'50px'}} placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control style={{marginBottom:'50px'}} placeholder="Username (anything you desire)" />
                </Col>
                {/* <Form.Group controlId="formGroupEmail"> */}
                <Form.Control type="email" placeholder="Enter email" />
                {/* </Form.Group> */}
                <Button style={{marginTop:'10px'}} variant="primary" type="submit">Submit</Button>
            </Form>
        </div>

    )
}

export default Signup;