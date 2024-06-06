import React from 'react';
import bg from '../assets/img_bg.png';
import { useNavigate } from 'react-router-dom';
import { API_URL_IMAGE } from '../services/api';
import Notification from './Notification';
import menuIcon from '../assets/icon-menu5.png';

const NotificationItem = ({ news }) => {
  const navigate = useNavigate();

  const gotoNewsDetail = () => {
    //        navigate('/plan-cruise/1');

    navigate(`/news-detail/${news.id}`);
  }
  return (
    <div className='flex items-center justify-center w-full px-4'>
      <img src= {menuIcon} className='w-[35px] h-[35px]'/>
      <div className='px-5 text-[14px] flex flex-col w-full'>
        <p className='font-bold text-black'>
          {news.title}
        </p>
        <p className='py-2'>
          {news.content}
        </p>
      </div>

      <div className='flex flex-col  items-center font-bold text-black text-[14px]'>
        <p>{news.date}</p>
        <div className='w-2 h-2 mt-5 bg-red-600 rounded-full'>

        </div>
      </div>
    </div>

  );
};

export default NotificationItem;