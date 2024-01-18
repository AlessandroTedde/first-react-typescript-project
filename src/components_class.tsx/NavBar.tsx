import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark text-light">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link className="text-light" to={"/"}>
            FavNews
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-light nav-link" to={"/"}>
              Home
            </Link>
            <Link className="text-light nav-link" to={"/"}>
              Articles
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
