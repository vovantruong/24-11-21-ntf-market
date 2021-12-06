import React from "react";
import Header from "./Header_Footer/Header";
import Content_CreateItem from "./CreateItem/Content_CreateItem.js";
import Footer from './Header_Footer/Footer'
function CreateItem() {
  return (
    <div>
     <Header/>
     <Content_CreateItem/>
     <Footer/>
    </div>
  );
}

export default CreateItem;
