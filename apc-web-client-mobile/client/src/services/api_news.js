
import { API_URL } from './api';
import axios from 'axios';

export const findNewsById = async (id) => {

    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/news/findById?id=${id}`, {
        withCredentials: true,
      });
      
      return response.data.data;
    } catch (error) {
      throw error;
    }
  
  }