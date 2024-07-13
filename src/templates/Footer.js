import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/Footer.css';

function Footer() 
{
    return (
        <div className="footer">
            <div>
                <div className="icon-circle"><FontAwesomeIcon icon={faEnvelope} /></div>
            </div>
            
            <div>Made with 🩶 - Aaron Wang</div>
        </div>
    );
}

export default Footer;
