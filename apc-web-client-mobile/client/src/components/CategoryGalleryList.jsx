import React, { useEffect, useState } from 'react';

const CategoryGalleryList = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isFirst, setIsFirst] = useState(false);

  useEffect(()=>{
    if(!isFirst){
      setSelectedCategory(categories[0]);
      setIsFirst(true);
    }
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex px-2.5 md:text-[14px] text-[12px] w-full md:w-[600px] p-2 bg-white">
      {categories.length>0&& categories.map((category, index) => (
        <div
          key={index}
          className={`px-4 py-2 rounded cursor-pointer ${
            selectedCategory.name === category.name ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryGalleryList