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
          <Form.Control input='true' type="email" name="emailLogin" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="pwLogin" placeholder="Password" />
          <Form.Text className="text-muted">
            <p>We'll never share your email with anyone else</p>
          </Form.Text>
        </Form.Group>

  
<<<<<<< HEAD
        <Button onClick={(e)=> isLoggedIn(e, this.props.history)} className="submitButton" variant="primary" type="submit">
=======
        <Button onClick={isLoggedIn} className="submitButton" id="loginBtn" variant="primary" type="submit">
>>>>>>> develop
          Login
        </Button>


<<<<<<< HEAD
        <Button style={{ margin: '20px 20px 20px 20px' }} variant="primary" type="submit" href="/signup" >
=======
        <Button style={{ margin: '20px 20px 20px 20px' }} id="loginBtn" variant="primary" type="submit" href="/signup">
>>>>>>> develop
          Sign Up
        </Button>
      </Form>
   
      </div>
      </div>

    )
  };
}
export default Login;
