import React from "react";
import './styles.css';
import {newUser} from '../../helpers/postNewUser'

const validEmailRegex = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
    

class Signup extends React.Component {
  state = {
    fullName: null,
    email: null,
    password: null,
    errors: {
      fullName: '',
      email: '',
      password: '',
    }
  }
  
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'fullName': 
      errors.fullName = 
      value.length < 5
      ? 'Full Name must be 5 characters long!'
      : '';
      break;
      case 'email': 
      errors.email = 
      validEmailRegex.test(value)
      ? ''
      : 'Email is not valid!';
      break;
      case 'password': 
      errors.password = 
      value.length < 8
      ? 'Password must be 8 characters long!'
      : '';
      break;
      default:
      break;
    }
    
    this.setState({errors, [name]: value});
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
  
  
  
  render(){
    console.log(this.props)
    const {errors} = this.state;
    return (
      <div className="form1">
          <div className='wrapper'>
            <div className='form-wrapper'>
              <h2>Create Account</h2>
              <form onSubmit={this.handleSubmit} noValidate>
                <div className='fullName'>
                  <label htmlFor="fullName">Full Name</label>
                  <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                  {errors.fullName.length > 0 && 
                    <span className='error'>{errors.fullName}</span>}
                </div>
                <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='info'>
              <p><small>Password must be eight characters in length.</small></p>
            </div>
            <div className='submit'>
              <button onClick={() =>newUser(this.props.history)} id="createBtn">Create</button>
            </div>
          </form>
        </div>
    </div>
    </div>
    );
  }
}

export default Signup;
//was trying to add the localstorage here, didnt work//-sam 
//   AssignValues = (e) => {
//     e.preventDefault();
//     console.log("input from login form: " );
//     localStorage.setItem('fullName', document.input.fullName.value);
//     localStorage.setItem('email',  document.form1.email.value);
//     localStorage.setItem('password',  document.form1.password.value);
  
//   }
// Value1= () =>
//   { 
//       console.log("Value of emailLogin is: " + localStorage.getItem("fullName")); 
//       }

//  Value2= ()=>
//   {
//        console.log("Value of emailis: " + localStorage.getItem("email")); 
//        }
//        Value3= ()=>
//        {
//             console.log("Value of password is: " + localStorage.getItem("password")); 
//             }

//   ShowLength = ()=>{
//     console.log("num of items in local storage is: " + localStorage.length);
//   }