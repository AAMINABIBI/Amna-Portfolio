import React from 'react';
import visioVoxImg from '../assets/images/mock03.png';
import ecommImg from '../assets/images/E-commProj.png';
import freelancerImg from '../assets/images/Freelancers_portfolio.png';
import calculatorImg from '../assets/images/calculator.png';
import easyPaisaImg from '../assets/images/mock02.png';
import todoImg from '../assets/images/mock01.png';
import codeCraftImg from '../assets/images/mock06.png';
import shinepointImg from '../assets/images/mock07.png';
import fitnessAdminImg from '../assets/images/mock05.png';
import { INFO } from '../data/user';
import '../assets/styles/Project.scss';
import { Button } from '@mui/material';

// Order must match the order of INFO.projects in data/user.ts
const projectImages = [
  visioVoxImg,
  ecommImg,
  freelancerImg,
  calculatorImg,
  easyPaisaImg,
  todoImg,
  codeCraftImg,
  shinepointImg,
  fitnessAdminImg,
];

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