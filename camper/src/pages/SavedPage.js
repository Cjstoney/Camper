import React from "react";
import Navbar from '../components/Navbar/navbar';
import Footer from "../components/Footer/footer";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// import axios from 'axios';

function SavedPage(){
    return(
        <div  className="savedPageDiv">
        <Navbar />

            <h1 style={{marginTop: '100px'}}>Your Saved Resources</h1>
            <br></br>
            <h3>(the saved cards [] [] []  will render here)</h3>
        <Footer />
        </div>
    );
}

export default SavedPage;