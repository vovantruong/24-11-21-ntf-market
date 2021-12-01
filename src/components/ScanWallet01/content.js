import React from "react";
import "../../assets/css/ScanWallet01.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import ScanWallet01 from "../ScanWallet01";
import purple from "../../assets/images/connect wallet/purple.png";
import blue from "../../assets/images/connect wallet/blue.png";
import green from "../../assets/images/connect wallet/green.png";
import pink from "../../assets/images/connect wallet/pink.png";
import main from "../../assets/images/scan wallet1_2/scanWallet01.png";
function Content() {
  return (
    <div>
      <connectwallect id="connectwallect01">
        {/* <Container> */}
          <div class="main-connect-wallect">
            <div class="button-header">
              <div class="back-home">
              <Nav.Link href="#backhome">
                <i class="fas fa-arrow-left"></i> Back to home
            </Nav.Link>
              </div>
              <div class="title-header">Connect Wallect</div>
            </div>
            <hr width="100%" align="center" />
          </div>
          <div class="main">
            <div class="img-title-select">
            <Image
                  src={purple}
                  class="img-picture"
                  width="65px"
                  height="65px"
                />
                <span>Coinbase Wallet</span>
            </div>
            <div class="img-title-select">
            <Image
                  src={blue}
                  class="img-picture"
                  width="65px"
                  height="65px"
                />
                <span>Coinbase Wallet</span>
            </div>
            <div class="img-title-select">
            <Image
                  src={green}
                  class="img-picture"
                  width="65px"
                  height="65px"
                />
                <span>Coinbase Wallet</span>
            </div>
            <div class="img-title-select">
            <Image
                  src={pink}
                  class="img-picture"
                  width="65px"
                  height="65px"
                />
                <span>Coinbase Wallet</span>
            </div>
            <div class="title-main">
               <span>Terms of service</span> 
               <p>Please take a few minutes to read and understand Stacks Terms of Service. To continue, you’ll need to accept the terms of services by checking the boxes.</p>
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
            <Nav.Link href="#connectwallet">
               <span> Cancel</span>
            </Nav.Link>
            <Nav.Link href="#home">
               <div class="choose">Get started now</div>
            </Nav.Link>
            </div>
          </div>
        {/* </Container> */}
      </connectwallect>
    </div>
  );
}

export default Content;
