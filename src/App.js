import React from "react";
import "./App.css";
// import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import NavbarTop from "./components/NavbarTop";

function App() {
  return (
    <Router>
      <div>
        <NavbarTop/>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
