import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

let isRedirecting = false;

// Agregar automáticamente el JWT
axiosClient.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

// RESPONSE

axiosClient.interceptors.response.use(

    (response) => response,

    (error) => {

        if (
            error.response?.status === 401 &&
            !isRedirecting
        ) {

            isRedirecting = true;

            localStorage.removeItem("token");

            window.location.href = "/login";
        }

        return Promise.reject(error);

    }

);

export default axiosClient;