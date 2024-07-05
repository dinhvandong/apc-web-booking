import React, { useRef } from 'react'
import logo from '../assets/icon_ambassador.png';
import icEdit from '../assets/icons8-edit-50.png';
import { useNavigate } from 'react-router-dom';
import ic_copy from '../assets/copy.png';
import ClipboardJS from 'clipboard';

const HistoryBookingItem = ({ booking }) => {
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const gotoBookingDetail = () => {

        navigate('/booking-search/' + booking.bookingCode);

    }
    const handleCopy = () => {

        inputRef.current.select();
        document.execCommand('copy');
        alert('BookingCode copied to clipboard');
        // console.log('Text copied to clipboard');
        // const clipboard = new ClipboardJS('.copy-button');

        // clipboard.on('success', () => {
        //     //   console.log('Text copied to clipboard');
        //     alert('BookingCode copied to clipboard');

        //     clipboard.destroy();
        // });

        // clipboard.on('error', () => {
        //     alert('Error copying text to clipboard');
        //     clipboard.destroy();
        // });
        // const bookingCode = booking.bookingCode;

        // if (navigator.clipboard && navigator.clipboard.writeText) {
        //     navigator.clipboard.writeText(bookingCode)
        //         .then(() => {
        //             alert('BookingCode copied to clipboard');
        //         })
        //         .catch((error) => {
        //             alert('Error copying BookingCode to clipboard');
        //         });
        // } else {
        //     document.execCommand('copy');
        //     console.error('Copying to clipboard is not supported in this browser');
        // }
    };

    console.log("Booking-ITEM:", booking);
    return (
        <div className='flex flex-col px-5 py-5 bg-white rounded-md'>

            <div className='flex items-center justify-between mt-2'>

                <div className='flex items-center font-bold text-brown_color'>
                    < img src={logo} className='w-[35px] h-[35px]' />
                    <p className='ml-3'>AmbassadorDayCruise</p>
                </div>

                <button onClick={gotoBookingDetail} className='flex'>
                    <img src={icEdit} className='w-5 h-5' />
                    <p className='text-brown_color'>Edit Booking</p>
                </button>
            </div>

            <div className='mt-2'>
                <span className='font-bold'>Booking Code:</span> <span>  
                    <input className='w-full'
                    ref={inputRef}
                    type="text"
                    value={booking.bookingCode}
                    readOnly
                    // style={{ position: 'absolute', left: '-9999px' }}
                /></span>

            </div>
            <div className='flex items-center mt-2'>

                <div onClick={handleCopy} className='flex items-center copy-button hover:cursor-pointer'>
                    <div>   <img src={ic_copy} className='w-5 h-5 hover:cursor-pointer' /> </div>
                    <div className='ml-3 font-bold hover:cursor-pointer text-brown_color'>Copy Booking Code</div>
                </div>
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

            <div className='mt-2'>
                <span className='font-bold'>BookingStatus:</span> {booking.status==2?(<span className='font-bold text-green-600'>{'Confirmed'}</span>):(<span className='font-bold text-red-600'>{'Pending'}</span>)}

            </div>

            <div className='mt-2'>
                <span className='font-bold'>Bill:</span> {booking.price} k VND

            </div>
        </div>
    )
}

export default HistoryBookingItem