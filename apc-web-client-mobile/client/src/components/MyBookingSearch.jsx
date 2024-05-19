import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import CustomerItem from './CustomerItem';
const MyBookingSearch = (props) => {

  const { bookingCode } = props;

  console.log("BookingCodeA:", bookingCode);

  return (
    <div className='flex flex-col items-center flex-1 w-full overflow-y-auto'>
      <div className='text-xl mt-[100px] text-center font-bold text-white'>
        <h1>
          My Booking
        </h1>
      </div>

      <div className='w-full flex flex-col mt-5 md:w-[600px] p-5'>

        <h1 className='font-bold text-center text-brown_color'>Ambassador Day Cruise</h1>

        <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

          <div className='flex justify-start w-1/2'>

            <p>Cruise Dates</p>

          </div>
          <div className='justify-end w-1/2 text-end '>

            <p>Mon, 04/03/2023</p>

          </div>

        </div>

        <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

          <div className='flex items-center justify-start w-1/2'>

            <p>Passengers</p>

          </div>
          <div className='items-center justify-end w-1/2 text-end'>

            <p>2 Adults, 1 Children</p>

          </div>

        </div>

        <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

          <div className='flex items-center justify-start w-1/2'>

            <p>Package</p>

          </div>
          <div className='items-center justify-end w-1/2 text-end'>
            <p>Ambassador Day Cruise</p>


          </div>

        </div>

        <div className='flex w-full mt-5 text-[16px] font-bold text-black'>

          <div className='flex items-center justify-start w-1/2'>

            <p>Total Paid</p>

          </div>
          <div className='items-center justify-end w-1/2 text-end'>
            <p>9,835,375 VND</p>


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
            <p>APC1DV</p>


          </div>

        </div>


        <div className='flex w-full mt-5 text-[16px] text-black font-bold '>

          <div className='flex items-center justify-start w-1/2'>

            <p>Date of Purchase</p>

          </div>
          <div className='items-center justify-end w-1/2 text-end'>
            <p>Fri, 3/3/2023</p>


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
          <div className='flex items-center justify-end w-1/2 text-end'>
            <MdKeyboardArrowUp className='w-6 h-6 text-brown_color' />


          </div>

        </div>


        <div className='flex w-full mt-5 font-bold text-[16px] text-black'>

          <div className='flex items-center justify-start w-1/2'>

            <p>Cruise Package</p>

          </div>
          <div className='flex items-center justify-end w-1/2 text-end'>
            <p>5,457,375 VND </p>


          </div>

        </div>
        <div className='flex w-full mt-5'>

          <div className='flex items-center justify-start w-1/2 ml-5 '>

            <p>Adults x2</p>

          </div>
          <div className='flex items-center justify-end w-1/2 text-end'>
            <p>3,969,000 VND  </p>


          </div>

        </div>

        <div className='flex w-full mt-5'>

          <div className='flex items-center justify-start w-1/2 ml-5'>

            <p>Adults x2</p>

          </div>
          <div className='flex items-center justify-end w-1/2 text-end'>
            <p>3,969,000 VND  </p>


          </div>

        </div>

        <div className='flex w-full mt-5'>

          <div className='flex items-center justify-start w-1/2 ml-5'>

            <p>Adults x2</p>

          </div>
          <div className='flex items-center justify-end w-1/2 text-end'>
            <p>3,969,000 VND  </p>
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


        <div className='flex w-full mt-5 text-[16px] text-black font-bold'>

          <div className='flex items-center justify-start w-1/2'>

            <p>All Passenger</p>

          </div>
          <div className='flex items-center justify-end w-1/2 text-end'>
            <MdKeyboardArrowUp className='w-6 h-6 text-brown_color' />


          </div>

        </div>

        <div className='flex flex-col w-full mt-5 mb-[100px] text-[16px] text-black font-bold'>


          <CustomerItem/>
          <CustomerItem/>
          <CustomerItem/>
          <CustomerItem/>

        

        </div>




      </div>

    </div>
  )
}

export default MyBookingSearch