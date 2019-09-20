import React from "react";
import Navbar from '../components/Navbar/navbar';
// import Footer from '../components/Footer/footer';
import Login from "../components/Login/Login";



function LoginPage() {
    return (
      
        <section className="Login" id="Login">
          
            <Navbar />
            <h1>Join Us</h1>
            <Login />
            {/* <Footer /> */}

        </section>
   
    )
}
export default LoginPage;


//sam make a css w/ vH , sticky footer, 