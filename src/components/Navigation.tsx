// // src/components/Navigation.tsx
// import React, { useEffect, useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import List from '@mui/material/List';
// import ListIcon from '@mui/icons-material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import { INFO } from '../data/user';
// import '../assets/styles/Navigation.scss'
// const drawerWidth = 240;
// const navItems = [
//   ['Home', 'main'],
//   ['About', 'expertise'],
//   ['Resume', 'history'],
//   ['Portfolio', 'projects'],
//   ['Contact', 'contact'],
// ];

// function Navigation({ parentToChild, modeChange }: { parentToChild: { mode: string }; modeChange: () => void }) {
//   const { mode } = parentToChild;

//   const [mobileOpen, setMobileOpen] = useState<boolean>(false);
//   const [scrolled, setScrolled] = useState<boolean>(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.getElementById('navigation');
//       if (navbar) {
//         const scrolled = window.scrollY > navbar.clientHeight;
//         setScrolled(scrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToSection = (section: string) => {
//     const element = document.getElementById(section);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const drawer = (
//     <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <p className="mobile-menu-top">
//         <ListIcon />
//         Menu
//       </p>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item[0]} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
//               <ListItemText primary={item[0]} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
//         <Toolbar className="navigation-bar">
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Box sx={{ flexGrow: 1 }}>
//             <Button sx={{ color: '#fff' }} onClick={() => scrollToSection('main')}>
//               {INFO.main.name}
//             </Button>
//           </Box>
//           {mode === 'dark' ? (
//             <LightModeIcon onClick={modeChange} />
//           ) : (
//             <DarkModeIcon onClick={modeChange} />
//           )}
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: '#fff' }}>
//                 {item[0]}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// export default Navigation;


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
