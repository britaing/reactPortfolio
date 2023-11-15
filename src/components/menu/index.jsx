import { useLocation } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Menu() {
  return (
    <div className="d-flex p-2 navMenu">
      <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container fluid="lg">
          <Navbar.Brand href="https://github.com/britaing">
            <strong>Britain Gilgour</strong>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/About">About</Nav.Link>

            <Nav.Link href="/MyPortfolio">Portfolio</Nav.Link>

            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
