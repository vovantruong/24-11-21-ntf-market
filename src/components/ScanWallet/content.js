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
              <Nav.Link href="/">
                <i class="fas fa-arrow-left"></i> Back to home
            </Nav.Link>
              </div>
              <div class="title-header">Connect Wallect</div>
            </div>
            <hr width="100%" align="center" />
          </div>
          <div class="main">
            <div onClick={clickImg1} class="img-title-select img-1">        
            <Image
                  src={purple}
                  class="img-picture"
                  width="65px"
                  height="65px"
                />
                <span>Coinbase Wallet</span>
              
            </div>
            <div onClick={clickImg2} class="img-title-select img-2">
            <Image
                  src={blue}
                  class="img-picture"
                  width="65px"
                  height="65px"
                />
                <span>Coinbase Wallet</span>
            </div>
            <div onClick={clickImg3} class="img-title-select img-3">
            <Image
                  src={green}
                  class="img-picture"
                  width="65px"
                  height="65px"
                />
                <span>Coinbase Wallet</span>
            </div>
            <div onClick={clickImg4} class="img-title-select img-4">
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
            <Nav.Link href="scanwallet01">
               <span> Dont’s have a wallet app?</span>
            </Nav.Link>          
            </div>
          </div>
        {/* </Container> */}
      </connectwallect>
    </div>
  );
}
function clickImg1(){
  const img1 =  document.querySelector('.img-1');
  let styleBoder = document.querySelector('.img-1').style.boxShadow;
  if(styleBoder == "none" || styleBoder == ""){
    img1.style.borderRadius = "10px";
    img1.style.boxShadow = "0 0 5px gray";
  }else{
     img1.style.boxShadow = "none";  
  }
}
function clickImg2(){
  const img2 =  document.querySelector('.img-2');
  let styleBoder = document.querySelector('.img-2').style.boxShadow;
  if(styleBoder == "none" || styleBoder == ""){
    img2.style.borderRadius = "10px";
    img2.style.boxShadow = "0 0 5px gray";
  }else{
     img2.style.boxShadow = "none";  
  }
}
function clickImg3(){
  const img3 =  document.querySelector('.img-3');
  let styleBoder = document.querySelector('.img-3').style.boxShadow;
  if(styleBoder == "none" || styleBoder == ""){
    img3.style.borderRadius = "10px";
    img3.style.boxShadow = "0 0 5px gray";
  }else{
     img3.style.boxShadow = "none";  
  } 
}
function clickImg4(){
  const img4 =  document.querySelector('.img-4');
  let styleBoder = document.querySelector('.img-4').style.boxShadow;
  if(styleBoder == "none" || styleBoder == ""){
    img4.style.borderRadius = "10px";
    img4.style.boxShadow = "0 0 5px gray";
  }else{
     img4.style.boxShadow = "none";  
  }
}
export default Content;
