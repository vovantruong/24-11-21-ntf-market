/* ========================= Import Library React ======================== */

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../assets/css/CreateItem.css";

/* ================================================================= */

/* ========================= Import Image ======================== */

import Preview from "../../assets/images/Create Item/unsplash_hoS3dzgpHzw.png";
import Avatar from "../../assets/images/Home/unsplash_mEZ3PoFGs_k.png";

/* ================================================================= */

const CreateItem = () => {

  return (
    <section id="createitem">
      <Container>
        <div className="content__createitem">
          <Row>
            <Col lg={7}>
              <div className="left__CreateSimple">
                <h1>Create Simple Collectible</h1>
              </div>
              <div className="left__UploadFile">
                <h6><b>Upload file</b></h6>
                <p>Drag or choose your file to upload </p>
                <div class="form-Uploadfile">
                  <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"></input>
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
                <label>ROYALTIES</label>
                <Row>
                  <col-md-3>
                    <div class="form-royalties">
                      <select name="">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                      </select>
                    </div>
                  </col-md-3>
                  <col-md-3>
                    <div class="form-royalties">
                      <select name="">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                      </select>
                    </div>
                  </col-md-3>
                </Row>

              </div>
            </Col>
            <Col lg={5}>

              <div className="right__Preview">
                <h1>Preview</h1>
                <div className="img_preview">
                  <Image src={Preview} />
                </div>
                <div className="digital">
                  <div className="digital_art">
                    <b>Amazing digital art</b>
                    <div className="img_avatar">
                      <Image src={Avatar} />
                    </div>
                    <hr></hr>
                    <p>Highest bid <b>0.001 ETH</b></p>
                  </div>
                </div>

                <div className="price_ETH">
                  <p>Clear All</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="content__Bottom">
          <Row>
            <Col lg={7}>
              <div className="Menu">
                <div className="Menu_left">
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
                </div>
                <div className="Menu_right">
                  ahsdjhasdjh
                </div>
                <div className="bottom_menu">
                  <div className="bottom_create">
                    <div className="circle_xanhbien"></div>
                    <b>Create collection</b>
                  </div>
                  <div className="bottom_create">
                    <div className="circle_xanhla"></div>
                    <b>Crypto Legend - Professorion</b>
                  </div>
                  <div className="bottom_create">
                    <div className="circle_hong"></div>
                    <b>Crypto Legend - Professor</b>
                  </div>
                  <div className="bottom_create">
                    <div className="circle_tim"></div>
                    <b>Legend Photography</b>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default CreateItem;