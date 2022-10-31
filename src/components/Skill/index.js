import './styles.css';

function Skill(props) {
    return(
       <article className="skill">
        <div className="skill-image bg">{props.children}</div>
        <h3 className="skill-title bg">{props.title}</h3>
       </article>
    )
}

export default Skill