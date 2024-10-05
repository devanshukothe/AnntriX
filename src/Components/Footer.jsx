import React from "react";
import "../App.css"; // Import your CSS file if needed for additional styling

export const Footer = () => {
  return (
    <>
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
           
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/_anntrix_/?igsh=MWZiMzVnazMyNG96NA%3D%3D"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/anntrix-astronomy-club-of-sggs-students-29b2a72a2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2024 Copyright :
          <a className="text-body" href="/">AnntriX.com</a>
        </div>
      </footer>
    </>
  );
};
