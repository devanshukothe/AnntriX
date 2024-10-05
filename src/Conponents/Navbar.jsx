import React from 'react'
import Logo from "../assets/logo.png";
export const Navbar = () => {
  return (
   <nav class="navbar navbar-expand-lg  text-white bg-dark" id='Navbar'>
    <div class="container-fluid ">
        <a href="#" class="navbar-brand fs-4 text-white">
            <img src={Logo} height="50" style={{borderRadius: "50%"}} alt=""/>
            
        </a>
        <a href="#" class="nav-item nav-link active fs-3 text-white  fw-bold text-danger ">ANNTRIX</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarCollapse">
            <div class="navbar-nav " >
            
                <a href="#" class="nav-item nav-link active mx-3 fs-5 text-white">Home</a>
                <a href="#" class="nav-item nav-link mx-2 fs-5 text-white">About</a>
                <a href="#" class="nav-item nav-link mx-2 fs-5 text-white">Contact</a>
            </div>
        </div>
    </div>
</nav>
  )
}
