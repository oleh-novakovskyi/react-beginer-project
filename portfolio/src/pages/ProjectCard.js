import { useParams } from "react-router-dom";

import {projects} from "../helpers/projectsList";

import BtnGitHub from "../componens/btnGitHub/BtnGitHub";

const ProjectCard = () => {
const {id} = useParams();
const project = projects[id];


console.log(projects[2]);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>            
          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

            {project.gitHubLink && (
                <BtnGitHub link="https://github.com" />
            )}          

        </div>
      </div>
    </main>
  );
};

export default ProjectCard;
