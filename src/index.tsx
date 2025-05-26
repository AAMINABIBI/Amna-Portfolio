// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faBriefcase);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);