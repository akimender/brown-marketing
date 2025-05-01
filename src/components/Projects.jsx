import React from 'react';
import '../styles/Projects.css'

const Projects = () => {
    return (
        <div className="projects-container" id="Projects">
            <h1>Current Projects</h1>
            <div className="project-tasveer">
                <div className="project-text-container">
                    <h3 className="project-title">
                        Project Tasveer
                    </h3>
                    <p className="project-description">
                        Project Tasveer’s mission is to support public health related community service projects in India through influential photography and fashion design. Here at Project Tasveer we know the value of art; we strive to share thought-provoking images or designs, and the cultural narratives embedded in them, to spread powerful messages. We hope most of our pieces not only expose the beauty of India, but also raise awareness for some of the challenges that many Indian communities must endure.
                    </p>
                </div>
                <a href="https://www.projecttasveer.org/" target="_blank" rel="noopener noreferrer">
                    <img src="project_tasveer.jpg" alt="Project Tasveer" id="project-tasveer" />
                </a>
            </div>
        </div>
    );
};

export default Projects;