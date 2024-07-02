import React from 'react'
import logo from '../assets/icon_ambassador.png';
import icEdit from '../assets/icons8-edit-50.png';
import { useNavigate } from 'react-router-dom';
const HistoryBookingItem = ({ booking }) => {
    const navigate = useNavigate();

    const gotoBookingDetail =()=>{

        navigate('/booking-search/' + booking.bookingCode);

    }

    console.log("Booking-ITEM:", booking);
    return (
        <div className='flex flex-col px-5 py-5 bg-white rounded-md'>

            <div className='flex items-center justify-between mt-2'>

                <div className='flex items-center font-bold text-brown_color'>
                    < img src={logo} className='w-[35px] h-[35px]' />
                    <p className='ml-3'>AmbassadorDayCruise</p>
                </div>

                <button onClick={gotoBookingDetail} className='flex'>
                    <img src={icEdit} className='w-5 h-5'/>
                    <p className='text-brown_color'>Edit Booking</p>
                </button>
            </div>

            <div className='mt-2'>
                <span className='font-bold'>Booking Code:</span> <span> {booking.bookingCode}</span>

            </div>
            <div className='mt-2'>
                <span className='font-bold'>Title:</span> <span>{booking.title}</span>

            </div>
            <div className='mt-2'>
                <span className='font-bold'>FirstName:</span> <span>{booking.firstName}</span>

            </div>
            <div className='mt-2'>
                <span className='font-bold'>LastName: </span> <span>{booking.lastName}</span>

            </div>
            <div className='mt-2'>
                <span className='font-bold'>Email:</span> <span>{booking.email}</span>

            </div>
            <div className='mt-2'>
                <span className='font-bold'>PhoneNumber: </span> <span>{booking.phone}</span>

            </div>
            <div className='mt-2'>
                <span className='font-bold'>CreatedDate:</span> <span>{booking.createdDate}</span>

            </div>
            <div className='mt-2'>
                <span className='font-bold'>BookingDate:</span> <span>{booking.bookingDate}</span>

            </div>
        </div>
    )
}

export default HistoryBookingItem