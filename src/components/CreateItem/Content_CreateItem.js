/* ========================= Import Library React ======================== */

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import "./CreatorNetwork.css";

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
              <div className="right__card">
                <h1>Preview</h1>
                <div className="Preview_account">
                  <div className="creator">
                    <div className="img">
                      <Image src={Preview} />
                    </div>
                    <div className="descriptions">
                      <b>Amazing digital art</b>
                    </div>
                  </div>
                  <div className="price">
                    <div className="img">
                      <Image src={Avatar} />
                    </div>
                    <div className="descriptions">
                      <p>____________________________________</p>
                      <p>Highest bid <b>0.001 ETH</b></p>
                    </div>
                  </div>
                </div>
                <div className="card__current">
                  <p>Clear All</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default CreateItem;