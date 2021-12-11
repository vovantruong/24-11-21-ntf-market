import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Modal,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/Header/Vector.png";
import "../../assets/css/Header.css";
import "../../assets/css/HeaderItem.css";
import user from "../../assets/images/Home Item/unsplash_mEZ3PoFGs_k.png";

const Header = () => {
  /* ===================  */
  const [modalShow, setModalShow] = useState(false);
  return (
    <header id="header">
      <Navbar expand="lg">
        <Container>
          <ShowModel show={modalShow} onHide={() => setModalShow(false)} />
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
              <Link
                onClick={() => setModalShow(true)}
                className="bell"
                to=""
              >
                <i class='far fa-bell'></i>
              </Link>

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
};
function ShowModel(props) {
  const banlance = [
    { left: "Your balance", right: "8.498 ETH" },
    { left: "Service fee", right: "0 ETH" },
    { left: "Total bid amount", right: "0 ETH" },
  ];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Place a bid
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="top__text">You are about to purchase COINZ from UI8</p>
        <div className="info__bid">
          <h3>Your bid</h3>
          <Form>
            <FormControl type="text" placeholder="Enter bid" />
            <p>ETH</p>
          </Form>
          <hr />
          <div className="amount">
            {banlance.map((e, index) => (
              <div key={index} className="balance">
                <p>{e.left}</p>
                <p>{e.right}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="place">Place a bid</div>
        <div className="purchases">Purchase now</div>
        <Button className="cancel" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
/* ======================================================================== */

export default Header;
