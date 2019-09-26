import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./login.css";
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
    console.log(this.props);
    return (

<div className='wrapper'>
<div className='form-wrapper'>
<h2>Join Us</h2>

      <Form name="form1">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control input='true' type="email" name="emailLogin" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="pwLogin" placeholder="" />
          <Form.Text className="text-muted">
            <p><small>We'll never share your email with anyone else</small></p>
          </Form.Text>
        </Form.Group>

  
        <Button onClick={(e)=> isLoggedIn(e, this.props.history)} id="loginBtn" className="submitButton" variant="primary" type="submit">
          Login
        </Button>


        <Button style={{ margin: '20px 20px 20px 20px' }} id="loginBtn" variant="primary" type="submit" href="/signup">
          Sign Up
        </Button>
      </Form>
   
      </div>
      </div>

    )
  };
}
export default Login;
