import React, { useContext } from "react";
import my_logo from "../assets/logo-no-background.png";
import { Link, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./Navbar.css";

import { AuthContext } from "../store/contexHook";
export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const { isAdmin } = useContext(AuthContext);
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
            {isAdmin ? (
              <>
                <Box style={{ margin: "50px" }}>
                  <ul>
                    {/* <Link to="/admin">
                      <li>Home</li>
                    </Link> */}
                    <Link to="/admin/users">
                      <li>users</li>
                    </Link>
                    <Link to="/admin/contacts">
                      <li>contact</li>
                    </Link>
                    <li>
                      <Link to="/contact">Logout</Link>
                    </li>
                  </ul>
                </Box>
                <Outlet />
              </>
            ) : (
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
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
