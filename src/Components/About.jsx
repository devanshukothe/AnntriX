import React from "react";
import "../App.css"; // Import your CSS file
import Logo from "../assets/logo.png";
import bg from "../assets/Bg1.jpg";
import movie from "../assets/movieScreening.jpg";
import ques from "../assets/quest.jpg";
import d from "../assets/deepanshu.png";
import n from "../assets/netra.jpg";
import s from "../assets/siddhi.jpg";

export const About = () => {
  return (
    <>
      <div className="container">
        <div className="container align-items-center">
          <div className="px-4 pt-5 my-3 text-center">
            <h1>
              <span className="display-3 fw-bold text-white my-3">ACT</span>
              <span className="display-3 fw-bold my-3 text-white">IVITIES</span>
            </h1>
            <div
              className="card mb-3 my-4 py-1 bg-dark border"
              style={{ maxHeight: "70%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={ques}
                    className="img-thumbnail"
                    alt="Quest"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body h-75">
                    <h5 className="card-title">
                      <span className="display-6 fw-bold text-warning">
                        COSMIC QUEST
                      </span>
                    </h5>
                    <h5 className="font-weight-bold text-white my-3">
                      "The Cosmic Quest" at Pragyaa 2k24 was a triumphant event
                      celebrating space exploration. Participants left with a
                      renewed appreciation for the cosmos and the potential of
                      human ingenuity. The winners' success highlighted their
                      dedication to astronomy. The event fostered curiosity,
                      camaraderie, and a commitment to exploring the universe,
                      leaving an inspiring impression on all involved.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 py-2 bg-dark border">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={movie}
                    className="img-thumbnail"
                    alt="Movie Screening"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="display-6 fw-bold text-warning">
                        MOVIE SCREENING
                      </span>
                    </h5>
                    <h5 className="font-weight-bold text-white my-3">
                      The movie screening of "Rocketry: The Nambi Effect" was a
                      resounding success. Attendees were inspired by Nambi
                      Narayanan's story and gained insights into rocket science,
                      leaving with a renewed awe for space and determination to
                      explore its limitless possibilities.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container align-items-center">
        <div className="px-5 pt-5 my-3 text-center">
          <h1>
            <span className="display-3 fw-bold text-white my-3">OUR</span>
            <span className="display-3 fw-bold my-3 text-white"> TEAM</span>
          </h1>
          <h4 className="my-4">
            <span className="display-7 fw-bold text-warning my-3">
              CLUB EMAIL
            </span>
            <span className=" display-9 fw-bold my-3 text-white">
              {" "}
              - anntrixastro@gmail.com
            </span>
          </h4>
          <div className="row py-4 px-3" style={{ borderRadius: "50px" }}>
            <div className="col-md-4 ">
              <div className="card mb-3 " style={{ width: "18rem" }}>
                <img src={s} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-text">Siddhi Boregaokar</h5>
                  <h5 className="card-text">President</h5>
                  <i
                    className="fa-solid fa-envelope fa-shake fa-2xl my-4"
                    style={{ color: "#f20736" }}
                  ></i>
                  <i
                    className="fa-brands fa-linkedin fa-shake fa-2xl mx-3 my-4"
                    style={{ color: "#2d3cae" }}
                  ></i>
                  <i className="fa-brands fa-whatsapp fa-shake fa-2xl"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={{ width: "18rem" }}>
                <img src={n} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-text">Netra Deshpande</h5>
                  <h5 className="card-text">Secretary</h5>
                  <i
                    className="fa-solid fa-envelope fa-shake fa-2xl my-4"
                    style={{ color: "#f20736" }}
                  ></i>
                  <i
                    className="fa-brands fa-linkedin fa-shake fa-2xl mx-3 my-4"
                    style={{ color: "#2d3cae" }}
                  ></i>
                  <i className="fa-brands fa-whatsapp fa-shake fa-2xl"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={{ width: "18rem" }}>
                <img src={d} className="image-thumbnail" alt="..." />
                <div className="card-body">
                  <h5 className="card-text">Deepanshu Singh</h5>
                  <h5 className="card-text">Student Coordinator</h5>
                  <i
                    className="fa-solid fa-envelope fa-shake fa-2xl my-4"
                    style={{ color: "#f20736" }}
                  ></i>
                  <i
                    className="fa-brands fa-linkedin fa-shake fa-2xl mx-3 my-4"
                    style={{ color: "#2d3cae" }}
                  ></i>
                  <i className="fa-brands fa-whatsapp fa-shake fa-2xl my-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-transparent PX-4">
        <div class="container overflow-hidden">
          <div class="row gy-4 gy-lg-0 gx-xxl-5">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div class="card-body p-0">
                  <figure class="m-0 p-0">
                    <figcaption class="m-0 p-3">
                      <h4 class="mb-1 text-center">Shriya Kuppa</h4>
                      <p class="text-secondary mb-0 text-center">Media Head</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div class="card-body p-0">
                  <figure class="m-0 p-0">
                    <figcaption class="m-0 p-3">
                      <h4 class="mb-1 text-center">Prasad Chede</h4>
                      <p class="text-secondary mb-0 text-center">
                        Research Head
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div class="card-body p-0">
                  <figure class="m-0 p-0">
                    <figcaption class="m-0 p-3">
                      <h4 class="mb-1 text-center">Saurav Teli</h4>
                      <p class="text-secondary mb-0 text-center">
                        Content head
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div class="card-body p-0">
                  <figure class="m-0 p-0">
                    {/* <img class="img-fluid" loading="lazy" src="./assets/img/team-img-4.jpg" alt="Wylder Elio"/> */}
                    <figcaption class="m-0 p-3">
                      <h4 class="mb-1 text-center">Rahul </h4>
                      <p class="text-secondary mb-0 text-center">
                        Editing Head
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
