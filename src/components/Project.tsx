import React from 'react';
import project1 from '../assets/images/mock01.png';
import project2 from '../assets/images/E-commProj.png';
import project3 from '../assets/images/Freelancers_portfolio.png';
import project4 from '../assets/images/mock04.png';
import project5 from '../assets/images/mock05.png';
import project6 from '../assets/images/mock06.png';
import { INFO } from '../data/user';
import '../assets/styles/Project.scss';
import { Button } from '@mui/material';

const projectImages = [project1, project2, project3, project4, project5, project6];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Portfolio</h1>
      <div className="projects-grid">
        {INFO.projects.map((project, index) => (
          <div className="project" key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <img
                src={projectImages[index]}
                className="zoom"
                alt={project.title}
                width="100%"
              />
            </a>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Button
              className="glowy-button"
              href={project.link}
              aria-label={`Go to ${project.title} GitHub repository`}
            >
              Go To GitHub
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;