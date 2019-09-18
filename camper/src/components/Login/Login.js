import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

       <Row>
         <Col sm={4}>
      <Form name="form1">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control input='true' type="email" name="emailLogin" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="pwLogin" placeholder="Password" />
        </Form.Group>

  
        <Button onClick={this.AssignValues} className="submitButton" variant="primary" type="submit">
          Submit
  </Button>


        <Button style={{ margin: '20px 20px 20px 20px' }} variant="primary" type="submit" href="/signup">
          Or Sign Up
  </Button>
      </Form>
      </Col>
      </Row>

      </Container>
    )
  };
}
export default Login;

                              //try #1 //
// handleClick= () =>{
//   alert("this is the handleClick working sam");

//   let email1=document.getElementById('emailLogin');
//   let pw=document.getElementById('pwLogin');

//   function store (){
//     localStorage.setItem('emailLogin', email1.value);
//     localStorage.setItem('pwLogin', pw.value);
//     console.log("input from login form: ", email1, pw);
//   }

//   function check(){
//     let storedName= localStorage.getItem('emailLogin');
//     let storedPw= localStorage.getItem('pwLogin');
//     console.log("stored data from form: ", storedName, storedPw );
//   }
//   store();
//   check();
// }
                              //try #2 //