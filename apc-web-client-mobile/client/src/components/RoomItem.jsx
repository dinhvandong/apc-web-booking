import React, { useContext, useState } from 'react'
import r_checkbox from '../assets/r_checkbox.png';
import { RiSubtractFill } from 'react-icons/ri';
import { IoIosAdd } from 'react-icons/io';
import { AuthContext } from '../AuthProvider';
import { convertToCurrencyFormat } from '../utils/utils';

const RoomItem = ({ imageSrc, title, description,price, items }) => {
    const { updateService } = useContext(AuthContext);
    const { getAllServices } = useContext(AuthContext);
    const { addService } = useContext(AuthContext);

    const [count, setCount] = useState(0);


    const handleAddRoom = () => {
        setCount(count + 1);
        console.log("title:" + title +" || count:"+ (count+1))
       // updateService(title, count+1);
        addService(title, price, count+1);

        console.log("getAllService:", getAllServices());

    }

    const handleSubRoom = () => {
        if (count > 0) {
            setCount(count - 1);
            //updateService(title, count - 1);
            addService(title, price, count-1);

            console.log("title:" + title +" || count:"+ (count-1))
            console.log("getAllService:", getAllServices());

        }

    }
    return (
        <div className="flex w-full  bg-white py-5 px-2 mt-5 mb-5 md:w-[600px] items-center justify-center">
            <div className="w-full mx-auto ">
                <div className='flex'>

                    <img
                        src={imageSrc}
                        alt="Example Image"
                        className="w-1/3 md:w-[200px] mb-4 rounded-lg"
                    />
                    <div className='ml-5'>
                        <h1 className="mb-4 text-[#B77855] text-2xl font-bold">{title}</h1>
                        <p className="mb-4 text-gray-700">{description}</p>

                        <div className='flex justify-between'>
                            <p className='font-bold text-black'>{convertToCurrencyFormat(price)} VND</p>

                            <div className='flex justify-end ml-5 mr-2'>

                                <div onClick={handleSubRoom} className='text-[16px] mr-2  font-bold'>
                                    <RiSubtractFill  className='hover:cursor-pointer w-[20px] h-[20px] text-[#B77855]' />
                                </div>
                                <div className='mr-2 font-bold'>
                                    <p>{count}</p>
                                </div>
                                <div onClick={handleAddRoom} className='font-bold'>
                                    <IoIosAdd  className='hover:cursor-pointer w-[20px] h-[20px] text-[#B77855]' />
                                </div>


                            </div>


                        </div>
                    </div>


                </div>

                <ul className="pl-6 list-disc ">
                    {items.map((item, index) => (
                        <div className='flex items-center'>
                            <img src={r_checkbox} className='h-[14px] w-[14px]' />

                            <p className='ml-1'>{item.item}</p>

                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RoomItem