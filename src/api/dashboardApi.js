import axiosClient from "./axiosClient";

export const obtenerDashboard = async () => {

    const response = await axiosClient.get("/dashboard");

    return response.data.data;

};