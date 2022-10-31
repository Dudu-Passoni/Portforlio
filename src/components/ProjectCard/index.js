import './styles.css';

function ProjectCard(props) {
    return(
        <article className="card-content">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
        </article>
    )
}

export default ProjectCard