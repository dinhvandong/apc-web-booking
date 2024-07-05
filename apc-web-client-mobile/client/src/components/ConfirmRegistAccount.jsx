import React, { useState } from 'react'
import { confirmCodeRequest } from '../services/api';
import { useNavigate } from 'react-router-dom';

const ConfirmRegistAccount = () => {
    const navigate = useNavigate();

    
    const confirmRequest = async (e) =>{
        e.preventDefault();
        navigate('/home');

    }
    return (
        <div className='flex bg-white flex-col items-center justify-center  w-full md:w-[600px] flex-grow  h-[1000px] overflow-y-auto'>
            <div className='text-xl font-bold mt-[100px] text-center  text-black'>
                <p>
                    Let's embark on the journey with
                </p>
            </div>

            <div className='mt-1 text-[14px] text-center font-bold text-black'>
                <h1>Ambassador Cruise account!</h1>
            </div>

            <div className='mt-5 text-[24px] font-bold'>
                <h1>CONFIRM SECURE CODE</h1>

            </div>

            <div className='mt-2 ml-4 mr-4'>
                <p>Please check your email and click confirmed link and copy secure code.</p>

            </div>
            <div className='mt-2'>
                <p>*Please check your email to complete your registration</p>
            </div>
            <form className=" px-5  w-full md:w-[600px]   flex flex-col mt-2 md:ml-5 md:mr-5  rounded">



                <div className='flex flex-col mt-2'>

                    <button onClick={confirmRequest}
                        type="submit"
                        className="bg-[#B77855] text-white w-full px-3 py-2 border rounded mt-2 hover:bg-[#B77855]"
                    >
                        OK
                    </button>
                </div>
            </form>
        </div>
    )
}


export default ConfirmRegistAccount