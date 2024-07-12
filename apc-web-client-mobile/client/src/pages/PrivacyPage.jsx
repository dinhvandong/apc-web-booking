import React from 'react'
import HeaderFaq from '../components/HeaderFaq'
import GoogleDocsWebView from '../components/GoogleDocsWebView'
import HeaderTermCondition from '../components/HeaderTermCondition';
import HeaderPrivacyPolicy from '../components/HeaderPrivacyPolicy';
import PDFViewer from '../components/PDFViewer';

const PrivacyPage = () => {
    const googleDocsUrl = 'https://docs.google.com/document/d/1Y5IxbyZP3W1-dADtGhFJHFEGIgqybW1a/edit?usp=sharing&ouid=106104886782372574679&rtpof=true&sd=true';

  return (
    <div className='flex flex-col justify-center'>
       <HeaderPrivacyPolicy/>
       {/* <PDFViewer /> */}
        <GoogleDocsWebView link={googleDocsUrl}/>
    </div>
  )
}

export default PrivacyPage