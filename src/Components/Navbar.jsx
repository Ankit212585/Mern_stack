import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a style={{ fontSize: "24px" }} href="#">
              Panwar_jii
            </a>
          </div>
          <nav>
            <ul>
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
