import React from 'react'
import HeaderProfile from '../components/HeaderProfile'
import Profile from '../components/Profile'
import BottomNavigation from '../components/BottomNavigation'

const ProfilePage = () => {
    return (
        <div
            className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}

        >      <HeaderProfile />
            <Profile />
            <BottomNavigation selected={"account"} />
        </div>
    )
}

export default ProfilePage