/* ========================= Import Library React ======================== */

import React from "react";
import { Container, Row, Col, Image, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../assets/css/CreateItem.css";

/* ================================================================= */

/* ========================= Import Image ======================== */

import Preview from "../../assets/images/Create Item/unsplash_hoS3dzgpHzw.png";
import Avatar from "../../assets/images/Home/unsplash_mEZ3PoFGs_k.png";

/* ================================================================= */

const CreateItem = () => {

  return (
    <createitem id="createitem">
      <Container>
        <div className="content__createitem">
          <Row>
            <Col lg={7}>
              <div className="left__CreateSimple">
                <Row>
                  <Col className=" Collectible" lg={8} md={6} >
                    <h1>Create single collectible</h1>
                  </Col>
                  <Col className="Multiple" lg={4} md={6}>
                    <p>Switch to Multiple</p>
                  </Col>
                </Row>
              </div>
              <div className="left__UploadFile">
                <h6><b>Upload file</b></h6>
                <p>Drag or choose your file to upload </p>
                <div class="form-Uploadfile">
                </div>
              </div>
              <div className="left__ItemDetail">
                <h6><b>Item Details</b></h6>
              </div>
              <div className="left__itemname">
                <label>ITEM NAME</label>
                <div class="form-itemname">
                  <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"></input>
                </div>
                <label>DESCRIPTION</label>
                <div class="form-description">
                  <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"></input>
                </div>
                <div class="select_text">
                  <Row>
                    <Col class="form-royalties" lg={4} md={6}>
                      <div class="royalties">
                        <label for="">ROYALTIES</label>
                        <select class="form-control" name="" id="">
                          <a name="" id="" class="btn btn-primary" href="#" role="button">123</a>
                          <option>10%</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </Col>
                    <Col class="form-size" lg={4} md={6}>
                      <div class="size">
                        <label for="">SIZE</label>
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="e.g. Size"></input>
                      </div>
                    </Col>
                    <Col class="form-properti" lg={4} md={6}>
                      <div class="form-properti">
                        <label for="">PROPERTIE</label>
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="e.g. Propertie"></input>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div class="hr_left">
              </div>
            </Col>
            <Col lg={5}>
              <div className="right__Preview">
                <h1>Preview</h1>
                <div className="img_preview">
                  <Image src={Preview} width="270px" height="310px" />
                </div>
                <div className="digital_price">
                  <Row>
                    <Col className="digital" lg={8} md={6}>
                      <div className="digital_art">
                        <b>Amazing digital art</b>
                        <div className="img_avatar">
                          <Image src={Avatar} width="26px" height="26px" />
                        </div>
                      </div>
                    </Col>
                    <Col className="price_ETH" lg={4} md={6}>
                      <div className="price">
                        <b>1.125 ETH</b>
                        <p>3 in stock</p>
                        {/* <p>New bid</p> */}
                      </div>
                    </Col>
                  </Row>
                </div>
                <hr></hr>
                <Row>
                  <Col className="highest_bid" lg={8} md={6}>
                    <div className="highest">
                      <p>Highest bid <b>0.001 ETH</b></p>
                    </div>
                  </Col>
                  <Col className="bid" lg={4} md={6}>
                    <div className="newbid">
                      <p>New bid</p>
                    </div>
                  </Col>
                </Row>
                <div class="clearAll">
                  <p>Clear all</p>
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
                      <p>Enter the price for which the item will be instantly sold</p>
                    </div>
                    <div className="unlock">
                      <h5>Unlock once purchased</h5>
                      <p>Content will be unlocked after successful transaction</p>
                    </div>
                    <div className="choose">
                      <h5>Choose collection</h5>
                      <p>Choose an exiting collection or create a new one</p>
                    </div>
                  </Col>
                  <Col className="Menu_right" lg={2} md={6}>
                    <div class="button_right"><a name="" id="" class="btn btn-primary" href="#" role="button"></a>
                    </div>
                    <div class="button_right"><a name="" id="" class="btn btn-primary" href="#" role="button"></a>
                    </div>
                    <div class="button_right"><a name="" id="" class="btn btn-primary" href="#" role="button"></a>
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
            <Col lg={5}>
            </Col>
          </Row>
        </div>
        <div className="button_view">
          <p>Create item</p>
          <a name="" id="" class="btn btn-primary" href="#" role="button"><i class="fas fa-arrow-right"></i></a>
        </div>
      </Container>
    </createitem>
  );
}

export default CreateItem;