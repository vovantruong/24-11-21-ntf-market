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
import "../../assets/css/HeaderItem.css";
import user from "../../assets/images/Home Item/unsplash_mEZ3PoFGs_k.png";

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
              <Nav.Link href="#action1">Discover</Nav.Link>
              <Nav.Link href="#action2">How It Work</Nav.Link>
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

            <Nav className="bell">
              <Button>
               <i class='far fa-bell'></i>
              </Button>
            </Nav>

            <Nav className="right">
              <Nav.Link href="#">Upload</Nav.Link>
              <Nav.Link href="#" class="acount">
              <Image src={user} width="20px" height="20px" />1.000 ETH
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
