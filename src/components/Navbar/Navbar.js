import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div>
        <NavLink to="/" class="navbar-brand">
          DJ RFM
        </NavLink>
      </div>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink to="/" class="nav-item nav-link">
              Home 
            </NavLink>
            <NavLink to="/about" class="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/events" class="nav-item nav-link">
              Events
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
