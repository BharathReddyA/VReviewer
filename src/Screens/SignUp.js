import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import "../Assets/Style.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    nickName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const generateNickname = () => {
    const randomNickname = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      separator: "-",
      length: 2,
    });
    setFormData({ ...formData, nickName: randomNickname });
  };

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
      <div className="gap"></div>
      <Row>
        <Col lg={6}>
          <Container fluid>
            <Container>
              <Row className="gridViewContainer">
                <Row>
                  <Col lg={8} className="gridOne">
                    <Form
                      onSubmit={handleSubmit}
                      className="formCenter signupForm"
                    >
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
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicNickName"
                      >
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control
                          value={formData.nickName}
                          onChange={handleChange}
                          type="text"
                          placeholder="Enter nick name"
                          name="nickName"
                          
                        />
                        <Button variant="secondary" onClick={generateNickname}>
                          Generate Nickname
                        </Button>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPhoneNumber"
                      >
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
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          value={formData.password}
                          onChange={handleChange}
                          type="password"
                          placeholder="Password"
                          name="password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}></Col>
                  <Col lg={8} className="gridTwo">
                    <Card className="socialButtonsCard">
                      Ad aliquip qui in enim reprehenderit laboris cillum enim
                      quis elit cupidatat eu. Anim sint sint cillum irure fugiat
                      deserunt adipisicing nostrud aute quis aliqua
                      exercitation. Qui ullamco eiusmod eiusmod commodo magna
                      culpa irure ea excepteur ut ex.
                    </Card>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Container>
        </Col>
        {/* <Col lg={2}></Col> */}
        <Col lg={4}>
          <Card className="signupContentCard">
            Ad aliquip qui in enim reprehenderit laboris cillum enim quis elit
            cupidatat eu. Anim sint sint cillum irure fugiat deserunt
            adipisicing nostrud aute quis aliqua exercitation. Qui ullamco
            eiusmod eiusmod commodo magna culpa irure ea excepteur ut ex.
          </Card>
        </Col>
      </Row>
      <div className="gap"></div>
    </Container>
  );
};

export default SignUp;
