import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({
    customerName: '',
    firstName: '',
    lastName: '',
    country: '',
    countryCode: '',
    phone: '',
    email: '',
    adult: 1,
    children: 0,
    infant: 0,
    flexibleOrNonRefund: true,
    price: 0,
    cruiseType: 'Day Cruise',
  });
  const [priceDate, setPriceDate] = useState(
    {
      id: 0,
      dateTime: 20240520,
      dateTimeString: "2024/05/20",
      monthTimeString: "202405",
      priceDay: 1500.0,
      priceDayNonRefund: 1300.0,
      priceDinner: 1600.0,
      priceDinnerNonRefund: 1400.0,
      active: true,
      activeDay: true,
      activeDinner: true
    });
  const [userInfo, setUserInfo] = useState(null);
  const updateBookingInfo = (newBookingInfo) => {
    setBookingInfo(newBookingInfo);
  };

  const updatePriceDate = (priceDate) => {
    setPriceDate(priceDate);
  }

  const signIn = (token, user) => {
    setToken(token);
    setUserInfo(user);
  };

  const logout = () => {
    setToken(null);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ token, userInfo, signIn, logout, bookingInfo, updateBookingInfo, priceDate, updatePriceDate }}>
      {children}
    </AuthContext.Provider>
  );
};