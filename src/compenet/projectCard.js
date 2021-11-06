import React from 'react';
import project from '../project.js';

class Project extends React.Component{
    render(){
      const projects = project.map((item) =>{
           const langList = item.lang.map((list) =>{
             return(<li><span class="badge bg-light text-dark py-2 px-2 m-1">{list}</span></li>);
           })
             return (
              <div class="col-md-6 col-lg-4 my-3">
              <div class="card text-center">
                <img src={item.img} class="card-img-top" alt="placeholder" />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <ul class="d-flex justify-content-center list-unstyled flex-wrap works-lng">
                    {langList}
                  </ul>
                  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#project">See project</button>
                </div>
              </div>
            </div>
             )
      })
        return(
    <section id="works" class="container my-lg-5 py-lg-5">
        <h2 class="works-title text-center mt-5">My Recent Works</h2>
        <div class="works-green-bar d-lg-none my-4"></div>
        <div class="row mx-3">
            {projects}
        </div>
    </section>         
        )
    }
}

export default Project;