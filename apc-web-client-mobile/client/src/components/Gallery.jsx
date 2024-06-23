import React, { useEffect, useState } from 'react'
import CategoryGalleryList from './CategoryGalleryList';
import { useNavigate } from 'react-router-dom';
import { API_URL_IMAGE, getGalleries, getGalleriesByCategory } from '../services/api';

const Gallery = () => {
    const categories = [
        { name: 'The Cruise' },
        { name: 'Cabin' },
        { name: 'Dining' },
        { name: 'Sundeck' },
        { name: 'Spa' },

        // Add more category objects as needed
    ];
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const [data, setData] = useState([]);

    const [firstItem, setFirstItem] = useState(null);
    const [remainingItems, setRemainingItems] = useState([]);

    const [category, setCategory] = useState(categories[0].name);


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


    const getGalleryList = async () => {
        const result = await getGalleriesByCategory(category);
        if (result.success === 200) {
            setData(result.data);
            const firstItem = result.data[0];
            const remainingItems = result.data.slice(1);
            console.log("remainItems:", remainingItems);
            setFirstItem(firstItem);
            setRemainingItems(remainingItems);
        }
        else {
        }
    }

    useEffect(() => {

        getGalleryList();




    }, [category]);


    const navigate = useNavigate();

    const gotoGalleryDetail = (id) => {

        console.log("ID:xxxx:" + id);
        navigate('/galleryDetail/' + id);

    }

    const handleChildClick = (item) => {
        setCategory(item.name); // Set the selected item in the parent component's state
        console.log('Selected item:', item);
        // Perform any desired actions in the parent component based on the selected item
    };
    return (
        <div className='flex flex-col mt-[100px] mb-[100px] bg-[#fff] items-center flex-1 w-full overflow-y-auto'>

            <CategoryGalleryList onClick={handleChildClick} categories={categories} />

            <div className="flex flex-col md:w-[600px] w-full ">

                {firstItem != null && (<div onClick={() => gotoGalleryDetail(firstItem.id)} key={firstItem.id} className="px-2.5 flex flex-col md:w-[600px] w-full items-center">
                    <img src={API_URL_IMAGE + firstItem.thumb} alt="" className="w-full max-h-full"
                    />
                    <span className="mt-2 font-bold text-black">{firstItem.topic}</span>
                    <span className="mt-2">{firstItem.shortDesc}</span>

                </div>)}
                {/* {dataFirst.map((item) => (
                    
                ))} */}
            </div>


            <div className="grid grid-cols-2 gap-4 mt-5">
                {remainingItems.length > 0 && remainingItems.map((item) => (
                    <div onClick={() => gotoGalleryDetail(item.id)} key={item.id} className="px-2.5 flex flex-col md:w-[292px] w-full items-center">
                        <img src={API_URL_IMAGE + item.thumb} alt="" className="w-full rounded-md hover:cursor-pointer" />
                        <span className="mt-2 font-bold text-black">{item.topic}</span>
                        <span className="mt-2">{item.shortDesc}</span>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Gallery