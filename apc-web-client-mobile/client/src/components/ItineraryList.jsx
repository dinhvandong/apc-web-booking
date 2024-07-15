import React, { useEffect, useState } from 'react';
import newsData from './newsData.json';
import NewsItem from './NewsItem';
import { getNews } from '../services/api_news';
import ItineraryItem from './ItineraryItem';
import { getItinerary } from '../services/api_itinerary';

const ItineraryList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetItineraryList = async () => {
      try {
        const itineraryList = await getItinerary();
        console.log("itineraryList", itineraryList);
        setData(itineraryList);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    };
    fetItineraryList();
  }, []);

  return (
    <div className="space-y-4  mt-5 w-full flex flex-col justify-center md:w-[600px]">
      {data.map((news, index) => (
        <ItineraryItem key={index} news={news} />
      ))}
    </div>
  );
};


export default ItineraryList