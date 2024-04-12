import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={news.image} alt={news.title} className="w-full h-auto rounded" />
      <h2 className="text-xl font-semibold">{news.title}</h2>
      <p className='text-gray-600'>{news.description}</p>
    </div>
  );
};

export default NewsItem;