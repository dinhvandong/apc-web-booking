import React, { useState } from 'react'
import TikTokVideo from './TiktokVideo';
import SwipeableViews from 'react-swipeable-views';
import VideoPlayer from './VideoPlayer';

const ShortVideoGallery = () => {
  
    // Add more TikTok video URLs as needed


  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChange = (index) => {
    setActiveIndex(index);
  };
  const videoUrl1 = 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4';
  const videoUrl2 = 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4';
  const videoUrl3 = 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4';
  const videoUrl4 = 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4';

  const videos = [
    'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
   ' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
  ]
  return (
    <div className="flex items-center justify-center h-full md:h-screen">
      <VideoPlayer videos={videos} />
    </div>
  );
}

export default ShortVideoGallery 