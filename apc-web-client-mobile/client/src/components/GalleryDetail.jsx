import React, { useEffect, useState } from 'react'
import imgBg from '../assets/img-bg.png';
import { MdOutlineClose } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { getGalleryItemsById } from '../services/api_gallery';
import { API_URL_IMAGE } from '../services/api';

const GalleryDetail = ({ id, arrayImages }) => {
    const navigate = useNavigate();
    const [galleryItemList, setGalleryItemList] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < galleryItemList.length - 1) {
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
    useEffect(() => {

        refreshData();

    }, []);
    const refreshData = async () => {
        try {
            const response = await getGalleryItemsById(id);
            console.log("response", response);
            setGalleryItemList(response.data);
            //setUpdateValue(priceList)
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    }

    return (
        <div className="flex flex-col w-full  md:w-[600px] h-auto mb-[150px]" >
            <div className="flex flex-col w-full  md:w-[600px]  h-auto ">
                {galleryItemList.length > 0 && <div className="flex items-center justify-center h-screen">
                        <img src={API_URL_IMAGE + galleryItemList[currentIndex].thumb} key={currentIndex} className="w-auto h-auto" />
                    </div>
                }
                <div className='absolute flex flex-col justify-between w-full  md:w-[600px]  bg-black opacity-10'>
                </div>
                <div className='absolute flex flex-col   md:w-[600px]  w-full h-full'>

                    <MdOutlineClose onClick={handleClose} className='w-6 h-6 mt-5 ml-5 text-white hover:cursor-pointer' />


                </div>


            </div>

            <div className='flex justify-center items-center  h-[40px]  w-full  md:w-[600px]  bg-black'>
                <div className='flex absolute opacity-50 h-[40px] md:w-[600px]   w-full bg-black'>
                </div>
                <div className='flex z-10 justify-center items-center md:w-[600px]  h-[40px]  w-full'>
                    <MdArrowBackIos onClick={handlePrevious} className='w-5 h-5 text-white hover:cursor-pointer' />
                    <p className='ml-5 mr-5 font-bold text-center text-white'>{currentIndex + 1} / {galleryItemList.length}</p>
                    <GrNext onClick={handleNext} className='w-5 h-5 text-white hover:cursor-pointer' />
                </div>
            </div>
            <div className="z-10 flex flex-col mt-5 items-center mb-[150px] px-5">
                <div>
                    <p className='font-bold text-black'>
                        {galleryItemList.length > 0 && galleryItemList[currentIndex].topic}
                    </p>
                </div>
                <div>
                    <p className=''>

                        {galleryItemList.length > 0 && galleryItemList[currentIndex].shortDesc}


                    </p>
                </div>
            </div>
        </div>
    )
}
export default GalleryDetail