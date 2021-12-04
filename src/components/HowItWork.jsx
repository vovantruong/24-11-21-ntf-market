import React from "react";
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import HotBid from "../components/Home/HotBid";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../assets/css/HowItWork.css";

const icon = [
  { icon: "fal fa-home-lg-alt", name: "General" },
  { icon: "fas fa-headphones-alt", name: "Support" },
  { icon: "far fa-bolt", name: "Hosting" },
  { icon: "far fa-wrench", name: "Product" },
];

const howItWork = [
  {
    title: "How to start with Stacks",
    text: " The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. Stacks isa production-ready library of stackable content blocksbuilt in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.",
  },
  {
    title: "Dose it support Dark Mode",
    text: " The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. Stacks isa production-ready library of stackable content blocksbuilt in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.",
  },
  {
    title: "Dose it support Auto Layout",
    text: " The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. Stacks isa production-ready library of stackable content blocksbuilt in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.",
  },
  {
    title: "What is Stacks Design System",
    text: " The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. Stacks isa production-ready library of stackable content blocksbuilt in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.",
  },
  {
    title: "How dose it work",
    text: " The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. Stacks isa production-ready library of stackable content blocksbuilt in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.",
  },
  {
    title: "How to start with Stacks",
    text: " The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. Stacks isa production-ready library of stackable content blocksbuilt in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode.",
  },
];

function HowItWork() {
  return (
    <>
      <Header />
      <section id="how__it__work">
        <Container>
          <div className="top__work">
            <h6>LEARN HOW TO GET STARTED</h6>
            <h1>Frequently asked questions</h1>
            <p>
              Join Stacks community now to get free updates and also alot of
              freebies are waiting for you or <span>Contact Support</span>
            </p>
          </div>
          <div className="body__work">
            <Row>
              <Col lg={3} md={3}>
                <div className="left__body">
                  {icon.map((e, index) => (
                    <p key={index}>
                      <i className={e.icon}></i>
                      {e.name}
                    </p>
                  ))}
                </div>
              </Col>
              <Col lg={9} md={9}>
                <div className="right__body">
                  <Accordion>
                    {howItWork.map((e, index) => (
                      <Accordion.Item key={index} eventKey={index}>
                        <Accordion.Header>{e.title}</Accordion.Header>
                        <Accordion.Body>{e.text}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <HotBid />
      <Footer />
    </>
  );
}

export default HowItWork;
