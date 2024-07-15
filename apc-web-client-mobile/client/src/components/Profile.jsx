import React, { useState } from 'react'
import bg_signin from '../assets/bg_signin.png'
import bg_signin2 from '../assets/background-profile1.png'
import iconBooking from '../assets/icon-menu1.png';
import iconLogout from '../assets/icons8-logout-64.png';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const handleCancel = () => {
        setShowAlert(false);
    };
    const handleLogout = () => {

        localStorage.removeItem('token');
        navigate('/sign-in');
        // Perform logout action
        // ...
    };
    const handleExit = (e) => {
        e.preventDefault();
        setShowAlert(true);
    };

    const gotoManageBooking = () => {
        navigate("/history-booking");

    }
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen p-5 overflow-y-auto' style={{
            backgroundImage: `url(${bg_signin})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

            {
                showAlert && (<div className='absolute flex items-center justify-center w-full h-full'>

                    {showAlert && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="p-6 bg-white rounded">
                                <p className="mb-4">Are you sure you want to logout?</p>
                                <div className="flex justify-center">
                                    <button onClick={handleLogout} className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
                                        Logout
                                    </button>
                                    <button onClick={handleCancel} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>)
            }

            <div className='text-white w-full md:w-[600px]'>

                <p>
                    Get access to latest offers and easily plan your group booking!
                </p>
            </div>

            <div onClick={gotoManageBooking} className='hover:cursor-pointer mt-5 bg-white rounded justify-center items-center flex flex-col w-full m-5 p-2 md:m-5 md:w-[600px]'>

                <img src={iconBooking} className='w-[50px] h-[50px]' />

                <div className='mt-4 text-black hover:cursor-pointer'>
                    <p>
                        Manage Booking
                    </p>

                </div>


            </div>

            {/* <div className=' md:w-[600px] w-full flex flex-row items-center justify-center mt-5 rounded'>

                <div className=' hover:cursor-pointer w-1/2 items-center flex rounded h-[60px] md:w-[300px] bg-white'>

                    <img src={iconBooking} className='w-6 h-6 ml-2' />
                    <div className='ml-5'><p>Manage-Sub User</p>
                    </div>
                </div>
                <div className=' hover:cursor-pointer w-1/2 flex items-center rounded h-[60px] md:w-[300px] ml-5 bg-white '>
                    <img src={iconBooking} className='w-6 h-6 ml-2' />
                    <div className='ml-5'><p>Promotion</p>
                    </div>
                </div>

            </div>

            <div className=' md:w-[600px] w-full flex flex-row items-center justify-center mt-5 rounded'>

                <div className=' hover:cursor-pointer w-1/2 items-center flex rounded h-[60px] md:w-[300px] bg-white'>

                    <img src={iconBooking} className='w-6 h-6 ml-2' />
                    <div className='ml-5'><p>Voucher</p>
                    </div>
                </div>
                <div className=' hover:cursor-pointer w-1/2 items-center flex rounded h-[60px] md:w-[300px] ml-5 bg-white '>
                    <img src={iconBooking} className='w-6 h-6 ml-2' />
                    <div className='ml-5'><p>Settings</p>
                    </div>
                </div>

            </div> */}

            <div onClick={handleExit} className='hover:cursor-pointer h-[60px] text-white bg-[#B77855] md:w-[600px] w-full flex flex-row items-center justify-center mt-5 rounded'>

                <div>
                    <img className='w-[35px] h-[35px] mr-5' src={iconLogout} />
                </div>
                <p>Logout</p>

            </div>
        </div>);
}

export default Profile