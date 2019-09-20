import React from "react";
import "./team.css";

function Team() {
  return (
    <section className="page-section" id="contact">
    <div className="container">
      <h2 className="text-center mt-0">Meet Our Team</h2>
      <hr className="divider my-4"></hr>
      <div className="row">

      <div className="container">
        <div className="row">
            <div className="col-sm">
            <img src="https://images.unsplash.com/photo-1504812533430-d76f0058aff2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="side-img1" alt="code"/>
            </div>
            <div className="col-md">
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://media.licdn.com/dms/image/C5603AQHwQBmqq-wgbg/profile-displayphoto-shrink_800_800/0?e=1572480000&v=beta&t=H1vv7wawCLfufu9vzZmqaAx4Rw_uT1Ie2uOfgXhsceo" className="d-block w-100" alt="eric"/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <a href="https://github.com/bernardericschubert" target="_blank" rel="noopener noreferrer">
                        <h5>Eric Schubert</h5>
                        </a>
                        <p><small>Red hair, metal, holes in heart</small></p>
                      
                    </div>
                    <div className="carousel-item">
                        <img src="https://avatars2.githubusercontent.com/u/48971375?s=460&v=4" className="d-block w-100" alt="andrew"/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <a href="https://github.com/aeldenburg001" target="_blank" rel="noopener noreferrer">
                        <h5>Andrew Eldenburg</h5>
                        </a>
                        <p><small>Full stack web developer with a passion for making even the most complex things simple to understand and easy to use</small></p>
                        
                    </div>
                    <div className="carousel-item">
                        <img src="https://avatars2.githubusercontent.com/u/48640035?s=460&v=4" className="d-block w-100" alt="camerone"/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <a href="https://github.com/Cjstoney" target="_blank" rel="noopener noreferrer">
                        <h5>Camerone Stoney</h5>
                        </a>
                        <p><small>Full-Stack Web Developer, experienced supervisor and creative thinker</small></p>
                        
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.licdn.com/dms/image/C5603AQFDEDVj1tRd8A/profile-displayphoto-shrink_800_800/0?e=1572480000&v=beta&t=LPVeMCfkVSwrwu1d6aNWUt0oR1k2RjN2fbMJ6vb5QLk" className="d-block w-100" alt="cruz"/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <a href="https://github.com/Cruzerman90" target="_blank" rel="noopener noreferrer">
                        <h5>Cruz Morgan</h5>
                        </a>
                        <p><small>Full stack web-developer trained at the University of Oregon</small></p>
                        
                    </div>
                    <div className="carousel-item">
                        <img src="https://avatars1.githubusercontent.com/u/17563089?s=460&v=4" className="d-block w-100" alt="sam"/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <a href="https://github.com/samanthalossett" target="_blank" rel="noopener noreferrer">
                        <h5>Samantha Lossett</h5>
                        </a>
                        <p><small>I am currently working towards my certificate in Full-Stack web development at the University of Oregon</small></p>
                        
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
            <div className="col-sm">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="side-img2" alt="code"/>
            </div>
        </div>
        </div>

      </div>
    </div>
  </section>
  );
}

export default Team;