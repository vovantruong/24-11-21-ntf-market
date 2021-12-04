import React, { useState } from "react";
import "./HomeDiscover.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Image01 from "../../assets/images/Home/unsplat-14.png";
import Image02 from "../../assets/images/Home/unsplat-16.png";
import Image03 from "../../assets/images/Home/unsplat-15.png";
import Image04 from "../../assets/images/Home/unsplat-13.png";
import Avata from "../../assets/images/Home/avata-1.png";
import IconNotBG from "../../assets/images/Home/icon/heart-no-bg.png";

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

function HomeDiscover() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <section id="discover__home">
      <Container>
        <h1 data-aos="fade-up" data-aos-duration="1000">Dicover</h1>
        <div className="nav__menu"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="30">
          <Row>
            <Col lg={4} md={12}>
              <div className="recently__menu">
                <h5>Recently added</h5>
                <div className="arrow__down">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </Col>
            <Col lg={8} md={12}>
              <Row>
                <Col lg={9} md={8} xs={12}>
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
                </Col>
                <Col lg={3} md={4} xs={12}>
                  <Button className="filter__menu">
                    Filter
                    <i className="far fa-filter"></i>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="category__img">
          <div className="top__category" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="30">
            <Row>
              {discover__home.map((e, index) => (
                <Col key={index} lg={3} md={6} xs={12}>
                  <div className="card__discover">
                    <div className="top__card">
                      <Image src={e.img} />
                      <div className="just__like">
                        <p className="purchas">{e.txt}</p>
                        <Button className="icon__img">
                          <Image src={e.icon} />
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
          <div className="bottom__category" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="40">
            <Row>
              {discover__home.reverse().map((e, index) => (
                <Col key={index} lg={3} md={6}>
                  <div className="card__discover">
                    <div className="top__card">
                      <Image src={e.img} />
                      <div className="just__like">
                        <p className="purchas">{e.txt}</p>
                        <Button className="icon__img">
                          <Image src={e.icon} />
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
      </Container>
    </section>
  );
}

export default HomeDiscover;
