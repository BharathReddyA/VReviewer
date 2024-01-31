import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../Assets/Style.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    nickName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <Container fluid className="signupPage">
      <Container fluid className="signupForm">
        Sign-up here for daily reviewing of the websites you visit.
        <Container>
          <Row>
            <Col lg={0}></Col>
            <Col lg={8}>
              <Form onSubmit={handleSubmit} className="formCenter">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNickName">
                  <Form.Label>Nickname</Form.Label>
                  <Form.Control
                    value={formData.nickName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter nick name"
                    name="nickName"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter phone number"
                    name="phoneNumber"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={0}></Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default SignUp;
