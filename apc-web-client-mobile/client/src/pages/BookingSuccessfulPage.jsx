
import React, { useContext, useEffect, useRef, useState } from 'react'
import HeaderSelectCabin from '../components/HeaderSelectCabin'
// import SelectCabin from '../components/SelectCabin'
import EventItem from '../components/EventItem'
import { useNavigate, useParams } from 'react-router-dom'
import ic_checkbox from '../assets/ic_checkbox.png';
import ic_charge from '../assets/ic_charge.png';
import ic_notpermit from '../assets/ic_notpermit.png';
import { AuthContext } from '../AuthProvider';
import RoomItem from '../components/RoomItem';
import bg_payment from '../assets/bg-payment.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
// import ic_success from '../assets/ic_success.png';
import ic_success from '../assets/mbbank.jpg';

import ic_copy from '../assets/copy.png';
import HeaderBookingSuccess from '../components/HeaderBookingSuccess';
import { getBookingByCode } from '../services/api_booking';

const BookingSuccessfulPage = () => {

    const { bookingCode } = useParams();
    const inputRef = useRef(null);

    const navigate = useNavigate();
    const { bookingInfo } = useContext(AuthContext);
    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [cruiseType, setCruiseType] = useState('Day Cruise');
    const [booking, setBooking] = useState();
    const gotoContactInfor = () => {
        if (cruiseType === 'Day Cruise') {
            navigate('/contact');
        }
        else {
            navigate('/contact');
        }
    }

    const gotoBookingDetail = () => {
        navigate('/booking-search/' + bookingCode);
    }

    // const bookingCode = bookingInfo.bookingCode;
    const handleCopy = () => {

        inputRef.current.select();
        document.execCommand('copy');
        alert('BookingCode copied to clipboard');
        // navigator.clipboard.writeText(bookingCode)
        //     .then(() => {
        //         alert('BookingCode copied to clipboard');
        //     })
        //     .catch((error) => {
        //         alert('Error copying text to clipboard:', error);
        //     });
    };

    useEffect(() => {
        const adult = bookingInfo.adult;
        const children = bookingInfo.children;
        const infant = bookingInfo.infant;
        const price = bookingInfo.price;
        const count = adult + children * 0.75 + infant * 0.5;
        setFinalPrice(count * price);
        setPrice(price);
    }, []);

    const imageSrc = 'https://tse2.mm.bing.net/th?id=OIP.6NLV16bzAw5tAwKdmk8JmgHaE8&pid=Api&P=0&h=220';
    const title = 'Ambassador Deluxe Cabin';
    const description = 'Select your cabin on Ambassador Day Cruise';
    const items = ['Cabin is located on the main deck',
        'Enjoy your private space on board',
        'Relax in style white cruising',
        'Average room size: 30sqm.',
        'Private balcony',
        'En-suite bathroom with standing shower'];
    const getBooking = async () => {
        const result = await getBookingByCode(bookingCode);
        if (result.success === 200) {
            setBooking(result.data);
        }
    }

    useEffect(() => {
        getBooking();
    }, []);

    return (
        <div className='flex flex-col bg-[#bbbbbf] items-center justify-center w-full mb-[100px] h-auto'>
            <HeaderBookingSuccess />
            <div className=' px-5 w-full items-center justify-center md:w-[600px] flex flex-col mb-[10px] h-screen'>

                <img src={ic_success} className='rounded-md mt-5 w-[150px] h-[200px]' />
                <p className='mt-5 ml-5 mr-5 text-center text-black'>
                    Please transfer money to the account number above by scanning the QR code with the message {bookingCode} and the amount is {booking != null && booking.price} k VND
                </p>
                <div className='bg-[#2F4842] ml-5 px-5 mr-5 rounded-lg flex flex-col  py-5 w-full  h-auto'>

                    <p className='text-white'>BOOKING CODE</p>
                    <div className='flex items-center justify-between p-5 mt-5 ml-5 mr-5 bg-white rounded-lg'>
                        <input className='w-full font-bold text-[30px]'
                            ref={inputRef}
                            type="text"
                            value={bookingCode}
                            readOnly
                        // style={{ position: 'absolute', left: '-9999px' }}
                        />
                        {/* <p className='font-bold text-[30px]'>{bookingCode}</p> */}
                        <img onClick={handleCopy} src={ic_copy} className='w-5 h-5' />

                    </div>


                </div>
                <p onClick={gotoBookingDetail} className='mt-5 font-bold text-center hover:cursor-pointer text-brown_color'>View Your Booking</p>

            </div>
            <nav className={`fixed bottom-0 left-0 right-0 z-10  w-full bg-[#bbbbbf] flex justify-around py-4`}>
                <div className='w-full md:w-[600px] m-5 h-[60px] flex flex-row'>
                    <p className='text-black'>
                        Please note that the request for electronic invoice is valid within 72 hours after successful payment. If you require electronic invoice, please access My Booking to register for the e-invoice thereafter.
                    </p>


                </div>
            </nav>
        </div>
    )
}

export default BookingSuccessfulPage