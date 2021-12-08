import React from "react"
import Footer from "./Header_Footer/Footer";
import Header from "./Header_Footer/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./Profile/ProfilePage";

function Profile() {
  return (
    <div id="profile">
      <Header />
      <ProfilePage />
      <Footer />
    </div>
  )
}

export default Profile