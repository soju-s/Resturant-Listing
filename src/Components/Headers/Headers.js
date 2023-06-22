import React from "react";
import "./Headers.js";
import { Container, Navbar } from "react-bootstrap";

export default function Headers() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="fs-4">
          <i class="fa-solid fa-utensils me-2"></i> De Resto Cafes
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
