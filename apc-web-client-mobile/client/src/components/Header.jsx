import React from 'react'
import logo from '../assets/logo-apc.png'
import { FiHome } from 'react-icons/fi'
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';
import item4 from '../assets/item4.png';


const Header = () => {
    return (
        <div className='justify-between w-full flex flex-row mr-4 ml-4 mt-4 '>
            <img className='ml-5 h-[25px] w-[99px]' src={logo} />
            <div className='justify-end flex flex-row mr-5 '>
                <button className="flex flex-col items-center text-gray-600">
                    <img className="h-8 w-8 mb-1 text-white" src={item1} />
                </button>
                <button className="flex flex-col items-center text-gray-600">
                    <img className="h-8 w-8 mb-1 text-white" src={item2} />
                </button>
                <button className="flex flex-col items-center text-gray-600">
                    <img className="h-8 w-8 mb-1 text-white" src={item3} />
                </button>
                <button className="flex flex-col items-center text-gray-600">
                    <img className="h-8 w-8 mb-1 text-white" src={item4}/>
                </button>
            </div>
        </div>
    )
}

export default Header