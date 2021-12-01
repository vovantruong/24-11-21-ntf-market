import React from "react";
import "../../assets/css/ScanWallet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import purple from "../../assets/images/connect wallet/purple.png";
import blue from "../../assets/images/connect wallet/blue.png";
import green from "../../assets/images/connect wallet/green.png";
import pink from "../../assets/images/connect wallet/pink.png";
import qrcode from "../../assets/images/scan wallet1_2/qrcode.png";
function Content() {
  return (
    <div>
      <connectwallect id="connectwallect">
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
               <span>Scan to connect</span> 
               <p>Powered by UI8.Wallet</p>
            </div>
            <div class="img-main">
            <Image
                  src={qrcode}
                  class="img-picture"
                  width="444px"
                  height="424px"
                />
            </div>
           
            <div class="selection-button">
            <Nav.Link href="#wallet01">
               <span> Dont’s have a wallet app?</span>
            </Nav.Link>          
            </div>
          </div>
        {/* </Container> */}
      </connectwallect>
    </div>
  );
}

export default Content;
