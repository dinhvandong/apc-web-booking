import React, { useEffect, useState } from 'react'
import HeaderHistoryBooking from '../components/HeaderHistoryBooking'
import HistoryBooking from '../components/HistoryBooking'
import BottomNavigation from '../components/BottomNavigation'
import { authenticated } from '../services/api'
import { useNavigate } from 'react-router-dom'

const HistoryBookingPage = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            const authentic = await authenticated();
            console.log("authentic", authentic);
            if (!authentic || authentic == null) {
                setUser(null);
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
            className={`h-auto bg-cover bg-center flex flex-col  bg-[#bbbbbf] items-center transition-opacity duration-500`}>
            <HeaderHistoryBooking />
            <HistoryBooking email={user != null && user.email} />
            <BottomNavigation selected={"menu"} />
        </div>)
}

export default HistoryBookingPage