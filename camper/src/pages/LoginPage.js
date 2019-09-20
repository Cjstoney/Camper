import React from "react";
// import Footer from '../components/Footer/footer';
import Login from "../components/Login/Login";



function LoginPage(props) {
    return (
      
        <section className="Login" id="Login">
        
            <h1>Join Us</h1>
            <Login history={props.history} />

        </section>
   
    )
}
export default LoginPage;


//sam make a css w/ vH , sticky footer, 