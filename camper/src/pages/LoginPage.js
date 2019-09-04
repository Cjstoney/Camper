import React from "react";
// import './App.css';
import Navbar from '../components/Navbar/navbar';
// import Header from '../components/Header/header';
// import Resources from '../components/Resources/resources';
import Footer from '../components/Footer/footer';
import Login from "../components/Login/Login";


function LoginPage() {
    return (
        <section className="Login" id="Login">
          
            <Navbar />
            <Login />
            <Footer />

        </section>
    )
}
export default LoginPage;