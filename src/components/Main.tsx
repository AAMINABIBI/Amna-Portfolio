import React, { useEffect, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Added WhatsApp icon
import { Button } from '@mui/material';
import Typed from 'typed.js';
import { INFO } from '../data/user';
import amnaLogo from '../assets/images/amnaLogo.jpg';
import '../assets/styles/Main.scss';

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['AI Enthusiast.', 'Software Engineer.', 'Tech Explorer.', 'CS Graduate.'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

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
            <a href={INFO.socials.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
            </a>
          </div>
          <h1>{INFO.main.name}</h1>
          <p>
            I'm a <span className="typed" ref={typedRef}></span>
          </p>
          <a href={INFO.main.resumeLink} download>
            <Button className="glowy-button">Download Resume</Button>
          </a>
          <div className="mobile_social_icons">
            <a href={INFO.socials.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href={INFO.socials.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;