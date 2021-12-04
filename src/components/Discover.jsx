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
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Image01 from "../assets/images/Home/unsplat-14.png";
import Image02 from "../assets/images/Home/unsplat-16.png";
import Image03 from "../assets/images/Home/unsplat-15.png";
import Avata from "../assets/images/Home/avata-1.png";
import Image04 from "../assets/images/Home/unsplat-13.png";

const discover01 = [
  {
    img: Image02,
    txt: "Purchasing",
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
    img: Image01,
    txt: "Purchasing",
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

const discover02 = [
  {
    img: Image04,
    txt: "Purchasing",
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
    img: Image03,
    txt: "Purchasing",
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
    img: Image01,
    txt: "Purchasing",
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
    class: "drop__price",
    title: "price",
    name: "Most liked",
    item: [{ nameItem: "Most liked" }, { nameItem: "Least liked" }],
  },
  {
    class: "drop__color",
    title: "color",
    name: "All color",
    item: [
      { nameItem: "All color" },
      { nameItem: "Black" },
      { nameItem: "Green" },
      { nameItem: "Pink" },
      { nameItem: "Purple" },
    ],
  },
  {
    class: "drop__creator",
    title: "creator",
    name: "Verified Only",
    item: [
      { nameItem: "Verified Only" },
      { nameItem: "All" },
      { nameItem: "Most liked" },
    ],
  },
];


function Discover() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  const [clicked, setClicked] = useState(true);

  const [hover, setHover] = useState(0);

  const handleHover = (index) => {
    setHover(index);
  };

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
          <hr className="hr__top" />
          <div className="body__discover">
            <Row>
              <Col xl={3} lg={12}>
                <div className="left__discover">
                  <div className="top__dropdown">
                    <Dropdown className="newest">
                      <h5>{hover === 0 ? "Newest" : "Oldest"}</h5>
                      <Dropdown.Toggle>
                        <i className="fas fa-chevron-down"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="drop__box__item">
                        <Dropdown.Item
                          onMouseEnter={() => handleHover(0)}
                          href="#"
                        >
                          Newest
                        </Dropdown.Item>
                        <Dropdown.Item
                          onMouseEnter={() => handleHover(1)}
                          href="#"
                        >
                          Oldest
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="price__range">
                      <Form.Label>Price range</Form.Label>
                      <Form.Range />
                      <div className="price">
                        <p>0.01 ETH</p>
                        <p>10 ETH</p>
                      </div>
                    </div>
                  </div>
                  <hr className="hr__body__01" />
                  <div className="content__dropdown">
                    {dropdown.map((e, index) => (
                      <div key={index} className="content__group">
                        <Form.Label>{e.title}</Form.Label>
                        <Dropdown>
                          <h5>{e.name}</h5>
                          <Dropdown.Toggle>
                            <i className="fas fa-chevron-down"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="drop__box__item">
                            {e.item.map((i, num) => (
                              <Dropdown.Item key={num} href="#">
                                {i.nameItem}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    ))}
                  </div>
                  <hr className="hr__body__02" />
                  <div className="bottom__dropdown">
                    <h3>
                      <i className="fas fa-times-circle"></i>Reset filter
                    </h3>
                  </div>
                </div>
              </Col>
              <Col xl={9} lg={12}>
                <div className="right__discover">
                  <div className="menu__item">
                    {menu.map((e, index) => (
                      <Link
                        onClick={() => handleClick(index)}
                        className={active === index ? "active" : ""}
                        key={index}
                        to="#"
                      >
                        {e.item}
                      </Link>
                    ))}
                  </div>
                  <div className="category__img">
                    <div className="top__category">
                      <Row>
                        {discover01.map((e, index) => (
                          <Col key={index} lg={4} md={6} xs={12}>
                            <div className="card__discover">
                              <div className="top__card">
                                <Image src={e.img} />
                                <div className="just__like">
                                  <p className="purchas">{e.txt}</p>
                                  <Button
                                    className="icon__img"
                                    onClick={() => setClicked(!clicked)}
                                  >
                                    {clicked ? (
                                      <i className="far fa-heart"></i>
                                    ) : (
                                      <i className="fas fa-heart"></i>
                                    )}
                                  </Button>
                                  <p className="place">{e.place}</p>
                                </div>
                              </div>
                              <div className="body__card">
                                <div className="card__title">
                                  <h5>{e.title}</h5>
                                  <p>{e.eth}</p>
                                </div>
                                <div className="card__icon">
                                  <Image src={e.avt} />
                                  <p>{e.stock}</p>
                                </div>
                              </div>
                              <hr />
                              <div className="bottom__card">
                                <p className="bt_left">
                                  {e.text__01} <span>{e.text__01__span}</span>
                                </p>
                                <p className="bt_right">{e.text__02}</p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                    <div className="bottom__category">
                      <Row>
                        {discover02.map((e, index) => (
                          <Col key={index} lg={4} md={6}>
                            <div className="card__discover">
                              <div className="top__card">
                                <Image src={e.img} />
                                <div className="just__like">
                                  <p className="purchas">{e.txt}</p>
                                  <Button
                                    className="icon__img"
                                    onClick={() => setClicked(!clicked)}
                                  >
                                    {clicked ? (
                                      <i className="far fa-heart"></i>
                                    ) : (
                                      <i className="fas fa-heart"></i>
                                    )}
                                  </Button>
                                  <p className="place">{e.place}</p>
                                </div>
                              </div>
                              <div className="body__card">
                                <div className="card__title">
                                  <h5>{e.title}</h5>
                                  <p>{e.eth}</p>
                                </div>
                                <div className="card__icon">
                                  <Image src={e.avt} />
                                  <p>{e.stock}</p>
                                </div>
                              </div>
                              <hr />
                              <div className="bottom__card">
                                <p className="bt_left">
                                  {e.text__01} <span>{e.text__01__span}</span>
                                </p>
                                <p className="bt_right">{e.text__02}</p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                  <Link className="load__more" to="#">
                    Load more
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Discover;
