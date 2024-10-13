import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.css';

function Footer() 
{
    const openGmail = () => {
        const recipient = 'jacky89920@gmail.com';

        const subject = encodeURIComponent('聯絡主旨');
        const body = encodeURIComponent('');

        const resume_href = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
        window.open(resume_href);
    };

    const openLinkIn = () => {
        const linkin_href = 'https://www.linkedin.com/in/仁哲-王-b68905226';
        window.open(linkin_href);
    };

    const openGithub = () => {
        const github_href = 'https://github.com/XiaoGuang920';
        window.open(github_href);
    };
    
    return (
        <div className="footer">
            <div className="link-content">
                <div className="icon-circle" onClick={openGmail}><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="icon-circle" onClick={openLinkIn}><FontAwesomeIcon icon={faLinkedinIn} /></div>
                <div className="icon-circle" onClick={openGithub}><FontAwesomeIcon icon={faGithub} /></div>
            </div>
            
            <div>Made with 🩶 - Aaron Wang</div>
        </div>
    );
}

export default Footer;
