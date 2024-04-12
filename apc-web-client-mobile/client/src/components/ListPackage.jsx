import React from 'react'
const ListPackage = ({ items, onItemSelected }) => {
    const handleItemClick = (item) => {
        onItemSelected(item);
    };
    return (
        <ul className="ml-5 list-disc hover:cursor-pointer">
            {items.map((item, index) => (
                <li key={index} className="mb-2" onClick={() => handleItemClick(item)}>{item}</li>
            ))}
        </ul>
    );
};

export default ListPackage;