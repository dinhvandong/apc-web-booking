import React, { useEffect } from 'react'
import HeaderProfile from '../components/HeaderProfile'
import Profile from '../components/Profile'
import BottomNavigation from '../components/BottomNavigation'
import {isAuthenticated} from '../services/api';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
          const authenticated = await isAuthenticated();
          console.log("authenticated", authenticated);
          if (!authenticated) {
             navigate('/sign-in');
          } else {
          }
        };
          // eslint-disable-next-line react-hooks/exhaustive-deps
        checkAuthentication();
      }, []);
    return (
        <div
            className={`h-screen bg-cover bg-center flex flex-col  items-center transition-opacity duration-500`}

        >      <HeaderProfile />
            <Profile />
            <BottomNavigation selected={"account"} />
        </div>
    )
}

export default ProfilePage