import React from 'react'
import HeaderNews from '../components/HeaderNews';
import NewsList from '../components/NewsList';
import CategoriesList from '../components/CategoriesList';
import CategoryNewsList from '../components/CategoryNewsList';
import PromotionList from '../components/PromotionList';
import HeaderPromotion from '../components/HeaderPromotion';

const PromotionPage = () => {

    const categories = [
        { name: 'All' },
        { name: 'Day Cruise' },
        { name: 'Overnight Cruise' }
        ];
    return (
        <div className='flex flex-col items-center justify-center'>
            <HeaderPromotion />
            <CategoryNewsList categories={categories} />

            {/* <CategoriesList/> */}
            <PromotionList />
        </div>);
}

export default PromotionPage