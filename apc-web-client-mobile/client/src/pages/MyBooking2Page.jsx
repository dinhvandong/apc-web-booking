import React, { useEffect } from 'react'
import HeaderSignIn from '../components/HeaderSignIn'
import SignIn from '../components/SignIn'
import BottomNavigation from '../components/BottomNavigation'
import { useNavigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../services/api'
import MyBooking from '../components/MyBooking'
import MyBooking2 from '../components/MyBooking2'
import HeaderProfile from '../components/HeaderProfile'
import HeaderBooking from '../components/HeaderBooking'

const MyBooking2Page = () => {
    const { bookingCode } = useParams();


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
            className={`h-screen  bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}

        >     
         {/* <HeaderSignIn title={"My Booking"} /> */}
         <HeaderBooking/>

            <MyBooking2 bookingCode={bookingCode} />
            <BottomNavigation selected={"booking"} />
        </div>
    )
}

export default MyBooking2Page