import React from "react";
import Signup from "../components/Signup/signup";
import Navbar from "../components/Navbar/navbar";
// import Footer from '../components/Footer/footer';

function SignupPage(props){

    return(
        <section className="signupdiv">
            <Navbar />
            <Signup history={props.history} />
            {/* <Footer /> */}
        </section>
    )
}

export default SignupPage;
///writing some stuff so i can commit it //