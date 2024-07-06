
import React, { useState } from 'react'
import forgot_password from '../assets/forgot-password-icon.png';
import { useNavigate } from 'react-router-dom';
const ForgotPassword1Page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const navigate = useNavigate();
    const gotoHomePage = async () => {

        const response = await requestForgotPassword(email);

        if(response != null){

            navigate(`/forgot-password2/${email}`);

        }else {

            alert("Email is invalid");
        }

        
    }
    return (
        <div
            className={`min-h-screen bg-[#bbbbbf] bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}

        >

            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 bg-white">

                <h1 className="text-xl font-bold">{"Forgot Password"}</h1>
            </header>

            <div className='flex flex-col items-center justify-center w-full h-screen bg-white'>

                <form className='flex flex-col items-center justify-center px-5 py-5'>
                    <img src={forgot_password} className='w-[150px] h-[150px]' />

                    <div>

                        <p>
                            Forgot Password?
                        </p>

                        <br />
                        No worries, we'll send a 6-digit code to your email.
                        <br />

                        Enter code to reset your password.
                    </div>

                    <div className="flex flex-col w-full md:w-[600px] mt-4 mb-4">
                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">Email</label>
                        <input
                            type="text"
                            id="email"
                            className="w-full px-3 py-1 border border-gray-300 rounded"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <button onClick={gotoHomePage} className='text-white w-full md:w-[600px] m-5 py-2 rounded bg-[#B77855]'> Send Code</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword1Page