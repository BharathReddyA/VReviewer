import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import "../Assets/Style.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://2248-72-73-30-138.ngrok-free.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        console.error("Entered wrong details");
        return;
      }

      const data = await response.json();
      // const { firstName, _id } = data;
      console.log("Login successful:", data.message);

      setFormData({
        email: "",
        password: "",
      });

      // Handle the successful login, e.g., navigate to the user's dashboard
      // Assuming you have a navigation prop available
      // navigation.navigate("Dashboard", { firstName, _id });
    } catch (error) {
      console.error("Error logging in:", error);
      console.error("this error:", error.message);
      // Handle the error, e.g., display an error message to the user
    }
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
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          value={email}
                          onChange={handleChange}
                          type="email"
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          value={password}
                          onChange={handleChange}
                          type="password"
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

export default Login;
