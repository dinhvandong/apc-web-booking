import React, { useContext, useEffect, useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { GrNext } from "react-icons/gr";

import CustomerItem from './CustomerItem';
import { getBookingByCode } from '../services/api_booking';
import { AuthContext } from '../AuthProvider';
import { convertToCurrencyFormat } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
const MyBookingSearch = (props) => {
  const { bookingCode } = props;
  const [customers, setCustomers] = useState([]);
  const [booking, setBooking] = useState(null);
  console.log("BookingCodeA:", bookingCode);
  const { updateBookingSearch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { priceService, setPriceService } = useState(0);

  const gotoMyBooking2 = () => {
    navigate(`/my-booking2/${bookingCode}`)

  }
  const getBooking = async () => {
    const result = await getBookingByCode(bookingCode);
    if (result.success === 200) {
      updateBookingSearch(result.data);
      setBooking(result.data);
      setCustomers(result.data.passengerList);
      console.log("myBooking:", result.data);
      const listService = result.data.roomBookingList;

      for (let i = 0; i < listService.length; i++) {
        const item = listService[i];
        // Perform actions with the current item
        const price = item.price * item.count;
        setPriceService(priceService + price);
      }

    } else {
      window.alert('Không tìm thấy mã booking');

    }

  }

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

  const [hiddenPrice, setHiddenPrice] = useState(false);
  const [hiddenPassenger, setHiddenPassenger] = useState(false);

  const handleHiddenPassenger = () => {
    setHiddenPassenger(!hiddenPassenger);
  }
  const hiddenPriceDetail = () => {

    setHiddenPrice(!hiddenPrice);

  }

  const gotoPaymentProcess = () => {

    navigate(`/booking-success/${bookingCode}`);
  }
  useEffect(() => {

    getBooking();


  }, [])
  return (
    <div className='flex flex-col mb-[100px] bg-[#bbbbbf] items-center flex-1 w-full overflow-y-auto'>
      <div className='bg-white text-xl mt-[10px]  font-bold text-brown_color'>

      </div>

      <div className=' bg-[#bbbbbf] w-full flex flex-col mt-1 md:w-[600px] p-5'>

        <div className='flex flex-col w-full p-5 bg-white rounded-md'>

          <div className='flex w-full mt-[50px] font-bold text-black'>
            <h1 className='font-bold  text-[20px] text-brown_color'>Ambassador Day Cruise</h1>

          </div>

          <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

            <div className='flex justify-start w-1/2'>

              <p>Cruise Dates</p>

            </div>
            <div className='justify-end w-1/2 text-end '>

              <p>{booking != null ? formatDate(booking.bookingDate) : ""}</p>

            </div>

          </div>

          <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

            <div className='flex items-center justify-start w-1/2'>

              <p>Passengers</p>

            </div>
            <div className='items-center justify-end w-1/2 text-end'>

              <p>{booking != null ? booking.adult : 0} Adults, {booking != null ? booking.children : 0} Children, {booking != null ? booking.infant : 0} Infant</p>

            </div>

          </div>

          <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

            <div className='flex items-center justify-start w-1/2'>

              <p>Package</p>

            </div>
            <div className='items-center justify-end w-1/2 text-end'>
              <p>Ambassador {booking != null ? booking.cruiseType : ""}</p>


            </div>

          </div>

          <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

            <div className='flex items-center justify-start w-1/2'>

              <p>Total Paid</p>

            </div>
            <div className='items-center justify-end w-1/2 text-end'>
              <p>{booking != null ? convertToCurrencyFormat(booking.priceBase * (booking.adult + 0.7 * booking.children + 0.5 * booking.infant)) : 0} VND</p>


            </div>

          </div>

          <div className='flex justify-between w-full mt-5 font-bold text-center '>

            <h1>{(booking != null && booking.status === 2) ? <span className='text-green-600'>Booking confirmed</span> : (<span className='text-red-600'>Booking pending </span>)}</h1>
            <h1>{(booking != null && booking.status === 1) ? <span onClick={gotoPaymentProcess} className='ml-5 font-bold hover:cursor-pointer text-brown_color'>View Payment Info</span> : <p></p>}</h1>

          </div>

          <div className='flex w-full mt-5 text-[16px] text-black'>

            <div className='flex items-center justify-start w-1/2 text-start'>

              <p>Booking Code</p>

            </div>
            <div className='text-[20px] font-bold text-end items-center justify-end w-1/2'>
              <p>{bookingCode}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full p-5 mt-5 bg-white rounded-md'>
          <div className='flex w-full mt-5 text-[16px] text-black font-bold '>
            <div className='flex items-center justify-start w-1/2'>
              <p>Date of Purchase</p>
            </div>
            <div className='items-center justify-end w-1/2 text-end'>
              <p>{booking != null ? formatDate(booking.createdDate) : ""}</p>
            </div>
          </div>
          <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

            <div className='flex items-center justify-start w-1/2'>

              <p>Payment Method</p>

            </div>
            <div className='items-center justify-end w-1/2 text-end'>
              <p>VISA Card</p>


            </div>

          </div>

          <div className='flex w-full mt-5 text-[16px] text-black font-bold'>

            <div className='flex items-center justify-start w-1/2'>

              <p>Price Details</p>

            </div>
            <div onClick={hiddenPriceDetail} className='flex items-center justify-end w-1/2 text-end'>
              {
                hiddenPrice === false ?
                  <MdKeyboardArrowUp className='w-6 h-6 text-brown_color' />
                  :
                  <MdKeyboardArrowDown className='w-6 h-6 text-brown_color' />
              }
            </div>

          </div>
          {hiddenPrice == false ? (<div className='flex flex-col'>
            <div className='flex w-full mt-5 font-bold text-[16px] text-black'>

              <div className='flex items-center justify-start w-1/2'>

                <p>Cruise Package</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>{booking != null ? convertToCurrencyFormat(booking.priceBase * (booking.adult + 0.7 * booking.children + 0.5 * booking.infant)) : 0} VND</p>


              </div>

            </div>
            <div className='flex w-full mt-5'>

              <div className='flex items-center justify-start w-1/2 ml-5 '>

                <p>Adults x{booking != null ? booking.adult : 0}</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>{booking != null ? convertToCurrencyFormat(booking.priceBase * booking.adult) : 0} VND  </p>


              </div>

            </div>

            <div className='flex w-full mt-5'>

              <div className='flex items-center justify-start w-1/2 ml-5'>

                <p>Children x{booking != null ? booking.children : 0}</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>{booking != null ? convertToCurrencyFormat(booking.priceBase * booking.children) : 0} VND  </p>


              </div>

            </div>

            <div className='flex w-full mt-5'>

              <div className='flex items-center justify-start w-1/2 ml-5'>

                <p>Infant x{booking != null ? booking.infant : 0}</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>{booking != null ? convertToCurrencyFormat(booking.priceBase * booking.infant) : 0} VND  </p>
              </div>

            </div>


            <div className='flex w-full mt-5 font-bold text-[16px]'>

              <div className='flex items-center justify-start w-1/2'>

                <p>Ancillary</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>{priceService} k VND </p>
              </div>
            </div>

            {booking != null && booking.roomBookingList.map((item, index) => (
              <div className='flex w-full mt-5 text-gray-600'>

                <div className='flex items-center justify-start w-1/2 ml-5'>

                  <p>{item.service} x {item.count}</p>

                </div>
                <div className='flex items-center justify-end w-1/2 text-end'>
                  <p>{item.price} k VND   </p>
                </div>

              </div>))
            }

            {/* <div className='flex w-full mt-5 text-gray-600'>

              <div className='flex items-center justify-start w-1/2 ml-5'>

                <p>Ambassador Deluxe Cabin x1</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>2,500,000 VND   </p>
              </div>

            </div> */}


            <div className='flex w-full mt-5 font-bold text-black text-[16px]'>

              <div className='flex items-center justify-start w-1/2'>

                <p>TOTAL</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>{booking != null && booking.price} k VND </p>
              </div>
            </div>

          </div>

          ) : <div></div>



          }





        </div>

        <div className='flex flex-col w-full p-5 mt-5 bg-white rounded-md'>

          <div className='flex w-full mt-5 text-[16px] text-black font-bold'>

            <div className='flex items-center justify-start w-1/2'>

              <p>All Passenger</p>

            </div>
            <div className='flex items-center justify-end w-1/2 text-end'>
              {
                hiddenPassenger == false ?
                  <MdKeyboardArrowUp onClick={handleHiddenPassenger} className='w-6 h-6 text-brown_color' />

                  :
                  <MdKeyboardArrowDown onClick={handleHiddenPassenger} className='w-6 h-6 text-brown_color' />



              }
            </div>

          </div>

          <div className='flex flex-col w-full mt-5  text-[16px] text-black font-bold'>

            <div>
              {hiddenPassenger === false ? customers.map((customer, index) => (
                <CustomerItem key={customer.id}
                  index={index}
                  title={customer.title}
                  firstName={customer.firstName}
                  lastName={customer.lastName}
                  dateOfBirth={customer.dateOfBirth}
                  nation={customer.nation}
                  province={customer.province}
                  personIdType={customer.personIdType}
                  personIdNumber={customer.personIdNumber}
                  note={customer.note}
                />
              )) : <div></div>}
            </div>
          </div>

        </div>

        <button onClick={gotoMyBooking2} className='w-full mt-5 h-[50px] rounded-md text-white font-bold bg-brown_color'>Complete Passenger Information</button>
        {/* 
        <div className='flex flex-col w-full p-5 mt-5 bg-white rounded-md'>
          <div className='flex w-full mt-5 text-[16px] text-black font-bold'>
            <p>Seems missing something?</p>
          </div>
          <div className='flex w-full mt-5 text-[16px] text-gray-700'>

            <p>
              Additional services await to fulfill your Halong Bay experience on Ambassador Day Cruise. Own a private en-suite cabin onboard or let us take care of your round-trip transportation.
            </p>

          </div>

        </div>

        <button className='w-full mt-5 h-[50px] rounded-md text-white font-bold bg-brown_color'>Add Ancillary</button>

        <div className='flex flex-col w-full p-5 mt-5 bg-white rounded-md'>

          <div className='flex w-full mt-5 text-[16px] text-black font-bold'>
            <p>Change Dates & Refund</p>
          </div>

          <div className='flex w-full mt-5'>

            <div className='flex flex-col items-center justify-start w-4/5 ml-5'>

              <div className='w-full'>
                <p className='font-bold text-brown_color'>Change Your Cruise Dates</p>

              </div>
              <p className='text-brown_color'>Touch to see available cruise dates with terms and conditions applied.</p>

            </div>
            <div className='flex items-center justify-end w-1/5 text-end'>
              <GrNext className='w-[30px] h-[30px] text-brown_color' />
            </div>

          </div>
          <div className='flex w-full mt-5'>

            <div className='flex flex-col items-center justify-start w-4/5 ml-5'>

              <div className='w-full'>
                <p className='font-bold text-brown_color'>Request A Refund</p>

              </div>
              <p className='text-brown_color'>Touch to see available terms and conditions and request for a refund.</p>

            </div>
            <div className='flex items-center justify-end w-1/5 text-end'>
            <GrNext className='w-[30px] h-[30px] text-brown_color' />
            </div>

          </div>

          <div className='flex w-full mt-5'>

            <div className='flex flex-col items-center justify-start w-4/5 ml-5'>

              <div className='w-full'>
                <p className='font-bold text-brown_color'>Cancel Your Cruise</p>

              </div>              
              <p className='text-brown_color'>Touch to see available terms and conditions and request for a refund.</p>

            </div>
            <div className='flex items-center justify-end w-1/5 text-end'>
            <GrNext className='w-[30px] h-[30px] text-brown_color' />
            </div>

          </div>

        </div> */}
      </div>

    </div>
  )
}

export default MyBookingSearch