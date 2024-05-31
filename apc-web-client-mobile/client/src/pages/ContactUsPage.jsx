
import React, { useEffect } from 'react'
import HeaderSignIn from '../components/HeaderSignIn'
import SignIn from '../components/SignIn'
import BottomNavigation from '../components/BottomNavigation'
import { useNavigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../services/api'
import MyBookingSearch from '../components/MyBookingSearch'
import HeaderContactUs from '../components/HeaderContactUs'
import Contact from '../components/Contact'

const ContactUsPage = () => {

    const { bookingCode } = useParams();
    console.log("bookingCode", bookingCode);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const checkAuthentication = async () => {
    //         const authenticated = await isAuthenticated();
    //         console.log("authenticated", authenticated);
    //         if (authenticated) {
    //             navigate('/profile-page');
    //         } else {
    //         }
    //     };
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     checkAuthentication();
    // }, []);
    return (
        <div
            className={`h-screen  bg-cover bg-center flex flex-col  transition-opacity duration-500`}

        >      <HeaderContactUs title={"Contact Us"} />
            <Contact bookingCode = {bookingCode} />
            <BottomNavigation selected={"booking"} />
        </div>
    )
}


export default ContactUsPage

