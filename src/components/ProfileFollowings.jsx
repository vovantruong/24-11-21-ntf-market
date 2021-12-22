import React from "react"
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FollowingsPage from "../.././src/components/ProfileFollowings/FollowingsPage";

export default function Followings() {
  return (
    <div id="profile">
      <Header />
      <FollowingsPage />
      <Footer />
    </div>
  )
}

