import React from 'react';
import Project from '../compenet/projectCard';
import Conatct from './contactus';
import Header from '../compenet/Header';
class Home extends React.Component {
    render(){
        return(
          <div>
  <Header />
  <Project />
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
}

export default Home;