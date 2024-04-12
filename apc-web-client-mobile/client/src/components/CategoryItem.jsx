import React from 'react';

const CategoryItem = ({ category }) => {
  return (
    <div className="p-2">
      <h2 className="text-[12px] text-gray-500 font-semibold">{category.name}</h2>
    </div>
  );
};

export default CategoryItem;