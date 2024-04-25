import React from 'react'
import bg_signin from '../assets/bg_signin.png'
import bg_signin2 from '../assets/background-profile1.png'
import iconBooking from '../assets/icon-menu1.png';
const Profile = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-[1000px] p-5 overflow-y-auto' style={{
            backgroundImage: `url(${bg_signin})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

            <div className='text-white w-full md:w-[600px]'>

                <p>
                    Get access to latest offers and easily plan your group booking!
                </p>
            </div>

            <div className='mt-5 bg-white rounded justify-center items-center flex flex-col w-full m-5 p-2 md:m-5 md:w-[600px]'>

                <img src={iconBooking} className='w-[50px] h-[50px]' />

                <div className='mt-4 text-black'>
                    <p>
                        Manage Booking
                    </p>

                </div>


            </div>

            <div className=' md:w-[600px] w-full flex flex-row items-center justify-center mt-5 rounded'>

                <div className='w-1/2 items-center flex rounded h-[60px] md:w-[300px] bg-white'>

                    <img src={iconBooking} className='w-6 h-6 ml-2' />
                    <div className='ml-5'><p>Manage-Sub User</p>
                    </div>
                </div>
                <div className='w-1/2 flex items-center rounded h-[60px] md:w-[300px] ml-5 bg-white '>
                    <img src={iconBooking} className='w-6 h-6 ml-2' />
                    <div className='ml-5'><p>Promotion</p>
                    </div>
                </div>

            </div>

            <div className=' md:w-[600px] w-full flex flex-row items-center justify-center mt-5 rounded'>

                <div className='w-1/2 items-center flex rounded h-[60px] md:w-[300px] bg-white'>

                    <img src={iconBooking} className='w-6 h-6 ml-2' />
                    <div className='ml-5'><p>Voucher</p>
                    </div>
                </div>
                <div className='w-1/2 items-center flex rounded h-[60px] md:w-[300px] ml-5 bg-white '>
                    <img src={iconBooking} className='w-6 h-6 ml-2' />
                    <div className='ml-5'><p>Settings</p>
                    </div>
                </div>

            </div>

            <div className='hover:cursor-pointer h-[60px] text-white bg-[#B77855] md:w-[600px] w-full flex flex-row items-center justify-center mt-5 rounded'>
           
           <p>Plan Your Cruise</p>
           
            </div>

            <div className='hover:cursor-pointer h-[60px] text-white bg-[#B77855] md:w-[600px] w-full flex flex-row items-center justify-center mt-5 rounded'>
           
           <p>Upgrade To Business Account</p>
           
            </div>
        </div>);
}

export default Profile