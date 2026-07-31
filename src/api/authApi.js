import axiosClient from "./axiosClient";

export const login = async (credentials) => {
    const response = await axiosClient.post("/auth/login", credentials);
    return response.data;
};

export const logout = async (token) => {
    const response = await axiosClient.post(
        "/auth/logout",
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};