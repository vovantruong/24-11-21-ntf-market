import React from "react";
import "../../assets/css/ConnectWallet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Image } from "react-bootstrap";
import purple from "../../assets/images/scan wallet1_2/purple.svg";
import blue from "../../assets/images/scan wallet1_2/blue1.svg";
import green from "../../assets/images/scan wallet1_2/green.svg";
import pink from "../../assets/images/scan wallet1_2/pink.svg";
import main from "../../assets/images/connect wallet/main.png";
import {Link} from 'react-router-dom'
function Content() {
  return (
    <div>
      <connectwallect id="connectwallect">
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
        <div class="img-title-select">
            <Link to="/scan-wallet">
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
            <Link to="/scan-wallet">
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
            <Link to="/scan-wallet">
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
            <Link to="/scan-nwallet">
              <Image
                src={pink}
                class="img-picture"
                width="65px"
                height="65px"
              />
              <span>Coinbase Wallet</span>
            </Link>
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
        </Container>
      </connectwallect>
    </div>
  );
}

export default Content;
