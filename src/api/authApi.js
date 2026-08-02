import axiosClient from "./axiosClient";

export async function login(credentials) {

    const response = await axiosClient.post(
        "/auth/login",
        credentials
    );

    return response.data;

}

export async function logout() {

    const response = await axiosClient.post(
        "/auth/logout"
    );

    return response.data;

}