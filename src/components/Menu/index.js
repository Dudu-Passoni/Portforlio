import './styles.css';
import Logo from '../Logo'

function Menu(props) {
    return(
        <menu className="menu">
            <Logo />
            <nav>
                <a className="menu-link" href='#projects'>Projects</a>
                <a className="menu-link" href='#skills'>Skills</a>
            </nav>
        </menu>
    )
}

export default Menu