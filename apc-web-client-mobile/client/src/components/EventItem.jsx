import React from 'react'
import menu1 from '../assets/icon-menu1.png';
import { MdKeyboardArrowUp } from "react-icons/md";
const EventItem = () => {
    return (
        <div className=' flex flex-col justify-center mt-5  w-full md:w-[600px] h-auto  '>

            <div className='border rounded border-base_color flex  justify-center w-full p-5 md:w-[600px]'>
                <img className='w-[50px] h-[50px]' src={menu1} />

                <div className='flex flex-col w-full h-auto ml-5'>
                    <div className='font-bold text-black'>
                        <p>
                            Meal On Board
                        </p>
                    </div>

                    <div>
                    <p className='font-thin text-[#9DA4AE]'>
                            Savor your sumptuous meal on board
                        </p>
                    </div>

                    <div className='flex flex-col w-full h-auto mt-5'>
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
                    </div>
                </div>
                < MdKeyboardArrowUp className='w-[30px] h-[30px] text-brown_color' />
                {/* <img className='w-[50px] h-[50px' src={menu1}/> */}


            </div>



        </div>
    )
}

export default EventItem