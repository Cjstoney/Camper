import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./login.css";
import Container from 'react-bootstrap/Container';
import {isLoggedIn} from '../../helpers/isLoggedIn'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

class Login extends React.Component {
  
  AssignValues = (e) => {
    e.preventDefault();
    console.log("input from login form: " );
    localStorage.setItem('emailLogin', document.form1.emailLogin.value);
    localStorage.setItem('pwLogin',  document.form1.pwLogin.value);
    
  }
Value1= () =>
  { 
      console.log("Value of emailLogin is: " + localStorage.getItem("emailLogin")); 
      }

 Value2= ()=>
  {
       console.log("Value of pwLogin is: " + localStorage.getItem("pwLogin")); 
       }

  ShowLength = ()=>{
    console.log("num of items in local storage is: " + localStorage.length);
  }

  render() {
    return (
<Container className="entireContainer">

       
      <Form name="form1">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control input='true' type="email" name="emailLogin" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="pwLogin" placeholder="Password" />
        </Form.Group>

  
        <Button onClick={isLoggedIn} className="submitButton" variant="primary" type="submit">
          Submit
  </Button>


        <Button style={{ margin: '20px 20px 20px 20px' }} variant="primary" type="submit" href="/signup">
          Or Sign Up
  </Button>
      </Form>
   

      </Container>
    )
  };
}
export default Login;
