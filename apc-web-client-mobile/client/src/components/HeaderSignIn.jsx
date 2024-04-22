
import React from 'react'
const HeaderSignIn = (props) => {
    const title = props.title;
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 bg-white">
           
            <h1 className="text-xl font-bold">{title}</h1>
        </header>
    )
}


export default HeaderSignIn