import React, { useEffect } from 'react'
import SignIn from '../components/SignIn'
import BottomNavigation from '../components/BottomNavigation'
import { useNavigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../services/api'
import SignUp from '../components/SignUp'
import ConfirmRegisterCode from '../components/ConfirmRegisterCode'
import HeaderSignIn from '../components/HeaderSignIn'
import ConfirmRegistAccount from '../components/ConfirmRegistAccount'
const ConfirmRegistAccountPage = () => {
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
        className={`min-h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}>      
         <HeaderSignIn title={"Confirm Code"} />
        <ConfirmRegistAccount />
        <BottomNavigation selected={"account"} />
      </div>
    )
}

export default ConfirmRegistAccountPage