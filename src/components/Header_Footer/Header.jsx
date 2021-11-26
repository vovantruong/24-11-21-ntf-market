import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/Header/Vector.png";
import "../../assets/css/Header.css";

import {Link} from "react-router-dom"

function Header() {
  return (
    <header id="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} width="33,22px" height="31,63px" />
            <p className="logo">Womentech</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="left me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/discover">Discover</Link>
              <Link to="/how-it-work">How It Work</Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button>
                <i className="fas fa-search"></i>
              </Button>
            </Form>
            <Nav className="right">
              <Link to="/upload">Upload</Link>
              <Link to="/connect-wallet">Connect Wallet</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
