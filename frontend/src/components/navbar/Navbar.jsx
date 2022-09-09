import React from "react";
import { Link } from "react-router-dom";
import { LocationOn, PhoneIphone } from "@mui/icons-material";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="/assets/imgs/logo.png" id="navbar-brand-img" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICES
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/commercial" className="dropdown-item">
                    COMMERCIAL
                  </Link>
                </li>
                <li>
                  <Link to="/residential" className="dropdown-item">
                    RESIDENTIAL
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
          <div id="phone-container">
            <PhoneIphone />
            <span>231-330-8004</span>
          </div>
          <div className="d-flex">
            <div id="request-quote">
              <LocationOn />
              <Link to="/request-quote" id="link-request-quote" className="nav-link">
                Request Quote
              </Link>
            </div>
            <Link to="/signin" id="link-sign-in" className="nav-link auth-link">
              Sign In
            </Link>
            <Link to="/register" id="link-register" className="nav-link auth-link">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}