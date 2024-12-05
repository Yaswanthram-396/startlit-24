// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ActivitiesSection } from "./components/activities/ActivitiesSection";
import { Highlights } from "./components/Highlights";
import { Contact } from "./components/Contact";
import Leaderboard from "./components/activities/leaderboard";
import Testimonials from "./components/carousal";
import { FAQ } from "./components/FAQ";

// Remove logo import as it's not used in your original implementation
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor: "white"}}>
      <Hero />
      <ActivitiesSection />
      <Highlights />
      <Testimonials/>
      <Leaderboard />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;