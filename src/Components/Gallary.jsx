import React from "react";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
function Gallary() {
  return (
    <>
      <div className="container">
        <h1 className="fw-bolder text-center text-light text-lg-start mt-4 mb-0">
          AnntriX Galaxy
        </h1>

        <hr className="mt-2 mb-5" />

        <div className="row text-center text-lg-start">
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail" src={img1} alt="" />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail" src={img2} alt="" />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail" src={img3} alt="" />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/M185_qYH8vg/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/sesveuG_rNo/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/2gYsZUmockw/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/8mUEy0ABdNE/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/G9Rfc1qccH4/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/aJeH0KcFkuc/400x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail"
                src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallary;
