import React, { useEffect, useState } from 'react'
import HistoryBookingItem from './HistoryBookingItem';
import { getBookingsByEmail } from '../services/api_booking';

const HistoryBooking = (props) => {
    const [data, setData] = useState([]);
    const email = props.email;
    console.log("EmailPass:", email);
    useEffect(() => {
      const fetBookingList = async (email) => {

        console.log("EmailPass:", email);

        try {
          const bookingList = await getBookingsByEmail(String(email)+"");
          console.log("bookingList", bookingList);
          setData(bookingList);
        } catch (error) {
          // Handle error
          console.error('Error:', error);
        }
      };
      fetBookingList(email);
    }, [email]);
  
    return (
      <div className="space-y-4 bg-[#bbbbbf]  py-[100px] w-full flex flex-col justify-center md:w-[600px]">
        {data.map((item, index) => (
          <HistoryBookingItem key={index} booking={item} />
        ))}
      </div>
    );
}

export default HistoryBooking