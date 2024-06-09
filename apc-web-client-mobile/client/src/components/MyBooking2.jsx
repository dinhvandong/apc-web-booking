import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bg_signin from '../assets/bg_signin.png'
import { loginRequest } from '../services/api';
import iconWarning from '../assets/icon-warning.png';
import { getBookingByCode, getBookingByCodeAndLastName } from '../services/api_booking';
import { AuthContext } from '../AuthProvider';
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";

const MyBooking2 = () => {
  const { updateBookingSearch } = useContext(AuthContext);

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // const { login } = useContext(AuthContext);
  // const [userInfo, setUserInfo] = useState({});
  // const [isLogin, setIsLogin] = useState(false);

  const [bookingCode, setBookingCode] = useState('');
  const [lastName, setLastName] = useState('');

  const handleBookingCodeChange = (e) => {
    setBookingCode(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const gotoForgotPassword = () => {
    navigate('/forgot-password1');

  }

  const gotoInsertPassenger = () =>{
    navigate('/my-booking3');
  }
  const gotoSignUp = () => {

    navigate('/sign-up');

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("bookingCode:", bookingCode);
    console.log("lastName:", lastName);

    const result = await getBookingByCodeAndLastName(bookingCode, lastName);
    if (result.success === 200) {
      updateBookingSearch(result.data)
      navigate('/booking-search/' + bookingCode);
    } else {
      window.alert('Cannot found BookingCode');

    }

    // const result = await loginRequest(email, password);
    // if(result.success===200){
    //   const token = result.data.message;
    //   const user = result.data
    //   //login(token, user);
    //   navigate('/profile-page');

    // }else {
    //   console.log("resultLogin:", result);
    // }
    // navigate('/admin');
    setBookingCode('');
    setLastName('');
  };



  useEffect(() => {
    // const checkAuthentication = async () => {
    //   const authenticated = await isAuthenticated();
    //   if (authenticated) {
    //      navigate('/admin');
    //   } else {
    //   }
    // };
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // checkAuthentication();
  }, []);
  return (
    <div className='flex flex-col px-5 md:w-[600px] items-center w-full h-full'>
      {/* <div className='text-xl mt-[100px] text-center font-bold text-white'>
        <h1>
          My Booking
        </h1>
      </div> */}

      <div className='flex flex-col text-gray-600 justify-center mt-[100px]'>
        <p className='text-center'>Booking Code: APC1DV</p>

      </div>

      <div className='mt-5 font-bold text-black text-[22px]'>
        <p className='text-center'>Passenger Information</p>
      </div>

      <div>
        <p className='mt-2 text-center text-gray-600'>Complete your passenger information by selecting the option below</p>
      </div>

      <div className='w-full mt-5'>
        <button onClick={gotoInsertPassenger} className='flex w-full px-4 py-2 rounded-md bg-brown_color'>

          <FaRegUser className='w-5 h-5 text-white' />
          <p className='px-5 font-bold text-white'>
            {"Type Your Passenger Information"}

          </p>
        </button>
      </div>

      <div className='w-full mt-5'>
        <button className='flex w-full px-4 py-2 rounded-md bg-brown_color'>

          <HiOutlineUserGroup className='w-5 h-5 text-white' />
          <p className='px-5 font-bold text-white'>
            {"Use Excel file"}
          </p>
        </button>
      </div>



    </div>
  )
}

export default MyBooking2