import React from 'react'
import Header from './Header_Footer/Header'
import UploadItem from './ContentUploadItem/UploadItem'
import Footer from './Header_Footer/Footer'


function Home() {
  return (
    <div id="home">
      <Header />,
      <UploadItem />,
      <Footer />
    </div>
  )
}

export default Home

