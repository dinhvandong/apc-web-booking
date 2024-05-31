import React from 'react'

import Gallery from '../components/Gallery'
import BottomNavigation from '../components/BottomNavigation'
import HeaderGallery from '../components/HeaderGallery'

const GalleryPage = () => {
  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}>    
       <HeaderGallery title={"Gallery"} />
      <Gallery />
      <BottomNavigation selected={"home"} />
    </div>
  )
}

export default GalleryPage