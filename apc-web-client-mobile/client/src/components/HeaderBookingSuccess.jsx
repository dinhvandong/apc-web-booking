import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate} from 'react-router-dom';
const HeaderBookingSuccess = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        // Add your logic here for handling the back button click
        console.log("Back button clicked");
        navigate("/home");

      };
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full p-4 bg-white">
            <button className="mr-5 font-bold text-brown_color" onClick={handleBackClick}>
                Done
                {/* Add your back icon here */}
                {/* <FaArrowLeft className='text-red-600' /> */}
            </button>
            <h1 className="text-xl font-bold">Payment Process</h1>
            <div className="mr-4"></div> {/* Add any other elements on the right side */}
        </header>
    )
}

export default HeaderBookingSuccess