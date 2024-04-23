import React from 'react'
import success_icon from '../assets/signup-success.png';
import { useNavigate } from 'react-router-dom';
const SignUpSuccessPage = () => {

    const navigate = useNavigate();

    const gotoHomePage =()=>{

        navigate('/sign-in');

    }

    return (
        <div
            className={`min-h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}

        >

            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 bg-white">

                <h1 className="text-xl font-bold">{"Sign Up Successful"}</h1>
            </header>

            <div className='flex flex-col items-center justify-center w-full h-screen'>

                <div className='flex flex-col items-center justify-center'>
                    <img src={success_icon} className='w-[150px] h-[150px]' />

                    <div>

                        <p>
                            Thank you for your registration.
                        </p>

                        <br />
                        Continue to enjoy the best on our app.
                    </div>

                    <button onClick={gotoHomePage} className='text-white w-full md:w-[400px] m-5 py-2 rounded bg-[#B77855]'> Back to Home</button>

                </div>

            </div>




        </div>
    )
}

export default SignUpSuccessPage