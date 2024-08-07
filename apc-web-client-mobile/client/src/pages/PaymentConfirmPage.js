
import React, { useContext, useEffect, useState } from 'react'
import HeaderSelectCabin from '../components/HeaderSelectCabin'
// import SelectCabin from '../components/SelectCabin'
import EventItem from '../components/EventItem'
import { useNavigate, useParams } from 'react-router-dom'
import ic_checkbox from '../assets/ic_checkbox.png';
import ic_charge from '../assets/ic_charge.png';
import ic_notpermit from '../assets/ic_notpermit.png';
import { AuthContext } from '../AuthProvider';
import RoomItem from '../components/RoomItem';
import bg_payment from '../assets/cabin1.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from "react-icons/md";
import paypal from '../assets/paypal_icon.png';
import mbLogo from '../assets/Logo_MB_new.png';
import HeaderPaymentConfirm from '../components/HeaderPaymentConfirm';
import { convertToCurrencyFormat } from '../utils/utils';
import { createBooking, getBookingByCode, updateBooking } from '../services/api_booking';
const PaymentConfirmPage = () => {
    const { bookingCode } = useParams();

    const [hidden1, setHidden1] = useState(false);
    const [hidden2, setHidden2] = useState(false);
    const [hidden3, setHidden3] = useState(false);

    const navigate = useNavigate();
    //const { bookingInfo } = useContext(AuthContext);
    const { bookingInfo, setBookingInfo } = useContext(AuthContext);

    const { getAllServices } = useContext(AuthContext);
    const [finalPrice, setFinalPrice] = useState(0);

    const [priceService, setPriceService] = useState(0);
    const [currentTime, setCurrentTime] = useState('');

    const values = getAllServices();

    const title = bookingInfo.title;
    const adult = bookingInfo.adult;
    const children = bookingInfo.children;
    const infant = bookingInfo.infant;
    const price = bookingInfo.price;
    const firstName = bookingInfo.firstName;
    const lastName = bookingInfo.lastName;
    const email = bookingInfo.email;
    const phone = bookingInfo.phone;
    const priceBase = bookingInfo.priceBase;
    const bookingDate = bookingInfo.bookingDate;
    console.log("Adults:", adult);
    console.log("Children:", children);
    console.log("Infant:", infant);
    console.log("PriceBase:", priceBase);
    console.log("Price:", price);

    const [bookingData, setBookingData] = useState();
    
    const gotoContactInfor = async () => {

        navigate(`/booking-success/${bookingCode}`)

        // const response = await updateBooking(bookingInfo);
        // console.log("BookingResponse:", response);
        // console.log("bookingInfo:", bookingInfo);
        // if (response.success === 200) {
        //     setBookingInfo(response.data);

        // } else {
        // }
    }


    const updatePrice = (newPrice) => {
        setBookingInfo(prevBookingInfo => ({
            ...prevBookingInfo,
            price: newPrice
        }));
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            let price = item.price * item.count;
            totalPrice += price;
        }

        setPriceService(totalPrice);

        const total = priceService + (priceBase * adult + priceBase * children * 0.7 + (infant>1)?(priceBase * (infant-1)* 0.7):0);
        console.log("TotalPrice:", priceService);
        console.log("TotalPrice:", total);

        updatePrice(total);

    };

    function formatDate(longValue) {
        console.log("longValue:", longValue);
        const longValueStr = longValue.toString();

        const year = longValueStr.substr(0, 4);
        const month = longValueStr.substr(4, 2);
        const day = longValueStr.substr(6, 2);

        const date = new Date(`${year}-${month}-${day}`);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(date);

        return formattedDate;
    }


    const getBooking = async () => {
        const result = await getBookingByCode(bookingCode);
        if (result.success === 200) {
            setBookingData(result.data);
            console.log("BOOKING_DATA:",result.data);
            setCurrentTime(formatDate(result.data.bookingDate));

            let totalPrice = 0;

            for (let i = 0; i < result.data.roomBookingList.length; i++) {
                let item = result.data.roomBookingList[i];
                let price = item.price * item.count;
                totalPrice += price;
            }
    
            setPriceService(totalPrice);

        }
    }

    useEffect(() => {

        getBooking();
        // const count = adult + children * 0.75 + infant * 0.5;
        // setFinalPrice(count * price);

        // const currentDate = new Date().toLocaleDateString('en-US', {
        //     weekday: 'short',
        //     month: '2-digit',
        //     day: '2-digit',
        //     year: 'numeric'
        // });
        // calculateTotalPrice();

    }, []);



    const handleHiddenLayout1 = () => {
        setHidden1(!hidden1);
    }
    const handleHiddenLayout2 = () => {
        setHidden2(!hidden2);
    }

    const handleHiddenLayout3 = () => {
        setHidden3(!hidden3);
    }


    return (
        <div className='flex flex-col px-5 bg-[#bbbbbf] items-center justify-center w-full mb-[100px] h-auto'>
            <HeaderPaymentConfirm />
            <div className='mb-[200px] mt-[100px] w-full md:w-[600px] flex flex-col  h-auto'>

                <div className='w-full flex  py-1 items-center rounded-lg bg-[#2F4842] h-[180px]'>

                    <img src={bg_payment} className='ml-1 rounded-xl w-[200px] h-[150px]' />

                    <div className='flex flex-col ml-5 text-white'>

                        <p className='font-bold'>Ambassador {bookingData!= null &&bookingData.cruiseType}</p>
                        <p>{ bookingData!= null &&currentTime}</p>
                        <p>{ bookingData!= null && bookingData.adult} Adults, {bookingData!= null &&bookingData.children} children, {bookingData!= null && bookingData.infant} infant</p>

                    </div>

                </div>

                <div className='flex flex-col w-full h-auto p-5 mt-5 text-black bg-white rounded-lg'>

                    <div className='flex justify-between'>

                        <p className='font-bold text-brown_color'>Contact Information</p>

                        {hidden1 == false ? (< MdKeyboardArrowUp onClick={handleHiddenLayout1} className='hover:cursor-pointer w-[30px] h-[30px] text-brown_color' />) :

                            < MdKeyboardArrowDown onClick={handleHiddenLayout1} className=' hover:cursor-pointer w-[30px] h-[30px] text-brown_color' />
                        }

                    </div>
                    {
                        hidden1 == false ?
                            <div className='flex flex-col'>

                                <div className='flex justify-between w-full mt-5'>
                                    <p className='font-bold'>Title</p>
                                    <p>{bookingData!= null &&bookingData.title}</p>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className='font-bold'>FirstName</p>
                                    <p>{bookingData!= null &&bookingData.firstName}</p>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className='font-bold'>LastName</p>
                                    <p>{bookingData!= null &&bookingData.lastName}</p>
                                </div>

                                <div className='flex justify-between w-full'>
                                    <p className='font-bold'>E-mail</p>
                                    <p>{bookingData!= null &&bookingData.email}</p>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className='font-bold'>Phone Number</p>
                                    <p>{bookingData!= null &&bookingData.phone}</p>
                                </div>
                            </div>

                            : (<div></div>)
                    }


                </div>

                <div className='flex flex-col w-full h-auto p-5 mt-5 text-black bg-white rounded-lg'>
                    <div className='flex justify-between mb-5'>
                        <p className='font-bold text-brown_color'>Ancillary</p>
                        {hidden2 == false ? (< MdKeyboardArrowUp onClick={handleHiddenLayout2} className='hover:cursor-pointer w-[30px] h-[30px] text-brown_color' />) :

                            < MdKeyboardArrowDown onClick={handleHiddenLayout2} className='hover:cursor-pointer w-[30px] h-[30px] text-brown_color' />
                        }                     </div>
                    {
                        hidden2 == false ? <div>
                            {bookingData!= null && bookingData.roomBookingList.map((item, index) => (
                                <div className='flex justify-between w-full' key={index}>
                                    <p className='font-bold'>{item.service}</p>
                                    <p>{item.count}</p>
                                </div>
                            ))}

                        </div> : (<div></div>)

                    }
                </div>
                <div className='flex flex-col w-full h-auto p-5 mt-5 bg-white rounded-lg'>

                    <div className='flex justify-between'>

                        <p className='font-bold text-brown_color'>Price Details</p>

                        {hidden3 == false ? (< MdKeyboardArrowUp onClick={handleHiddenLayout3} className='hover:cursor-pointer w-[30px] h-[30px] text-brown_color' />) :

                            < MdKeyboardArrowDown onClick={handleHiddenLayout3} className='hover:cursor-pointer w-[30px] h-[30px] text-brown_color' />
                        }
                    </div>

                    {
                        hidden3 == false ?
                        bookingData!= null && (<div className='flex flex-col'>
                                <div className='flex justify-between w-full mt-5 font-bold text-black'>
                                    <p>Cruise Package</p>
                                    <p>{(bookingData.adult * bookingData.priceBase) + (bookingData.children * bookingData.priceBase * 0.7) + (bookingData.infant>1 ? ((bookingData.infant -1) * bookingData.priceBase * 0.7):0)} k VND</p>
                                </div>
                                <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                                    <p>Adults x {bookingData.adult} </p>
                                    <p>{(bookingData.adult * bookingData.priceBase)} k VND</p>
                                </div>
                                <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                                    <p>Children x {bookingData.children} </p>
                                    <p>{bookingData.children * bookingData.priceBase * 0.75} k VND</p>
                                </div>
                                <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                                    <p>Infant x{bookingData.infant * 0.5} </p>
                                    <p>{bookingData.infant} k VND</p>
                                </div>

                                <div className='flex justify-between w-full mt-5 font-bold text-black'>
                                    <p>Ancillary</p>
                                    <p>{priceService} k VND</p>
                                </div>


                                {bookingData!= null && bookingData.roomBookingList.map((item, index) => (
                                    <div key={index} className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                                        <p>{item.service} x {item.count}</p>
                                        <p>{item.price} VND</p>
                                    </div>
                                ))}


                                <div className='flex justify-between w-full mt-5 font-bold text-black'>
                                    <p>TOTAL</p>
                                    <p>{bookingData!=null && bookingData.price} k VND</p>
                                </div>

                            </div>) : <div></div>

                    }



                </div>

                <div className='flex flex-col mb-[100px] w-full h-auto p-5 mt-5 bg-white rounded-lg'>


                    <div className='mt-5 font-bold text-brown_color'>

                        <p>Important Notes</p>
                    </div>
                    <div className='mt-5 font-bold'>

                        <p>CHECK-IN INSTRUCTIONS</p>
                    </div>
                    <div className='flex justify-between mt-5'>

                        <div>For Day Cruise:</div>

                        <div className='flex flex-col'>
                            <div>Boarding Time: 8:45 AM</div>
                            <div>Check-out Time: 4:30 PM</div>
                        </div>
                    </div>

                    <div className='flex justify-between'>

                        <div>For Dinner Cruise:</div>

                        <div className='flex flex-col'>
                            <div>Boarding Time: 5:00 PM</div>
                            <div>Check-out Time: 10:00 PM</div>
                        </div>
                    </div>

                    <div className='mt-5'>

                        <p>To ensure a seamless check-in experience and avoid any late check-in charges, please make sure to arrive at the Ambassador Check-in Lounge 30 minutes before Boarding time.</p>

                    </div>

                    <div className='mt-5'>

                        <p>Kindly note that advanced registration is mandatory. Please provide all passenger information (including full name, gender, date of birth, and nationality) at least 24 hours prior to your departure. Failure to supply this information may result in denial of boarding or a late fee of USD 30 per person.</p>

                    </div>

                    <div className='mt-5 font-bold'>

                        <p>SPECIAL REQUEST</p>
                    </div>

                    <div>
                        <p>
                            If you have any special dietary requirements or food allergies, please inform us before your cruise date.
                        </p>
                    </div>

                    <div className='mt-5 font-bold'>

                        <p>TRANSPORTATION SERVICE</p>
                    </div>

                    <div>
                        <p>If you have reserved our shuttle bus service for Day Cruise:</p>
                    </div>

                    <div>
                        <p>Pick-up and drop-off location:Hanoi Towers, 49 Hai Ba Trung str., Hoan Kiem dist., Hanoi.</p>
                    </div>
                    <div>
                        Pick-up time: 6:00 AM
                    </div>
                    <div>
                        Drop-off time: 7:00 PM
                    </div>
                    <div>Please note that infants will be seated with adults.</div>
                    <div className='mt-5 font-bold'>

                        <p>CANCELLATION POLICY FOR FLEXIBLE AND BUSINESS PRICING</p>
                    </div>


                    <div>
                        <p>Full refund if canceled or modified up to 7 days (For group of 10 to 20 persons) and 3 days (For group of less than 10 persons) prior to the date of arrival.</p>

                    </div>

                    <div>
                        <p>
                            50% refund if canceled  or modified from 3 to 7 days (For group of 10 to 20 persons) and 1 to 3 days (For group of less than 10 persons) prior to the date of arrival.
                        </p>
                    </div>

                    <div>
                        Non-refundable if canceled or modified later or in the case of a no-show.

                    </div>
                    <div>
                        For group of more than 21 persons, please inform in email in case of cancellation or cruise amendment.

                    </div>

                    <div>

                        For any inquiries regarding your reservation, please feel free to contact us directly on our hotline at <span className="font-bold text-black">+84 19003045</span> or via email at <span className="font-bold text-black">app@ambassadorcruise.com.</span>
                    </div>

                </div>
            </div>
            <nav className={`fixed bottom-0 left-0 right-0 z-10  w-full bg-white flex justify-around py-4`}>
                <div className='w-full md:w-[600px] m-5 h-auto flex flex-col'>
                    <div className='flex flex-row justify-between m-5'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-brown_color'>{bookingData!=null && convertToCurrencyFormat(bookingData.price)} VND</p>
                            <p>Fee tax included</p>
                        </div>

                        <div className='flex items-center justify-end'>
                            <img src={mbLogo} className='mr-5' />
                            <button className='font-bold text-brown_color'>Change</button>
                        </div>
                    </div>
                    <div onClick={gotoContactInfor} className='flex items-center justify-center w-full h-[60px] ml-4 mr-4 font-bold text-center text-white rounded hover:cursor-pointer bg-brown_color'>
                        <p>Proceed Payment</p>
                    </div>
                    <div className='text-[12px] mt-5'>
                        <p className='text-center'>By processing payment, you have agreed to Ambassador Cruises' Terms & Condition and Privacy Policy.</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default PaymentConfirmPage