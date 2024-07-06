
import React, { useState } from 'react'
import forgot_password from '../assets/forgot-password-icon.png';
import { useNavigate, useParams } from 'react-router-dom';
import { requestChangePassword } from '../services/api';
const ForgotPassword2Page = () => {
    const { email } = useParams();

    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [code, setCode] = useState('');

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const navigate = useNavigate();
    const gotoHomePage = async () => {

        if(password === confirmPassword){

            const response = await requestChangePassword(email, code, password);

            if(response != null)
            {
                alert('Change password successful');
                navigate('/sign-in');
            }else {

                alert("Change password fail");
            }

        }else {

            alert("Password is not equal confirm password");

        }


    }
    return (
        <div
            className={`min-h-screen bg-[#bbbbbf] bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}>
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
                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">Confirm Code</label>
                        <input
                            type="text"
                            id="code"
                            className="w-full px-3 py-1 border border-gray-300 rounded"
                            value={code}
                            onChange={handleCodeChange}
                        />
                    </div>

                    <div className="flex flex-col w-full md:w-[600px] mt-4 mb-4">
                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">New Password</label>
                        <input
                             type="password"
                            id="password"
                            className="w-full px-3 py-1 border border-gray-300 rounded"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div className="flex flex-col w-full md:w-[600px] mt-4 mb-4">
                        <label htmlFor="username" className="text-[14px] block mb-2 text-black">Confirm New Password</label>
                        <input
                            type="password" id="confirmPassword"
                            className="w-full px-3 py-1 border border-gray-300 rounded"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>

                    <button onClick={gotoHomePage} className='text-white w-full md:w-[600px] m-5 py-2 rounded bg-[#B77855]'> Change Password</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword2Page