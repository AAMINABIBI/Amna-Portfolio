// src/components/Footer.tsx
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { INFO } from '../data/user';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href={INFO.socials.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href={INFO.socials.whatsapp} target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
      </div>
      <p>{INFO.footer.copyright}</p>
    </footer>
  );
}

export default Footer;