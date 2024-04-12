import React from 'react';
import 'tailwindcss/tailwind.css';
import Iframe from 'react-iframe';

const GoogleDocsWebView = (props) => {
    const {link} = props;

    return (
        <div className="h-screen ml-5 mr-5">
            <Iframe
                url={link}
                className="w-full h-full"
                frameBorder="0"
            />
        </div>
    );
};
export default GoogleDocsWebView;