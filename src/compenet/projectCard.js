import React from 'react';

const Project =(props) => {
  const langList = props.lang.map((item) => {
    return(
      <li><span class="badge bg-light text-dark py-2 px-2 m-1">{item}</span></li>
    )
  })
        return(
        <div class="col-md-6 col-lg-4 my-3">
              <div class="card text-center">
                <img src={props.img} class="card-img-top" alt="placeholder" />
                <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>
                  <ul class="d-flex justify-content-center list-unstyled flex-wrap works-lng">
                      {langList}
                  </ul>
                  <button onClick ={()=> props.show(props.title)} type="button" class="btn" data-bs-toggle="modal" data-bs-target="#project">See project</button>
                </div>
              </div>
          </div>   
        )
}

export default Project;