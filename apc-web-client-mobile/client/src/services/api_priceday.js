import axios from "axios";
import { API_URL} from "./api";

export const getPriceFromMonth = async (monthTime) =>{

    //getPriceFromMonth

    try {
        const response = await axios.get(`${API_URL}/pricetimes/getPriceFromMonth?monthTime=${monthTime}`,
            {
                withCredentials: true,
            })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getPriceFromDateToDate = async (dateFrom, dateTo) =>{
//localhost:8080/api/pricetimes/getPriceFromDate?dateFrom=20240430&dateTo=20240530
    try {
        const response = await axios.get(`${API_URL}/pricetimes/getPriceFromDate?dateFrom=${dateFrom}&dateTo=${dateTo}`,
            {
                withCredentials: true,
            })
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const getPriceByDate = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/pricetimes/getPriceByDate?date=${date}`,
            {
                withCredentials: true,
            })
        return response.data;
    } catch (error) {
        throw error;
    }
}