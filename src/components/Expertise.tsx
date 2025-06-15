// src/components/Expertise.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import { INFO } from '../data/user'; // Make sure this path is correct
import '../assets/styles/Expertise.scss';

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{INFO.about.title}</h1>
        <div className="about-content-wrapper">
          <div className="about-image-container">
            <img src={INFO.main.avatar} alt={INFO.main.name} className="about-profile-pic" />
          </div>
          <div className="about-text-container">
            <p dangerouslySetInnerHTML={{ __html: INFO.about.description }}></p>

            {/* <a href={INFO.about.cvLink} download className="download-cv">
              Download CV
            </a> */}

            {/* --- MOVED SKILLS SECTION TO THE BOTTOM START --- */}
            {/* You could optionally add a heading for this section here, e.g., <h3>Technical Skills</h3> */}
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span> 
             
              {INFO.about.skills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
            {/* --- MOVED SKILLS SECTION TO THE BOTTOM END --- */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;