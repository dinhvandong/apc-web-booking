import React from 'react'
import HeaderFaq from '../components/HeaderFaq'
import GoogleDocsWebView from '../components/GoogleDocsWebView'

const FaqPage = () => {
    const googleDocsUrl = 'https://docs.google.com/document/d/1ArlhT3bIX7BhIkVi0aDg0bwGYkd4PmVRHvslV_EvO6M/edit?usp=sharing';

  return (
    <div className='justify-center flex flex-col'>
       <HeaderFaq/>
        <GoogleDocsWebView link={googleDocsUrl}/>
    </div>
  )
}

export default FaqPage