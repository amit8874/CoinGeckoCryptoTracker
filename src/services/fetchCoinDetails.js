import axios from "axios";
import axiosInstance from "../helpers/axiosinstance";

export async function fetchCoinDetails(id){
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        
        return response.data

    } catch (error) {
        console.log(error);
        return null;
        
    }
}