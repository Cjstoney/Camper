import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import About from './components/About/about';
import Services from './components/Services/services';
import Resources from './components/Resources/resources';
import Team from './components/Team/team';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />

      <About />

      <Services />

      <Resources />

      <Team />

      <Contact />

      <Footer />
      
    </div>
  );
}

export default App;
