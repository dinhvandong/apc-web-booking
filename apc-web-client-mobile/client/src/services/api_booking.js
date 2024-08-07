import axios from "axios";
import { API_URL } from "./api";

export const createBooking = async (booking) => {
  try {
    //const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/booking/insert`,
      booking)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBooking = async (booking) => {
  try {
    //const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/booking/update`,
      booking)
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const addPassenger = async (bookingCode, passengerList) => {

  const headers = {
    'Content-Type': 'application/json'
  };
  try {
    //const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/booking/insertListPassengers?bookingCode=${bookingCode}`,
      passengerList, { headers })
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const addListRoom = async (bookingCode, listRooms) => {
  const headers = {
    'Content-Type': 'application/json'
  };
  try {
    //const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/booking/insertListRoom?bookingCode=${bookingCode}`,
      listRooms, { headers })
    return response.data;
  } catch (error) {
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

export const getBookingsByEmail = async (email) => {

  console.log("Email-Pass2:", email);
  try {
    //const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/booking/findAllByEmail?email=${email}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }

}
export const getBookingByCodeAndLastName = async (bookingCode, lastName) => {

  console.log("BOOKING_CODE:", bookingCode);
  const code = bookingCode.replace(' ', '');
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
  const code = bookingCode.replace(' ', '');
  try {
    //const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/booking/findByBookingCode?bookingCode=` + bookingCode);
    console.log("ZZZZZZ:", response);
    return response.data;
  } catch (error) {
    throw error;
  }

}

