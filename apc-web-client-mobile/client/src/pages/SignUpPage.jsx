import React, { useEffect } from 'react'
import HeaderSignIn from '../components/HeaderSignIn'
import SignIn from '../components/SignIn'
import BottomNavigation from '../components/BottomNavigation'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../services/api'
import SignUp from '../components/SignUp'

const SignUpPage = () => {


  const navigate = useNavigate();

  useEffect(() => {
      const checkAuthentication = async () => {
        const authenticated = await isAuthenticated();
        console.log("authenticated", authenticated);
        if (authenticated) {
           navigate('/home');
        } else {
        }
      };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      checkAuthentication();
    }, []);
  return (
    <div
      className={`min-h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}

    >      
       <HeaderSignIn title={"Sign Up"} />
      <SignUp />
      <BottomNavigation selected={"account"} />
    </div>
  )
}


export default SignUpPage