import React from "react";
import "../../assets/css/ScanWallet01.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import purple from "../../assets/images/scan wallet1_2/purple.svg";
import blue from "../../assets/images/scan wallet1_2/blue1.svg";
import green from "../../assets/images/scan wallet1_2/green.svg";
import pink from "../../assets/images/scan wallet1_2/pink.svg";
import main from "../../assets/images/scan wallet1_2/scanWallet01.png";
import { Link } from "react-router-dom";
function Content() {
  return (
    <div>
      <connectwallect id="connectwallect01">
        <Container>
        <div class="main-connect-wallect">
          <div class="button-header">
            <div class="back-home">
              <Link to="/">
                <i class="fas fa-arrow-left"></i> Back to home
              </Link>
            </div>
            <div class="title-header">Connect Wallect</div>
          </div>
          <hr width="100%" align="center" />
        </div>
        <div class="main">
          <div class="layout-left">
          <div class="img-title-select">
            <Link to="scan-wallet">
              <Image
                src={purple}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Link>
          </div>

          <div class="img-title-select">
            <Link to="scan-wallet">
              <Image
                src={blue}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Link>
          </div>
          <div class="img-title-select">
            <Link to="scan-wallet">
              <Image
                src={green}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Link>
          </div>
          <div class="img-title-select">
            <Link to="scan-wallet">
              <Image
                src={pink}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Link>
          </div>
          </div>
          <div class="layout-right">
          <div class="title-main">
            <span>Terms of service</span>
            <p>
              Please take a few minutes to read and understand Stacks Terms of
              Service. To continue, you’ll need to accept the terms of services
              by checking the boxes.
            </p>
          </div>
          <div class="img-main">
            <Image
              src={main}
              class="img-picture"
              width="447px"
              height="160px"
            />
          </div>
          <div class="item-check">
            <input type="checkbox" class="check-box" defaultChecked={false} />
            <span>I am at least 13 years old</span>
          </div>
          <div class="item-check">
            <input type="checkbox" class="check-box" defaultChecked={false} />
            <span>I agree Stack terms of service</span>
          </div>
          <div class="selection-button">
            <Link to="connect-wallet">
              <span> Cancel</span>
            </Link>
            <Link to="/home-item">
              <div class="choose">Get started now</div>
            </Link>
          </div>
          </div>
        </div>
        </Container>
      </connectwallect>
    </div>
  );
}

export default Content;
