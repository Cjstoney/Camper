import React from "react";
// import Footer from '../components/Footer/footer';
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/navbar";



function LoginPage(props) {
    return (
      
        <section className="Login" id="Login">
        
            <h1>Join Us</h1>
            <Login history={props.history} />
            <Navbar />
            <Login />

        </section>
   
    )
}
export default LoginPage;


//sam make a css w/ vH , sticky footer, 