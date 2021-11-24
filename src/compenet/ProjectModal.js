import projectData from '../project.js'

const ProjectModal = (props) => {
  const projectItem = projectData.filter((item) => item.title === props.proTitle);
 const projectRender =  projectItem.map((item) => {
    return(
      <div className="modal-body d-flex flex-wrap">
      <img className="modal-img" src={item.img} alt="modal-img" />
    <h5 className="modal-title my-2">{item.title}</h5>
      <ul className="d-flex list-unstyled flex-wrap works-lng w-100">
        {item.lang.map((item) => {
          return(
          <li><span className="badge bg-light text-dark py-2 px-2 m-1">{item}</span></li>
          )
        })}
      </ul>
    <p className="modal-p w-100">{item.des}</p>
      <div className="modal-buttons">
        <a href ={item.url} type="button" className="btn modal-btn">See live<img src="assets/img/see_live.svg" alt="See live" /></a>
        <a href ={item.github}  type="button" className="btn modal-btn">See Source<img src="assets/img/github_white.svg" alt="GitHub" /></a>
      </div>
    </div>
    )
  })

    return (
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" onClick = {props.close}/>
      </div>
     {projectRender}
    </div>
  </div>
    );
};

export default ProjectModal;