import React from 'react'
const CabinComponent = ({ image, text1, text2, text3 }) => {
    return (
      <div className="flex items-start  mb-4">
        <img src={image} className='w-1/2 md:w-3/10' alt={text1} />
        <div className='flex flex-col ml-2 md:ml-10'>
        <p className="text-sm mt-4 font-bold">{text1}</p>
        <p className="text-[10px] mt-2">{text2}</p>
        <p className="text-sm font-bold mt-2">{text3}</p>

        </div>

      </div>
    );
  };
  export default CabinComponent
