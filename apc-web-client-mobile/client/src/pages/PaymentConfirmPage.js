
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
import bg_payment from '../assets/cabin1.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from "react-icons/md";
import paypal from '../assets/paypal_icon.png';
import HeaderPaymentConfirm from '../components/HeaderPaymentConfirm';
import { convertToCurrencyFormat } from '../utils/utils';
const PaymentConfirmPage = () => {

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
    console.log("getAllServices", values);

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
    // customerName: '',
    // firstName: '',
    // lastName: '',
    // country: '',
    // countryCode: '',
    // phone: '',
    // email: '',
    // adult: 1,
    // children: 0,
    // infant: 0,
    // flexibleOrNonRefund: true,
    // price: 0,
    // cruiseType: 'Day Cruise',

    // const items = getAllServices;
    //const [items, setItems]= useState([]);

    // console.log("itemsxxx:", items);
    // const [cruiseType, setCruiseType] = useState('Day Cruise');
    const gotoContactInfor = () => {
        navigate('/booking-success')
        // if (cruiseType === 'Day Cruise') {
        //     navigate('/contact');
        // }
        // else {
        //     navigate('/contact');
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
        updatePrice(totalPrice);

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

    useEffect(() => {

        const count = adult + children * 0.75 + infant * 0.5;
        setFinalPrice(count * price);

        const currentDate = new Date().toLocaleDateString('en-US', {
            weekday: 'short',
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });

        setCurrentTime(formatDate(bookingDate));

        calculateTotalPrice();


        //   for (let i = 0; i < values.length; i++){
        //     let item = values[i];
        //     let price = item.price  * item.count;
        //     console.log("price_item:", price);
        //     setPriceService(priceService + price);
        //   }


        // const interval = setInterval(() => {
        //     const vietnamTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });
        //     setCurrentTime(vietnamTime);
        //   }, 1000); // Update every second

        //   return () => clearInterval(interval); // Cleanup interval on component unmount
        //setPrice(price);

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

                        <p className='font-bold'>Ambassador {bookingInfo.cruiseType}</p>
                        <p>{currentTime}</p>
                        <p>{adult} Adults, {children} children, {infant} infant</p>

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
                                    <p>{title}</p>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className='font-bold'>FirstName</p>
                                    <p>{firstName}</p>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className='font-bold'>LastName</p>
                                    <p>{lastName}</p>
                                </div>

                                <div className='flex justify-between w-full'>
                                    <p className='font-bold'>E-mail</p>
                                    <p>{email}</p>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className='font-bold'>Phone Number</p>
                                    <p>{phone}</p>
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
                            {values.map((item, index) => (
                                <div className='flex justify-between w-full' key={index}>
                                    <p className='font-bold'>{item.service}</p>
                                    <p>{item.count}</p>
                                </div>
                            ))}

                        </div> : (<div></div>)

                    }

                    {/* <div className='flex justify-between w-full'>
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
                    </div> */}
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
                            (<div className='flex flex-col'>
                                <div className='flex justify-between w-full mt-5 font-bold text-black'>
                                    <p>Cruise Package</p>
                                    <p>{(adult * priceBase) + (children * priceBase * 0.75) + (infant * priceBase * 0.5)} k VND</p>
                                </div>
                                <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                                    <p>Adults x {adult} </p>
                                    <p>{(adult * priceBase)} k VND</p>
                                </div>
                                <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                                    <p>Children x {children} </p>
                                    <p>{children * priceBase * 0.75} k VND</p>
                                </div>
                                <div className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                                    <p>Infant x{infant * 0.5} </p>
                                    <p>{infant} k VND</p>
                                </div>

                                <div className='flex justify-between w-full mt-5 font-bold text-black'>
                                    <p>Ancillary</p>
                                    <p>{priceService} k VND</p>
                                </div>


                                {values.map((item, index) => (
                                    <div key={index} className='flex ml-2 px-2 font-thin text-[#9DA4AE] justify-between w-full'>
                                        <p>{item.service} x {item.count}</p>
                                        <p>{item.price} VND</p>
                                    </div>
                                ))}


                                <div className='flex justify-between w-full mt-5 font-bold text-black'>
                                    <p>TOTAL</p>
                                    <p>{priceService + (priceBase * adult + priceBase * children * 0.7 + priceBase * infant)}k VND</p>
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
                            <p className='font-bold text-brown_color'>{convertToCurrencyFormat (priceService + (priceBase * adult + priceBase * children * 0.7 + priceBase * infant))} VND</p>
                            <p>Fee tax included</p>
                        </div>

                        <div className='flex items-center justify-end'>
                            <img src={paypal} className='mr-5 w-[94px] h-[65px]' />
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