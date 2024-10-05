import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Blogs } from './Components/Blogs';
import bgVideo from './assets/bgvideo.mp4'; // Path to your background video
import { Footer } from './Components/Footer';
import { About } from './Components/About';

function App() {
  return (
    <div className="app-container">
      <Router>
        <div>
          <Navbar />
          <video className="video-background" autoPlay muted loop>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
          
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
