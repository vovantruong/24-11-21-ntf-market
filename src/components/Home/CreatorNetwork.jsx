/* ========================= Import Library React ======================== */

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./CreatorNetwork.css";

/* ================================================================= */

/* ========================= Import Image ======================== */

import ImageCreatorLg from "../../assets/images/Home/unsplat.png";
import Avata01 from "../../assets/images/Home/avata-1.png";
import Rectangle from "../../assets/images/Home/icon/Rectangle4.png";
import CardCurrent from "../../assets/images/Home/card-current.png";
import ImgSmoke from "../../assets/images/Home/smoke-red-blue.png";
import EthNeverDie01 from "../../assets/images/Home/eth-never-1.png";
import EthNeverDie02 from "../../assets/images/Home/eth-never-2.png";
import EthNeverDie03 from "../../assets/images/Home/eth-never-3.png";
import Avata02 from "../../assets/images/Home/avata02.png";
import Avata03 from "../../assets/images/Home/avata03.png";
import Avata04 from "../../assets/images/Home/avata04.png";
import Avata05 from "../../assets/images/Home/avata05.png";

/* ================================================================= */

const Eth__never__die = [
  {
    className: "first",
    srcImg: EthNeverDie01,
    title: "ETH never die",
    srcAvt: Avata01,
    count: "1.125 ETH",
    text: "1 of 12",
    link: "Place a bid",
  },
  {
    className: "second",
    srcImg: EthNeverDie02,
    title: "ETH never die",
    srcAvt: Avata01,
    count: "1.125 ETH",
    text: "1 of 12",
    link: "Place a bid",
  },
  {
    className: "thirst",
    srcImg: EthNeverDie03,
    title: "ETH never die",
    srcAvt: Avata01,
    count: "1.125 ETH",
    text: "1 of 12",
    link: "Place a bid",
  },
];

const group__social = [
  {
    className: "first",
    src: Avata02,
    title: "Payton Harris",
    coin: "2.125 ETH",
    mess: 6,
  },
  {
    className: "second",
    src: Avata03,
    title: "Payton Harris",
    coin: "2.125 ETH",
    mess: 6,
  },
  {
    className: "thirst",
    src: Avata04,
    title: "Payton Harris",
    coin: "2.125 ETH",
    mess: 6,
  },
  {
    className: "fours",
    src: Avata05,
    title: "Payton Harris",
    coin: "2.125 ETH",
    mess: 6,
  },
];

const CreatorNetwork = () => {
  return (
    <section id="creator__network">
      <Container>
        <div className="top__network">
          <h6>create, explore, & collect digital art nfts.</h6>
          <h2>The new creative economy.</h2>
          <Router>
            <Link to="/discover">Start your search</Link>
          </Router>
        </div>
        <div className="content__network">
          <Row>
            <Col lg={7}>
              <div className="left__img">
                <Image src={ImageCreatorLg} />
              </div>
            </Col>
            <Col lg={5}>
              <div className="right__card">
                <h1>the creator network®</h1>
                <div className="account__info">
                  <div className="creator">
                    <div className="img">
                      <Image src={Avata01} />
                    </div>
                    <div className="descriptions">
                      <p>Creator</p>
                      <p>Enrico Cole</p>
                    </div>
                  </div>
                  <div className="price">
                    <div className="img">
                      <Image src={Rectangle} />
                    </div>
                    <div className="descriptions">
                      <p>Instant price</p>
                      <p>3.5 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="card__current">
                  <Image src={CardCurrent} />
                </div>
                <div className="btn__place__view">
                  <Router>
                    <Link className="place" to="">
                      Place a bid
                    </Link>
                    <br />
                    <Link className="view" to="">
                      View item
                    </Link>
                  </Router>
                </div>
                <div className="previout__next">
                  <Router>
                    <div className="prev">
                      <Link to="#">
                        <i className="fas fa-arrow-left"></i>
                      </Link>
                    </div>
                    <div className="next">
                      <Link to="#">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </Router>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom__network">
          <Row>
            <Col xl={9} lg={12}>
              <div className="left__network">
                <Row>
                  <Col lg={7}>
                    <div className="the__future">
                      <div className="the__img__lg">
                        <Image src={ImgSmoke} />
                        <div className="arrow"><i className="fas fa-arrow-right"></i></div>
                      </div>
                      <div className="the__info">
                        <div className="info__left">
                          <Image src={Avata01} />
                          <div className="info__eth">
                            <h3 className="title">The future of ETH®</h3>
                            <p>18 in stock</p>
                          </div>
                        </div>
                        <div className="info__right">
                          <p className="des">Highest bid</p>
                          <p className="eth_count">1.125 ETH</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="eth_never_die">
                      {Eth__never__die.map((e, index) => (
                        <div
                          key={index}
                          className={"group__img " + e.className}
                        >
                          <div className="img__eth__never">
                            <Image src={e.srcImg} />
                            <div className="arrow"><i className="fas fa-arrow-right"></i></div>
                          </div>
                          <div className="info__eth__never">
                            <h3>{e.title}</h3>
                            <div className="amout">
                              <Image src={Avata01} />
                              <p className="eth_count">{e.count}</p>
                              <p className="des">{e.text}</p>
                            </div>
                            <Router>
                              <Link to="#">{e.link}</Link>
                            </Router>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl={3} lg={12}>
              <div className="right__btn__network">
                <h6 className="title">Latest upload from creators</h6>
                {group__social.map((e, index) => (
                  <>
                    <div key={index} className={e.className + " group__social"}>
                      <div className="social__img">
                        <Image src={e.src} />
                        <div className="message">{e.mess}</div>
                      </div>
                      <div className="social__info">
                        <h5>{e.title}</h5>
                        <p className="eth_count">{e.coin}</p>
                      </div>
                    </div>
                  </>
                ))}
                <Router>
                  <Link to="#">
                    Discover more <i className="fas fa-arrow-right"></i>
                  </Link>
                </Router>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CreatorNetwork;
