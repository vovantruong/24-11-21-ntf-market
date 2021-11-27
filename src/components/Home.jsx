import React from "react";
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import CreatorNetwork from "./Home/CreatorNetwork";
import Seller from "./Home/Seller";
import Crypter from "./Home/Crypter";

import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Home.css'

function Home() {
  return (
    <div id="home">
      <Header />
      <CreatorNetwork />
      <Seller/>
      <Crypter />
      <Footer />
    </div>
  );
}

export default Home;
