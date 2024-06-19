import React, { useState } from 'react'
import imgBg from '../assets/img-bg.png';
import { MdOutlineClose } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const GalleryDetail = ({ arrayImages }) => {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < arrayImages.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const handleClose = () => {
        navigate("/gallery");
    }
    return (
        <div className="flex flex-col  w-full md:w-[600px]" >
            <div className="flex w-full md: w-[600px] h-screen">
                <img src={arrayImages[currentIndex]} key={currentIndex} className="w-full h-screen" />
                <div className='absolute flex flex-col justify-between md:w-[600px] w-full h-screen bg-black opacity-10'>

                </div>
                <div className='absolute flex flex-col justify-between w-full h-full'>

                    <MdOutlineClose onClick={handleClose} className='w-6 h-6 mt-5 ml-5 text-white hover:cursor-pointer' />

                    <div className='flex justify-center items-center  h-[40px] md:w-[600px] w-full bg-black'>
                        <div className='flex absolute opacity-50 h-[40px] md:w-[600px] w-full bg-black'>
                        </div>
                        <div className='flex z-10 justify-center items-center  h-[40px] md:w-[600px] w-full'>
                            <MdArrowBackIos onClick={handlePrevious} className='w-5 h-5 text-white hover:cursor-pointer' />
                            <p className='ml-5 mr-5 font-bold text-white'>{currentIndex + 1} / {arrayImages.length}</p>
                            <GrNext onClick={handleNext} className='w-5 h-5 text-white hover:cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-5 justify-between items-center mb-[150px] px-5">
                <div>
                    <p className='font-bold text-black'>
                        The Cruise
                    </p>
                </div>
                <div>
                    <p>
                        The glittering, sapphire waters provide the perfect backdrop for an unforgettable journey, as the elegant cruise floats through the azure blue sea.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default GalleryDetail