// src/components/Home.tsx
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INFO } from '../data/user';
import amnaLogo from '../assets/images/amnaLogo.jpg'; // Direct import
import '../assets/styles/Main.scss';

function Home() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={amnaLogo} alt="Aamina Bibi Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={INFO.socials.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </div>
          <h1>{INFO.main.name}</h1>
          <p>{INFO.main.title}</p>
          <p>{INFO.main.description}</p>
          <div className="mobile_social_icons">
            <a href={INFO.socials.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;