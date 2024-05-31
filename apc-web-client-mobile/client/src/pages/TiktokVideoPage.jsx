import React from 'react'

import Gallery from '../components/Gallery'
import HeaderSignIn from '../components/HeaderSignIn'
import BottomNavigation from '../components/BottomNavigation'
import ShortVideoGallery from '../components/ShortVideoGallery'

const TiktokVideoPage = () => {
  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col md:bg-white bg-black items-center transition-opacity duration-500`}>    
       {/* <HeaderSignIn title={"Ambassador Cruise"} /> */}
      <ShortVideoGallery />
      <BottomNavigation selected={"home"} />
    </div>
  )
}

export default TiktokVideoPage