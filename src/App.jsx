import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import PageError from "./Pages/404page";
import { AuthContext } from "./store/contexHook";
import axios from "axios";

function App() {
  // store token in local storage
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [mydata, setMydata] = useState([]);

  const storeToken = (servertoken) => {
    return localStorage.setItem("token", servertoken);
  };

  let loggedIn = !!token;

  const logout = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT token Authantication currently logged user data

  const userAuthantication = async () => {
    try {
      const user = await axios.get(
        "http://localhost:5000/api/auth/get",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMydata(user.data);
      // console.log(user.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userAuthantication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedIn, storeToken, logout, mydata }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/*" element={<PageError />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
export default App;
