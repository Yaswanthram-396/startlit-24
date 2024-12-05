import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Navbar } from './components/Navbar.tsx';
import { Contact } from './components/Contact.tsx';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ActivityDetails } from './components/activities/ActivityDetails.tsx';
import Quizzotopia from './components/quizzotopia.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/activity/IndoorGames" element={<ActivityDetails />} />
        <Route path="/activity/Quizzotopia" element={<Quizzotopia />} />
        {/* <Route path="/register" element={<Registration />} /> */}
      </Routes>
      <Contact />
    </Router>
    
  </StrictMode>
);

// import React from 'react';


