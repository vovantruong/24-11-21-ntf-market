import React from "react";
import "../../assets/css/ConnectWallet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import ConnectWallet from "../ConnectWallet";
import purple from "../../assets/images/connect wallet/purple.png";
import blue from "../../assets/images/connect wallet/blue.png";
import green from "../../assets/images/connect wallet/green.png";
import pink from "../../assets/images/connect wallet/pink.png";
import main from "../../assets/images/connect wallet/main.png";
function Content() {
  return (
    <div>
      <connectwallect id="connectwallect">
        {/* <Container> */}
        <div class="main-connect-wallect">
          <div class="button-header">
            <div class="back-home">
              <Nav.Link href="/">
                <i class="fas fa-arrow-left"></i> Back to home
              </Nav.Link>
            </div>
            <div class="title-header">Connect Wallect</div>
          </div>
          <hr width="100%" align="center" />
        </div>
        <div class="main">
        <div class="img-title-select">
            <Nav.Link href="scanwallet">
              <Image
                src={purple}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Nav.Link>
          </div>

          <div class="img-title-select">
            <Nav.Link href="scanwallet">
              <Image
                src={blue}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Nav.Link>
          </div>
          <div class="img-title-select">
            <Nav.Link href="scanwallet">
              <Image
                src={green}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Nav.Link>
          </div>
          <div class="img-title-select">
            <Nav.Link href="scanwallet">
              <Image
                src={pink}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Nav.Link>
          </div>
          <div class="img-main">
            <Image
              src={main}
              class="img-picture"
              width="500px"
              height="500px"
            />
          </div>
        </div>
        {/* </Container> */}
      </connectwallect>
    </div>
  );
}

export default Content;
