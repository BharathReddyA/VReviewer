import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div>
      <Container className="homePageMainCont">
        <div className="subHead">
          Empower Website Improvement with Veridical Reviewer
        </div>
        <Row>
          <Col lg="4">
            <div className="brandObj">
              Veridical Reviewer is a browser extension designed to empower
              users to share constructive feedback and opinions about websites
              effortlessly. This extension aims to bridge the gap between users
              and website owners, fostering a community-driven approach for
              website improvement.
            </div>
          </Col>
          <Col lg="2"></Col>
          <Col lg="5">
            <div className="subBenHead">
              | Benfits of joining Veridical Reviewer
            </div>
            <TypeAnimation
              sequence={[
                "Empowering your reviews",
                1000, // wait 1s before replacing the next substring
                "Anonymous and secure feedback",
                1000,
                "Building a better online community",
                1000,
                "Influencing positive changes",
                1000,
                "Join Veridical Reviewer today",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
                color: "white",
              }}
              repeat={Infinity}
            />
            <div></div>
            <Button href="SignUp" className="homeSignUpBtn">
              SignUp for Free
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="homePageMainCont">
        <div className="subHead">Perks of joining Veridical Reviewers</div>
        <Card></Card>
        <Row style={{ marginTop: "20px" }}>
          <Col lg="4">
            <Card className="featureCard">
              <div className="subHead">Secure and Anonymous Login</div>
              <div className="brandObj">
                Log in with confidence using our secure authentication process,
                and submit reviews anonymously to promote honest and open
                feedback.
              </div>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="featureCard">
              <div className="subHead">Community Engagement</div>
              <div className="brandObj">
                Engage with the Veridical Reviewer community. Like, reply, and
                contribute to discussions. Foster a positive environment for
                website improvement.
              </div>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="featureCard">
              <div className="subHead">Personalized Dashboard</div>
              <div className="brandObj">
                Access your personalized dashboard to view and manage your
                submitted reviews. Keep track of your contributions to website
                feedback.
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
