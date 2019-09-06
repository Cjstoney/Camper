import React from "react";
import Navbar from '../components/Navbar/navbar';
import Cards from "../components/Cards/Cards"
import Footer from '../components/Footer/footer';



function ResourcesPage() {
    return (
        <section className="ResourcesClass" id="ResourcesClass">
            <Navbar />
            <Cards /> 
            <Footer />
        </section>
    )
}
export default ResourcesPage;