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

/* ================================================================= */

const CreateItem = () => {
  const [sigle, setSigle] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  return (
    <createitem id="createitem">
      <Container>
        <ShowModel show={modalShow} onHide={() => setModalShow(false)} />
        <div className="content__createitem">
          <Row>
            <Col lg={7}>
              <div className="left__CreateSimple">
                <Row>
                  <Col className=" Collectible" lg={8} md={6}>
                    {
                      sigle ? <h1>Create single collectible</h1> : <h1>Create multiple collectible</h1>
                    }
                  </Col>
                  <Col className="Multiple" lg={4} md={6}>
                    <div
                      onClick={() => setSigle(!sigle)}
                      className="switch_multiple"
                    >
                      <p>Swich to multiple</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="left__UploadFile">
                <h6>
                  <b>Upload file</b>
                </h6>
                <p>Drag or choose your file to upload </p>
                <div class="form-Uploadfile"></div>
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
            <Col lg={5}>
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
                  <Col className="Menu_left" lg={8} md={6}>
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
                  <Col className="Menu_right" lg={2} md={6}>
                    <div class="checkbox-example">
                      <input type="checkbox" value="1" id="checkboxOneInput" />
                      <label for="checkboxOneInput"></label>
                    </div>
                    <div class="checkbox-example1">
                      <input type="checkbox" value="1" id="checkboxOneInput" />
                      <label for="checkboxOneInput"></label>
                    </div>
                    <div class="checkbox-example2">
                      <input type="checkbox" value="1" id="checkboxOneInput" />
                      <label for="checkboxOneInput"></label>
                    </div>
                  </Col>
                </Row>
                <div className="bottom_menu">
                  <Row>
                    <Col className="create_bottom" lg={3} md={6}>
                      <div className="circle_xanhbien"></div>
                      <div class="name_color">
                        <b>Create collection</b>
                      </div>
                    </Col>
                    <Col className="create_bottom" lg={3} md={6}>
                      <div className="circle_xanhla"></div>
                      <div class="name_color">
                        <b>Crypto Legend - Professorion</b>
                      </div>
                    </Col>
                    <Col className="create_bottom" lg={3} md={6}>
                      <div className="circle_hong"></div>
                      <div class="name_color">
                        <b>Crypto Legend - Professor</b>
                      </div>
                    </Col>
                    <Col lg={3} md={6} className="create_bottom">
                      <div className="circle_tim"></div>
                      <div class="name_color">
                        <b>Legend Photography</b>
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
        <div className="">Place a bid</div>
        <Button className="cancel" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
/* ======================================================================== */
export default CreateItem;
