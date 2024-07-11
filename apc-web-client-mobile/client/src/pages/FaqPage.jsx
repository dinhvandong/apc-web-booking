import React from 'react'
import HeaderFaq from '../components/HeaderFaq'
import GoogleDocsWebView from '../components/GoogleDocsWebView'

const FaqPage = () => {
    const googleDocsUrl = 'https://docs.google.com/document/d/1n2K7DgG8oeTwT4_Gae94_hNdkZLVTNPF/edit?usp=sharing&ouid=106104886782372574679&rtpof=true&sd=true';

  return (
    <div className='flex flex-col justify-center'>
       <HeaderFaq/>
        <GoogleDocsWebView link={googleDocsUrl}/>
    </div>
  )
}

export default FaqPage