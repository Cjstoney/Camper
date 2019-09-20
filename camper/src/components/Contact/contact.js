import React from "react";

function Contact() {
  return (
    <section className="page-section">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
            <h2 className="mt-0">Contact Us</h2>
            <hr className="divider my-4"></hr>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i className="fab fa-github fa-3x mb-3"></i>
            <a className="d-block" href="https://github.com/Cjstoney/Camper">Github</a>
            </div>
            <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3"></i>
            <a className="d-block" href="mailto:aeldenburg@gmail.com">Support</a>
            </div>
        </div>
        </div>
    </section>
  );
}

export default Contact;