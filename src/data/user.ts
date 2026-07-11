// src/data/user.ts
import amnaAvatar from '../assets/images/me3.png';

export const INFO = {
  main: {
    name: "Aamina Bibi",
    title: "Full-Stack Developer & AI/ML Engineer",
    email: "aaminabibi2324@gmail.com", // NOTE: your old file had "aaminabibi@gmail.com" — switched to the one on your CV. Change back if that was intentional.
    avatar: amnaAvatar,
    resumeLink: "/assets/Aamina_Bibi_CV.pdf",
  },
  socials: {
    github: "https://github.com/AAMINABIBI",
    linkedin: "https://www.linkedin.com/in/aamina-bibi/",
    whatsapp: "https://wa.me/923709367710",
  },
  about: {
    title: "About Me",
    description: `
      Welcome to my corner of the web! I'm Aamina Bibi, a BSCS graduate (Top 5%, CGPA 3.55) who lives and breathes <span style="color:rgb(197, 140, 213); font-weight: bold;">software development</span>, with a particular fascination for <span style="color: rgb(197, 140, 213); font-weight: bold;">Artificial Intelligence</span>.
      <ul>
        <li>From architecting <span style="color: rgb(197, 140, 213); font-weight: bold;">robust MERN-Stack applications</span> to diving deep into <span style="color:rgb(197, 140, 213); font-weight: bold;">machine learning concepts</span> for real-world AI challenges, I thrive on bringing <span style="color:rgb(197, 140, 213); font-weight: bold;">innovative ideas to life</span>.</li>
        <li>My journey is marked by a blend of <span style="color: rgb(197, 140, 213); font-weight: bold;">technical prowess</span> in Python, React, and Node.js, and a <span style="color: rgb(197, 140, 213); font-weight: bold;">proven adaptability</span> that fuels <span style="color:rgb(197, 140, 213); font-weight: bold;">continuous learning</span>.</li>
        <li>My final year project, <span style="color:rgb(197, 140, 213); font-weight: bold;">VisioVox</span>, used a CNN-RNN pipeline to read lips from muted video — technology built for people who need it most.</li>
      </ul>
      <span style="color:rgb(192, 137, 207); font-weight: bold;">Ready to build something brilliant? Let's connect and create the next big thing!</span>
    `,
    cvLink: "/assets/Aamina_Bibi_CV.pdf",
    skills: ["JavaScript", "React", "React Native", "Node.js", "Python", "PyTorch", "HTML", "CSS", "MongoDB", "Firebase", "C#", "C/C++", "SQL", "Git & GitHub", "Canva"],
  },
  resume: {
    education: [
      {
        degree: "Bachelor's in Computer Science (CGPA 3.55, Top 5%)",
        institution: "Rawalpindi Women University",
        period: "2021 - 2025",
      },
      {
        degree: "Higher Secondary School Certificate (Grade A-1)",
        institution: "Punjab College for Women, Talagang",
        period: "2018 - 2020",
      },
    ],
    experience: [
      {
        role: "MERN-Stack Developer — Invarionix",
        period: "On-site",
        description: "Built the full admin panel for Fitness Restart (Firebase real-time data, auth, cloud storage), the responsive front end for Shinepoint Health Services, and the complete admin panel for the King Adari Fitness App.",
      },
      {
        role: "Mobile App Developer, React Native — E-Tree Solutions Pvt Ltd",
        period: "Aug 2024 - Sep 2024",
        description: "Focused on front-end architecture and UI/UX using React Native. Built a fully functional e-commerce mobile app: product listings, cart, auth, and order processing.",
      },
      {
        role: "Social Media Manager — Al-Akbari Houses and Builders",
        period: "Remote",
        description: "Managed content strategy and engagement across Instagram and other platforms, monitoring analytics to optimize reach and audience interaction.",
      },
    ],
  },
  projects: [
    {
      title: "VisioVox — Lip Reading App",
      description:
        "Final year project: an AI-powered mobile app for accessibility, built on a CNN-RNN architecture (PyTorch). Reads lip movement from muted video and outputs text transcriptions, synthesized audio, and synchronized captions.",
      image: "/assets/images/mock03.png",
      link: "https://github.com/AAMINABIBI",
    },
    {
      title: "E-Commerce App",
      description:
        "A fully functional cross-platform e-commerce mobile app with product listings, cart management, authentication, and order processing, built in React Native during my E-Tree Solutions internship.",
      image: "/assets/images/E-commProj.png",
      link: "https://github.com/AAMINABIBI",
    },
    {
      title: "Freelancer's Portfolio Website",
      description:
        "A clean, responsive portfolio platform for freelancers to showcase their work, services, and contact information — built with HTML, CSS, and JavaScript.",
      image: "/assets/images/Freelancers_portfolio.png",
      link: "https://github.com/AAMINABIBI",
    },
    {
      title: "Calculator",
      description:
        "A JavaScript calculator project covering core logic for arithmetic operations and clean UI interaction handling.", // Placeholder — I didn't have real details for this one, edit freely.
      image: "/assets/images/calculator.png",
      link: "https://github.com/AAMINABIBI",
    },
    {
      title: "EasyPaisa App",
      description:
        "A mobile wallet / digital payments concept app.", // Placeholder — this wasn't on your CV, so add real details when you get a chance.
      image: "/assets/images/mock02.png",
      link: "https://github.com/AAMINABIBI",
    },
    {
      title: "To-Do List App",
      description:
        "A foundational task manager built with HTML, CSS, and JavaScript: add, delete, and mark tasks complete, with a focus on clean user interaction.",
      image: "/assets/images/mock01.png",
      link: "https://github.com/AAMINABIBI",
    },
    {
      title: "CodeCraft AI",
      description:
        "A React Native app enhancing the coding experience with an error-detecting code editor, a Gemini-powered AI mentor, gamified challenges, voice coding, and real-time pair programming.",
      image: "/assets/images/mock06.png",
      link: "https://github.com/AAMINABIBI",
    },
    {
      title: "Shinepoint Health Services",
      description:
        "A modern, responsive front end translating wireframes into pixel-perfect, accessible interfaces for a healthcare service platform, built with React.js, HTML5, and CSS3.",
      image: "/assets/images/mock07.png",
      link: "https://github.com/AAMINABIBI",
    },
    {
      title: "Fitness App Admin Panel",
      description:
        "Complete admin panels for the King Adari Fitness App and Fitness Restart — content management, user administration, subscriptions, and analytics dashboards, backed by Firebase.",
      image: "/assets/images/mock05.png",
      link: "https://github.com/AAMINABIBI",
    },
  ],
  contact: {
    title: "Contact Me",
    email: "aaminabibi2324@gmail.com",
  },
  footer: {
    copyright: "© 2026 Aamina Bibi. All rights reserved.",
  },
};