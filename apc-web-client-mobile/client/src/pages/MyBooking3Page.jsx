import React, { useEffect } from 'react'
import HeaderSignIn from '../components/HeaderSignIn'
import SignIn from '../components/SignIn'
import BottomNavigation from '../components/BottomNavigation'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../services/api'
import MyBooking from '../components/MyBooking'
import MyBooking3 from '../components/MyBooking3'
import HeaderBooking from '../components/HeaderBooking'

const MyBooking3Page = () => {


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
        <div className='flex flex-col items-center justify-center'>

            <HeaderBooking />

            <MyBooking3 />
            <BottomNavigation selected={"booking"} />
        </div>
    )
}

export default MyBooking3Page