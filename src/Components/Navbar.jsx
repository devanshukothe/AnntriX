import React from 'react';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white bg-grey" id="Navbar">
      <div className="container-fluid">
        <a href="/" className="navbar-brand fs-4 text-white">
          <img src={Logo} height="50" style={{borderRadius: "50%"}} alt="Logo" />
        </a>
        <a href="/" className="nav-item nav-link active fs-3 text-white fw-bold text-danger">ANNTRIX</a>
        <button 
  type="button" 
  className="navbar-toggler custom-toggler"  
  data-bs-toggle="collapse" 
  data-bs-target="#navbarCollapse" 
  style={{color: "white"}}
>
  <span className="navbar-toggler-icon btn btn-light"></span> 
</button>


        
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active mx-3 fs-5 text-white">Home</Link>
            <Link to="/about" className="nav-item nav-link mx-2 fs-5 text-white">About</Link>
            <Link to="/blogs" className="nav-item nav-link mx-2 fs-5 text-white">Blogs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
