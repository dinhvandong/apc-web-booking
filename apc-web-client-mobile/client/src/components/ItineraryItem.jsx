import React from 'react';
import bg from '../assets/img_bg.png';
import { useNavigate } from 'react-router-dom';
import { API_URL_IMAGE } from '../services/api';

const ItineraryItem = ({ news }) => {
  const navigate = useNavigate();

  const gotoNewsDetail = () => {
    //        navigate('/plan-cruise/1');

    navigate(`/itinerary-detail/${news.id}`);
  }
  return (
    <div className='flex flex-col '>
      <div className="px-3 bg-white">
        <img onClick={gotoNewsDetail} src={API_URL_IMAGE + news.thumb} alt={news.title} className="w-full h-auto rounded hover:cursor-pointer" />

        {/* <img src={news.image} alt={news.title} className="w-full h-auto rounded" /> */}

        {/* <div className='flex px-4 mt-2 '>
          <div className='w-1/3'>
            <p>Travel Guide</p>
          </div>
          <div className='w-1/3'>
            <p>5-minute read</p>
          </div>
          <div className='w-1/3'>
            <p>15th March 2023</p>
          </div>
        </div> */}
      </div>

      <h2 className="flex px-4 mt-2 text-xl font-semibold">{news.title}</h2>
      <p className='flex px-4 mt-2 text-gray-600'>{news.desc}</p>

    </div>

  );
};


export default ItineraryItem