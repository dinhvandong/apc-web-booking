import React, { useContext, useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
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

  const gotoMyBooking2 = () =>{
    navigate('/my-booking2')

  }
  const getBooking = async () => {
    const result = await getBookingByCode(bookingCode);
    if (result.success === 200) {
      updateBookingSearch(result.data);
      setBooking(result.data);
      console.log("myBooking:", result.data);


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

  const hiddenPriceDetail = () => {

    setHiddenPrice(!hiddenPrice);

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

          <div className='text-[#0D992C] text-center font-bold w-full mt-5 '>

            <h1>Booking confirmed</h1>
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
              <MdKeyboardArrowUp className='w-6 h-6 text-brown_color' />


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
                <p>3,160,000 VND </p>
              </div>
            </div>
            <div className='flex w-full mt-5 text-gray-600'>

              <div className='flex items-center justify-start w-1/2 ml-5'>

                <p>Shuttle bus x3</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>1,800,000 VND   </p>


              </div>

            </div>

            <div className='flex w-full mt-5 text-gray-600'>

              <div className='flex items-center justify-start w-1/2 ml-5'>

                <p>Ambassador Deluxe Cabin x1</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>2,500,000 VND   </p>
              </div>

            </div>


            <div className='flex w-full mt-5 font-bold text-black text-[16px]'>

              <div className='flex items-center justify-start w-1/2'>

                <p>TOTAL</p>

              </div>
              <div className='flex items-center justify-end w-1/2 text-end'>
                <p>9,835,375 VND </p>
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
              <MdKeyboardArrowUp className='w-6 h-6 text-brown_color' />


            </div>

          </div>

          <div className='flex flex-col w-full mt-5  text-[16px] text-black font-bold'>

            <div>
              {customers.map((customer) => (
                <CustomerItem key={customer.id} title={customer.title} firstName={customer.firstName} lastName={customer.lastName} dateOfBirth={customer.dateOfBirth} nation={customer.nation} province={customer.province} />
              ))}
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