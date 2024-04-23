import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import apc_badge from '../assets/apc_badge.png';
import { FaArrowRight } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";
const HeaderProfile = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        // Add your logic here for handling the back button click
        console.log("Back button clicked");
        navigate("/home");
    };
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between p-4 bg-white">
            <div className='flex items-center w-1/4 md:w-[200px]'>
                <img src={avatar} className='w-[60px] h-[60px]' />
            </div>
            <div className='flex flex-col w-3/4 md:w-full '>
                <p className='w-full'>Chunie Nguyen</p>
                <div className='w-full md:w-[400px]  bg-[#9DA4AE] rounded-2xl flex p-2 flex-row item-center '>
                    <img src={apc_badge} className='w-[25px] h-[25px]' alt='logo-ambassador-account' />
                    <p> Ambassador Account</p>
                </div>
                <div className="flex flex-row items-center w-full ">
                    <span className="mr-2">Edit Profile</span>
                    <MdKeyboardArrowRight className="text-[#B77855]" size={14} />
                </div>
            </div>
        </header>
    )
}

export default HeaderProfile