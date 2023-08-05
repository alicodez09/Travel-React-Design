import React from "react";
import { Link } from "react-router-dom";
import flow from "../images/about.png";
export default function AboutInfo() {
  return (
    <>
      <section className="d-flex align-item-center justify-content-center">
        <div className="container" id="header">
          <div class="row mt-3 mt-md-5">
            <div class="col-12 col-md-6 mb-3 mb-md-0 text-start">
              <h1>
                Grow Your Memories With
                <strong className="brand-name"> Travlers(PVT) </strong>
              </h1>
              <h2 className="my-2">
                The journey of a thousand miles begins with a single step.
              </h2>
              <div className="mt-3">
                <Link href="" className="btn btn-primary" to="/Services">
                  Get Started
                </Link>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <img src={flow} className="img-fluid animated" alt="home-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
