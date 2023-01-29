import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const fakeStoreAPI = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1"
})

fakeStoreAPI.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    // Accedo el token del localStorage:
    const token = localStorage.getItem("token");
    if (token) {
        (config.headers as AxiosHeaders).set("Authorization", 'Bearer ${token}'); 
    }
    return config;
});

export default fakeStoreAPI;