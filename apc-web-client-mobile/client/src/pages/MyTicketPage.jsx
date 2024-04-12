import React from 'react'
import BottomNavigation from '../components/BottomNavigation'
import Header from '../components/Header'
import backgroundImage from '../assets/background1.png';
import MyTicket from '../components/MyTicket'

const MyTicketPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col  items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <MyTicket/>

      <BottomNavigation selected = {"booking"} />
    </div>
  )
}

export default MyTicketPage