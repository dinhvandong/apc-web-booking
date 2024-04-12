import React from 'react'
import HeaderFaq from '../components/HeaderFaq'
import GoogleDocsWebView from '../components/GoogleDocsWebView'
import HeaderTermCondition from '../components/HeaderTermCondition';

const TermConditionPage = () => {
    const googleDocsUrl = 'https://docs.google.com/document/d/1f5rrOI1v7SvXUeyhOUDWHd2c1gGCCw7UIdRryXOGLDE/edit?usp=sharing';

  return (
    <div className='justify-center flex flex-col'>
       <HeaderTermCondition/>
        <GoogleDocsWebView link={googleDocsUrl}/>
    </div>
  )
}

export default TermConditionPage