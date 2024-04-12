import React from 'react'
import HeaderSignIn from '../components/HeaderSignIn'
import SignIn from '../components/SignIn'
import BottomNavigation from '../components/BottomNavigation'

const SignInPage = () => {
  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}

    >      <HeaderSignIn />
      <SignIn />
      <BottomNavigation selected={"account"} />
    </div>
  )
}

export default SignInPage