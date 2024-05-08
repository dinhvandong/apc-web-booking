import React from 'react'
import r_checkbox from '../assets/r_checkbox.png';
import { RiSubtractFill } from 'react-icons/ri';
import { IoIosAdd } from 'react-icons/io';

const RoomItem = ({ imageSrc, title, description, items }) => {
    return (
        <div className="flex w-full px-4 mt-5 md:w-[600px] items-center justify-center">
            <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                <div className='flex'>

                    <img
                        src={imageSrc}
                        alt="Example Image"
                        className="w-1/2 md:w-[300px] mb-4 rounded-lg"
                    />
                    <div className='ml-2'>
                        <h1 className="mb-4 text-[#B77855] text-2xl font-bold">{title}</h1>
                        <p className="mb-4 text-gray-700">{description}</p>

                        <div className='flex justify-between'>
                            <p className='font-bold text-black'>2500k VND</p>

                            <div className='flex justify-end mr-2'>

                                <div className='text-[16px] mr-5 font-bold'>
                                    <RiSubtractFill  className='w-[20px] h-[20px] text-[#B77855]' />
                                </div>
                                <div className='mr-5 font-bold'>
                                    <p>{"1"}</p>
                                </div>
                                <div className='font-bold'>
                                    <IoIosAdd  className='w-[20px] h-[20px] text-[#B77855]' />
                                </div>


                            </div>


                        </div>
                    </div>


                </div>

                <ul className="pl-6 list-disc">
                    {items.map((item, index) => (
                        <div className='flex'>
                            <img src={r_checkbox} className='h-[18px] w-[16px]' />

                            <p className='ml-1'>{item}</p>

                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RoomItem