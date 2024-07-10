import { useState, useEffect, useRef } from 'react';
import '../styles/About.css'
import about_img from '../images/about.png';
import useElementOnScreen from '../libraries/UseElementOnScreen';

// frontend
import html from '../images/html.svg';
import css from '../images/css.svg';
import javascript from '../images/javascript.svg';
import typescript from '../images/typescript.svg';
import jquery from '../images/jquery.svg';
import vue from '../images/vue.svg';
import react from '../images/react.svg';
import unity from '../images/unity.svg';
import c_sharp from '../images/c-sharp.svg';
import p5 from '../images/p5js.svg';

// backend
import php from '../images/php.svg';
import laravel from '../images/laravel.svg';
import codeigniter from '../images/codeigniter.svg';
import elasticsearch from '../images/elasticsearch.svg';
import mysql from '../images/mysql.svg';
import c_plus from '../images/c-plus.svg';
import python from '../images/python.svg';
import aws from '../images/aws.svg';
import gcp from '../images/gcp.svg';
import ubuntu from '../images/ubuntu.svg';
import linux from '../images/linux.svg';

function About()
{
    const frontend_skill_list = [
        {
            name: 'html',
            src: html,
        },
        {
            name: 'css',
            src: css,
        },
        {
            name: 'javascript',
            src: javascript,
        },
        {
            name: 'typescript',
            src: typescript,
        },
        {
            name: 'jquery',
            src: jquery,
        },
        {
            name: 'vue',
            src: vue,
        },
        {
            name: 'react',
            src: react,
        },
        {
            name: 'unity',
            src: unity,
        },
        {
            name: 'c#',
            src: c_sharp,
        },
        {
            name: 'p5.js',
            src: p5,
        },
    ];

    const backend_skill_list = [
        {
            name: 'php',
            src: php,
        },
        {
            name: 'laravel',
            src: laravel,
        },
        {
            name: 'codeigniter',
            src: codeigniter,
        },
        {
            name: 'elasticsearch',
            src: elasticsearch,
        },
        {
            name: 'mysql',
            src: mysql,
        },
        {
            name: 'c++',
            src: c_plus,
        },
        {
            name: 'c#',
            src: c_sharp,
        },
        {
            name: 'typescript',
            src: typescript,
        },
        {
            name: 'python',
            src: python,
        },
        {
            name: 'aws',
            src: aws,
        },
        {
            name: 'gcp',
            src: gcp,
        },
        {
            name: 'linux',
            src: linux,
        },
        {
            name: 'ubuntu',
            src: ubuntu,
        },
    ];

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

    return (
        <div>
            <div className="about">
                <div className="about-img">
                    <img src={about_img} alt="about"/>
                </div>
                <div className="about-desc">
                    <div className="title">Hi👋 This is Aaron Wang.</div>
                    <div className="content">A full-stack developer.</div>
                </div>
            </div>
            
            <div className="skill">
                <div className={`skill-tag ${frontendIsVisible ? 'fade-in' : ''}`} ref={frontendContainerRef}>
                    <div className="title">Frontend-End Skills</div>
                    <div className="content">
                        {frontend_skill_list.map((skill, index) => (
                            <div className="skill-icon" key={index}><img src={skill.src} alt={skill.name}/></div>
                        ))}
                    </div>
                </div>
                <div className={`skill-tag ${backendIsVisible ? 'fade-in' : ''}`} ref={backendContainerRef}>
                    <div className="title">Backend-End Skills</div>
                    <div className="content">
                        {backend_skill_list.map((skill, index) => (
                            <div className="skill-icon" key={index}><img src={skill.src} alt={skill.name}/></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
