import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginRequest, registerRequest } from '../services/api';
import iconHide from '../assets/icon_hide_password.png';
import iconShow from '../assets/icon_hide_password.png';
import HeaderSignIn from '../components/HeaderSignIn';
import { AuthContext } from '../AuthProvider';
import HeaderContactConfirmation from '../components/HeaderContactConfirmation';
import { createBooking } from '../services/api_booking';

const ContactPage = () => {
    const [countryList, setCountryList] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const [gender, setGender] = useState('Mr');
    const genderList = ['Mr', 'Ms'];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [selectedCountry, setSelectedCountry] = useState({
        "NAME": "Vietnam",
        "CODE": "84",
        "ISO": "VN / VNM",
        "CODES": "89,571,130",
        "POPULATION": "329,560",
        "AREA": "170 Billion",
        "IMG": "https://flagsapi.com/VN/shiny/64.png"
    });

    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

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

    const handlePhoneChange = (e) => {
        console.log("phone:", phone)
        setPhone(e.target.value);
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const { bookingInfo } = useContext(AuthContext);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const [cruiseType, setCruiseType] = useState('Day Cruise');

    useEffect(() => {
        console.log("Booking Type:", bookingInfo)

        setCruiseType(bookingInfo.typeBooking);

        async function fetchData() {
            try {
                //const response = await fetch('country.csv'); // Replace with the actual path to your CSV file
                //const csvData = await response.text();
                //console.log("csvData:", csvData);
                //const json = await parseCSVtoJSON(csvData);
                setCountryList(jsonDataCountries);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);
    const handleSubmit_FIX = async (e) => {
        e.preventDefault();
        // console.log("username:", username);
        // console.log("password:", password);
        // const result = await loginRequest(username, password);
        // if(result.success===200){
        //   const token = result.data.message;
        //   const user = result.data
        //   login(token, user);
        //   navigate('/admin');

        // }else {
        //   console.log("resultLogin:", result);
        // }
        navigate('/profile-page');
        setEmail('');
        setPassword('');
    };
    const handleSubmit = async () => {

       // e.preventDefault();
        console.log("email:", email);
        console.log("password:", password);
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
        console.log("gender:", gender);
        console.log("country:", country);

        /*
        {
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "title": "Mr",
    "firstName": "John",
    "lastName": "Doe",
    "cruiseType": "Caribbean",
    "flexibleOrNonRefund": true,
    "price": 1500.0,
    "status": 1,
    "createdDate": 20240520
}
        
        */
        const bookingDataJson =  {
            "email": email,
            "phone": phone,
            "title": gender,
            "firstName": firstName,
            "lastName": lastName,
            "cruiseType": "Cruise Day",
            "flexibleOrNonRefund": true,
            "price": 1500,
            "status": 1,
            "createdDate": 20240520
        }

        //firstName, lastName, phone, 
        //country, gender,
        //email, password
        //const result = await registerRequest(firstName, lastName, phone,
        const response = await createBooking(bookingDataJson);

       // country, gender, email, password);
        if (response.data.success === 200) {
           // const token = result.data.message;
            //const user = result.data
            //login(token, user);
            // navigate('/registration-success');

        } else {
            // console.log("resultLogin:", result);
        }
        // navigate('/admin');
        setEmail('');
        setPassword('');
    };
    const handleNext = () => {

        handleSubmit();

        if (cruiseType === 'Day Cruise') {
            navigate('/ancillary');
        }
        else {
            navigate('/payment-confirm');
        }
    }
    const handleGenderChange = event => {
        const gender = event.target.value;
        setGender(gender);


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
        // const selected = countryList.find(country => country.CODE === countryCode);
        // setSelectedCountry(selected);
        // setCountry(selected.NAME);
        // console.log("country::::", country);
    };
    return (
        <div className='flex flex-col items-center justify-center w-full'>

            <HeaderContactConfirmation />

            <form className=" px-5  w-full md:w-[600px]   flex flex-col mt-[100px] md:ml-5 md:mr-5  rounded">
                <div className='flex mt-2 mb-2'>

                    <div className='flex flex-col w-full'>

                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">Title*</label>


                        <select onChange={handleGenderChange} value={gender} id="country" name="country" className="w-auto px-2 py-2 ml-1 mr-1 border border-gray-300 rounded">
                            {genderList.map((gender, index) => (
                                <option key={index} value={gender}>{gender}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex mt-2 mb-2">

                    <div className='w-[50%] flex flex-col'>
                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">First Name*</label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full px-3 py-1 border border-gray-300 rounded"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div className='w-[50%] ml-2 flex flex-col'>

                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">Last Name*</label>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full px-3 py-1 border border-gray-300 rounded"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                </div>

                <div className="mt-1 mb-4">


                    <div className='w-[100%] flex flex-col'>
                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">Nationality*</label>
                        <select
                            value={selectedCountry ? selectedCountry.NAME : ''}
                            onChange={handleCountryChange}
                            className="w-auto px-2 py-2 ml-1 mr-1 border border-gray-300 rounded"
                        >
                            <option value="">Select Country</option>
                            {countryList.map(country => (
                                <option key={country.CODE} value={country.NAME}>
                                    {country.NAME}
                                </option>
                            ))}
                        </select>
                    </div>



                </div>



                <div className="mt-1 mb-4">
                    <label htmlFor="username" className="text-[14px] block mb-2 text-black">Email</label>
                    <input
                        type="text"
                        id="email"
                        className="w-full px-3 py-1 border border-gray-300 rounded"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <label htmlFor="username" className="text-[14px] block mb-2 text-black">Phone Number</label>

                <div className="flex items-center w-full">
                    <div className="flex items-center w-1/3">
                        {/* Country Flag Icon */}
                        {selectedCountry && (
                            <img src={selectedCountry.IMG} alt="Country Flag" className="w-[35px] h-[35px] mr-2" />
                        )}
                        {/* Country Code Dropdown */}
                        <select
                            value={selectedCountry ? selectedCountry.CODE : ''}
                            onChange={handleCountryChange}
                            className="w-full px-2 py-2 ml-1 mr-1 border border-gray-300 rounded "
                        >
                            <option value="">Select Country</option>
                            {countryList.map(country => (
                                <option key={country.CODE} value={country.CODE}>
                                    +{country.CODE}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Phone Number Input */}
                    <input value={phone} onChange={handlePhoneChange} type="tel" placeholder="Phone Number" className="w-2/3 px-4 py-2 ml-2 border border-gray-300 rounded" />
                </div>


                {/* <div className="flex items-center mt-2">

          <label htmlFor="myCheckbox" className="ml-2 underline italic text-[#B77855]">
            Forgot password
          </label>
        </div> */}

                <div onClick={handleNext} className="flex items-center justify-center py-4 mt-5 mb-4 font-bold text-white rounded bg-brown_color">

                    <p>Next</p>
                </div>
            </form>




        </div>
    )
}

export default ContactPage