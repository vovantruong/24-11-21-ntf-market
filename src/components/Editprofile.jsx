import React from "react"
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import Navbaritem from "../components/EditProfile/Navbaritem";

import "bootstrap/dist/css/bootstrap.min.css";

function EditProfile() {
  return(
    <div id="editprofile">
        <Header/>
        <Navbaritem/>
      <Footer />
    </div>
  )
}

export default EditProfile