import React from 'react'
import bg5 from '../assets/bg.png'
import PlanCruise from '../components/PlanCruise'
import BottomNavigation from '../components/BottomNavigation'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const PlanCruisePage = () => {

  const { id } = useParams();

  return (
    <div
      className={`min-h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}
      style={{ backgroundImage: `url(${bg5})` }}
    >
      <Header />
      <PlanCruise id = {id} />
      <BottomNavigation selected={"plan"} />
    </div>
  )
}

export default PlanCruisePage