import React from "react"
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Content_ViewItem from "./ViewItem/Content_ViewItem";

function ViewItem() {
  return (
    <>
      <Header />
      <Content_ViewItem  />
      <Footer />
    </>
  )
}

export default ViewItem