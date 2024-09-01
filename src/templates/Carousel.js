import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import '../styles/Carousel.css';

const getSlideClassName = (index, current_index, item_length) => {
    if (index === current_index) {
        return 'active';
    } else if (
        index === current_index - 1 ||
        (current_index === 0 && index === item_length - 1)
    ) {
        return 'left';
    } else if (
        index === current_index + 1 ||
        (current_index === item_length - 1 && index === 0)
    ) {
        return 'right';
    } else {
        return '';
    }
}

function Carousel({projects})
{
    const [current_index, setCurrentIndex] = useState(0);

    const nextSlide = (event) => {
        event.stopPropagation();
        setCurrentIndex((prev_index) => 
            prev_index === projects.length - 1 ? 0 : prev_index + 1
        );
    }

    const prevSlide = (event) => {
        event.stopPropagation();
        setCurrentIndex((prev_index) => 
            prev_index === 0 ? projects.length - 1 : prev_index - 1
        );
    }

    const openProject = () => {
        const project_href = projects[current_index].link ?? null;

        if (project_href) {
            window.open(project_href);
        }
    }

    return (
        <div className="carousel" onClick={openProject}>
            <div className="carousel-slides">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${getSlideClassName(index, current_index, projects.length)}`}
                        onClick={openProject}
                    >
                        <div className="project-title">{project.title}</div>
                        <div className="project-desc">{project.description}</div>
                        <div className="link">Go To Project <FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className="cover-img">
                            <img src={`${process.env.PUBLIC_URL}/images/${project.image}`} alt={project.name} />
                        </div>
                    </div>
                )) ?? null}
            </div>
            <button className="carousel-button left" onClick={prevSlide}>
                <FontAwesomeIcon icon={faArrowLeftLong}/>
            </button>
            <button className="carousel-button right" onClick={nextSlide}>
                <FontAwesomeIcon icon={faArrowRightLong}/>
            </button>
        </div>
    );
}

export default Carousel;
