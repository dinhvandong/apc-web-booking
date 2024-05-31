import React, { useState } from 'react';
import icon from '../assets/icon_ambassador.png';
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import HeaderGallery from './HeaderGallery';
import HeaderVideoPlayer from './HeaderVideoPlayer';

const VideoPlayer = ({ videos }) => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (event) => {
    const { clientX: startX, clientY: startY } = event.touches[0];
    let endX, endY;

    const handleTouchMove = (e) => {
      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const diffX = endX - startX;
      const diffY = endY - startY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else if (diffX < 0 && currentIndex < videos.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }

      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  return (
    <div className="flex flex-col w-full h-full " onTouchStart={handleSwipe}>
      <div className=" absolute flex justify-between items-center mb-[50px] h-[150px] px-5">
          <HeaderVideoPlayer/>
      </div>
      <video controls autoPlay className="w-full mb-[10px] h-screen"
        src={videos[currentIndex]}
        key={currentIndex}

      // src={videoUrl}
      >



      </video>



      <div className="flex justify-between items-center mb-[50px] h-[150px] px-5">
        {/* <div className='w-5 h-5 bg-yellow-600'></div> */}

        <GrCaretPrevious onClick={handlePrevious} className='w-5 h-5 text-white' />

        <div className='flex items-center justify-center w-full h-full'>
          <div>
            <img src={icon} className="h-8 w-9" alt="Ambassador Icon" />
          </div>
          <div className="flex flex-col justify-center ml-5 text-white">
            <p className="text-left">Ambassador Cruise</p>
            <p className="text-left">My Trips</p>
          </div>

        </div>

        <GrCaretNext onClick={handleNext} className='w-5 h-5 text-white' />
      </div>
      {/* <div className='absolute flex flex-col justify-end w-full h-full'>
        
      </div> */}

    </div>
  );
};

export default VideoPlayer;