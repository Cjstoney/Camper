import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import About from './components/About/about';
import Services from './components/Services/services';
import Resources from './components/Resources/resources';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Resources />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
