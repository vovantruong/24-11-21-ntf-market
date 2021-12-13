import React from "react";
import {
  Container,
  Row,
  Col, Image, Form, Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "../../assets/images/Editprofile/unsplash_mEZ3PoFGs_k.svg";
import "../../assets/css/edit-profile.css";
import { Link } from "react-router-dom";

export default function Navbaritem() {
  return (
    <div id="edit__profile">
      <header className="navbar_item">
        <Container>
          <Row className="btn__top__item" >
            <Col md="6" sm="6" lg="6" xs="12">
              <div className="left link-address">
                <Link to="/"> <i className="fas fa-arrow-left"></i>&nbsp;Back to home</Link>
              </div>
            </Col>
            <Col md="6" sm="6" lg="6" xs="12">
              <div className="right link-address">
                <span>Connect Wallet</span>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="top_content_header">
          <div className="ruler">
          </div>
          <div className="Edit_tittle mt-5">

            <h2 className="tittle">
              Edit profile
            </h2>
            <p className="content_profile_edit">You can set preferred display name, create <b>your profile URL </b> and manage other personal settings.</p>
          </div>
          <Row className="mt-5" >
            <Col md="2" sm="12">
              <div className="avatar_profile">
                <Image src={avatar} width="130px" height="130px" />
              </div>
            </Col>
            <Col md="2" sm="12">
              <div className="profile_photo">
                <b className="tittle_photo content_tittle ">Profile photo</b>
                <p className="content_profile">We recommend an image of at
                  least 400x400. Gifs work too</p>
                <div className="upload_profile mt-5">
                  <b className="btn_upload mt-4">Upload</b>
                </div>
              </div>
            </Col>
            <Col md="7" sm="12" className="content__input">
              <div className="acount_info_tittle">
                <b className="content_tittle">Account info </b>
              </div>
              <Form>
                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                  <Form.Label>DISPLAY NAME</Form.Label>
                  <Form.Control type="text" placeholder="Enter your display name" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                  <Form.Label>CUSTOM URL</Form.Label>
                  <Form.Control type="text" placeholder="ui8.net/Your custom URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlTextareaBio">
                  <Form.Label>BIO</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="About yourself in a few words" />
                </Form.Group>
                <div className="Social_tittle mt-5 ">
                  <b className="content_tittle">Social </b>
                </div>
                <Form.Group className="mb-3 mt-4" controlId="formBasicWebsite">
                  <Form.Label>PORTFOLIO OR WEBSITE</Form.Label>
                  <Form.Control type="text" placeholder="Enter URL" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 form-twitter" controlId="formBasicTwitter">
                  <Form.Label>TWITTER</Form.Label>
                  <Form.Control type="text" placeholder="@ twitter username" />
                  <Button className="vertical"> Verify account</Button>
                </Form.Group>
              </Form>
              <div className="more_acount mt-5">
                <b className="addmore"><i class="fas fa-plus-circle"></i>&nbsp; Add more social account</b>
              </div>
              <div className="tittle_updateprofile mt-5">
                <b className="to_update">To update your settings you should sign message <br />
                  through your wallet. Click 'Update profile' then <br />
                  sign the message</b>
              </div>
              <div className="update_ruler"></div>
              <div className="profile mt-5">
                <span className="update_profile">Update Profile</span>
                <span className="clearn_all mu-4"><i class="fas fa-times-circle"></i>Clear all</span>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}





