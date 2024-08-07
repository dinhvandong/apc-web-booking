import React from 'react'
import HeaderFaq from '../components/HeaderFaq'
import GoogleDocsWebView from '../components/GoogleDocsWebView'
import HeaderTermCondition from '../components/HeaderTermCondition';

const TermConditionPage = () => {
    const googleDocsUrl = 'https://docs.google.com/document/d/1ooLqyzG8ffOmQfWkmL-I3o7857aD4qsv/edit?usp=sharing&ouid=106104886782372574679&rtpof=true&sd=true';

  return (
    <div className='flex flex-col justify-center'>
       <HeaderTermCondition/>
        <GoogleDocsWebView link={googleDocsUrl}/>
    </div>
  )
}

export default TermConditionPage