import React from "react";
import './App.css';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import Resources from './components/Resources/resources';
import Footer from './components/Footer/footer';

function ResourcesPage() {
    return (
        <section className="Login" id="Login">
            <Navbar />
            <Header />
            {/* <Card />  */}
            <Resources />
            <Footer />
        </section>
    )
}
export default ResourcesPage;