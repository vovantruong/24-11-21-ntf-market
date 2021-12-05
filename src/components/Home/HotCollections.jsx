import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HotCollections.css";

/* =============================== Import Image ============================ */
import Image01 from "../../assets/images/Home/unsplat-02.png";
import Image02 from "../../assets/images/Home/unsplat-03.png";
import Image03 from "../../assets/images/Home/unsplat-04.png";
import Image04 from "../../assets/images/Home/unsplat-05.png";
import Image05 from "../../assets/images/Home/unsplat-06.png";
import Image06 from "../../assets/images/Home/unsplat-07.png";
import Image07 from "../../assets/images/Home/unsplat-01.png";
import Image08 from "../../assets/images/Home/unsplat-08.png";
import Image09 from "../../assets/images/Home/unsplat-09.png";
import Image10 from "../../assets/images/Home/unsplat-10.png";
import Image11 from "../../assets/images/Home/unsplat-11.png";
import Image12 from "../../assets/images/Home/unsplat-12.png";

/* =============================== Import Image Avatar ============================ */
import Avata01 from "../../assets/images/Home/avata-icon-01.png";
import Avata02 from "../../assets/images/Home/avata-icon-02.png";
import Avata03 from "../../assets/images/Home/avata-icon-03.png";

const collections = [
  {
    imgLagre: Image01,
    imageSmall: [{ img: Image02 }, { img: Image03 }, { img: Image04 }],
    title: "Awesome collection",
    avt: Avata01,
    text_des: "By Kennith Olson",
    item: "28 ITEMS",
  },
  {
    imgLagre: Image05,
    imageSmall: [{ img: Image06 }, { img: Image07 }, { img: Image08 }],
    title: "Awesome collection",
    avt: Avata02,
    text_des: "By Kennith Olson",
    item: "28 ITEMS",
  },
  ,
  {
    imgLagre: Image09,
    imageSmall: [{ img: Image10 }, { img: Image11 }, { img: Image12 }],
    title: "Awesome collection",
    avt: Avata03,
    text_des: "By Kennith Olson",
    item: "28 ITEMS",
  },
];

function HotCollections() {
  return (
    <section id="collections">
      <Container>
        <div className="title__collections">
          <h1>Hot collections</h1>
        </div>
        <div className="img__collections">
          <Row>
            {collections.map((e, index) => (
              <Col key={index} lg={4}>
                <Link to="/profile">
                  <div className="box__All__img">
                    <div className="img__lg">
                      <Image src={e.imgLagre} />
                    </div>
                    <div className="group__img__small">
                      <Row>
                        {e.imageSmall.map((i, index01) => (
                          <Col key={index01} lg={4} md={4} xs={4}>
                            <div className="img__small">
                              <Image src={i.img} />
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                  <div className="title__img">
                    <h3>{e.title}</h3>
                    <div className="info__img">
                      <div className="top__info">
                        <Image src={e.avt} />
                        <p>{e.text_des}</p>
                      </div>
                      <p className="eth">{e.item}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default HotCollections;
