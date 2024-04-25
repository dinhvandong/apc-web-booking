import React from 'react'
import CabinComponent from './CabinComponent';
const ListCabinComponent = ({ data }) => {
    return (
      <div className="flex flex-col w-full">
        {data.map((item) => (
          <CabinComponent key={item.id} image={item.image} text1={item.text1} text2={item.text2} text3={item.text3} />
        ))}
      </div>
    );
  };

  export default ListCabinComponent
