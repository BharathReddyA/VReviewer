import React from "react";
import "./App.css";
// import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home";
import UserDashboard from "./Screens/UserDashboard";
import NavbarTop from "./components/NavbarTop";

function App() {
  return (
    <Router>
      <div>
        <NavbarTop/>
        <Routes>
        <Route path="/" element={<Home />} index />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
