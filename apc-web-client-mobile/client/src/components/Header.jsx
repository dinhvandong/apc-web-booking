import React from 'react'
import logo from '../assets/logo-apc.png'
import { FiHome } from 'react-icons/fi'
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';
import item4 from '../assets/item4.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();


    const gotoGallery = ()=>{
        navigate("/gallery");

    }

    const gotoNotification = ()=>{
        navigate("/notification");

    }


    const gotoTiktok = ()=>{
        navigate("/tiktok");

    }
    return (
        <div className='flex flex-row justify-between w-full mt-4 ml-4 mr-4 '>
            <img className='ml-5 h-[50px] w-[200px]' src={logo} />
            <div className='flex flex-row justify-end mr-5 '>
                <button onClick={gotoGallery} className="flex flex-col items-center text-gray-600">
                    <img className="w-8 h-8 mb-1 text-white" src={item1} />
                </button>
                <button onClick={gotoTiktok} className="flex flex-col items-center text-gray-600">
                    <img className="w-8 h-8 mb-1 text-white" src={item2} />
                </button>
                <button className="flex flex-col items-center text-gray-600">
                    <img className="w-8 h-8 mb-1 text-white" src={item3} />
                </button>
                <button onClick={gotoNotification} className="flex flex-col items-center text-gray-600">
                    <img className="w-8 h-8 mb-1 text-white" src={item4}/>
                </button>
            </div>
        </div>
    )
}

export default Header