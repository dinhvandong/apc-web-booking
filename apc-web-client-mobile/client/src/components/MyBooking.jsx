import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bg_signin from '../assets/bg_signin.png'
import { loginRequest } from '../services/api';
import iconWarning from '../assets/icon-warning.png';
import { getBookingByCode } from '../services/api_booking';
import { AuthContext } from '../AuthProvider';

const MyBooking = () => {
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

  const gotoForgotPassword=()=>{
    navigate('/forgot-password1');

  }
  const gotoSignUp =()=>{

    navigate('/sign-up');

  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("bookingCode:", bookingCode);
    console.log("lastName:", lastName);

    const result = await getBookingByCode(bookingCode);
    if(result.success === 200){
      updateBookingSearch(result.data)
      navigate('/booking-search/' + bookingCode);
    }else {
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
    <div className='flex flex-col items-center justify-center w-full h-full' style={{
      backgroundImage: `url(${bg_signin})`, backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='text-xl mt-[100px] text-center font-bold text-white'>
        <h1>
          My Booking
        </h1>
      </div>

   
      <form className=" px-5 h-full w-full md:w-[600px]   flex flex-col mt-5 md:ml-5 md:mr-5  rounded">
        <div className="mt-4 mb-4">
          <label htmlFor="username" className="text-[14px] block mb-2 text-white">Booking Code</label>
          <input
            type="text"
            id="bookingCode"
            className="w-full px-3 py-3 border rounded-md"
            value={bookingCode}
            onChange={handleBookingCodeChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 text-white text-[14px]">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full px-3 py-3 border rounded-md"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>

        <div className='flex mb-4 text-white'>

            <img src={iconWarning} className='w-[32px] h-[38px]'/>

        <p className='ml-4'>
        Please enter your booking code and your last name to retrieve your booking
        </p>
        </div>

       
        <button
          type="submit"
          className="bg-[#B77855] text-white py-3 px-4 mt-5 rounded hover:bg-[#B77855]"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default MyBooking