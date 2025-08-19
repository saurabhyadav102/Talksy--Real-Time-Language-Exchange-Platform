import axios from "axios";

const Base_URL=import.meta.env.MODE==="development"?"http://localhost:5002/api":"/api";
export const axiosInstance=axios.create({
    baseURL:Base_URL,
    withCredentials:true  //send cookies with the request
})