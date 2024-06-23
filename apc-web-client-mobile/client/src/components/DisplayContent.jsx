import React from 'react';

const DisplayContent = ({ htmlContent }) => {
  return <div className='px-5' dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default DisplayContent;