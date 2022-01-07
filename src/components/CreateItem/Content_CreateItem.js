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
import "../../assets/css/CreateItem.css";

/* ================================================================= */

/* ========================= Import Image ======================== */

import Preview from "../../assets/images/Create Item/unsplash_hoS3dzgpHzw.svg";
import Avatar from "../../assets/images/Create Item//unsplash_mEZ3PoFGs_k.svg";
import Variant from "../../assets/images/Create Item/Variant3.png";
import Property from "../../assets/images/Create Item/Property 24.png";
import Component from "../../assets/images/Create Item/Component 14.png";

/* ================================================================= */

const CreateItem = () => {
  const [sigle, setSigle] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowFile, setupfile] = useState(false);

  return (
    <createitem id="createitem">
      <Container>
        <ShowModel show={modalShow} onHide={() => setModalShow(false)} />
        <Upfile show={modalShowFile} onHide={() => setupfile(false)} />
        <div className="content__createitem">
          <Row>
            <Col lg={8}>
              <div className="left__CreateSimple">
                <Row>
                  <Col className=" Collectible" lg={10} md={6}>
                    {
                      sigle ? <h1>Create single collectible</h1> : <h1>Create multiple collectible</h1>
                    }
                  </Col>
                  <Col className="Multiple" lg={2} md={6}>
                    <div
                      onClick={() => setSigle(!sigle)}
                      className="switch_multiple"
                    >
                      {sigle ? <p>Swich to multiple</p> : <p>Swich to single</p>}
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="left__UploadFile">
                <h6>
                  <b>Upload file</b>
                </h6>
                <p>Drag or choose your file to upload </p>
                <Link
                  onClick={() => setupfile(true)}
                  className="place"
                  to=""
                >
                  <div class="form-Uploadfile"></div>
                </Link>
              </div>
              <div className="left__ItemDetail">
                <h6>
                  <b>Item Details</b>
                </h6>
              </div>
              <div className="left__itemname">
                <label>ITEM NAME</label>
                <div class="form-itemname">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  ></input>
                </div>
                <label>DESCRIPTION</label>
                <div class="form-description">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  ></input>
                </div>
                <div class="select_text">
                  <Row>
                    <Col class="form-royalties" lg={4} md={6}>
                      <div class="royalties">
                        <label for="">ROYALTIES</label>
                        <select class="form-control">
                          <option>10%</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </Col>
                    <Col class="form-size" lg={4} md={6}>
                      <div class="size">
                        <label for="">SIZE</label>
                        <input
                          type="text"
                          class="form-control"
                          name=""
                          id=""
                          aria-describedby="helpId"
                          placeholder="e.g. Size"
                        ></input>
                      </div>
                    </Col>
                    <Col class="form-properti" lg={4} md={6}>
                      <div class="form-properti">
                        <label for="">PROPERTIE</label>
                        <input
                          type="text"
                          class="form-control"
                          name=""
                          id=""
                          aria-describedby="helpId"
                          placeholder="e.g. Propertie"
                        ></input>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div class="hr_left"></div>
            </Col>
            <Col lg={4}>
              <div className="right__Preview">
                <h1>Preview</h1>
                <div className="img_preview">
                  <Image src={Preview} width="260px" height="310px" />
                  <div className="like">
                    <p className="purchase">
                      Purchasing
                    </p>
                    <button type="button" class="icon__img btn btn-primary">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgBpZPRbcMwDESpdIBmBG1QZQNngqZ//ZQ3cCdoO0G6QbtBnQniEZQJohE8QnjwCVAc2QgcAoQgk3w+iaKRzLz3jS4v6la9Vz/8qWXxnS6vU3HDJASPTIp0m+1r9b26IySM4ltlxgQ7E17rxy5T4glZE/JWiH9yuzH88MvEVkZG1ZV6h78X4hVP9QHYP+Rq4kYWGk92WvEIj1pUfwbsBGVKXwTlNbikrKW6vSyz1KCfpxBCdM6hq42uVveHeymqCo17V/9G80wW+JKhzZ0Mne1nIFCCxlUEoVbMKKmhbDzKbQlIEJ4C7qm+mYBRspfh3UUCYxazVHQDKsJYtCOwT8Bs5KDsahJmYQQ6FgNYE74mPJRqVlMwFqSpOHKdBM0qyxRaGbrWznUYdgGCBoxhNS9rUgAAAABJRU5ErkJggg==" />
                    </button>
                    <p class="place">
                      Place a bid
                    </p>
                  </div>
                </div>
                <div className="digital_price">
                  <Row>
                    <Col className="digital" lg={7} md={6}>
                      <div className="digital_art">
                        <b>Amazing digital art</b>
                        <div className="img_avatar">
                          <Image src={Avatar} width="26px" height="26px" />
                        </div>
                      </div>
                    </Col>
                    <Col className="price_ETH" lg={5} md={6}>
                      <div className="price">
                        <b>1.125 ETH</b>
                        <p>3 in stock</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <hr></hr>
                <Row>
                  <Col className="highest_bid" lg={7} md={6}>
                    <div className="highest">
                      <p>
                        Highest bid <b>0.001 ETH</b>
                      </p>
                    </div>
                  </Col>
                  <Col className="bid" lg={5} md={6}>
                    <div className="newbid">
                      <p>New bid</p>
                    </div>
                  </Col>
                </Row>
                <div class="clearAll">
                  <i class="fas fa-times-circle"></i>
                  <span>Clear All</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="content__Bottom">
          <Row>
            <Col lg={7}>
              <div className="Menu">
                <Row>
                  <Col className="Menu_left" lg={9} md={6}>
                    <div className="put">
                      <h5>Put on sale</h5>
                      <p>You’ll receive bids on this item</p>
                    </div>
                    <div className="instant">
                      <h5>Instant sale price</h5>
                      <p>
                        Enter the price for which the item will be instantly
                        sold
                      </p>
                    </div>
                    <div className="unlock">
                      <h5>Unlock once purchased</h5>
                      <p>
                        Content will be unlocked after successful transaction
                      </p>
                    </div>
                    <div className="choose">
                      <h5>Choose collection</h5>
                      <p>Choose an exiting collection or create a new one</p>
                    </div>
                  </Col>
                  <Col className="Menu_right" lg={3} md={6}>
                    <div class="checkbox-example">
                      <input type="checkbox" value="1" id="checkboxOneInput" />
                      <label className="label1" for="checkboxOneInput"></label>
                    </div>
                    <div class="checkbox-example1">
                      <input type="checkbox" value="2" id="checkboxOneInput" />
                      <label className="label2" className="label2" for="checkboxOneInput"></label>
                    </div>
                    <div class="checkbox-example2">
                      <input type="checkbox" value="3" id="checkboxOneInput" />
                      <label className="label3" for="checkboxOneInput"></label>
                    </div>
                  </Col>
                </Row>
                <div className="bottom_menu">
                  <Row>
                    <Col className="create_bottom" lg={3} md={6}>
                      <div onClick={clickimg1} className="circle_xanhbien img-1">
                        <i class="fas fa-plus plus-item item-1"></i>
                      </div>
                      <div class="name_color">
                        Create collection
                      </div>
                    </Col>
                    <Col className="create_bottom" lg={3} md={6}>
                      <div onClick={clickimg2} className="circle_xanhla img-2">
                        <i class="fas fa-plus plus-item  item-2"></i>
                      </div>
                      <div class="name_color">
                        Crypto Legend - Professorion
                      </div>
                    </Col>
                    <Col className="create_bottom" lg={3} md={6}>
                      <div onClick={clickimg3} className="circle_hong img-3">
                        <i class="fas fa-plus plus-item  item-3"></i>
                      </div>
                      <div class="name_color">
                        Crypto Legend - Professor
                      </div>
                    </Col>
                    <Col lg={3} md={6} className="create_bottom">
                      <div onClick={clickimg4} className="circle_tim img-4">
                        <i class="fas fa-plus plus-item item-4"></i>
                      </div>
                      <div class="name_color">
                        Legend Photography
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={5}></Col>
          </Row>
        </div>
        <div className="button_view">
          <p>Create item</p>
          <Link
            onClick={() => setModalShow(true)}
            className="place"
            to=""
          >
            <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
      </Container>
    </createitem>
  );
};

/* ======================================================================== */
function clickimg1() {
  const img1 = document.querySelector(".img-1");
  const checkitem = document.querySelector(".item-1");

  let styleBoder = document.querySelector(".item-1");
  if (styleBoder == "none" || styleBoder == "") {
    checkitem.style.display = "none";
    img1.style.display = "block";
  } else {
    img1.style.display = "block";
    checkitem.style.display = "none";
  }
}
function clickimg2() {
  const img2 = document.querySelector(".img-2");
  const checkitem2 = document.querySelector(".item-2");

  let styleBoder = document.querySelector(".item-2");
  if (styleBoder == "block") {
    img2.style.display = "none";
    checkitem2.style.display = "block";
  } else {
    img2.style.display = "block";
    checkitem2.style.display = "none";
  }
}
function clickimg3() {
  const img3 = document.querySelector(".img-3");
  const checkitem3 = document.querySelector(".item-3");

  let styleBoder = document.querySelector(".item-3");
  if (styleBoder == "block") {
    img3.style.display = "none";
    checkitem3.style.display = "block";
  } else {
    img3.style.display = "block";
    checkitem3.style.display = "none";
  }
}
function clickimg4() {
  const img4 = document.querySelector(".img-4");
  const checkitem4 = document.querySelector(".item-4");

  let styleBoder = document.querySelector(".item-4");
  if (styleBoder == "block") {
    img4.style.display = "none";
    checkitem4.style.display = "block";
  } else {
    img4.style.display = "block";
    checkitem4.style.display = "none";
  }
}
function ShowModel(props) {
  return (
    <Modal id="modal_View"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>Folow steps</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={2}>
            <div className="img">
              <Image src={Variant} />
            </div>
          </Col>
          <Col lg={8}>
            <div className="sign_oder">
              <p className="sign"> <b>Upload files & Mint token</b></p>
              <p className="call">Call contract method</p>
            </div>
          </Col>
          <Button className="btn_start">
            Start now
          </Button>
        </Row>
        <Row>
          <Col lg={2}>
            <div className="img">
              <Image src={Property} />
            </div>
          </Col>
          <Col lg={8}>
            <div className="sign_oder">
              <p className="sign"><b>Sign sell order</b></p>
              <p className="oder">Sign sell order using your wallet</p>
            </div>
          </Col>
          <Button className="btn_start">
            Start now
          </Button>
        </Row>
        <Row>
          <Col lg={2}>
            <div className="img">
              <Image src={Component} />
            </div>
          </Col>
          <Col lg={8}>
            <div className="sign_oder">
              <p className="sign"><b>Sign lock order</b></p>
              <p className="oder">Sign sell order using your wallet</p>
            </div>
          </Col>
          <Button className="btn_start">
            Start now
          </Button>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <div className="Something">Something went wrong, please <b>try again</b></div>
      </Modal.Footer>
    </Modal>
  );
}
function Upfile(props) {
  return (
    <Modal id="modal_upFile"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="chooseFile">
          <div class="form-group">
            <label for="myfile">Select a file:</label>
            <input type="file" class="form-control-file" name="" id="" placeholder="" aria-describedby="fileHelpId"></input><br></br><br></br>
            <input type="submit"></input>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}
/* ======================================================================== */
export default CreateItem;
