import React, { useEffect, useState } from 'react'
import HeaderNews from '../components/HeaderNews';
import { findNewsById } from '../services/api_news';
import DisplayContent from '../components/DisplayContent';
import HeaderNewsDetail from '../components/HeaderNewsDetail';

const NewsDetailPage = () => {
  const id = 19;
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Make a GET request to your REST API to fetch the content
        const responseValue = await findNewsById(id);
        console.log("JSON_RESPONSE_NEW:", responseValue);
        const contentValue = responseValue.content;
        console.log("contentValue:", contentValue);
        setContent(contentValue);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  const handleContentChange = (content) => {
    setContent(content);
  };


  return (
    <div className='flex flex-col items-center justify-center'>
      <HeaderNewsDetail />
      <div className="p-4 w-full mt-[100px] md:w-[600px] flex justify-center items-center">

      <DisplayContent htmlContent={content} />
      </div>
    </div>);

}

export default NewsDetailPage