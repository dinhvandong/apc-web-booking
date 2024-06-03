import React from 'react';
import bg from '../assets/img_bg.png';
import { useNavigate } from 'react-router-dom';

const NewsItem = ({ news }) => {
  const navigate = useNavigate();

  const gotoNewsDetail = ()=>{
    navigate("/news-detail");
  }
  return (
    <div className='flex flex-col'>
      <div className="px-3 bg-white">
      <img onClick={gotoNewsDetail} src={bg} alt={news.title} className="w-full h-auto rounded hover:cursor-pointer" />

        {/* <img src={news.image} alt={news.title} className="w-full h-auto rounded" /> */}
        <h2 className="text-xl font-semibold">{news.title}</h2>
        {/* <p className='text-gray-600'>{news.description}</p> */}
      </div>

      <div className='flex px-4 mt-2 '>
        <div className='w-1/3'>
          <p>Travel Guide</p>
        </div>
        <div className='w-1/3'>
          <p>5-minute read</p>
        </div>
        <div className='w-1/3'>
          <p>15th March 2023</p>
        </div>
      </div>
    </div>

  );
};

export default NewsItem;