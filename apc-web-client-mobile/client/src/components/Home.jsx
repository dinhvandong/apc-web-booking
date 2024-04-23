import React from 'react'
import { FiHome, FiSettings } from 'react-icons/fi'
import btnDayCruise from '../assets/btn-day-cruise.png';
import btnOvernightCruise from '../assets/btn-overnight-cruise.png';

const Home = (props) => {

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
            <div className="flex justify-center items-center  md:justify-center md:w-[600px] w-full mt-4">
                <button className=" w-1/2 md:w-[300px] flex items-center space-x-2 text-white p-2 rounded">
                   <img src={btnDayCruise}/>
                </button>
                <button className=" w-1/2 md:w-[300px] flex items-center space-x-2 text-white p-2 rounded">
                    <img src={btnOvernightCruise}/>
                </button>
            </div>


        </div>
    )
}

export default Home