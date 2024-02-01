// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "../Assets/Style.css";
import veridicalLogo from "../Assets/Images/Veridical.png";
function NavbarTop() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary, navbarStyle">
      <Container
        fluid
        className="nav-style"
        style={{ justifyContent: "space-between", flexDirection: "row" }}
      >
        <div>
          <Navbar.Brand href="Login">
            <img
              src={veridicalLogo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="Veridical Logo"
            />
          </Navbar.Brand>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-end",
            flexDirection: "column-reverse",
          }}
        >
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ color: "white" }}
          />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ flexDirection: "column-reverse" }}
          >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                color: "white",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
              navbarScroll
            >
              <Nav.Link href="Login" style={{ color: "white" }}>
                Login
              </Nav.Link>
              <Nav.Link href="SignUp" style={{ color: "white" }}>
                SignUp
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
