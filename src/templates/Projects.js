import { useState, useEffect, useRef } from 'react';

// Component
import Header from './Header';
import Footer from './Footer';
import Menu from "./Menu";
import Project from './Project';

// stylesheet
import '../styles/Projects.css';

function Projects()
{
    const PINED_PROJECTS_CACHE_RESET_TIME_STAMP = '20240901160000';
    
    const fetch_ref = useRef(false);

    const getUniqueProjectList = (project_list) => {
        const map = new Map();
        project_list.forEach((project) => map.set(project.title, project));
        const unique_project_list = Array.from(map.values());
        return unique_project_list;
    }

    const [pined_project_list, setPinedProjectList] = useState(() => {
        const cache_pined_projects_reset_time_stamp = localStorage.getItem('pined_projects_cache_reset_time_stamp');
        const cache_pined_project_list = localStorage.getItem('pined_projects_list');

        if (cache_pined_project_list && PINED_PROJECTS_CACHE_RESET_TIME_STAMP === cache_pined_projects_reset_time_stamp) {
            return getUniqueProjectList(JSON.parse(cache_pined_project_list));
        } else {
            return null;
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                let pined_projects_response = null;
                
                if (pined_project_list === null) {
                    pined_projects_response = await fetch(`${process.env.PUBLIC_URL}/data/pined_projects.json`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });
                }

                const pined_projects = pined_projects_response ? await pined_projects_response.json() : null;
                
                if (pined_projects) {
                    setPinedProjectList(getUniqueProjectList(pined_projects.pined_projects));
                    localStorage.setItem('pined_projects_list', JSON.stringify(pined_projects.pined_projects));
                }

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
    }, [pined_project_list]);

    return (
        <div className="container">
            <Header />

            <section className="project-list">
                <div className="projects-content">
                    {pined_project_list ? (
                        pined_project_list.map((project, index) => (
                            <Project key={index} project={project} />
                        ))
                    ) : null}
                </div>
            </section>

            <Menu />
            <Footer />
        </div>
    );
}

export default Projects;
