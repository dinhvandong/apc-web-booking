import React, { useState } from 'react';

const TikTokVideo = ({ videoUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`flex  justify-center items-center w-full h-full`}>
      <iframe
        title="TikTok Video"
        src={videoUrl}
        // src={`https://www.tiktok.com/embed/v2/${videoUrl.split('/')[4]}`}
        width="800px"
        height="800px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {!isFullScreen && (
        <button className="full-screen-button" onClick={handleFullScreen}>
          Full Screen
        </button>
      )}
    </div>
  );
};

export default TikTokVideo