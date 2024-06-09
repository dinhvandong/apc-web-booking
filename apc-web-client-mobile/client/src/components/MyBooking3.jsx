import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bg_signin from '../assets/bg_signin.png'
import { loginRequest } from '../services/api';
import iconWarning from '../assets/icon-warning.png';
import { getBookingByCode, getBookingByCodeAndLastName } from '../services/api_booking';
import { AuthContext } from '../AuthProvider';
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { DatePicker } from 'antd';

const MyBooking3 = (props) => {
  const { updateBookingSearch } = useContext(AuthContext);
  const { bookingCode } = props;

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [country, setCountry] = useState('');
  //const [bookingCode, setBookingCode] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState('Mr');
  const genderList = ['Mr', 'Ms'];
  const handleGenderChange = event => {
    const gender = event.target.value;
    setGender(gender);


  }
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    "NAME": "Vietnam",
    "CODE": "84",
    "ISO": "VN / VNM",
    "CODES": "89,571,130",
    "POPULATION": "329,560",
    "AREA": "170 Billion",
    "IMG": "https://flagsapi.com/VN/shiny/64.png"
  });

  const jsonDataCountries = [
    {
      "NAME": "Vietnam",
      "CODE": "84",
      "ISO": "VN / VNM",
      "CODES": "89,571,130",
      "POPULATION": "329,560",
      "AREA": "170 Billion",
      "IMG": "https://flagsapi.com/VN/shiny/64.png"
    },
    {
      "NAME": "Afghanistan",
      "CODE": "93",
      "ISO": "AF / AFG",
      "CODES": "29,121,286",
      "POPULATION": "647,500",
      "AREA": "20.65 Billion",
      "IMG": "https://flagsapi.com/AF/shiny/64.png"
    },
    {
      "NAME": "Albania",
      "CODE": "355",
      "ISO": "AL / ALB",
      "CODES": "2,986,952",
      "POPULATION": "28,748",
      "AREA": "12.8 Billion",
      "IMG": "https://flagsapi.com/AL/shiny/64.png"
    },
    {
      "NAME": "Algeria",
      "CODE": "213",
      "ISO": "DZ / DZA",
      "CODES": "34,586,184",
      "POPULATION": "2,381,740",
      "AREA": "215.7 Billion",
      "IMG": "https://flagsapi.com/DZ/shiny/64.png"
    },
    {
      "NAME": "American Samoa",
      "CODE": "1-684",
      "ISO": "AS / ASM",
      "CODES": "57,881",
      "POPULATION": "199",
      "AREA": "462.2 Million",
      "IMG": "https://flagsapi.com/AS/shiny/64.png"
    },
    {
      "NAME": "Andorra",
      "CODE": "376",
      "ISO": "AD / AND",
      "CODES": "84,000",
      "POPULATION": "468",
      "AREA": "4.8 Billion",
      "IMG": "https://flagsapi.com/AD/shiny/64.png"
    },
    {
      "NAME": "Angola",
      "CODE": "244",
      "ISO": "AO / AGO",
      "CODES": "13,068,161",
      "POPULATION": "1,246,700",
      "AREA": "124 Billion",
      "IMG": "https://flagsapi.com/AO/shiny/64.png"
    },
    {
      "NAME": "Anguilla",
      "CODE": "1-264",
      "ISO": "AI / AIA",
      "CODES": "13,254",
      "POPULATION": "102",
      "AREA": "175.4 Million",
      "IMG": "https://flagsapi.com/AI/shiny/64.png"
    },
    {
      "NAME": "Antarctica",
      "CODE": "672",
      "ISO": "AQ / ATA",
      "CODES": "0",
      "POPULATION": "14,000,000",
      "AREA": null,
      "IMG": "https://flagsapi.com/AQ/shiny/64.png"
    },
    {
      "NAME": "Antigua and Barbuda",
      "CODE": "1-268",
      "ISO": "AG / ATG",
      "CODES": "86,754",
      "POPULATION": "443",
      "AREA": "1.22 Billion",
      "IMG": "https://flagsapi.com/AG/shiny/64.png"
    },
    {
      "NAME": "Argentina",
      "CODE": "54",
      "ISO": "AR / ARG",
      "CODES": "41,343,201",
      "POPULATION": "2,766,890",
      "AREA": "484.6 Billion",
      "IMG": "https://flagsapi.com/AR/shiny/64.png"
    },
    {
      "NAME": "Armenia",
      "CODE": "374",
      "ISO": "AM / ARM",
      "CODES": "2,968,000",
      "POPULATION": "29,800",
      "AREA": "10.44 Billion",
      "IMG": "https://flagsapi.com/AM/shiny/64.png"
    },
    {
      "NAME": "Aruba",
      "CODE": "297",
      "ISO": "AW / ABW",
      "CODES": "71,566",
      "POPULATION": "193",
      "AREA": "2.516 Billion",
      "IMG": "https://flagsapi.com/AW/shiny/64.png"
    }
  ];

  // const { login } = useContext(AuthContext);
  // const [userInfo, setUserInfo] = useState({});
  // const [isLogin, setIsLogin] = useState(false);



  const handleBookingCodeChange = (e) => {
    //setBookingCode(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const gotoForgotPassword = () => {
    navigate('/forgot-password1');

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

    //setBookingCode('');
    setLastName('');
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCreatePassenger = () => {


    
  }

  const handleCountryChange = event => {
    const countryCode = event.target.value;
    console.log("countryCode::", countryCode);

    for (var item in countryList) {

      if (item.CODE === countryCode) {
        setCountry(item.NAME);
        setSelectedCountry(item);

      }
    }
  };

  useEffect(() => {
    async function fetchData() {
        try {
            setCountryList(jsonDataCountries);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    fetchData();
}, []);
  return (
    <div className='mb-[100px] flex flex-col px-5 md:w-[600px] items-center w-full flex-1 overflow-y-auto'>
      {/* <div className='text-xl mt-[100px] text-center font-bold text-white'>
        <h1>
          My Booking
        </h1>
      </div> */}

      <div className='flex flex-col text-gray-600 justify-center mt-[100px]'>
        <p className='text-center'>Booking Code: {bookingCode}</p>

      </div>

      <div className='mt-5 font-bold text-black text-[22px]'>
        <p className='text-center'>Passenger Information</p>
      </div>

      <div>
        <p className='mt-2 text-center text-gray-600'>Complete your passenger information below</p>
      </div>
      <div>
        <p className='mt-2 italic text-center text-gray-600'>*Please use English character only</p>
      </div>
      <div className='w-full mt-5 font-bold text-brown_color'>
        <p>Passenger 1</p>
      </div>
      <div className='flex flex-row w-full mt-5'>
        <div className='flex flex-col w-1/3'>
          <p>Title*</p>

          {/* <input className='w-full px-4 py-2 border border-1 ' /> */}
          <select onChange={handleGenderChange} value={gender} id="country" name="country" className="w-full px-4 py-2 border rounded border-1">
            {genderList.map((gender, index) => (
              <option key={index} value={gender}>{gender}</option>
            ))}
          </select>

        </div>

        <div className='flex flex-col w-1/3 ml-2'>
          <p>FirstName</p>
          <input className='w-full px-4 py-2 border border-1' />

        </div>
        <div className='flex flex-col w-1/3 ml-2'>
          <p>LastName</p>
          <input className='w-full px-4 py-2 border border-1' />

        </div>

      </div>

      <div className='w-full mt-5'>
        <p>Date of Birth*</p>
      </div>
      <div className="relative w-full">
        <DatePicker
          className="w-full px-3 py-2 border border-gray-300 rounded border-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
        />
      </div>

      <div className='flex flex-row w-full mt-5'>
        <div className='flex flex-col w-1/2'>
          <p>ID/ Passport*</p>

          <input className='w-full px-4 py-2 border border-1 ' />

        </div>

        <div className='flex flex-col w-1/2 ml-2'>
          <p>Number*</p>

          <input className='w-full px-4 py-2 border border-1' />

        </div>
      </div>

      <div className='flex flex-row w-full mt-5'>
        <div className='flex flex-col w-1/2'>
          <p>Nationality*</p>

          {/* <input className='w-full px-4 py-2 border border-1' /> */}

          <select
            value={selectedCountry ? selectedCountry.NAME : ''}
            onChange={handleCountryChange}
            className="w-full px-4 py-2 border rounded border-1"
          >
            <option value="">Select Country</option>
            {countryList.map(country => (
              <option key={country.CODE} value={country.NAME}>
                {country.NAME}
              </option>
            ))}
          </select>

        </div>

        <div className='flex flex-col w-1/2 ml-2'>
          <p>Province</p>

          <input className='w-full px-4 py-2 border border-1' />

        </div>
      </div>

      <div className='flex flex-col w-full mt-5'>
        <p>Special Dietary Request</p>
        <input className='w-full px-3 py-2 border border-1' />
      </div>

      <div className='flex flex-col w-full mt-5'>

        <button onClick={handleCreatePassenger} className='w-full py-2 font-bold text-white rounded-md bg-brown_color'> Save </button>
        <button className='w-full py-2 mt-5 font-bold text-white rounded-md bg-brown_color'> Add New</button>
      </div>
    </div>
  )
}

export default MyBooking3