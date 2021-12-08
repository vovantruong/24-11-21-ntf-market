/* ========================= Import Library React ======================== */

import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Image,
} from "react-bootstrap";
import "../../assets/css/ViewItem.css";

/* ================================================================= */

/* ========================= Import Image ======================== */

import imgArt from "../../assets/images/View Item/unsplash__8hGFBxWD0A.png";
import avtOwner from "../../assets/images/View Item/unsplash_mEZ3PoFGs_k.png";

/* ================================================================= */

function Contnt_viewItem() {
    return (
        <viewitem id="viewitem">
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className="left_imgArt">
                            <div className="imgArt">
                                <Image src={imgArt} width="640px" height="768px" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="right_Art">
                            <h1> <b>
                                The amazing art
                            </b>
                            </h1>
                            <div className="price_art">
                                <span className="price_eth">
                                    2.5 ETH
                                </span>
                                <span className="price">
                                    $4,429.87
                                </span>
                                <span className="stock">
                                    10 in stock
                                </span>
                            </div>
                            <div className="link">
                                <p>
                                    This NFT Card will give you Access to Special
                                    <br />
                                    Airdrops. To learn more about UI8 please visit
                                    <br />
                                    <u>https://ui8.net</u>
                                </p>
                            </div>
                            <div className="info">
                                <span>
                                    Info
                                </span>
                                <span>
                                    Owners
                                </span>
                                <span>
                                    History
                                </span>
                                <span>
                                    Bids
                                </span>
                            </div>
                            <div className="owner_will">
                                <Row>
                                    <Col lg={2}>
                                        <Image src={avtOwner} width="50px" height="50px"></Image>
                                    </Col>
                                    <Col lg={10}>
                                        <span className="owner">
                                            Owner
                                        </span>
                                        <br />
                                        <span>
                                            <b>
                                                Raquel Will
                                            </b>
                                        </span>
                                    </Col>
                                    <hr></hr>
                                </Row>
                                <Row>
                                    <Col lg={2}>
                                        <Image src={avtOwner} width="50px" height="50px"></Image>
                                    </Col>
                                    <Col lg={10}>
                                        <span className="owner">
                                            Owner
                                        </span>
                                        <br />
                                        <span>
                                            <b>
                                                Raquel Will
                                            </b>
                                        </span>
                                    </Col>
                                    <hr></hr>
                                </Row>
                            </div>
                            <div className="highest">
                                <div className="price_highest">
                                    <Row>
                                        <Col lg={2}>
                                            <Image src={avtOwner} width="50px" height="50px"></Image>
                                        </Col>
                                        <Col lg={10}>
                                            <span className="highest_bid">
                                                Highest bid by
                                            </span>
                                            <span>
                                                <b>
                                                    Kohaku Tora
                                                </b>
                                            </span>
                                            <br />
                                            <span className="ETH">
                                                <b>1.46 ETH</b>
                                            </span>
                                            <span className="eth">
                                                <b>
                                                    $2,764.89
                                                </b>
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="purchase_place">
                                    <Row>
                                        <Col lg={6}>
                                            <button className="purchase">
                                                <a href="#">
                                                    Purchase now
                                                </a>
                                            </button>
                                        </Col>
                                        <Col lg={6}>
                                            <button className="place">
                                                <a href="#">
                                                    Place a bid
                                                </a>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="Service">
                                <span>
                                    Service fee
                                </span>
                                <span>
                                    <b>
                                    1.5%
                                    </b>
                                </span>
                                <span>
                                    2.563 ETH
                                </span>
                                <span>
                                    $4,540.62
                                </span>
                            </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </viewitem>
    );
}

export default Contnt_viewItem;
