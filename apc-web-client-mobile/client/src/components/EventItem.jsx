import React, { useState } from 'react'
import menu1 from '../assets/icon-menu1.png';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { API_URL, API_URL_IMAGE } from './../services/api';
const EventItem = ({ data }) => {

    const [hidden, setHidden] = useState(false);

    const handleHiddenLayout = () => {
        setHidden(!hidden);
    }
    return (
        <div className=' flex flex-col justify-center mt-5  w-full md:w-[600px] h-auto  '>

            <div className='border-[1px] rounded-lg border-[#B2D0C6] flex  justify-center w-full p-5 md:w-[600px]'>
                <img className='w-[50px] h-[50px]' src={API_URL_IMAGE + data.icon} style={{ width: `${parseInt(data.width)}px`, height: `${parseInt(data.height)}px` }} />

                <div className='flex flex-col w-full h-auto ml-5'>
                    <div className='font-bold text-black'>
                        <p>
                            {data.name}
                        </p>
                    </div>

                    <div>
                        <p className='font-thin text-[#9DA4AE]'>
                            {data.subName}
                        </p>
                    </div>

                    {hidden == false ?
                        (
                            <ul className='mt-5'>
                                {data.eventPlanItemList.map((item, index) => (
                                    <li className='flex items-center' key={index}>
                                        {/* <span>{item.icon}</span> */}
                                        {item.icon != null ? <img
                                            src={API_URL_IMAGE + item.icon}
                                            alt="icon"
                                            className={`w-4 h-4 mr-2`} /> : <div></div>}
                                        {
                                            (item.type === 1) ? (<div className='font-bold text-black'>
                                                <p>
                                                    {item.title}
                                                </p>
                                            </div>) : (<p className='font-thin text-[#9DA4AE]'>
                                                {item.title}
                                            </p>)
                                        }

                                    </li>
                                ))}
                            </ul>
                        ) : <ul></ul>
                    }



                    {/* <div className='flex flex-col w-full h-auto mt-5'>
                        <div className='font-bold text-black'>
                            <p>
                                WELCOME DRINK
                            </p>
                        </div>

                        <div>
                            <p className='font-thin text-[#9DA4AE]'>
                                Enjoy your welcome drink upon embarkation
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-col w-full h-auto mt-5'>
                        <div className='font-bold text-black'>
                            <p>
                                DINNER BUFFET
                            </p>
                        </div>

                        <div>
                            <p className='font-thin text-[#9DA4AE]'>
                                Savor one dinner buffet on Ambassador Cruise
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-auto mt-5'>
                        <div className='font-bold text-black'>
                            <p>
                                BEVERAGE
                            </p>
                        </div>

                        <div>
                            <p className='font-thin text-[#9DA4AE]'>
                                Additional fee applied
                            </p>
                        </div>
                    </div> */}
                </div>

                {hidden == false ?
                 (< MdKeyboardArrowUp onClick={handleHiddenLayout} className='hover:cursor-pointer w-[30px] h-[30px] text-brown_color' />
                ) : 
                (< MdKeyboardArrowDown onClick={handleHiddenLayout} className='hover:cursor-pointer w-[30px] h-[30px] text-brown_color' />
                )}

                {/* <img className='w-[50px] h-[50px' src={menu1}/> */}


            </div>



        </div>
    )
}

export default EventItem