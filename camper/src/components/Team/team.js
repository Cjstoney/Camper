import React from "react";
import "./team.css";

function Team() {
  return (
    <section className="page-section" id="team">
    <div className="container">
      <h2 className="text-center mt-0">Meet Our Team</h2>
      <hr className="divider my-4"></hr>
      <div className="row">

      <div class="container">
        <div class="row">
            <div class="col-sm">
            <img src="https://images.unsplash.com/photo-1504812533430-d76f0058aff2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="side-img1" alt="code"/>
            </div>
            <div class="col-md">
            <div class="bd-example">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://media.licdn.com/dms/image/C5603AQHwQBmqq-wgbg/profile-displayphoto-shrink_800_800/0?e=1572480000&v=beta&t=H1vv7wawCLfufu9vzZmqaAx4Rw_uT1Ie2uOfgXhsceo" class="d-block w-100" alt="eric"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <h5>Eric Schubert</h5>
                        <p>Bio goes here.</p>
                    </div>
                    <div class="carousel-item">
                        <img src="https://avatars2.githubusercontent.com/u/48971375?s=460&v=4" class="d-block w-100" alt="andrew"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <h5>Andrew Eldenburg</h5>
                        <p>Full stack web developer with a passion for making even the most complex things simple to understand and easy to use.</p>
                    </div>
                    <div class="carousel-item">
                        <img src="https://avatars2.githubusercontent.com/u/48640035?s=460&v=4" class="d-block w-100" alt="camerone"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <h5>Camerone Stoney</h5>
                        <p>Full-Stack Web Developer, experienced supervisor and creative thinker.</p>
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.licdn.com/dms/image/C5603AQFDEDVj1tRd8A/profile-displayphoto-shrink_800_800/0?e=1572480000&v=beta&t=LPVeMCfkVSwrwu1d6aNWUt0oR1k2RjN2fbMJ6vb5QLk" class="d-block w-100" alt="cruz"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <h5>Cruz Morgan</h5>
                        <p>Bio goes here.</p>
                    </div>
                    <div class="carousel-item">
                        <img src="https://avatars1.githubusercontent.com/u/17563089?s=460&v=4" class="d-block w-100" alt="sam"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                        <br></br>
                        <h5>Samantha Lossett</h5>
                        <p>I am currently working towards my certificate in Full-Stack web development at the University of Oregon.</p>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
            <div class="col-sm">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="side-img2" alt="code"/>
            </div>
        </div>
        </div>

      </div>
    </div>
  </section>
  );
}

export default Team;