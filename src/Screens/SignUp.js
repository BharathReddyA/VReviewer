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

const SignUp = ({navigation}) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://2248-72-73-30-138.ngrok-free.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted:", result);
        // Add your logic for successful form submission
        navigation.navigate('Login');
      } else {
        console.error("Form submission failed:", response.statusText);
        // Add your logic for failed form submission
      }
    } catch (error) {
      console.error("Form submission error:", error.message);
      // Add your logic for handling errors during form submission
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
                      Social Logins options
                    </Card>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Container>
        </Col>
        {/* <Col lg={2}></Col> */}
        <Col lg={6}>
          <Card className="signupContentCard">
            <div className="contentHeading">Uses of Veridical Reviewer:</div>

            <div className="subHead">Anonymous Expression:</div>
            <div className="brandObj">
              Convey your thoughts openly and honestly without revealing your
              identity.
            </div>

            <div className="subHead">Secure and Confidential:</div>
            <div className="brandObj">
              Your privacy is our priority. Enjoy a secure and confidential
              platform for providing feedback.
            </div>

            <div className="subHead">Community Collaboration:</div>
            <div className="brandObj">
              Engage with a vibrant community of users, fostering positive
              discussions and constructive feedback.
            </div>

            <div className="subHead">Website Improvement:</div>
            <div className="brandObj">
              Contribute to the continuous improvement of websites by providing
              valuable insights.
            </div>

            <div className="subHead">Personalized Dashboard:</div>
            <div className="brandObj">
              Access your personalized dashboard to manage and track your
              submitted reviews effortlessly.
            </div>

            <div className="subHead">User-Friendly Interface:</div>
            <div className="brandObj">
              Experience an intuitive and user-friendly interface for seamless
              navigation and interaction.
            </div>

            <div className="subHead">Positive Impact:</div>
            <div className="brandObj">
              Be part of a community that has a positive impact on the web,
              making it a better place for everyone.
            </div>

            <div className="subHead">Empowerment:</div>
            <div className="brandObj">
              Feel empowered to influence positive changes and enhancements on
              various websites.
            </div>

            <div className="subHead">Enhanced User Experience:</div>
            <div className="brandObj">
              Play a role in creating a better online experience for users by
              sharing your opinions.
            </div>

            <div className="subHead">Secure Login:</div>
            <div className="brandObj">
              Log in securely, knowing that your data is protected, and
              contribute to the platform confidently.
            </div>

            <div className="subHead">Community Recognition:</div>
            <div className="brandObj">
              Receive recognition within the Veridical Reviewer community for
              your valuable contributions.
            </div>

            <div className="subHead">Transparent and Open Discussions:</div>
            <div className="brandObj">
              Engage in transparent and open discussions with other users,
              promoting a sense of community.
            </div>

            <div className="subHead">Like and Reply Features:</div>
            <div className="brandObj">
              Interact with reviews through likes and replies, promoting a
              culture of appreciation and dialogue.
            </div>

            <div className="subHead">Positive Community Impact:</div>
            <div className="brandObj">
              Witness the positive impact your reviews have on website owners
              striving to enhance user experiences.
            </div>

            <div className="subHead">Join a Movement:</div>
            <div className="brandObj">
              Become part of a movement dedicated to improving the web by
              sharing constructive feedback.
            </div>
          </Card>
        </Col>
      </Row>
      <div className="gap"></div>
    </Container>
  );
};

export default SignUp;
