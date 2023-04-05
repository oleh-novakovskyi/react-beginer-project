import "./style.css";

const Project = ({id, title, img}) => {
    return ( 
        <li className="project">
            <a href="./project-page.html">
              <img
                src={img}
                alt="{title}"
                className="project__img"
              />
              <h3 className="project__title">{id}. {title}</h3>
            </a>
          </li>
     );
}
 
export default Project;