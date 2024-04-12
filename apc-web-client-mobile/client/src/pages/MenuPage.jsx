import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import BottomNavigation from '../components/BottomNavigation'
import backgroundImage from '../assets/background-menu.png';

const MenuPage = () => {
  return (
    <div
    className="h-screen bg-cover bg-center flex flex-col  items-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <Header />
    <Menu/>

    <BottomNavigation selected = {"menu"} />
  </div>
  )
}

export default MenuPage