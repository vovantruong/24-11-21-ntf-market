/* ========================= Import Library React ======================== */

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
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CreatorNetwork.css";

/* ================================================================= */

/* ========================= Import Image ======================== */

import ImageCreatorLg from "../../assets/images/Home/unsplat.png";
import ImageCreatorLg02 from "../../assets/images/Home/img-large-639x802.png";
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

/* Du lieu mau */
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
  /* ===================  */
  const [modalShow, setModalShow] = useState(false);
  /* ===================  */

  let [img, setImg] = useState(true);

  return (
    <section id="creator__network">
      <Container>
        <ShowModel show={modalShow} onHide={() => setModalShow(false)} />
        <div className="top__network animate__animated animate__fadeInDown">
          <h6>create, explore, & collect digital art nfts.</h6>
          <h2>The new creative economy.</h2>
          <Link to="/discover">Start your search</Link>
        </div>
        <div className="content__network">
          <Row>
            <Col lg={7}>
              <div className="left__img animate__animated animate__fadeInLeft">
                {img ? (
                  <Image src={ImageCreatorLg} />
                ) : (
                  <Image src={ImageCreatorLg02} />
                )}
                {/* <Image src={ImageCreatorLg} /> */}
              </div>
            </Col>
            <Col lg={5}>
              <div className="right__card animate__animated animate__fadeInRight">
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
                  <p className="title">Current Bid</p>
                  <h5>1.00 ETH</h5>
                  <h6>$3,618.36</h6>
                  <p className="ending">Auction ending in</p>
                  <div className="time">
                    <div className="hour">
                      <p>13</p>
                      <span>Hrs</span>
                    </div>
                    <div className="mins">
                      <p>04</p>
                      <span>mins</span>
                    </div>
                    <div className="secs">
                      <p>48</p>
                      <span>secs</span>
                    </div>
                  </div>
                </div>
                <div className="btn__place__view">
                  <Link
                    onClick={() => setModalShow(true)}
                    className="place"
                    to=""
                  >
                    Place a bid
                  </Link>
                  <br />
                  <Link className="view" to="view_item">
                    View item
                  </Link>
                </div>
                <div className="previout__next">
                  <div className="prev">
                    <Link to="#" onClick={() => setImg(!img)}>
                      <i className="fas fa-arrow-left"></i>
                    </Link>
                  </div>
                  <div className="next" onClick={() => setImg(!img)}>
                    <Link to="#">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className="bottom__network"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Row>
            <Col xl={9} lg={12}>
              <div className="left__network">
                <Row>
                  <Col lg={7}>
                    <div className="the__future">
                      <Link className="to-link" to="/profile">
                        <div className="the__img__lg">
                          <Image src={ImgSmoke} />
                          <div className="arrow">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </Link>

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
                          <Link className="to-link" to="/profile">
                            <div className="img__eth__never">
                              <Image src={e.srcImg} />
                              <div className="arrow">
                                <i className="fas fa-arrow-right"></i>
                              </div>
                            </div>
                          </Link>

                          <div className="info__eth__never">
                            <h3>{e.title}</h3>
                            <div className="amout">
                              <Image src={Avata01} />
                              <p className="eth_count">{e.count}</p>
                              <p className="des">{e.text}</p>
                            </div>

                            <Link to="#">{e.link}</Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={12} xl={3}>
              <div className="right__btn__network">
                <h6 className="title">Latest upload from creators</h6>
                {group__social.map((e, index) => (
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
                ))}

                <Link to="#">
                  Discover more <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

/* ================================ Model ================================== */
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
        <Button className="place">Place a bid</Button>
        <Button className="cancel" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
/* ======================================================================== */

export default CreatorNetwork;
