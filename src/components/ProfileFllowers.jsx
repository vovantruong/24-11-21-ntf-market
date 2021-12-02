import React from "react"
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileFollowings from "./Profile/ProfilePage";

function Followers() {
  return (
    <div id="profile">
      <Header />
      <ProfileFollowings />
      <Footer />
    </div>
  )
}

export default Followers