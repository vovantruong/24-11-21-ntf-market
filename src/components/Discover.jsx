import React, { useState } from "react";
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";

import "../assets/css/Discover.css";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  FormControl,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link, Routes } from "react-router-dom";

import Image01 from "../assets/images/Home/unsplat-14.png";
import Image02 from "../assets/images/Home/unsplat-16.png";
import Image03 from "../assets/images/Home/unsplat-15.png";
import Image04 from "../assets/images/Home/unsplat-13.png";
import Avata from "../assets/images/Home/avata-1.png";
import IconNotBG from "../assets/images/Home/icon/heart-no-bg.png";

const discover__home = [
  {
    img: Image01,
    txt: "Purchasing",
    icon: IconNotBG,
    place: "Place a bid",
    title: "Amazing digital art",
    eth: "1.125 ETH",
    avt: Avata,
    stock: "3 in stock",
    text__01: "Highest bid",
    text__01__span: "0.001 ETH ",
    text__02: "New bid",
  },
  {
    img: Image02,
    txt: "Purchasing",
    icon: IconNotBG,
    place: "Place a bid",
    title: "Amazing digital art",
    eth: "1.125 ETH",
    avt: Avata,
    stock: "3 in stock",
    text__01: "Highest bid",
    text__01__span: "0.001 ETH",
    text__02: "New bid",
  },
  {
    img: Image03,
    txt: "Purchasing",
    icon: IconNotBG,
    place: "Place a bid",
    title: "Amazing digital art",
    eth: "1.125 ETH",
    avt: Avata,
    stock: "3 in stock",
    text__01: "Highest bid",
    text__01__span: "0.001 ETH",
    text__02: "New bid",
  },
  {
    img: Image04,
    txt: "Purchasing",
    icon: IconNotBG,
    place: "Place a bid",
    title: "Amazing digital art",
    eth: "1.125 ETH",
    avt: Avata,
    stock: "3 in stock",
    text__01: "Highest bid",
    text__01__span: "0.001 ETH",
    text__02: "New bid",
  },
];

const menu = [
  { item: "All items", class: "active" },
  { item: "Art" },
  { item: "Game" },
  { item: "Photography" },
  { item: "Music" },
  { item: "Video" },
  { item: "Fashion" },
];

const dropdown = [
  {
    name: "Most liked",
    item: [{ nameItem: "Most liked" }, { nameItem: "Least liked" }],
  },
  {
    name: "All color",
    item: [
      { nameItem: "All color" },
      { nameItem: "Black" },
      { nameItem: "Green" },
      { nameItem: "Pink" },
      { nameItem: "Purple" },
    ],
  },
  { name: "Verified Only" },
];

function Discover() {
  return (
    <>
      <Header />
      <section id="discover">
        <Container>
          <div className="top__discover">
            <h1>Type your keywords</h1>
            <Form>
              <FormControl type="search" placeholder="Search" />
              <Button>
                <i className="fas fa-search"></i>
              </Button>
            </Form>
          </div>
          <hr />
          <div className="body__discover">
            <Row>
              <Col lg={3}>
                <div className="top__dropdown">
                  <Dropdown as={ButtonGroup}>
                    <h5>Newest</h5>
                    <Dropdown.Toggle>
                      <i className="fas fa-chevron-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Newest</Dropdown.Item>
                      <Dropdown.Item href="#">Oldest</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <hr />
                <div className="content__dropdown">
                  {dropdown.map((e, index) => (
                    <Dropdown key={index} as={ButtonGroup}>
                      <h5>{e.name}</h5>
                      <Dropdown.Toggle>
                        <i className="fas fa-chevron-down"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {/* {e.item.map((i, num) => (
                          <Dropdown.Item key={num} href="#">{i.nameItem}</Dropdown.Item>
                        ))} */}
                      </Dropdown.Menu>
                    </Dropdown>
                  ))}
                </div>
                <hr />
                <div className="bottom__dropdown">
                  <h3>
                    <i class="fas fa-times-circle"></i>Reset filter
                  </h3>
                </div>
              </Col>
              <Col lg={9}></Col>
            </Row>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Discover;
