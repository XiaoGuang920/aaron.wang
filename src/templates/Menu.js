import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../styles/Menu.css';
import {useEffect, useState} from "react";
import {document} from "postcss";
import {useNavigate} from "react-router-dom";

function Menu()
{
    const [show_menu, setShowMenu] = useState(false);

    const showMenu = () => setShowMenu(!show_menu);

    const navigate = useNavigate();

    const navigateTo = (path) => {
        showMenu();
        navigate(path);
    };

    const openResume = () => {
        showMenu();
        const resume_href = 'https://drive.google.com/file/d/1eIpAITnGCz46B4WH6_V0RLR7CEbfgiVR/view?usp=drive_link';
        window.open(resume_href);
    };

    useEffect(() => {
        if (show_menu) {
            window.document.body.classList.add('no-scroll');
        } else {
            window.document.body.classList.remove('no-scroll');
        }
    }, [show_menu])

    return (
        <div>
            <div id="menu" className={show_menu ? 'active' : ''} onClick={showMenu}><FontAwesomeIcon icon={faBars}/></div>
            <div id="dialog-mask" className={show_menu ? 'active' : ''}></div>
            <div id="dialog" className={show_menu ? 'active' : ''}>
                <div onClick={() => navigateTo('/')}>About Me</div>
                <div onClick={() => navigateTo('/projects')}>Projects</div>
                <div onClick={openResume}>Resume</div>
            </div>
        </div>
    );
}

export default Menu;
