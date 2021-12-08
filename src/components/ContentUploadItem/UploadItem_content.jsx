import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import single from "../../assets/images/Upload item/unsplash_pEgsWN0kwbQ.png";
import mutiple from "../../assets/images/Upload item/unsplash_Lki74Jj7H-U.png";
import "../../assets/css/UploadItem.css";
import {Link} from 'react-router-dom'

function UploadItem() {
  return (
    <uploaditem id="uploaditem">
      <Container>
        <div className="ContentUpload">
          <Row>
            <Col className="left_Upload" lg={3} md={6}>
              <div className="btnBack">
                <Link className="btna" to="/">
                  <i class="fas fa-arrow-left">
                  </i>
                  Back to home
                </Link>
              </div>
            </Col>
            <Col className="center_Upload" lg={6} md={6}></Col>
            <Col className="right_Upload" lg={3} md={6}>
              <Link to="/upload">
                <b>Upload Item</b>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="hrUpload">
        <hr></hr>
      </div>
      <Container>
        <Row>
          <div className="Upload_Item">
            <Row>
              <div className="Center_upload">
                <Row>
                  <Col className="left_Upload" lg={1} md={6}></Col>
                  <Col className="center_Upload" lg={10} md={6}>
                    <div className="item">
                      <h1>Upload item</h1>
                      <p>
                        Choose “Single” if you want your collectible to be one
                        of a kind or “Multiple” if you want to sell one
                        collectible multiple times
                      </p>
                    </div>
                    <div className="Creat">
                      <Row>
                        <Col className="single" lg={5} md={6}>
                          <div className="img_single">
                            <Image src={single} />
                          </div>
                          <div className="creat_single_mutiple">
                            <div className="single_mutiple">
                              <a href="create-item">
                                {" "}
                                <b>Creat single</b>
                              </a>
                            </div>
                          </div>
                        </Col>
                        <Col className="mutiple" lg={5} md={6}>
                          <div className="img_mutiple">
                            <Image src={mutiple} />
                          </div>
                          <div className="creat_single_mutiple">
                            <div className="single_mutiple">
                              <a href="create-item">
                                {" "}
                                <b>Creat multiple</b>
                              </a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="confirmation">
                      <p>
                        We do not own your private keys and cannot access your
                        funds without your confirmation.
                      </p>
                    </div>
                  </Col>
                  <Col className="right_Upload" lg={2} md={6}></Col>
                </Row>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </uploaditem>
  );
}

export default UploadItem;
