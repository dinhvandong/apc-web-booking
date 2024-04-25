import React from 'react'
const CabinComponent = ({ image, text1, text2, text3 }) => {
    return (
      <div className="flex items-start w-full mb-4">
        <img src={image} className='w-1/2' alt={text1} />
        <div className='flex flex-col w-1/2 ml-5'>
        <p className="text-sm font-bold">{text1}</p>
        <p className="text-[10px] mt-2">{text2}</p>
        <p className="mt-2 text-sm font-bold">{text3}</p>

        </div>

      </div>
    );
  };
  export default CabinComponent
