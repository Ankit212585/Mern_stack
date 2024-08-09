import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Homepage from "./Pages/Homepage";
import AboutUsPage from "./Pages/AboutUsPage";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Service from "./Pages/Service";
import Navbar from "./Components/Navbar";
import PageError from "./Pages/404page";
import Contactpage from "./Pages/Contactpage";
import { AuthContext } from "./store/contexHook";
import axios from "axios";
import AdminContact from "./Components/layouts/adminContact";
import AdminUser from "./Components/layouts/adminUser";

function App() {
  // store token in local storage
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [mydata, setMydata] = useState([]);
  const authorization = `Bearer ${token}`;

  const storeToken = (servertoken) => {
    setToken(servertoken);
    return localStorage.setItem("token", servertoken);
  };
  let isAdmin = !!token && mydata.isAdmin;
  let loggedIn = !!token;

  const logout = () => {
    setToken("");
    alert("Your logout successfully");
    return localStorage.removeItem("token");
  };

  // JWT token Authantication currently logged user data

  const userAuthantication = async () => {
    try {
      const user = await axios.get(
        "http://localhost:5000/api/auth/get",
        {
          headers: {
            Authorization: authorization,
          },
        }
      );
      setMydata(user.data);
      console.log(user.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userAuthantication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        loggedIn,
        storeToken,
        logout,
        mydata,
        authorization,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/Contactpage" element={<Contactpage />} /> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Contactpage" element={<Contactpage />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/*" element={<PageError />} />

          {/* Nested Routes for Admin pannel */}

          <Route path="/admin/users" element={<AdminUser />} />
          <Route path="/admin/contacts" element={<AdminContact />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
export default App;
