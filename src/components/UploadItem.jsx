import React from 'react'
import Header from './Header_Footer/Header'
import UploadItem_content from './ContentUploadItem/UploadItem_content'
import Footer from './Header_Footer/Footer'


function UploadItem() {
  return (
    <div id="home">
      <Header />,
      <UploadItem_content />,
      <Footer />
    </div>
  )
}

export default UploadItem

