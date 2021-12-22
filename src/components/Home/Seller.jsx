import React, { useRef } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Seller.css";

import Slider from "react-slick";
/* ================== Import Image ===================== */
import Avatar01 from "../../assets/images/Home/avata-1.png";
import Avatar02 from "../../assets/images/Home/avata06.png";
import Avatar03 from "../../assets/images/Home/avata08.png";
import Avatar04 from "../../assets/images/Home/avata09.png";
import Avatar05 from "../../assets/images/Home/avata07.png";
import Thunder from "../../assets/images/Home/icon/thunder.png";
import Vector04 from "../../assets/images/Home/icon/Vector4.png";

const card = [
  { img: Avatar01 },
  { img: Avatar02 },
  { img: Avatar03 },
  { img: Avatar04 },
  { img: Avatar05 },
  { img: Avatar03 },
];

function Seller() {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    className: "slide__seller",
    infinite: true,
    arrows: false,
    speed: 1250,
    autoplaySpeed: 4500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <section id="seller">
      <Container>
        <div className="top__seller">
          <Row>
            <Col lg={6} md={6}>
              <div className="left__top">
                <h3>Popular</h3>
                <h2>
                  Sellers <i className="fas fa-chevron-down"></i>
                </h2>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="right__top">
                <Row>
                  <Col lg={6} md={6}>
                    <div className="time__frame">
                      <h6>timeframe</h6>
                      <div className="dropdown__time">
                        <h5>Today</h5>
                        <div className="arrow__down">
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="previout__next">
                      <Button className="prev" onClick={previous}>
                        <i className="fas fa-arrow-left"></i>
                      </Button>
                      <Button className="next" onClick={next}>
                        <i className="fas fa-arrow-right"></i>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom__seller">
          <Slider ref={ref} {...settings}>
            {card.map((e, index) => (
              <div key={index} className="seller__card">
                <div className="top__card">
                  <div className="active__thunder">
                    <Image src={Thunder} />
                    <p>#1</p>
                  </div>
                  <div className="icon__card">
                    <i className="far fa-plus-square"></i>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
                <div className="body__card">
                  <div className="card__img">
                    <Image src={e.img} />
                    <div className="diamon">
                      <Image src={Vector04} />
                    </div>
                  </div>
                  <h5>Edd Harris</h5>
                  <h6>
                    2.456 <span>ETH</span>
                  </h6>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default Seller;
