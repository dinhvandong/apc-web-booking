import React, { useEffect, useState } from 'react'
import HeaderNews from '../components/HeaderNews';
import { findNewsById } from '../services/api_news';
import DisplayContent from '../components/DisplayContent';
import HeaderNewsDetail from '../components/HeaderNewsDetail';
import { useParams } from 'react-router-dom';
import { findPromotionById } from '../services/api_promotion';
import HeaderPromotion from '../components/HeaderPromotion';
import HeaderItinerary from '../components/HeaderItinerary';
import { findItineraryById } from '../services/api_itinerary';
import { API_URL_IMAGE } from '../services/api';
import MultiLineSentence from '../components/MultiLineSentence';
import { GoDotFill } from "react-icons/go";

const ItineraryDetailPage = () => {
  //const id = 19;
  const { id } = useParams();
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Make a GET request to your REST API to fetch the content
        const responseValue = await findItineraryById(id);
        setItinerary(responseValue);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);


  return (
    <div className='flex flex-col items-center justify-center'>
      <HeaderItinerary />
      <div className="p-4 flex-col w-full mt-[100px] md:w-[600px] flex">
        <div className='font-bold text-[20px]'>
          <h1>{itinerary != null && itinerary.title}</h1>
        </div>
        <img className='w-full h-auto mt-5' src={itinerary != null && (API_URL_IMAGE + itinerary.thumb)} />

        <div className='flex flex-col'>
          {itinerary != null && itinerary.itemList.map((item, index) => (
            <div className='flex flex-col'>
              <div className='px-5 py-2 w-[200px] mt-5  flex  justify-center font-bold rounded-xl bg-[#B2D0C6]'>
                {
                  item.timer
                }
              </div>
              <div className='p-5'>
                <p>{item.desc}</p>
              </div>

            </div>

          ))}
        </div>

        <div className='flex flex-col'>
          <div className='font-bold'>
            <p>IMPORTANT NOTES</p>
          </div>
          <p>{itinerary != null && itinerary.importanceNotes}</p>
        </div>
        <div className='flex flex-col w-full mt-5'>
          <div className='font-bold'>
            <p>BENEFITS</p>
          </div>
          {/* <MultiLineSentence text={itinerary != null && itinerary.benefits} /> */}

          <div className="flex flex-col">
            {itinerary != null && itinerary.benefits.split('.').map((line, index) => (
                String(line).length > 2 && (<div className='flex items-center ' key={index}>
                <div className='w-[30px] h-[30px] flex justify-center items-center '>
                  <GoDotFill className='w-[10px] h-[10px]' />
                </div>
                <div><p>{line}</p></div>
              </div>)
            ))}
          </div>
          {/* <p>{itinerary != null && itinerary.benefits}</p> */}
        </div>
        <div className='flex flex-col mt-5'>
          <div className='font-bold'>
            <p>INCLUSIONS</p>
          </div>
          {/* <MultiLineSentence text={itinerary != null && itinerary.inclusions} /> */}

          <div className="flex flex-col">
            {itinerary != null && itinerary.inclusions.split('.').map((line, index) => (
                String(line).length > 2 &&(<div className='flex items-center ' key={index}>
                <div className='w-[30px] h-[30px] flex justify-center items-center '>
                  <GoDotFill className='w-[10px] h-[10px]' />
                </div>
                <div ><p>{line}</p>
                </div>
              </div>)
            ))}
          </div>
          {/* <p>{itinerary != null && itinerary.inclusions}</p> */}
        </div>
        <div className='flex flex-col mt-5'>
          <div className='font-bold'>
            <p>EXCLUSIONS</p>
          </div>

          {/* <MultiLineSentence text={itinerary != null && itinerary.exclusions} /> */}

          <div className="flex flex-col">
            {itinerary != null && itinerary.exclusions.split('.').map((line, index) => (

              String(line).length > 2 && (<div className='flex items-center ' key={index}>
                <div className='w-[30px] h-[30px] flex justify-center items-center '>
                  <GoDotFill className='w-[10px] h-[10px]' />
                </div>
                <div ><p>{line}</p></div>

              </div>)

            ))}
          </div>
          {/* <p>{itinerary != null && itinerary.exclusions}</p> */}
        </div>

      </div>
    </div>);

}

export default ItineraryDetailPage