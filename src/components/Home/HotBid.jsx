import React, { useRef, useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import Slider from "react-slick";
import "./HotBid.css";

// ========================== Import Image ================================ //
import Avata from "../../assets/images/Home/avata-1.png";
import IconNotBG from "../../assets/images/Home/icon/heart-no-bg.png";
import IconBG from "../../assets/images/Home/icon/heart-bg.png";
import Image01 from "../../assets/images/Home/unsplat-13.png";
import Image02 from "../../assets/images/Home/unsplat-14.png";
import Image03 from "../../assets/images/Home/unsplat-15.png";
import Image04 from "../../assets/images/Home/unsplat-16.png";
import Image05 from "../../assets/images/Home/unsplat-02.png";

const hotbid = [
  {
    img: Image01,
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
    img: Image02,
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
  {
    img: Image04,
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
    img: Image05,
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

function HotBid() {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    className: "slide__bid",
    infinite: true,
    arrows: false,
    speed: 1350,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 541,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  const [clicked, setClicked] = useState(true);

  return (
    <section id="hot__bid">
      <Container>
        <div className="top__bid">
          <div className="title__bid">
            <h1>Hot bid</h1>
          </div>
          <div className="previout__next">
            <Button className="prev" onClick={previous}>
              <i className="fas fa-arrow-left"></i>
            </Button>
            <Button className="next" onClick={next}>
              <i className="fas fa-arrow-right"></i>
            </Button>
          </div>
        </div>
        <div className="bottom__bid">
          <Slider ref={ref} {...settings}>
            {hotbid.map((e, index) => (
              <div key={index} className="card__bid">
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
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default HotBid;
