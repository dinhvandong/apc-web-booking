import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({
    customerName: '',
    firstName:'',
    lastName: '',
    country:'',
    countryCode:'',
    phone:'',
    email:'',
    adult: 1,
    children: 0,
    infant:0,
    price: 0,
    typeBooking: 'daycruise',
  });
  const [userInfo, setUserInfo] = useState(null);
  const updateBookingInfo = (newBookingInfo) => {
    setBookingInfo(newBookingInfo);
  };
  const signIn = (token, user) => {
    setToken(token);
    setUserInfo(user);
  };

  const logout = () => {
    setToken(null);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ token, userInfo, signIn, logout, bookingInfo, updateBookingInfo }}>
      {children}
    </AuthContext.Provider>
  );
};