// src/components/Expertise.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import { INFO } from '../data/user';
import '../assets/styles/Expertise.scss';

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{INFO.about.title}</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Front-end Development</h3>
            <p>{INFO.about.description}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {INFO.about.skills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
            <a href={INFO.about.cvLink} download className="download-cv">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;