import React from 'react'
import HeaderNews from '../components/HeaderNews';
import NewsList from '../components/NewsList';
import CategoriesList from '../components/CategoriesList';

const NewsPage = () => {
    return (
        <div className='justify-center flex flex-col'>
            <HeaderNews />
            <CategoriesList/>
            <NewsList/>
        </div>);
}

export default NewsPage