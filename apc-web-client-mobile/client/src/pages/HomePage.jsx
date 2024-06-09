import React, { useEffect, useState } from 'react'
import BottomNavigation from '../components/BottomNavigation'
import Header from '../components/Header'
import backgroundImage from '../assets/background1.png';
import Home from '../components/Home';
import bg1 from '../assets/background1.png'
import bg2 from '../assets/background2.png'
import bg3 from '../assets/background3.png'
import bg4 from '../assets/background4.png'
import bg5 from '../assets/background5.png'

import flag_english from '../assets/icon_english.png';
import flag_vietnam from '../assets/icon_vietnam.png';
import flag_korean from '../assets/icon_korean.png';
import flag_chines from '../assets/icon_chines.png';
import { FaCheck } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";


const HomePage = () => {
  const [loaded, setLoaded] = useState(false);
  const [topic, setTopic] = useState('Unveil the Breathtaking Splendor');
  const [detail, setDetail] = useState("Bask in the awe-inspiring beauty of Halong Bay from the Ambassador Cruise's twin sundecks, offering stunning panoramic views that will leave you in awe.");
  const images = [
    bg1,
    bg2,
    bg3,
    bg4,
    bg5
  ];

  const topicArray = [
    "Unveil the Breathtaking Splendor",
    "Indulge in Exquisite Relaxation",
    "Embark on a Gastronomic Journey",
    "Capture Your Timeless Memories",
    "Plan Your Halong Bay Cruise"
  ]
  const detailArray = [
    "Bask in the awe-inspiring beauty of Halong Bay from the Ambassador Cruise's twin sundecks, offering stunning panoramic views that will leave you in awe.",
    "Relax in style amidst the breathtaking scenery of Halong Bay on Ambassador Cruise's premium cabins with stunning mesmerizing views.",
    "Embark on a culinary adventure with Ambassador Cruise, and savor finest flavors while enjoying stunning views and an intimate atmosphere.",
    "Create timeless memories with your loved ones on extraordinary voyage aboard Ambassador Cruise, cherishing every precious moment together.",
    "Uncover the UNESCO World Heritage Site - Halong Bay, embark on the largest premium Ambassador Cruise for an astonishing experience."
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      // setTopic(topicArray[currentImageIndex]);
      // setDetail(detailArray[currentImageIndex]);
      setLoaded(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [visible, setVisible] = useState(false);
  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col px-5 items-center transition-opacity duration-500`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <Header />
      <Home topic={topicArray[currentImageIndex]} detail={detailArray[currentImageIndex]} />
      <BottomNavigation selected={"home"} />

      {visible == true ? (<div className='absolute flex flex-col items-center justify-center w-full h-full bg-black opacity-50'>
      </div>) : <div></div>}


      {
        visible == true ? (<div className='absolute flex flex-col items-center justify-center w-full h-full '>

          <div className='w-[400px] px-5 py-3 bg-white rounded-md'>

            <div className='font-bold text-black mt-6 text-[16px]'>
              Language
            </div>
            <div className='flex w-full mt-7'>

              <img src={flag_english} />
              <p className='w-full ml-5'>English</p>
              <IoCheckmark className='w-6 h-6 text-black' />

            </div>
            <div className='flex w-full mt-7'>

              <img src={flag_vietnam} />
              <p className='w-full ml-5'>Vietnamese</p>
              <IoCheckmark className='w-6 h-6 text-black' />

            </div>
            <div className='flex w-full mt-7'>

              <img src={flag_korean} />
              <p className='w-full ml-5'>Korean</p>
              <IoCheckmark className='w-6 h-6 text-black' />

            </div>

            <div className='flex w-full mb-5 mt-7'>

              <img src={flag_chines} />
              <p className='w-full ml-5'>Chines</p>
              <IoCheckmark className='w-6 h-6 text-black' />

            </div>

          </div>
        </div>) : <div></div>
      }

    </div>

  )
}

export default HomePage