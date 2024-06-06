import React from 'react'

import Gallery from '../components/Gallery'
import BottomNavigation from '../components/BottomNavigation'
import HeaderGallery from '../components/HeaderGallery'
import Notification from '../components/Notification'
import HeaderNotification from '../components/HeaderNotification'

const NotificationPage = () => {
  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}>    
       <HeaderNotification title={"Notification"} />
       <Notification/>
      {/* <Gallery /> */}
      <BottomNavigation selected={"home"} />
    </div>
  )
}

export default NotificationPage