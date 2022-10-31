import './styles.css';

function Heading(props) {
    return(
        <div className="heading-container">
            <h2 id={props.id} className="heading">
                {props.children}
            </h2>
        </div>
    )
}

export default Heading