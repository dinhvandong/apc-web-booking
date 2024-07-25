import React from 'react'

import Gallery from '../components/Gallery'
import BottomNavigation from '../components/BottomNavigation'
import HeaderGallery from '../components/HeaderGallery'
import Notification from '../components/Notification'
import HeaderNotification from '../components/HeaderNotification'
import HeaderNotificationDetail from '../components/HeaderNotificationDetail'
import NotificationItem from '../components/NotificationItem'
import NotificationItemDetail from '../components/NotificationItemDetail'

const NotificationDetailPage = () => {

  const { id } = useParams();

  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}>    
       <HeaderNotificationDetail title={"Notification"} />
       <NotificationItemDetail id = {id}/>
      {/* <Gallery /> */}
      <BottomNavigation selected={"home"} />
    </div>
  )
}

export default NotificationDetailPage