// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Main, Timeline, Expertise, Project, Contact, Navigation, Footer, FadeIn } from './components';
import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <div id="main">
          <Main />
        </div>
        <div id="expertise">
          <Expertise />
        </div>
        <div id="history">
          <Timeline />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;