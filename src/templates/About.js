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
    const SKILLS_CACHE_RESET_TIME_STAMP = '20240729072900';
    const PINED_PROJECTS_CACHE_RESET_TIME_STAMP = '20240729072900';
    
    const fetch_ref = useRef(false);

    const [frontend_skill_list, setFrontendSkillList] = useState(() => {
        const cache_skill_reset_time_stamp = localStorage.getItem('skills_cache_reset_time_stamp');
        const cache_fronted_skill_list = localStorage.getItem('frontend_skill_list');

        if (cache_fronted_skill_list && SKILLS_CACHE_RESET_TIME_STAMP === cache_skill_reset_time_stamp) {
            return JSON.parse(cache_fronted_skill_list);
        } else {
            return null;
        }
    });

    const [backend_skill_list, setBackendSkillList] = useState(() => {
        const cache_skill_reset_time_stamp = localStorage.getItem('skills_cache_reset_time_stamp');
        const cache_backend_skill_list = localStorage.getItem('backend_skill_list');

        if (cache_backend_skill_list && SKILLS_CACHE_RESET_TIME_STAMP === cache_skill_reset_time_stamp) {
            return JSON.parse(cache_backend_skill_list);
        } else {
            return null;
        }
    });
    
    const [pined_project_list, setPinedProjectList] = useState(() => {
        const cache_pined_projects_reset_time_stamp = localStorage.getItem('pined_projects_cache_reset_time_stamp');
        const cache_pined_project_list = localStorage.getItem('pined_projects_list');

        if (cache_pined_project_list && PINED_PROJECTS_CACHE_RESET_TIME_STAMP === cache_pined_projects_reset_time_stamp) {
            return JSON.parse(cache_pined_project_list);
        } else {
            return null;
        }
    });

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
                let skills_response = null;
                let pined_projects_response = null;

                if (frontend_skill_list === null || backend_skill_list === null) {
                    skills_response = await fetch(`${process.env.PUBLIC_URL}/data/skills.json`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });
                }
                
                if (pined_project_list === null) {
                    pined_projects_response = await fetch(`${process.env.PUBLIC_URL}/data/pined_projects.json`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });
                }

                const skills = skills_response ? await skills_response.json() : null;
                const pined_projects = pined_projects_response ? await pined_projects_response.json() : null;

                if (skills) {
                    setFrontendSkillList(skills.frontend_skills);
                    localStorage.setItem('frontend_skill_list', JSON.stringify(skills.frontend_skills));

                    setBackendSkillList(skills.backend_skills);
                    localStorage.setItem('backend_skill_list', JSON.stringify(skills.backend_skills));
                }
                
                if (pined_projects) {
                    setPinedProjectList(pined_projects.pined_projects);
                    localStorage.setItem('pined_projects_list', JSON.stringify(pined_projects.pined_projects));
                }

                localStorage.setItem('skills_cache_reset_time_stamp', SKILLS_CACHE_RESET_TIME_STAMP);
                localStorage.setItem('pined_projects_cache_reset_time_stamp', PINED_PROJECTS_CACHE_RESET_TIME_STAMP);
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
    }, [frontend_skill_list, backend_skill_list, pined_project_list]);

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
