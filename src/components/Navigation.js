import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  // const [activeLink, setActiveLink] = useState("home");

  // console.log(activeLink);

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>ReactJS-Playground</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/timer">
            <Nav.Link>Timer</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/pomodoro">
            <Nav.Link>Pomodoro</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/counter">
            <Nav.Link>Counter</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
