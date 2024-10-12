import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import useElementOnScreen from '../libraries/UseElementOnScreen';

import '../styles/Project.css';

const openProject = (project_link) => {
    if (project_link) {
        window.open(project_link);
    }
}

function Project({project})
{
    const [container_ref, is_visible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    return (
        <div className={`project ${is_visible ? 'fade-fade-in' : ''}`} ref={container_ref}>
            <div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.description}</div>
                <div className="link" onClick={() => openProject(project.link)}>Go To Project <FontAwesomeIcon icon={faArrowRight}/></div>
            </div>

            <div className="cover-img">
                <img src={`${process.env.PUBLIC_URL}/images/${project.image}`} alt={project.name}/>
            </div>
        </div>
    );
}

export default Project;
