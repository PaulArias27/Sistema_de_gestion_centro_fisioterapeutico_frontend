import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Agregar automáticamente el JWT
axiosClient.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

export default axiosClient;