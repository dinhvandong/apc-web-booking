
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
const PaymentConfirmPage = () => {
    const navigate = useNavigate();
    const { bookingInfo } = useContext(AuthContext);
    const [finalPrice, setFinalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [cruiseType, setCruiseType] = useState('Day Cruise');
    const gotoContactInfor = () => {
        navigate('/booking-success')
        // if (cruiseType === 'Day Cruise') {
        //     navigate('/contact');
        // }
        // else {
        //     navigate('/contact');
        // }
    }
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
            <HeaderSelectCabin />
            <div className=' mt-[100px] w-full md:w-[600px] flex flex-col mb-[100px] h-screen'>

                <div className='w-full flex ml-2 mr-2 items-center rounded-lg bg-[#2F4842] h-[150px]'>

                    <img src={bg_payment} className='w-[150px] h-[120px]' />

                    <div className='flex flex-col text-white'>

                        <p className='font-bold'>Ambassador Dinner Cruise</p>
                        <p>Mon, 04/03/2024</p>
                        <p>2 Adults, 1 children</p>

                    </div>

                </div>

                <div className='flex flex-col w-full h-auto p-2 mt-5 ml-2 mr-5 font-bold text-black bg-white rounded-lg'>

                    <div className='flex justify-between'>

                        <p>Contact Information</p>

                        < MdKeyboardArrowUp className='w-[30px] h-[30px] text-brown_color' />

                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Title</p>
                        <p>Mr</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>FirstName</p>
                        <p>Chunie</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>LastName</p>
                        <p>Nguyen</p>
                    </div>

                    <div className='flex justify-between w-full'>
                        <p>E-mail</p>
                        <p>chunie@gmail.com</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Phone Number</p>
                        <p>+849657312312</p>
                    </div>
                </div>

                <div className='flex flex-col w-full h-auto p-2 mt-5 ml-2 mr-5 font-bold text-black bg-white rounded-lg'>

                    <div className='flex justify-between'>

                        <p>Ancillary</p>

                        < MdKeyboardArrowUp className='w-[30px] h-[30px] text-brown_color' />

                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Shuttle Bus Service</p>
                        <p>02</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Ambassador Deluxe Cabin</p>
                        <p>01</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p>Ambassador Premium Cabin</p>
                        <p>0</p>
                    </div>


                </div>

                <div className='flex flex-col w-full h-auto p-2 mt-5 ml-2 mr-5 bg-white rounded-lg'>

                    <div className='flex justify-between'>

                        <p className='font-bold text-brown_color'>Price Details</p>

                        < MdKeyboardArrowUp className='w-[30px] h-[30px] text-brown_color' />

                    </div>
                    <div className='flex justify-between w-full font-bold text-black'>
                        <p>Cruise Package</p>
                        <p>5,457,375 VND</p>
                    </div>
                    <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                        <p>Adults x2 </p>
                        <p>5,457,375 VND</p>
                    </div>
                    <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                        <p>Children x2 </p>
                        <p>5,457,375 VND</p>
                    </div>
                    <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                        <p>Infant x2 </p>
                        <p>5,457,375 VND</p>
                    </div>

                    <div className='flex justify-between w-full mt-5 font-bold text-black'>
                        <p>Ancillary</p>
                        <p>3,160,000 VND</p>
                    </div>

                    <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                        <p>Shuttle Bus x2 </p>
                        <p>5,457,375 VND</p>
                    </div>
                    <div className='flex ml-2 px-2  font-thin text-[#9DA4AE] justify-between w-full'>
                        <p>Ambassador Deluxe Cabin x2 </p>
                        <p>5,457,375 VND</p>
                    </div>
                    <div className='flex justify-between w-full font-bold text-black'>
                        <p>TOTAL</p>
                        <p>9,835,375 VND</p>
                    </div>

                </div>
            </div>
            <nav className={`fixed bottom-0 left-0 right-0 z-10  w-full bg-[#bbbbbf] flex justify-around py-4`}>
                <div className='w-full md:w-[600px] m-5 h-[60px] flex flex-row'>
                    <div onClick={gotoContactInfor} className='flex items-center justify-center w-full h-full ml-4 mr-4 font-bold text-center text-white rounded hover:cursor-pointer bg-brown_color'>
                        <p>Proceed Payment</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default PaymentConfirmPage