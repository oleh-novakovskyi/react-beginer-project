import Project from '../componens/project/Project'

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">          
            <Project />
        </ul>
      </div>
    </main>
  );
};

export default Projects;
