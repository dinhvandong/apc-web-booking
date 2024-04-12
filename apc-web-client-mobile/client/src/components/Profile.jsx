import React from 'react'
import bg_signin from '../assets/bg_signin.png'

const Profile = () => {
    return (
        <div className='justify-center w-full h-full items-center  flex  flex-col' style={{
            backgroundImage: `url(${bg_signin})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        </div>);
}

export default Profile