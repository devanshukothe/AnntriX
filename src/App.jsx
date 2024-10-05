import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { Navbar } from './Conponents/Navbar';
import { About } from './Conponents/About';
import bgVideo from './assets/bgvideo.mp4'; // Path to your background video
import { Footer } from './Conponents/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <div className="app-container">
    <Navbar />
      <video className="video-background" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      
      <About />
      <Footer/>
    </div>
    </>
  );
}

export default App;
