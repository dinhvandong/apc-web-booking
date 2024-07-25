import axios from "axios";
import { API_URL } from "./api";

export const createNotification = async (promotion) => {
    try {
      const response = await axios.post(`${API_URL}/notification/insert`,
      promotion)
      return response.data;
    } catch (error) 
    {
      throw error;
    }
  };


  export const updateNotification = async (promotion) => {
    try {
      const response = await axios.post(`${API_URL}/notification/update`,
      promotion)
      return response.data;
    } catch (error) 
    {
      throw error;
    }
  };

  export const deleteNotification = async (promotion) => {
    try {
      const response = await axios.post(`${API_URL}/notification/update`,
      promotion)
      return response.data;
    } catch (error) 
    {
      throw error;
    }
  };


  export const getNotificationList = async () => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/notification/findAll`, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  
  }


  export const findNotificationById = async (id) => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/notification/findById?id=${id}`, {
        withCredentials: true,
      });
      
      return response.data.data;
    } catch (error) {
      throw error;
    }
  
  }
  