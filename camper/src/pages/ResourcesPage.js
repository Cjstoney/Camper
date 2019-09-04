import React from "react";
// import './App.css';
import Navbar from '../components/Navbar/navbar';
import Cards from "../components/Cards/Cards"
// import Resources from './components/Resources/resources';
import Footer from '../components/Footer/footer';

function ResourcesPage() {
    return (
        <section className="Login" id="Login">
            <Navbar />
            <Cards /> 
            {/* <Resources /> */}
            <Footer />
        </section>
    )
}
export default ResourcesPage;