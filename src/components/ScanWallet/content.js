import React from "react";
import "../../assets/css/ScanWallet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import purple from "../../assets/images/scan wallet1_2/purple.svg";
import blue from "../../assets/images/scan wallet1_2/blue1.svg";
import green from "../../assets/images/scan wallet1_2/green.svg";
import pink from "../../assets/images/scan wallet1_2/pink.svg";
import qrcode from "../../assets/images/scan wallet1_2/qrcode.png";
import {Link} from "react-router-dom";
function Content() {
  return (
    <div>
      <connectwallect id="scanwallet">
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
          <div onClick={clickImg1} class="img-title-select img-1">
              <img src={purple}  class="img-picture1"/>
            <i class="fas fa-check check-item item-1"></i>
            <span>Coinbase Wallet</span>
          </div>
          <div onClick={clickImg2} class="img-title-select img-2">
              <img src={blue}  class="img-picture2"/>
            <i class="fas fa-check check-item item-2"></i>
            <span>Coinbase Wallet</span>
          </div>
          <div onClick={clickImg3} class="img-title-select img-3">
              <img src={green}  class="img-picture3"/>
            <i class="fas fa-check check-item item-3"></i>
            <span>Coinbase Wallet</span>
          </div>
          <div onClick={clickImg4} class="img-title-select img-4">
              <img src={pink}  class="img-picture4"/>
            <i class="fas fa-check check-item item-4"></i>
            <span>Coinbase Wallet</span>
          </div>
          </div>
          <div class="layout-right">
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
            <Link to="/scan-wallet01">
              <span> Dont’s have a wallet app?</span>
            </Link>
          </div>
          </div>
        </div>
        </Container>
      </connectwallect>
    </div>
  );
}
function clickImg1() {
  const img1 = document.querySelector(".img-1");
  const imgPicture = document.querySelector(".img-picture1");
  const checkitem = document.querySelector(".item-1");
 
  let styleBoder = document.querySelector(".img-1").style.boxShadow;
  if (styleBoder == "none" || styleBoder == "") {
     imgPicture.style.display = "none";
     checkitem.style.display = "block";
    img1.style.borderRadius = "10px";
    img1.style.boxShadow = "0 0 5px gray";
  } else {
    imgPicture.style.display = "block";
    checkitem.style.display = "none";
    img1.style.boxShadow = "none";
  }
}
function clickImg2() {
  const img2 = document.querySelector(".img-2");
  const imgPicture = document.querySelector(".img-picture2");
  const checkitem = document.querySelector(".item-2");
 
  let styleBoder = document.querySelector(".img-2").style.boxShadow;
  if (styleBoder == "none" || styleBoder == "") {
     imgPicture.style.display = "none";
     checkitem.style.display = "block";
    img2.style.borderRadius = "10px";
    img2.style.boxShadow = "0 0 5px gray";
  } else {
    imgPicture.style.display = "block";
    checkitem.style.display = "none";
    img2.style.boxShadow = "none";
  }
}
function clickImg3() {
  const img3 = document.querySelector(".img-3");
  const imgPicture = document.querySelector(".img-picture3");
  const checkitem = document.querySelector(".item-3");
 
  let styleBoder = document.querySelector(".img-3").style.boxShadow;
  if (styleBoder == "none" || styleBoder == "") {
     imgPicture.style.display = "none";
     checkitem.style.display = "block";
    img3.style.borderRadius = "10px";
    img3.style.boxShadow = "0 0 5px gray";
  } else {
    imgPicture.style.display = "block";
    checkitem.style.display = "none";
    img3.style.boxShadow = "none";
  }
}
function clickImg4() {
  const img4 = document.querySelector(".img-4");
  const imgPicture = document.querySelector(".img-picture4");
  const checkitem = document.querySelector(".item-4");
 
  let styleBoder = document.querySelector(".img-4").style.boxShadow;
  if (styleBoder == "none" || styleBoder == "") {
     imgPicture.style.display = "none";
     checkitem.style.display = "block";
    img4.style.borderRadius = "10px";
    img4.style.boxShadow = "0 0 5px gray";
  } else {
    imgPicture.style.display = "block";
    checkitem.style.display = "none";
    img4.style.boxShadow = "none";
  }
}
export default Content;
