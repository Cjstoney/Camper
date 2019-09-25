import React from "react";
import '../../helpers/isLoggedIn'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="/">Camper</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto my-2 my-lg-0">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/#portfolio">Resources</a>
          </li>
          <li className="nav-item">
            <a id='searchButton' className="nav-link js-scroll-trigger" href="/search">Search</a>
          </li>
          <li className="nav-item">
            <a id='savedButton' className="nav-link js-scroll-trigger" /*onClick="isLoggedIn(evnt)"*/ href="/saved">Saved</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;