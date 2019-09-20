import React from "react";
// import Footer from '../components/Footer/footer';
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/navbar";



function LoginPage(props) {
    return (
      
        <section className="Login" id="Login">
        
            <Navbar />
            <Login history={props.history} />
        

        </section>
   
    )
}
export default LoginPage;


//sam make a css w/ vH , sticky footer, 