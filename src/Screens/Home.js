import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
// import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div>
      <Container className="homePageMainCont">
        <div className="subHead">
          Empower Website Improvement with Veridical Reviewer
        </div>
        <Card></Card>
        <Row style={{ marginTop: "20px" }}>
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
      <Container className="homePageMainCont">
        <div className="subHead">How Veridical Reviewer Works</div>
        <Card></Card>
        {/* <Row style={{ marginTop: "20px" }}>
          <Col lg="4">
            <Card className="featureCard">
              <div className="subHead">SignUp or Login</div>
              <div className="brandObj">
                Create an account or log in securely to start your Veridical
                Reviewer journey.
              </div>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="featureCard">
            <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" height={"200px"} />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col lg="4">
            <Card className="featureCard">
              <div className="subHead">SignUp or Login</div>
              <div className="brandObj">
                Create an account or log in securely to start your Veridical
                Reviewer journey.
              </div>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col lg="4">
            <Card className="featureCard">
              <div className="subHead">Submit Reviews</div>
              <div className="brandObj">
                Visit any website, click the Veridical Reviewer extension, and
                leave an anonymous review to help website owners understand user
                perspectives.
              </div>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col lg="4">
            <Card className="featureCard">
              <div className="subHead">Engage with Community</div>
              <div className="brandObj">
                Interact with other users by liking, replying, and fostering
                constructive discussions. Be a part of the website improvement
                community.
              </div>
            </Card>
          </Col>
        </Row> */}
        <Row style={{ marginTop: "20px", minHeight: '100px' }}>
          <Col lg="4">
            <TypeAnimation
              sequence={[
                "Visit the Chrome Web Store",
                1000, // wait 1s before replacing the next substring
                "Search for 'Veridical Reviewer Extension'",
                1000,
                "Download and add the extension to your browser",
                1000,
                "Click on the Veridical Reviewer Extension icon",
                1000,
                "Sign up or log in securely",
                1000,
                "Start your Veridical Reviewer journey!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
                color: "white",
              }}
              repeat={Infinity}
            />
          </Col>
          <Col lg="4">
            {/* <ReactPlayer
              url=""
              height={"200px"}
            /> */}
          </Col>
        </Row>
      </Container>
      {/* Review section */}
      <Container fluid style={{ marginBottom: "20px" }}>
        <div className="footer">
          <Row style={{color: "#FFFFFF"}}>
            <Col sm='2' style={{textAlign: 'center'}}>Privacy policy</Col>
            <Col sm='2' style={{textAlign: 'center'}}>Terms & services</Col>
            <Col sm='2' style={{textAlign: 'center'}}>Contact Us</Col>
            <Col sm='1'>|</Col>
            <Col sm='2'>Follow us on</Col>
            <Col sm='2'>social media links</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
