import React from 'react'
import { FiHome, FiSettings } from 'react-icons/fi'
// import btnDayCruise from '../assets/btn-day-cruise.png';
// import btnOvernightCruise from '../assets/btn-overnight-cruise.png';

import btnDayCruise from '../assets/ic_sun.png';
import btnOvernightCruise from '../assets/ic_moon.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = (props) => {

    const navigate = useNavigate();

    const { t } = useTranslation();

    const gotoDayCruise = () => {

        navigate('/plan-cruise/1');
    }
    const gotoDinnerCruise = () => {
        navigate('/plan-cruise/2');
    }
    const { topic, detail } = props;
    return (
        <div className='flex flex-col items-center justify-center mt-5 ml-5 mr-5 text-white'>
            <div className='  w-full md:w-[600px] text-5xl h-[168px] font-bold'>
                <h1>
                    {topic}
                </h1>
            </div>
            <div className='mt-1 w-full md:w-[600px]  h-[96px]'>
                <h4> {detail}
                </h4>
            </div>
            {/* <div>
                <h1>{t('greeting')}</h1>
                <p>{t('message')}</p>
            </div> */}
            <div className="flex justify-center items-center  md:justify-center md:w-[600px] w-full mt-4">
                <button onClick={gotoDayCruise} className=" w-1/2 md:w-[300px] flex items-center space-x-2 text-[14px] md:text-[20px] bg-brown_color text-white px-2 py-3 rounded-lg">
                    <img className='w-[25px] h-[25px]' src={btnDayCruise} />
                    <p>{t('buttonPlansCruise')}</p>
                </button>
                <button onClick={gotoDinnerCruise} className="ml-5 w-1/2 md:w-[300px] flex items-center space-x-2 text-[14px] md:text-[20px] bg-brown_color text-white px-2 py-3 rounded-lg">
                    <img className='w-[25px] h-[25px]' src={btnOvernightCruise} />
                    <p>{t('buttonOvernightCruise')}</p>
                </button>
            </div>


        </div>
    )
}

export default Home