import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate} from 'react-router-dom';
const HeaderPromotion = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        // Add your logic here for handling the back button click
        console.log("Back button clicked");
        navigate("/home");

      };
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white">
            <button className="mr-5 " onClick={handleBackClick}>
                {/* Add your back icon here */}
                <FaArrowLeft className='text-red-600' />
            </button>
            <h1 className="text-xl font-bold">Promotion</h1>
            <div className="mr-4"></div> {/* Add any other elements on the right side */}
        </header>
    )
}

export default HeaderPromotion