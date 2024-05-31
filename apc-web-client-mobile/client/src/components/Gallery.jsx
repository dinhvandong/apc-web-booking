import React, { useEffect, useState } from 'react'
import CategoryGalleryList from './CategoryGalleryList';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const dataFirst = [
        {
            id: 1,
            icon: "https://tse1.mm.bing.net/th?id=OIP.KTaEWBWwiv_LoL3gj3wfuwEyDM&pid=Api&P=0&h=220",
            name: "The Cruise",
            subName: "The 1200-ton steel craft measures 96 meters long",

        }
        // Add more items as needed...
    ];


    const dataSecond = [
        {
            id: 1,
            icon: "https://tse3.mm.bing.net/th?id=OIP.99_n4YKg-P3apQz-V4DaJAHaE7&pid=Api&P=0&h=220",
            name: "The Cruise",
            subName: "The 1200-ton steel craft measures 96 meters long",

        },
        {
            id: 2,
            icon: "https://tse1.mm.bing.net/th?id=OIP.qMIjNKB25042McPTijporAHaE8&pid=Api&P=0&h=220",
            name: "The Cruise",
            subName: "The 1200-ton steel craft measures 96 meters long",

        },
        {
            id: 3,
            icon: "https://tse3.mm.bing.net/th?id=OIP.99_n4YKg-P3apQz-V4DaJAHaE7&pid=Api&P=0&h=220",
            name: "The Cruise",
            subName: "The 1200-ton steel craft measures 96 meters long",

        },
        {
            id: 4,
            icon: "https://awaytocroatia.com/wp-content/uploads/2021/05/Villa-Eli-3.jpg",
            name: "The Cruise",
            subName: "The 1200-ton steel craft measures 96 meters long",

        },
        {
            id: 5,
            icon: "https://tse3.mm.bing.net/th?id=OIP.99_n4YKg-P3apQz-V4DaJAHaE7&pid=Api&P=0&h=220",
            name: "The Cruise",
            subName: "The 1200-ton steel craft measures 96 meters long",

        },
        {
            id: 6,
            icon: "https://tse3.mm.bing.net/th?id=OIP.99_n4YKg-P3apQz-V4DaJAHaE7&pid=Api&P=0&h=220",
            name: "The Cruise",
            subName: "The 1200-ton steel craft measures 96 meters long",

        },
        // Add more items as needed...
    ];

    useEffect(() => {




    }, []);

    const categories = [
        { name: 'The Cruise' },
        { name: 'Cabin' },
        { name: 'Dining' },
        { name: 'Sundeck' },
        { name: 'Spa' },

        // Add more category objects as needed
      ];
      const navigate = useNavigate();

    const gotoGalleryDetail = ()=>{
        navigate('/galleryDetail');
        
    }  
    return (
        <div className='flex flex-col mt-[100px] mb-[100px] bg-[#fff] items-center flex-1 w-full overflow-y-auto'>

            <CategoryGalleryList categories={categories} />

            <div className="flex flex-col md:w-[600px] w-full ">
                {dataFirst.map((item) => (
                    <div onClick={gotoGalleryDetail} key={item.id} className="px-2.5 flex flex-col md:w-[600px] w-full items-center">
                        <img src={item.icon} alt="" className="w-full hover:cursor-pointer" />
                        <span className="mt-2 font-bold text-black">{item.name}</span>
                        <span className="mt-2">{item.subName}</span>

                    </div>
                ))}
            </div>


            <div className="grid grid-cols-2 gap-4 mt-5">
                {dataSecond.map((item) => (
                    <div onClick={gotoGalleryDetail} key={item.id} className="px-2.5 flex flex-col md:w-[292px] w-full items-center">
                        <img src={item.icon} alt="" className="w-full rounded-md hover:cursor-pointer" />
                        <span className="mt-2 font-bold text-black">{item.name}</span>
                        <span className="mt-2">{item.subName}</span>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Gallery