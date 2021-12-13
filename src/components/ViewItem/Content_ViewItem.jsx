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
// import "./components/Home/CreatorNetwork.css";
import "../../assets/css/ViewItem.css";

/* ================================================================= */

/* ========================= Import Image ======================== */

import imgArt from "../../assets/images/View Item/unsplash__8hGFBxWD0A.png";
import avtOwner from "../../assets/images/View Item/unsplash_mEZ3PoFGs_k.png";
import arrow from "../../assets/images/View Item/Button arrow.png";
// import vector from "../../assets/images/View Item/Vector.png";
import button from "../../assets/images/View Item/Button ....png";
import ellipse from "../../assets/images/View Item/heart.png";
/* ================================================================= */

const Contnt_viewItem = () => {
    /* ===================  */
    const [modalShow, setModalShow] = useState(false);
    return (
        <viewitem id="viewitem">
            <Container>
                <ShowModel show={modalShow} onHide={() => setModalShow(false)} />
                <Row>
                    <Col lg={7}>
                        <div className="left_imgArt">
                            <div className="imgArt">
                                <Image src={imgArt} width="640px" height="768px" />
                                <div className="like">
                                    <p className="purchase">
                                        ART
                                    </p>
                                    <p class="place">
                                        UNLOCKABLE
                                    </p>
                                    <button type="button" class="icon__img btn btn-primary">
                                        <img className="arrow"src={arrow} width="42px" height="42px"/>
                                        <img className="ellipse" src={ellipse} width="42px" height="42px"/>
                                        <img className="button..."src={button} width="42px" height="42px"/>
                                        {/* <img className="vector" src={vector} width="23.31px" height="19.2px"/> */}
                                    </button>
                                </div>
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
                                            <div className="purchase">
                                                <Link
                                                    onClick={() => setModalShow(true)}
                                                    className="purchase"
                                                    to=""
                                                >
                                                    Purchase now
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="place">
                                                <Link
                                                    onClick={() => setModalShow(true)}
                                                    className="place"
                                                    to=""
                                                >
                                                    Place a bid
                                                </Link>
                                            </div>
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
                <div className="place">Place a bid</div>
                <div className="purchases">Purchase now</div>
                <Button className="cancel" onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
/* ======================================================================== */

export default Contnt_viewItem;
