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
  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <Header />
      <Home topic ={topicArray[currentImageIndex]} detail = {detailArray[currentImageIndex]}/>
      <BottomNavigation selected={"home"} />
    </div>

  )
}

export default HomePage