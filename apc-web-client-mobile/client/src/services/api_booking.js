import axios from "axios";
import { API_URL } from "./api";

export const createBooking = async (booking) => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/booking/insert`,
      booking)
      return response.data;
    } catch (error) 
    {
      throw error;
    }
  };


  export const addPassenger = async (idBooking, passengerList) => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/booking/insertListPassengers?idBooking=${idBooking}`,
        passengerList)
      return response.data;
    } catch (error) 
    {
      throw error;
    }
  };

  export const getBookings = async () => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/booking/findAll`, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  
  }
  export const getBookingByCodeAndLastName = async (bookingCode, lastName) => {

    console.log("BOOKING_CODE:", bookingCode);
    const code = bookingCode.replace(' ','');
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/booking/findByBookingCodeAndLastName?bookingCode=` + bookingCode + `&lastName=${lastName}`);
      console.log("ZZZZZZ:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  
  }

  export const getBookingByCode = async (bookingCode) => {

    console.log("BOOKING_CODE:", bookingCode);
    const code = bookingCode.replace(' ','');
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/booking/findByBookingCode?bookingCode=` + bookingCode);
      console.log("ZZZZZZ:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  
  }
  
  