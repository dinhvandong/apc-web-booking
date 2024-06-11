import React, { useEffect } from 'react'
import HeaderSignIn from '../components/HeaderSignIn'
import SignIn from '../components/SignIn'
import BottomNavigation from '../components/BottomNavigation'
import { useNavigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../services/api'
import MyBooking from '../components/MyBooking'
import MyBooking3 from '../components/MyBooking3'
import HeaderBooking from '../components/HeaderBooking'
import { FaArrowLeft } from 'react-icons/fa'

const MyBooking3Page = () => {

    const { bookingCode } = useParams();

    const navigate = useNavigate();

    const handleBackClick = () => {
        // Add your logic here for handling the back button click
        console.log("Back button clicked");
        navigate(`/my-booking2/${bookingCode}`)

      };

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

            {/* <HeaderBooking /> */}

            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white">
                <button className="mr-5 " onClick={handleBackClick}>
                    {/* Add your back icon here */}
                    <FaArrowLeft className='text-red-600' />
                </button>
                <h1 className="text-xl font-bold">My Booking</h1>
                <div className="mr-4"></div> {/* Add any other elements on the right side */}
            </header>

            <MyBooking3 bookingCode={bookingCode} />
            <BottomNavigation selected={"booking"} />
        </div>
    )
}

export default MyBooking3Page