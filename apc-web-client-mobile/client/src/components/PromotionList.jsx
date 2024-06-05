import React, { useEffect, useState } from 'react';
import newsData from './newsData.json';
import NewsItem from './NewsItem';
import { getNews } from '../services/api_news';
import { getPromotion } from '../services/api_promotion';
import PromotionItem from './PromotionItem';

const PromotionList = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetNewsList = async () => {
      try {
        const newsList = await getPromotion();
        console.log("newsList", newsList);
        setData(newsList);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    };
    fetNewsList();
  }, []);

  return (
    <div className="space-y-4 mt-5 w-full flex flex-col justify-center md:w-[600px]">
      {data.map((news, index) => (
        <PromotionItem key={index} news={news} />
      ))}
    </div>
  );
};

export default PromotionList;