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

import imgArt from "../../assets/images/View Item/unsplash__8hGFBxWD0A.svg";
import avtOwner from "../../assets/images/View Item/unsplash_mEZ3PoFGs_k.svg";
import arrow from "../../assets/images/View Item/Button arrow.png";
// import vector from "../../assets/images/View Item/Vector.png";
import button from "../../assets/images/View Item/Button ....png";
import ellipse from "../../assets/images/View Item/heart.png";
import burn from "../../assets/images/View Item/burn.svg";
import change from "../../assets/images/View Item/change.svg";
import chansfer from "../../assets/images/View Item/chansfer.svg";
import remove from "../../assets/images/View Item/remove.svg";
import report from "../../assets/images/View Item/report.svg";
import FaceBook from "../../assets/images/View Item/Button facebook01.svg";
import Twitter from "../../assets/images/View Item/Button twitter01.svg";
/* ================================================================= */

const Contnt_viewItem = () => {
    /* ===================  */
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [modalShow4, setModalShow4] = useState(false);
    const [modalShow5, setModalShow5] = useState(false);
    const [modalShow6, setModalShow6] = useState(false);
    const [modalShow7, setModalShow7] = useState(false);
    const [modalShow8, setModalShow8] = useState(false);
    return (
        <viewitem id="viewitem">
            <Container>
                <ShowModel show={modalShow} onHide={() => setModalShow(false)} />
                <ShowModel1 show={modalShow1} onHide={() => setModalShow1(false)} />
                <Choose show={modalShow2} onHide={() => setModalShow2(false)} />
                <Change_price show={modalShow3} onHide={() => setModalShow3(false)} />
                <Choose show={modalShow4} onHide={() => setModalShow4(false)} />
                <Choose show={modalShow5} onHide={() => setModalShow5(false)} />
                <Choose show={modalShow6} onHide={() => setModalShow6(false)} />
                <Report show={modalShow7} onHide={() => setModalShow7(false)} />
                <Arrow show={modalShow8} onHide={() => setModalShow8(false)} />
                <Row>
                    <Col lg={6} md={12}>
                        <div className="left_imgArt">
                            <div className="imgArt">
                                <Image className="imageArt" src={imgArt} width="640px" height="768px" />
                                <div className="like">
                                    <p className="purchase">
                                        ART
                                    </p>
                                    <p class="place">
                                        UNLOCKABLE
                                    </p>
                                    <button type="button" class="icon__img btn btn-primary">
                                        <Link
                                            onClick={() => setModalShow8(true)}
                                            className="button_arrow"
                                            to=""
                                        >
                                            <img className="arrow" src={arrow} width="42px" height="42px" />
                                        </Link>
                                        <img className="ellipse" src={ellipse} width="42px" height="42px" />
                                        <Link
                                            onClick={() => setModalShow2(true)}
                                            className="button_choose"
                                            to=""
                                        >
                                            <img className="button..." src={button} width="42px" height="42px" />
                                        </Link>
                                        {/* <img className="vector" src={vector} width="23.31px" height="19.2px"/> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
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
                                        <Col lg={10} className="price_highesr">
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
                                                1.46 ETH
                                            </span>
                                            <span className="eth">

                                                $2,764.89

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
                                                    <b>Purchase now</b>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="place">
                                                <Link
                                                    onClick={() => setModalShow1(true)}
                                                    className="place"
                                                    to=""
                                                >
                                                    <b>Place a bid</b>
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
        <Modal id="modal1"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Checkout</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="top__text">You are about to purchase COINZ from UI8</p>
                <div className="info__bid">
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
                <Button className="place_continue">I understand, continue</Button>
                <Button className="cancel" onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
function ShowModel1(props) {
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
            {/* <div className="modal_viewitem"> */}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Place a bid</b>
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
                <Button className="place_continue">Place a bid</Button>
                <Button className="cancel" onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
            {/* </div> */}
        </Modal>
    );
}
function Choose(props) {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [modalShow4, setModalShow4] = useState(false);
    const [modalShow5, setModalShow5] = useState(false);
    const [modalShow6, setModalShow6] = useState(false);
    const [modalShow7, setModalShow7] = useState(false);
    return (
        <Modal id="modal_choose"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ShowModel1 show={modalShow1} onHide={() => setModalShow1(false)} />
            <Change_price show={modalShow3} onHide={() => setModalShow3(false)} />
            <Transfer show={modalShow4} onHide={() => setModalShow4(false)} />
            <Remove show={modalShow5} onHide={() => setModalShow5(false)} />
            <Burn show={modalShow6} onHide={() => setModalShow6(false)} />
            <Report show={modalShow7} onHide={() => setModalShow7(false)} />
            <Modal.Body>
                <Row>
                    <Link
                        onClick={() => setModalShow3(true)}
                        className="img_change"
                        to=""
                    >
                        <Col lg={1}>
                            <div className="img_change">
                                <Image src={change}></Image>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="change">Change price</div>
                        </Col>
                    </Link>
                </Row>
                <hr />
                <Row>
                    <Link
                        onClick={() => setModalShow4(true)}
                        className="img_change"
                        to=""
                    >
                        <Col lg={1}>
                            <div className="img_change">
                                <Image src={chansfer}></Image>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="change">Transfer token </div>
                        </Col>
                    </Link>
                </Row>
                <hr />
                <Row>
                    <Link
                        onClick={() => setModalShow5(true)}
                        className="img_change"
                        to=""
                    >
                        <Col lg={1}>
                            <div className="img_change">
                                <Image src={remove}></Image>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="change">Remove from sale</div>
                        </Col>
                    </Link>
                </Row>
                <hr />
                <Row>
                    <Link
                        onClick={() => setModalShow6(true)}
                        className="img_change"
                        to=""
                    >
                        <Col lg={1}>
                            <div className="img_change">
                                <Image src={burn}></Image>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="change">Burn token</div>
                        </Col>
                    </Link>
                </Row>
                <hr />
                <Row>
                    <Link
                        onClick={() => setModalShow7(true)}
                        className="img_change"
                        to=""
                    >
                        <Col lg={1}>
                            <div className="img_change">
                                <Image src={report}></Image>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="change">Report</div>
                        </Col>
                    </Link>
                </Row>
            </Modal.Body>
        </Modal>
    );
}
function Change_price(props) {
    return (
        <Modal id="modal_change"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <div className="modal_viewitem"> */}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Change price</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="newPrice">NEW PRICE</p>
                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"></input>
            </Modal.Body>
            <Modal.Footer>
                <Button className="place_continue">Change price</Button>
                <Button className="cancel" onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
            {/* </div> */}
        </Modal>
    );
}
function Transfer(props) {
    return (
        <Modal id="modal_Transfer"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <div className="modal_viewitem"> */}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Transfer token</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="transfer_token">You can transfer tokens from your address to another</p>
                <p className="address"><b>Receiver address</b></p>
                <p className="paste">Paste address</p>
                <hr />
            </Modal.Body>
            <Modal.Footer>
                <Button className="place_continue">Send now</Button>
                <Button className="cancel" onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
            {/* </div> */}
        </Modal>
    );
}
function Remove(props) {
    return (
        <Modal id="modal_remove"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <div className="modal_viewitem"> */}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Remove from sale</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="remove_item">Do you really want to remove your item from sale? You can put it on sale anytime</p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="place_continue">Send now</Button>
                <Button className="cancel" onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
            {/* </div> */}
        </Modal>
    );
}
function Burn(props) {
    return (
        <Modal id="modal_burn"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <div className="modal_viewitem"> */}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Burn token</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="burn_token">Are you sure to burn this token? This action cannot be undone. Token will be transfered to zero address</p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="place_continue">Send now</Button>
                <Button className="cancel" onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
            {/* </div> */}
        </Modal>
    );
}
function Report(props) {
    return (
        <Modal id="modal_report"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <div className="modal_viewitem"> */}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Report</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="report_token">Describe why you think this item should be removed from marketplace</p>
                <p className="message"><b>MESSAGE</b></p>
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Tell us the details"></input>
            </Modal.Body>
            <Modal.Footer>
                <Button className="place_continue">Place a bid</Button>
                <Button className="cancel" onClick={props.onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
            {/* </div> */}
        </Modal>
    );
}
function Arrow(props) {
    return (
        <Modal id="modal_arrow"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    <p className="share"><b>Share link to this page</b></p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col lg={5}>
                        <Image src={FaceBook}></Image>
                    </Col>
                    <Col lg={5}>
                        <Image src={Twitter}></Image>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

/* ======================================================================== */

export default Contnt_viewItem;
