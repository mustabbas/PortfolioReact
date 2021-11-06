import React from 'react';

class Contact extends React.Component{
    render(){
        return(
          <div>
          <section id="about" class="about my-5 p-5">
      <div class="container text-center">
        <h2 class="about-title">About me</h2>
        <p class="about-p mx-auto col-lg-6">I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
        <a href="#" class="btn">Get My Resume</a>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-4 my-3">
            <div class="card text-center bg-light">
              <img src="assets/img/AboutLng.png" class="card-img-top" alt="placeholder" />
              <div class="card-body">
                <h5 class="card-title">Languages</h5>
                <ul class="d-flex list-unstyled AboutLng flex-wrap justify-content-center">
                  <li><span class="badge align-middle mx-1">JavaScript</span></li>
                  <li><span class="badge align-middle mx-1">Ruby</span></li>
                  <li><span class="badge align-middle mx-1">HTML</span></li>
                  <li><span class="badge align-middle mx-1">CSS</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-4 my-3">
            <div class="card text-center bg-light">
              <img src="assets/img/AboutFrame.png" class="card-img-top" alt="placeholder" />
              <div class="card-body">
                <h5 class="card-title">FrameWorks</h5>
                <ul class="d-flex list-unstyled AboutLng flex-wrap justify-content-center">
                  <li><span class="badge align-middle mx-1">Bootstrap</span></li>
                  <li><span class="badge align-middle mx-1">Ruby on Rails</span></li>
                  <li><span class="badge align-middle mx-1">RSpec</span></li>
                  <li><span class="badge align-middle mx-1">Capybara</span></li>
                  <li><span class="badge align-middle mx-1">Selenium</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-4 my-3">
            <div class="card text-center bg-light">
              <img src="assets/img/AboutSkill.png" class="card-img-top" alt="placeholder" />
              <div class="card-body">
                <h5 class="card-title">Skills</h5>
                <ul class="d-flex list-unstyled AboutLng flex-wrap justify-content-center">
                  <li><span class="badge align-middle mx-1">Codekit</span></li>
                  <li><span class="badge align-middle mx-1">GitHub</span></li>
                  <li><span class="badge align-middle mx-1">Codepen</span></li>
                  <li><span class="badge align-middle mx-1">Gitlab</span></li>
                  <li><span class="badge align-middle mx-1">Terminal</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="contact py-5">
      <div class="container d-flex">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-4 col-xl-3 py-5 py-lg-0">
            <p class="contact-p my-3 my-auto text-center">I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-6 my-auto">
            <form method="POST" action="https://formspree.io/f/xdoypzrq">
              <div class="mb-3">
                <input type="text" class="form-control" id="name" placeholder="Name" name="name" required />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email address" name="email" required />
              </div>
              <div class="mb-3">
                <textarea class="form-control" id="comment" rows="5" placeholder="Enter text here" name="comment" required></textarea>
              </div>
              <div class="form-button">
                <button type="submit" class="btn btn-primary">Get in touch</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
        )
    }
}

export default Contact;