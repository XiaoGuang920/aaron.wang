import { useState, useEffect, useRef } from 'react';
import useElementOnScreen from '../libraries/UseElementOnScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/About.css';

import about_img from '../images/about.png';

const Project = ({project}) => {
    const [container_ref, is_visible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    return (
        <div className={`project ${is_visible ? 'fade-fade-in' : ''}`} ref={container_ref}>
            <div className="project-title">{project.title}</div>
            <div className="project-desc">{project.description}</div>
            <div className="link">Go To Project <FontAwesomeIcon icon={faArrowRight} /></div>
            <div className="cover-img">
                <img src={`${process.env.PUBLIC_URL}/images/${project.image}`} alt={project.name} />
            </div>
        </div>
    );
};

function About()
{
    const fetch_ref = useRef(false);

    const [frontend_skill_list, setFrontendSkillList] = useState(null);
    const [backend_skill_list, setBackendSkillList] = useState(null);
    
    const [pined_project_list, setPinedProjectList] = useState(null);

    const [frontend_container_ref, frontend_is_visible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });

    const [backend_container_ref, backend_is_visible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skills_response = await fetch(`${process.env.PUBLIC_URL}/data/skills.json`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
    
                const pined_projects_response = await fetch(`${process.env.PUBLIC_URL}/data/pined_projects.json`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
    
                const skills = await skills_response.json();
                const pined_projects = await pined_projects_response.json();

                setFrontendSkillList(skills.frontend_skills);
                setBackendSkillList(skills.backend_skills);

                setPinedProjectList(pined_projects.pined_projects);
            } catch (error) {
                console.error('Fetching Content Error:', error);
            } finally {
                // set loading
            }
        };

        if (!fetch_ref.current) {
            fetch_ref.current = true;
            fetchData();
        }
    }, []);

    return (
        <div className="container">
            <div className="about">
                <div className="about-img">
                    <img src={about_img} alt="about"/>
                </div>
                <div className="about-desc">
                    <div className="title">Hi👋 This is Aaron Wang.</div>
                    <div className="content">A full-stack developer.</div>
                </div>
            </div>
            
            <div className="pined-projects">
                <div className="title">Featured Projects</div>
                <div className="projects-content">
                    {pined_project_list ? (
                        pined_project_list.map((project, index) => (
                            <Project key={index} project={project} />
                        ))
                    ) : null}
                </div>
            </div>

            <div className="skill">
                {frontend_skill_list ? (
                    <div className={`skill-tag ${frontend_is_visible ? 'fade-in' : ''}`} ref={frontend_container_ref}>
                    <div className="title">Frontend-End Skills</div>
                    <div className="content">
                        {frontend_skill_list.map((skill, index) => {
                            const img_path = require(`../images/${skill.image}`);
                            return (
                                <div className="skill-icon" key={index}><img src={img_path} alt={skill.name}/></div>
                            );
                        })}
                    </div>
                </div>) : null}
                {backend_skill_list ? (
                    <div className={`skill-tag ${backend_is_visible ? 'fade-in' : ''}`} ref={backend_container_ref}>
                    <div className="title">Backend-End Skills</div>
                    <div className="content">
                        {backend_skill_list.map((skill, index) => {
                            const img_path = require(`../images/${skill.image}`);
                            return (
                                <div className="skill-icon" key={index}><img src={img_path} alt={skill.name}/></div>
                            );
                        })}
                    </div>
                </div>
                ) : null}
            </div>
        </div>
    );
}

export default About;
