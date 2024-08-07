import React, { useState } from 'react'
import { confirmCodeRequest } from '../services/api';
import { useNavigate } from 'react-router-dom';

const ConfirmRegisterCode = (props) => {
    const navigate = useNavigate();

    const [code, setCode] = useState('');
    const path = props.path;

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }


    const confirmRequest = async (e) =>{
        e.preventDefault();
        const response = await confirmCodeRequest(path, code);
        console.log("Response:", response);
        if (response.success === 200) 
        {
            alert("Completed registration! Please type your email and password to sign-in.");
            navigate('/registration-success');
        } else 
        {
            alert("Registration fail!");
        }
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
                <p>Please provide your secret code from your email.</p>

            </div>
            <div className='mt-2'>
                <p>*Please use English character only</p>
            </div>
            <form className=" px-5  w-full md:w-[600px]   flex flex-col mt-2 md:ml-5 md:mr-5  rounded">

                <div className="flex mt-2 mb-2">

                    <div className='flex flex-col w-full'>
                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">Enter confirmed code from your email*</label>
                        <input
                            type="text"
                            id="code"
                            className="w-full px-3 py-1 border border-gray-300 rounded"
                            value={code}
                            onChange={handleCodeChange}
                        />
                    </div>

                </div>



                <div className='flex flex-col mt-2'>

                    <button onClick={confirmRequest}
                        type="submit"
                        className="bg-[#B77855] text-white w-full px-3 py-2 border rounded mt-2 hover:bg-[#B77855]"
                    >
                        Confirm Code
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ConfirmRegisterCode