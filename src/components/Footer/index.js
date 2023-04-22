import './styles.css';
import Link from '../Link';
import Heading from '../Heading';

function Footer(props) {
    return(
        <footer className="footer">
            <Heading>Contact Me</Heading>
            <div className="link-container">
                <Link
                    className="link"
                    link="mailto:dudupassoni@gmail.com"
                    title="Email"
                />
                 <Link
                    className="link"
                    link="https://github.com/Dudu-Passoni"
                    title="Github"
                />
                 <Link
                    className="link"
                    link="#Instagram"
                    title="Instagram"
                />
                 <Link
                    className="link"
                    link=""
                    title="Linkedin"
                />
            </div>
        </footer>
    )
}

export default Footer
