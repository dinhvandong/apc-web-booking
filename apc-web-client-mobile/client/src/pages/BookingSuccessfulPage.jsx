
import React, { useContext, useEffect, useState } from 'react'
import HeaderSelectCabin from '../components/HeaderSelectCabin'
// import SelectCabin from '../components/SelectCabin'
import EventItem from '../components/EventItem'
import { useNavigate } from 'react-router-dom'
import ic_checkbox from '../assets/ic_checkbox.png';
import ic_charge from '../assets/ic_charge.png';
import ic_notpermit from '../assets/ic_notpermit.png';
import { AuthContext } from '../AuthProvider';
import RoomItem from '../components/RoomItem';
import bg_payment from '../assets/bg-payment.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import ic_success from '../assets/ic_success.png';
import ic_copy from '../assets/copy.png';
import HeaderBookingSuccess from '../components/HeaderBookingSuccess';

const BookingSuccessfulPage = () => {
    const navigate = useNavigate();
    const { bookingInfo } = useContext(AuthContext);
    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [cruiseType, setCruiseType] = useState('Day Cruise');
    const gotoContactInfor = () => {
        if (cruiseType === 'Day Cruise') {
            navigate('/contact');
        }
        else {
            navigate('/contact');
        }
    }

    const bookingCode = bookingInfo.bookingCode;

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
    return (
        <div className='flex flex-col bg-[#bbbbbf] items-center justify-center w-full mb-[100px] h-auto'>
            <HeaderBookingSuccess />
            <div className=' px-5 w-full items-center justify-center md:w-[600px] flex flex-col mb-[10px] h-screen'>

                <img src={ic_success} className='mt-5 w-[150px] h-[150px]' />
                <p className='mt-5 ml-5 mr-5 text-center text-black'>
                    Payment has been successful.Look forward to welcoming you onboard Ambassador Cruise!
                </p>
                <div className='bg-[#2F4842] ml-5 px-5 mr-5 rounded-lg flex flex-col  py-5 w-full  h-auto'>

                    <p className='text-white'>BOOKING CODE</p>
                    <div className='flex items-center justify-between p-5 mt-5 ml-5 mr-5 bg-white rounded-lg'>

                        <p className='font-bold text-[30px]'>{bookingCode}</p>
                        <img src={ic_copy} className='w-5 h-5'/>

                    </div>


                </div>
                <p className='mt-5 font-bold text-center text-brown_color'>View Your Booking</p>

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