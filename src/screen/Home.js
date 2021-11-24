import React, { useState } from 'react';
import Project from '../compenet/projectCard';
import Conatct from './contactus';
import Header from '../compenet/Header';
import ProjectModal from '../compenet/ProjectModal';
import {Modal} from 'react-bootstrap';
import projectData from '../project.js'

const  Home = () =>  {
   const [ show, setShow ] = useState(false);
   const [ proTitle, setProTitle ] = useState('');
   const handleClose = () => setShow(false);
   const handleShow = (param) => {
     setShow(true);
      setProTitle(param);
    };
        return(
          <div>
            <Modal size="lg" show={show} onHide={handleClose}>
             <ProjectModal proTitle = {proTitle} close = {handleClose} />
            </Modal>
            <Header />
            <section id="works" class="container my-lg-5 py-lg-5">
        <h2 class="works-title text-center mt-5">My Recent Works</h2>
        <div class="works-green-bar d-lg-none my-4"></div>
        <div class="row mx-3">
            {projectData.map((item) => {
              return(
                <Project 
                show = {handleShow}
                img = {item.img}
                title = {item.title}
                lang = {item.lang}
                />
              );
            })} 
            </div>
            </section>
            <Conatct />
            <footer className="border border-top pt-2">
              <ul className="d-flex justify-content-center list-unstyled">
                <li className="p-2"><a href="https://github.com/mustabbas"><img src="assets/img/github_dark.svg" alt="Vector-github" /></a></li>
                <li className="p-2"><a  href="https://www.linkedin.com/in/mustabbas/"><img src="assets/img/linkedin.svg" alt="Vecto-linkedin" /></a></li>
                <li className="p-2"><a href="https://angel.co/u/mustafa-abbas-4"><img src="assets/img/angellist_dark.svg" alt="Vecto-angellist" /></a></li>
                <li className="p-2"><a href="https://medium.com/@mustabbas2000"><img src="assets/img/medium_dark.svg" alt="Vector-medium" /></a></li>
              </ul>
            </footer>
          </div>
        )
}

export default Home;