import './styles.css';

function Link(props) {
    return(
        <a className="link" href={props.link} target="_blank">
            {props.title}
        </a>
    )
}

export default Link