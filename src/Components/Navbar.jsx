import React, { useContext } from "react";
import my_logo from "../assets/logo-no-background.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { AuthContext } from "../store/contexHook";
export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a style={{ fontSize: "24px" }} href="#">
              <img
                style={{ width: "200px", height: "60px" }}
                src={my_logo}
                alt="my_logo"
              />
            </a>
          </div>
          <nav>
            <ul>
              {loggedIn ? (
                <>
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>

                  <li>
                    <Link to="/AboutUsPage">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Contactpage">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/Service">Service</Link>
                  </li>
                  <li>
                    <Link to="/contact">Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/Register">Register</Link>
                  </li>
                  <li>
                    <Link to="/">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
