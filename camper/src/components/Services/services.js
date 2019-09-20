import React from "react";

function Services() {
  return (
    <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <i className="fas fa-4x fa-search text-primary mb-4"></i>
            <h3 className="h4 mb-2">Search</h3>
            <p className="text-muted mb-0"><small>An organized database of resources for developers</small></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <i className="fas fa-4x fa-save text-primary mb-4"></i>
            <h3 className="h4 mb-2">Save</h3>
            <p className="text-muted mb-0"><small>Easily save the resources you find most valuable</small></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
            <h3 className="h4 mb-2">Review</h3>
            <p className="text-muted mb-0"><small>User reviews help you identify the best resources for your project</small></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <i className="fas fa-4x fa-heart text-primary mb-4"></i>
            <h3 className="h4 mb-2">Open Source</h3>
            <p className="text-muted mb-0"><small>Visit our <a href="https://github.com/Cjstoney/Camper" target="_blank" rel="noopener noreferrer">GitHub</a> if you'd like to contribute to this project</small></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Services;