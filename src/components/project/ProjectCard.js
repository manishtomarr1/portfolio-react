import './ProjectCard.css'
import 'animate.css';
function ProjectCard(props) {
    return (
      <div className="project-card animate__animated animate__fadeInUp 	">
        <img  src={props.image} alt={props.name} />
        <h2 className='project-name'>{props.name}</h2>
        <p>{props.discription}</p>

        <div className="project-links">
          <a href={props.liveLink}>Live</a>
          <a href={props.githubLink}>Github</a>
        </div>
      </div>
    );
  }
export default ProjectCard;  