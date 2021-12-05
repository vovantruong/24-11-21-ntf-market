import React from "react"
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FollowersPage from "./ProfileFollowers/FollowersPage";

export default function ProfileFollowers() {
  return (
    <div id="profile">
      <Header />
      <FollowersPage />
      <Footer />
    </div>
  )
}

