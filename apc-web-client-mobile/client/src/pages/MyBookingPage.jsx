import React, { useEffect } from 'react'
import HeaderSignIn from '../components/HeaderSignIn'
import SignIn from '../components/SignIn'
import BottomNavigation from '../components/BottomNavigation'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../services/api'
import MyBooking from '../components/MyBooking'

const MyBookingPage = () => {


    const navigate = useNavigate();

    //   useEffect(() => {
    //       const checkAuthentication = async () => {
    //         const authenticated = await isAuthenticated();
    //         console.log("authenticated", authenticated);
    //         if (authenticated) {
    //            navigate('/profile-page');
    //         } else {
    //         }
    //       };
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //       checkAuthentication();
    //     }, []);
    return (
        <div
            className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}>      
            <MyBooking />
            <BottomNavigation selected={"booking"} />
        </div>
    )
}

export default MyBookingPage