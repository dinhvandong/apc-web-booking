import axios from "axios";
import { API_URL } from "./api";

export const createGallery = async (news) => {
    try {
      const response = await axios.post(`${API_URL}/galleryFolder/insert`,
      news)
      return response.data;
    } catch (error) 
    {
      throw error;
    }
  };


  export const updateGallery = async (news) => {
    try {
      const response = await axios.post(`${API_URL}/galleryFolder/update`,
      news)
      return response.data;
    } catch (error) 
    {
      throw error;
    }
  };

  export const deleteGallery = async (news) => {
    try {
      const response = await axios.post(`${API_URL}/galleryFolder/update`,
      news)
      return response.data;
    } catch (error) 
    {
      throw error;
    }
  };


  export const getGallery = async () => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/galleryFolder/findAll`, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  
  }


  export const getGalleryItemsById = async (galleryID) => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/galleryFolder/findAllGalleryItems?galleryID=${galleryID}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const findGalleryById = async (id) => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/galleryFolder/findById?id=${id}`, {
        withCredentials: true,
      });
      
      return response.data.data;
    } catch (error) {
      throw error;
    }
  
  }
  