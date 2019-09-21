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
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
// import ResourcesPage from "./pages/ResourcesPage";
import SignUpPage from "./pages/SignUpPage";
import ResourceTypePage from './pages/ResourceTypePage';
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";

//hi guys, please keep all fo this below. its how we renger the "non-logged-in page" without 
//having to render ALL of these components on every single page (ie, LoginPage, ResourcesPage, etc. ty-Sam)

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={LoginPage} />
        {/* <Route  exact path="/resources" component={ResourcesPage} /> */}
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/resources/:ResourceTypePage" component={ResourceTypePage} />
        <Route path="/saved" component={SavedPage} />
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" component={Navbar} />
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Services} />
        <Route exact path="/" component={Resources} />
        <Route exact path="/" component={Team} />
        <Route exact path="/" component={Contact} />
        <Route exact path="/" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
