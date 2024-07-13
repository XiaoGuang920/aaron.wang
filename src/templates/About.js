import { useState, useEffect, useRef } from 'react';
import useElementOnScreen from '../libraries/UseElementOnScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/About.css';

import about_img from '../images/about.png';

function About()
{
    const [frontendContainerRef, frontendIsVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });

    const [backendContainerRef, backendIsVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    });

    const [project1ContainerRef, project1IsVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    const [project2ContainerRef, project2IsVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    const [project3ContainerRef, project3IsVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    const [project4ContainerRef, project4IsVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });

    const [frontend_skill_list, setFrontendSkillList] = useState(null);
    const [backend_skill_list, setBackendSkillList] = useState(null);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/skills.json`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(skills => {
                setFrontendSkillList(skills.frontend_skills);
                setBackendSkillList(skills.backend_skills);
            })
            .catch(error => console.error('Fetching Content Error:', error));
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
                    <div className={`project ${project1IsVisible ? 'fade-fade-in' : ''}`} ref={project1ContainerRef}>
                        <div className="project-title">Wall手言合-多樣互動式電視牆</div>
                        <div className="project-desc">這款沉浸式互動電視牆，集展示功能、觸控、肢體控制、語音控制於一體，並結合手機AR功能提供多場景導覽服務。全息投影技術打造的沉浸式體驗，讓使用者欲罷不能，徹底顛覆傳統展示方式。</div>
                        <div className="link">Go To Project <FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className="cover-img">
                            <img src={`${process.env.PUBLIC_URL}/images/tv-wall.png`} alt="Wall手言合" />
                        </div>
                    </div>
                    <div className={`project ${project2IsVisible ? 'fade-fade-in' : ''}`} ref={project2ContainerRef}>
                        <div className="project-title">Wall手言合-多樣互動式電視牆</div>
                        <div className="project-desc">這款沉浸式互動電視牆，集展示功能、觸控、肢體控制、語音控制於一體，並結合手機AR功能提供多場景導覽服務。全息投影技術打造的沉浸式體驗，讓使用者欲罷不能，徹底顛覆傳統展示方式。</div>
                        <div className="link">Go To Project <FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className="cover-img">
                            <img src={`${process.env.PUBLIC_URL}/images/tv-wall.png`} alt="Wall手言合" />
                        </div>
                    </div>
                    <div className={`project ${project3IsVisible ? 'fade-fade-in' : ''}`} ref={project3ContainerRef}>
                        <div className="project-title">Wall手言合-多樣互動式電視牆</div>
                        <div className="project-desc">這款沉浸式互動電視牆，集展示功能、觸控、肢體控制、語音控制於一體，並結合手機AR功能提供多場景導覽服務。全息投影技術打造的沉浸式體驗，讓使用者欲罷不能，徹底顛覆傳統展示方式。</div>
                        <div className="link">Go To Project <FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className="cover-img">
                            <img src={`${process.env.PUBLIC_URL}/images/tv-wall.png`} alt="Wall手言合" />
                        </div>
                    </div>
                    <div className={`project ${project4IsVisible ? 'fade-fade-in' : ''}`} ref={project4ContainerRef}>
                        <div className="project-title">Wall手言合-多樣互動式電視牆</div>
                        <div className="project-desc">這款沉浸式互動電視牆，集展示功能、觸控、肢體控制、語音控制於一體，並結合手機AR功能提供多場景導覽服務。全息投影技術打造的沉浸式體驗，讓使用者欲罷不能，徹底顛覆傳統展示方式。</div>
                        <div className="link">Go To Project <FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className="cover-img">
                            <img src={`${process.env.PUBLIC_URL}/images/tv-wall.png`} alt="Wall手言合" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="skill">
                {frontend_skill_list ? (
                    <div className={`skill-tag ${frontendIsVisible ? 'fade-in' : ''}`} ref={frontendContainerRef}>
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
                    <div className={`skill-tag ${backendIsVisible ? 'fade-in' : ''}`} ref={backendContainerRef}>
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
