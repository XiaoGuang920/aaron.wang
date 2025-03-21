import { useNavigate } from 'react-router-dom';

import '../styles/Header.css';

import logo from '../images/logo.png';

function Header() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const openResume = () => {
        const resume_href = 'https://drive.google.com/file/d/10Sbkrsgm6BHnn-qLTkZ0yeNAYKiih5mV/view?usp=sharing';
        window.open(resume_href);
    };

    return (
        <div id="header">
            <img src={logo} className="logo" alt="logo"/>
            <div className="link">
                <div onClick={() => navigateTo('/')}>About Me</div>
                <div onClick={() => navigateTo('/projects')}>Projects</div>
                <div onClick={openResume}>Resume</div>
            </div>
        </div>
    );
}

export default Header;
