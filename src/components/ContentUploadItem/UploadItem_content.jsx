import React from "react";
import { Container, Row, Col, Image, Form, FormControl, Button } from "react-bootstrap";
import single from "../../assets/images/Upload item/unsplash_pEgsWN0kwbQ.png";
import mutiple from "../../assets/images/Upload item/unsplash_Lki74Jj7H-U.png";
import "../../assets/css/UploadItem.css";

function UploadItem() {
    return (
        <uploaditem id="uploaditem">
            <Container>
                <div className="ContentUpload">
                    <Row>
                        <Col className="left_Upload" lg={3} md={6}>
                            <div className="btnBack">
                                <a className="Back" href="/back">
                                    <a class="btna" href="/btna"><i class="fas fa-arrow-left"><b>Back to home</b></i> </a>
                                </a>
                            </div>
                        </Col>
                        <Col className="center_Upload" lg={7} md={6}>
                        </Col>
                        <Col className="right_Upload" lg={2} md={6}>
                            <a href="/upload"><b>Upload Item</b></a>
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
                                    <Col className="left_Upload" lg={1} md={6}>
                                    </Col>
                                    <Col className="center_Upload" lg={10} md={6}>
                                        <div className="item">
                                            <h1>Upload item</h1>
                                            <p>Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one
                                                collectible multiple times</p>
                                        </div>
                                        <div className="Creat">
                                            <Row>
                                                <Col className="single" lg={5} md={6}>
                                                    <div className="img_single">
                                                        <Image src={single} />
                                                    </div>
                                                    <div className="creat_single_mutiple">
                                                        <div className="single_mutiple">
                                                            <a href="creat_single"> <b>Creat single</b></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col className="mutiple" lg={5} md={6}>
                                                    <div className="img_mutiple">
                                                        <Image src={mutiple} />
                                                    </div>
                                                    <div className="creat_single_mutiple">
                                                        <div className="single_mutiple">
                                                            <a href="creat_mutiple"> <b>Creat multiple</b></a>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="confirmation">
                                            <p>We do not own your private keys and cannot access your funds without your confirmation.</p>
                                        </div>
                                    </Col>
                                    <Col className="right_Upload" lg={2} md={6}>
                                    </Col>
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
