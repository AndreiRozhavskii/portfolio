import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import avatar from './avatar.png';

const projects = [
  {
    title: 'HelpDesk App',
    description: 'Help to manage and track IT support requests, automate workflows, and provide reporting and knowledge base resources to enhance service efficiency',
    link: 'https://finalproject-vzn3.onrender.com',
    image: avatar,
    technologies: ['React', 'Node.js', 'Render', 'Postgresql', 'JWT'] 
  },
  
];

const Projects = () => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <section id="projects" className="projects">
      <h2 className={`projects-title ${projectsInView ? 'animate' : ''}`}>Projects</h2>
      <div className={`projects-items ${projectsInView ? 'animate' : ''}`} ref={projectsRef}>
        {projects.map((project, index) => (
          <div key={index} className="projects-item">
            <div className="projects-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projects-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="projects-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
