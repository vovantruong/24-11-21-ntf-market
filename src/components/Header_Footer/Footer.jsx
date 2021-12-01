import React from "react";
import { Container, Row, Col, Image, Form,FormControl,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/Footer.css";
import Logo from "../../assets/images/Footer/Vector.png";

function Footer() {
  return (
    <footer id="footer">
      <Container>
        <Row>
          <Col className="footer__logo" lg={3} md={6}>
            <div className="logo">
              <Image className="logo__img" src={Logo} />
              <p className="logo__text">Womentech</p>
            </div>
            <div className="title">
              <h3>The New Creative Economy.</h3>
            </div>
          </Col>
          <Col className="footer__crypter" lg={3} md={6}>
            <div className="crypter">
              <h4>Crypter.</h4>
              <ul>
                  <li>
                    <Link to="/discover">Discover</Link>
                  </li>
                  <li>
                    <Link to="/connet-wallet">Connect wallet</Link>
                  </li>
              </ul>
            </div>
          </Col>
          <Col className="footer__info" lg={2} md={6}>
            <div className="info">
              <h4>Info</h4>
              <ul>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/create-item">Create item</Link>
                  </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={6} className="footer__newsletter">
            <div className="newsletter">
              <h4>Join Newsletter</h4>
              <ul>
                  <li>
                    <Link to="/subscribe">Subscribe our newsletter to get more free design course and resource</Link>
                  </li>
              </ul>
              <Form className="form">
                  <FormControl type="search" placeholder="Enter your email" />
                  <Button><i class="fas fa-arrow-right"></i></Button>
              </Form>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="bottom__footer">
            <p>Copyright © 2021. All rights reserved</p>
            <p>We use cookies for better service. <Link to="">Accept</Link></p>         
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
