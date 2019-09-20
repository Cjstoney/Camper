import React from "react";
import Signup from "../components/Signup/signup";
// import Footer from '../components/Footer/footer';
// import Navbar from "../components/Navbar/navbar";


function SignupPage(props){

    return(
        <section className="signupdiv">
            {/* <Navbar /> */}
            <Signup history={props.history} />
            {/* <Footer /> */}
        </section>
    )
}

export default SignupPage;
///writing some stuff so i can commit it //