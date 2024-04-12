import React from 'react'
import bg5 from '../assets/bg.png'
import PlanCruise from '../components/PlanCruise'
import BottomNavigation from '../components/BottomNavigation'
import Header from '../components/Header'

const PlanCruisePage = () => {
  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}
      style={{ backgroundImage: `url(${bg5})` }}
    >
      <Header />
      <PlanCruise />
      <BottomNavigation selected={"plan"} />
    </div>
  )
}

export default PlanCruisePage