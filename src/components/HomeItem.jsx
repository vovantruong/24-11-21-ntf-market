import React from "react";
import Footer from "./Header_Footer/Footer";
import HeaderItem from "./Header_Footer/HeaderItem";
import CreatorNetwork from "./Home/CreatorNetwork";
import Seller from "./Home/Seller";
import Crypter from "./Home/Crypter";
import HotCollections from './Home/HotCollections';
import HotBid from "./Home/HotBid";
import HomeDiscover from "./Home/HomeDiscover";

import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Home.css'

function HomeItem() {
  return (
    <div id="homeItem">
      <HeaderItem/>
      <CreatorNetwork />
      <Seller/>
      <HotBid />
      <HotCollections />
      <HomeDiscover />
      <Crypter />
      <Footer />
    </div>
  )
}

export default HomeItem

