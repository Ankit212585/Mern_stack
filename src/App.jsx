import React, { useState } from "react";
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

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  // all functions
  const storeToken = (servertoken) => {
    return localStorage.setItem("token", servertoken);
  };

  let loggedIn = !!token;

  const logout = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ loggedIn, storeToken, logout }}>
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
