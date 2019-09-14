import React from "react";
import Signup from "../components/Signup/signup";
import Navbar from "../components/Navbar/navbar";
// import Footer from '../components/Footer/footer';

function SignupPage(){
    return(
        <section className="signupdiv">
            <Navbar />
            <Signup />
            {/* <Footer /> */}
        </section>
    )
}

export default SignupPage;