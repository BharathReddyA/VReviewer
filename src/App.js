import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import NavbarTop from "./components/NavbarTop";

function App() {
  return (
    <Router>
      <Container fluid>
        <NavbarTop/>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        Welcome to our page.
      </Container>
    </Router>
  );
}

export default App;
