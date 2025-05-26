// src/components/Project.tsx
import React from 'react';
import project1 from '../assets/images/mock01.png'; // Import image
import project2 from '../assets/images/E-commProj.png'; // Import image
import project3 from '../assets/images/Freelancers_portfolio.png'; // Import image
import project4 from '../assets/images/mock04.png';
import project5 from '../assets/images/mock05.png'; 
import project6 from '../assets/images/mock06.png'; 
import { INFO } from '../data/user';
import '../assets/styles/Project.scss';

const projectImages = [project1, project2,project3,project4,project5,project6]; // Map images to projects

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Portfolio</h1>
      <div className="projects-grid">
        {INFO.projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={projectImages[index]}
                className="zoom"
                alt={project.title}
                width="100%"
              />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;