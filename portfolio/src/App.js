import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import style
import "./styles/main.css";

import Navbar from "./componens/navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectCard from "./pages/ProjectCard";
import Footer from "./componens/footer/Footer";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} /> 
          <Route path="/project/:id" element={<ProjectCard />} />
        </Routes> 

        <Footer />
        
      </Router>

      </div>
  );
}

export default App;
