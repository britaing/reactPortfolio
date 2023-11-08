import { Link, useLocation } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Menu(props) {
  return (
    <div className="d-flex p-2"  >
      <Navbar fixed="top" bg="dark" data-bs-theme="dark" >
        <Container fluid="lg">
          <Navbar.Brand href="https://github.com/britaing">
            <strong>Britain Gilgour</strong>
          </Navbar.Brand>
          <Nav>
            <Col>
              <Nav.Link href="#about">About</Nav.Link>
            </Col>
            <Col>
              <Nav.Link href="#about">Portfolio</Nav.Link>
            </Col>
            <Col>
              <Nav.Link href="#about">Contact</Nav.Link>
            </Col>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
