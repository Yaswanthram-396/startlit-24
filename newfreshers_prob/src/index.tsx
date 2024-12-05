// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ActivityDetails } from './components/activities/ActivityDetails';
import Quizzotopia from './components/quizzotopia';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/activity/IndoorGames" element={<ActivityDetails />} />
        <Route path="/activity/Quizzotopia" element={<Quizzotopia />} />
      </Routes>
      <Contact />
    </Router>
  </StrictMode>
);