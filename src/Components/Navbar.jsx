import React, { useContext } from "react";
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
              Panwar_jii
            </a>
          </div>
          <nav>
            <ul>
              {loggedIn ? (
                <>
                  <li>
                    <Link to="/Contactpage">Contact Us</Link>
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
                    <Link to="/Login">Login</Link>
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
