import React, { useState } from 'react';

const CategoryNewsList = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex mt-[60px] px-2.5 md:text-[14px] text-[12px] w-full md:w-[600px] p-2 bg-white">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`px-4 py-2 rounded cursor-pointer ${
            selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};


export default CategoryNewsList