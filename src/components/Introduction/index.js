import './styles.css';
import Link from '../Link'

function Introduction(props) {
    return(
        <div>
            <h2>
                Hi, my name is Luis Eduardo and this is my portfolio, <br/>each dream that you leave behind is a future thats is killed 
            </h2>
            <div className="description">
            <p>
                A computer science studant, who do some codes for trainning.
            </p>
            </div>
            <Link link="mailto:dudupassoni@gmail.com" title="Work with me"/>   
        </div>
            
        
    )
}

export default Introduction