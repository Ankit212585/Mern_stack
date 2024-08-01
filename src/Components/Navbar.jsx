import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="#">Panwar</a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Contact"> Contact</Link>
              </li>
              <li>
                <Link to="/Service">Service</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
