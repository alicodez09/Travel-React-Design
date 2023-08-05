import React from "react";
import "./NavbarStyle.css";
import { Menuitems } from "./MenuItems";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg NavbarItems">
              <div className="container-fluid">
                
                <h1 className="navbar-logo">Travel</h1>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="fa-solid fa-bars"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  ml-auto mb-2 mb-lg-0">
                    {Menuitems.map((items, index) => {
                      return (
                        <>
                          <li key={index} className="nav-link">
                            <Link to={items.url} className={items.cName}>
                              <i className={items.icon}></i>
                              {items.title}
                            </Link>
                          </li>
                        </>
                      );
                    })}
                    <button className="btn btn-dark btn-home">Sign Up</button>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
