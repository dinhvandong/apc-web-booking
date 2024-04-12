import React from 'react';
import categoriesData from './categoriesData.json';
import CategoryItem from './CategoryItem';

const CategoriesList = () => {
  return (
    <div className="flex ml-5 mt-[60px]">
      {categoriesData.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;