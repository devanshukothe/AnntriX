import React from "react";
import "../App.css"; // Import your CSS file
import Logo from "../assets/logo.png";

import poster from "../assets/Poster.png";

export const Home = () => {
  return (
    <>
      <div className="container my-3">
        <div className="mx-2 my-4 blackish-background">
          <h1
            className="display-1 fw-bold my-3 text-warning"
            style={{ color: "#23297a", textShadow: "2px 2px #00416a" }}
            id="title"
          >
            ANNTRIX
          </h1>
          <h1 className="col-lg-6 text-white">
            The Astronomy and Astrophysics Club of SGGSIE&T NANDED
          </h1>

          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6 mx-auto text-center">
              <img
                src={Logo}
                className="img-fluid"
                alt="Club Logo"
                width="350"
                height="350"
                loading="lazy"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="col-lg-6 py-4">
              <h5 className=" fs-4" style={{ color: "#fdf5df" }}>
                The Astronomy Club of SGGS NANDED Team Anntrix envisions a
                future where students are empowered to explore the mysteries of
                the universe. We strive to foster a collaborative environment
                that ignites a passion for astrology and astrophysics. Through
                exploration, teamwork, and critical thinking, our members will
                develop valuable skills applicable to any field. By fostering a
                network of like-minded individuals, Team Anntrix aims to build a
                supportive community of future space enthusiasts and potential
                collaborators. We believe that participation in our club not
                only enriches the present but also shapes a future brimming with
                exciting opportunities in the aerospace industry. 🚀✨
              </h5>
            </div>
          </div>
        </div>
        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">
              Discovering the Universe: A Journey into Space
            </h1>
            <p class="lead my-3">
              Explore the wonders of the cosmos with Anntrix Space Club. From
              distant galaxies to groundbreaking space technology, dive deep
              into the fascinating world of astronomy and space exploration.
            </p>
            <p class="lead mb-0">
              <a href="#" class="text-white fw-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-3 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">
                  Space Exploration
                </strong>
                <h3 class="mb-0 text-white">
                  Featured Post: The Search for Exoplanets
                </h3>
                <div class="mb-1 text-white">Oct 5</div>
                <p class="card-text mb-auto text-white">
                  Scientists are discovering new exoplanets every day. Explore
                  how modern telescopes are helping us find planets outside our
                  solar system.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src="https://tse1.mm.bing.net/th?id=OIP.k_RvaZUkG-V6e9KYNprknwHaJ0&pid=Api&P=0&h=220" alt="" width="190px"/>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-3 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">
                  Space Technology
                </strong>
                <h3 class="mb-0 text-white">
                  Post Title: The Future of Spacecraft Design
                </h3>
                <div class="mb-1 text-white">Oct 4</div>
                <p class="mb-auto text-white">
                  Innovations in spacecraft design are revolutionizing space
                  exploration. Learn about cutting-edge technologies being
                  developed for interplanetary travel.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src="https://tse1.mm.bing.net/th?id=OIP.usGmIwYNSFEq17AnQSmsJQHaJQ&pid=Api&P=0&h=220" alt="" width="190px" height="250px"/>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-5">
          <div class="col-md-8">
            <h3 class="pb-4 mb-4 fw-bolder fs-1 border-bottom text-primary">
              From the Cosmos
            </h3>

            <article class="blog-post text-white fs-4">
              <h2 class="blog-post-title">Exploring the Mysteries of Space</h2>
              <p class="blog-post-meta">
                October 5, 2024 by <a href="#">Anntrix Space Club</a>
              </p>

              <p>
                At Anntrix Space Club, we are passionate about unraveling the
                mysteries of the universe. This post will explore various topics
                related to space exploration, technology, and the future of
                humanity among the stars.
              </p>
              <hr />
              <p>
                Space exploration has come a long way, with new discoveries
                every day. Our club encourages students and space enthusiasts to
                dive deep into the cosmos, share knowledge, and build skills for
                future space endeavors.
              </p>

              <h2>Blockquotes</h2>
              <p>Here's a memorable quote about space exploration:</p>
              <blockquote class="blockquote">
                <p>
                  "The important achievement of Apollo was demonstrating that
                  humanity is not forever chained to this planet and our visions
                  go rather further than that and our opportunities are
                  unlimited." – Neil Armstrong
                </p>
              </blockquote>

              <p>
                Space is a vast frontier filled with unknowns, and every mission
                into the void teaches us something new. From learning about the
                origins of our solar system to discovering exoplanets in distant
                galaxies, the potential for discovery is endless.
              </p>

              <h3>Example Lists</h3>
              <p>
                Our Space Club engages in multiple activities throughout the
                year, including:
              </p>
              <ul>
                <li>
                  Stargazing nights where members observe celestial events
                </li>
                <li>Workshops on satellite design and launching techniques</li>
                <li>
                  Collaborations with leading space agencies like ISRO and NASA
                </li>
              </ul>

              <p>We also organize structured programs and competitions:</p>
              <ol>
                <li>Space Research and Innovation Challenges</li>
                <li>Rocket Building Competitions</li>
                <li>Astronomy Quiz Contests</li>
              </ol>

              <p>Additionally, we offer educational sessions for beginners:</p>
              <dl>
                <dt>Astronomy 101</dt>
                <dd>
                  An introductory course about stars, planets, and galaxies
                </dd>
                <dt>Space Engineering</dt>
                <dd>Learn the basics of building spacecraft and rockets</dd>
                <dt>Astrobiology</dt>
                <dd>The study of life beyond Earth and how we might find it</dd>
              </dl>
            </article>
          </div>

          <div class="col-md-4">
            <div class="position-sticky" style={{ top: "2rem" }}>
              <div class="p-4 mb-3 bg-light rounded">
                <img className="img-thumbnail" src={poster} alt="" />
                <h4 class="fW-BOLD">UPCOMING EVENTS</h4>
                <p class="mb-0">
                  Welcome to AstroQuest! Explore the wonders of the cosmos
                  through our engaging content, written by passionate
                  astronomers and space enthusiasts. Discover galaxies, stars,
                  and the mysteries of the universe—it's all up to you on this
                  stellar journey.
                </p>
              </div>

              

              <div class="p-4">
                <h4 class="fW-BOLD text-light fs-1">FOLLOW US</h4>
                <ol class="list-unstyled">
                  <li>
                    <a href="https://www.instagram.com/_anntrix_/profilecard/?igsh=MWd2djVuZzYwd2p2Mw%3D%3D">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/anntrix-astronomy-club-of-sggs-students-29b2a72a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      LinkedIn
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
