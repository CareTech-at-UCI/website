import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
      <Analytics /> 
    </Router>
  );
};

export default App;