import React from "react"
import Nav from "./nav/Nav.js"
import {BrowserRouter as  Router, Routes, Route  } from "react-router-dom";
import About from "./About/About.js";
import Contact from "./contact/Contact.js"
import Skills from "./Skills/Skills.js";
import Projects from "./Projects/Projects.js";
import "./styles/app.css"
import Background from "./components/Background.js";
import PlayerStats from "./components/PlayerStats.js";


const App = () => {
  return (
    <Router>
     <Nav />
     <Background/>
     <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <PlayerStats/>
    </Router>
  );
}

export default App;
