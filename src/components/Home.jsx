import React from "react";
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import CreatorNetwork from "./Home/CreatorNetwork";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Home.css'
import Seller from "./Home/Seller";

function Home() {
  return (
    <div id="home">
      <Header />
      {/* <CreatorNetwork /> */}
      <Seller/>
      <Footer />
    </div>
  );
}

export default Home;
