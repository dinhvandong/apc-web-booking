import React, { useEffect, useState } from 'react'
import HeaderProfile from '../components/HeaderProfile'
import Profile from '../components/Profile'
import BottomNavigation from '../components/BottomNavigation'
import {authenticated, isAuthenticated} from '../services/api';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuthentication = async () => {
          const authentic = await authenticated();
          console.log("authentic", authentic);
          if (!authentic || authentic == null) {
             navigate('/sign-in');
          } else {
            setUser(authentic);
          }
        };
          // eslint-disable-next-line react-hooks/exhaustive-deps
        checkAuthentication();
      }, []);
    return (
        <div
            className={`min-h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}

        >      
           {user!= null && <HeaderProfile  firstName =  {user.firstName} lastName = { user.lastName}  />} 
            <Profile />
            <BottomNavigation selected={"account"} />
        </div>
    )
}

export default ProfilePage