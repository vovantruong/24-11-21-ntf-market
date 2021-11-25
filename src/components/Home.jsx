import React from "react"
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header"
import CreatorNetwork from './Home/CreatorNetwork'
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return(
    <div id="home">
      <Header />
     <CreatorNetwork />
      <Footer />
    </div>
  )
}

export default Home

