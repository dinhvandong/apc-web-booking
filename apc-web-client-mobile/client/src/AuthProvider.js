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
    priceBase:0,
    payMethod:'PayPal',
    price: 0,
    bookingDate:0,
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

  const [ancillary, setAncillary] = useState()
  const [userInfo, setUserInfo] = useState(null);
  // const updateBookingInfo = (newBookingInfo) => {
  //   setBookingInfo(newBookingInfo);
  // };

  const updateBookingInfo = (updatedFields) => {
    setBookingInfo((prevBookingInfo) => ({
      ...prevBookingInfo,
      ...updatedFields,
    }));
  };

  // const updateBookingInfo = (fieldName, value) => {
  //   setBookingInfo((prevBookingInfo) => ({
  //     ...prevBookingInfo,
  //     [fieldName]: value,
  //   }));
  // };

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


  const [items, setItems] = useState([]);

  const getService = (service) => {
    const item = items.find((item) => item.service === service);
    return item ? item.count : 0;
  };

  const updateService = (service, count) => {
    const updatedItems = items.map((item) => {
      if (item.service === service) {
        return { ...item, count };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const addService = (service, price, count) => {
    // const newItem = { service: service, price:price, count:count };
    // setItems([...items, newItem]);

    const serviceExists = items.some(item => item.service === service);

    if (!serviceExists) {
      const newItem = { service, price, count };
      setItems([...items, newItem]);
    }else {

      updateService(service, count)
    }
  };

  const setArrayService = (newItems) => {
    setItems(newItems);
  };

  const getAllServices = () => {
    return [...items];
  };

  return (
    <AuthContext.Provider value={{
      token, userInfo, signIn, logout, bookingInfo, updateBookingInfo, priceDate, updatePriceDate,
      getService,
      updateService,
      addService,
      setArrayService,
      getAllServices
    }}>
      {children}
    </AuthContext.Provider>
  );
};