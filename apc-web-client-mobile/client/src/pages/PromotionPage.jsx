import React from 'react'
import HeaderNews from '../components/HeaderNews';
import NewsList from '../components/NewsList';
import CategoriesList from '../components/CategoriesList';
import CategoryNewsList from '../components/CategoryNewsList';
import PromotionList from '../components/PromotionList';

const PromotionPage = () => {

    const categories = [
        { name: 'Newest' },
        { name: 'Travel Guide' },
        { name: 'Cruise' },
        { name: 'News' },
    ];
    return (
        <div className='flex flex-col items-center justify-center'>
            <HeaderNews />
            <CategoryNewsList categories={categories} />

            {/* <CategoriesList/> */}
            <PromotionList />
        </div>);
}

export default PromotionPage