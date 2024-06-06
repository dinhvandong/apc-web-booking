import React, { useEffect, useState } from 'react'
import HeaderNews from '../components/HeaderNews';
import { findNewsById } from '../services/api_news';
import DisplayContent from '../components/DisplayContent';
import HeaderNewsDetail from '../components/HeaderNewsDetail';
import { useParams } from 'react-router-dom';
import { findPromotionById } from '../services/api_promotion';
import HeaderPromotion from '../components/HeaderPromotion';

const PromotionDetailPage = () => {
  //const id = 19;
  const { id } = useParams();

  const [content, setContent] = useState(null);
  const [promotion, setPromotion] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Make a GET request to your REST API to fetch the content
        const responseValue = await findPromotionById(id);
        setPromotion(responseValue);
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
      <HeaderPromotion />
      <div className="p-4 w-full mt-[100px] md:w-[600px] flex justify-center items-center">

        <DisplayContent htmlContent={content} />
      </div>

      <nav className={`w-full  fixed bottom-0 left-0 right-0  bg-white shadow flex justify-around py-4`}>

        <div className='flex items-center justify-center w-full'>

          <div className='w-full md:w-[600px] flex items-center justify-center'>

            <div className='flex flex-col w-1/2 px-4 font-bold'>
              <p className='text-black'>
                Rate from
              </p>
              <p className='text-brown_color'>
                {promotion!=null? promotion.price:0} USD/person
              </p>

            </div>
            <div className='w-1/2 px-4'>
              <button className='w-full px-5 py-2 text-white rounded-md bg-brown_color'>
                Book Now
              </button>
            </div>

          </div>



        </div>

      </nav>

    </div>);

}

export default PromotionDetailPage