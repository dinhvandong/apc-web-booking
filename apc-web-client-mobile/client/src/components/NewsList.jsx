import React from 'react';
import newsData from './newsData.json';
import NewsItem from './NewsItem';

const NewsList = () => {
  return (
    <div className="space-y-4 mt-5">
      {newsData.map((news, index) => (
        <NewsItem key={index} news={news} />
      ))}
    </div>
  );
};

export default NewsList;