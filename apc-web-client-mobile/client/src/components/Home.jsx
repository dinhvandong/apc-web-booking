import React from 'react'
import { FiHome, FiSettings } from 'react-icons/fi'
import btnDayCruise from '../assets/btn-day-cruise.png';
import btnOvernightCruise from '../assets/btn-overnight-cruise.png';

const Home = (props) => {

    const { topic, detail } = props;
    return (
        <div className='justify-center flex flex-col mt-5 ml-5 mr-5 text-white'>
            <div className=' text-5xl h-[168px] font-bold'>
                <h1>
                    {topic}
                </h1>
            </div>
            <div className='mt-1  h-[96px]'>
                <h4> {detail}
                </h4>
            </div>
            <div className="flex justify-between  md:justify-center  w-full mt-4">
                <button className=" w-[160px] flex items-center space-x-2 text-white p-2 rounded">
                   <img src={btnDayCruise}/>
                </button>
                <button className=" w-[160px] flex items-center space-x-2 text-white p-2 rounded">
                    <img src={btnOvernightCruise}/>
                </button>
            </div>


        </div>
    )
}

export default Home