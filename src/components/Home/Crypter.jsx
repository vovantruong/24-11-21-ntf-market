import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Crypter.css";

import Chat from "../../assets/images/Home/Chat 02 1.png";

function Crypter() {
  return (
    <section id="crypter">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="left__crypter">
              <h5>SAVE YOUR TIME WITH STACKS</h5>
              <h1>Earn free crypto with Crypter</h1>
              <p>A creative agency that lead and inspire</p>
              <div className="link__crypter">
                <Link className="create" to="/create-item">
                  Create item
                </Link>
                <Link className="discover" to="/discover">
                  Discover more
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="right__crypter">
              <div className="img__crypter">
                <Image src={Chat} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Crypter;
