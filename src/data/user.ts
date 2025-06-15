// src/data/user.ts
import amnaAvatar from '../assets/images/me2.jpeg'; // <-- NEW: Import your image here

export const INFO = {
  main: {
    name: "Aamina Bibi",
    title: "Software Engineer",
    email: "aaminabibi@gmail.com",
    // avatar: "/assets/images/amnaLogo.jpg", // <-- OLD: Remove this line
    avatar: amnaAvatar, // <-- NEW: Use the imported image
    resumeLink: "/assets/Aamina_Bibi_CV.pdf", // Added resume link for Download Resume button
  },
  socials: {
    github: "https://github.com/aaminabibi",
    linkedin: "https://www.linkedin.com/in/aamina-bibi/",
    whatsapp: "https://wa.me/923709367710", // Added WhatsApp link
  },
  about: {
    title: "About Me",
    description: `
      Welcome to my corner of the web! I'm Aamina Bibi, a BSCS graduate who lives and breathes <span style="color:rgb(197, 140, 213); font-weight: bold;">software development</span>, with a particular fascination for <span style="color: rgb(197, 140, 213); font-weight: bold;">Artificial Intelligence</span>.
      <ul>
        <li>From architecting <span style="color: rgb(197, 140, 213); font-weight: bold;">robust MERN-Stack applications</span> to diving deep into <span style="color:rgb(197, 140, 213); font-weight: bold;">machine learning concepts</span> for real-world AI challenges, I thrive on bringing <span style="color:rgb(197, 140, 213); font-weight: bold;">innovative ideas to life</span>.</li>
        <li>My journey is marked by a blend of <span style="color: rgb(197, 140, 213); font-weight: bold;">technical prowess</span> in Python, React, and Node.js, and a <span style="color: rgb(197, 140, 213); font-weight: bold;">proven adaptability</span> that fuels <span style="color:rgb(197, 140, 213); font-weight: bold;">continuous learning</span>.</li>
        <li>I'm not just a developer; I'm a <span style="color:rgb(197, 140, 213); font-weight: bold;">problem-solver</span>, a <span style="color:rgb(197, 140, 213); font-weight: bold;">collaborator</span>, and a <span style="color:rgb(197, 140, 213); font-weight: bold;">creator</span> excited to build the future, one intelligent application at a time.</li>
      </ul>
      <span style="color:rgb(192, 137, 207); font-weight: bold;">Ready to build something brilliant? Let's connect and create the next big thing!</span>
    `,
    cvLink: "/assets/Aamina_Bibi_CV.pdf",
    skills: ["JavaScript", "React", "Node.js","Python","HTML", "CSS","Bootstrap",,"MongoDB ","Firebase","C#","C/C++ ","SQL ","Git & GitHub","Canva" ],
  },
  resume: {
    education: [
      {
        degree: "Bachelor’s in Computer Science",
        institution: "Rawalpindi Women University",
        period: "2021-2025",
      },
    ],
    experience: [
      {
        role: "MERN Stack Intern (Innvarionix)",
        period: "April 2025 - Present",
        description: "Developed responsive websites and web applications using React along with Firebase integration",
      },
      {
        role: "React Native Intern (E-Tree Soln.)",
        period: "April 2025 - Present",
        description: "Developed responsive websites and web applications using React along with Firebase integration",
      },
    ],
  },
  projects: [
    {
      title: "VisioVox",
      description:
        "Lip CoordNet is an innovative app that uses AI to analyze lip movements in real-time, enabling precise lip-reading and gesture-based communication for enhanced accessibility and interaction.",
      image: "/assets/images/calculator.png",
      link: "https://github.com/aaminabibi/ecommerce-project",
    },
    {
      title: "E-Commerce App",
      description:
        "Developed a fully functional e-commerce App with product listings, cart functionality, and payment integration using React.",
      image: "/assets/images/calculator.png",
      link: "https://github.com/aaminabibi/ecommerce-project",
    },
    {
      title: "FreeLancer's Portfolio Website",
      description:
        "Developed a fully functional Freelancer's Portfolio website with Header, Skills, Projects, Testimonials, Footer integration using HTML, CSS, and JavaScript.",
      image: "/assets/images/calculator.png",
      link: "https://github.com/aaminabibi/ecommerce-project",
    },
  ],
  contact: {
    title: "Contact Me",
    email: "aaminabibi@gmail.com",
  },
  footer: {
    copyright: "© 2025 Aamina Bibi. All rights reserved.",
  },
};