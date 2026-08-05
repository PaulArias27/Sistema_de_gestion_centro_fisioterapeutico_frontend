import axiosClient from "./axiosClient";

export async function getServicios() {

    const response = await axiosClient.get("/servicios");

    return response.data.data;

}

export async function getServicioById(id) {

    const response = await axiosClient.get(`/servicios/${id}`);

    return response.data.data;

}

export async function createServicio(data) {

    const response = await axiosClient.post("/servicios", data);

    return response.data.data;

}

export async function updateServicio(id, data) {

    const response = await axiosClient.put(`/servicios/${id}`, data);

    return response.data.data;

}

export async function inactivarServicio(id) {

    const response = await axiosClient.delete(`/servicios/${id}`);

    return response.data;

}

export async function reactivarServicio(id) {

    const response = await axiosClient.patch(
        `/servicios/${id}/reactivar`
    );

    return response.data;

}

export async function getServiciosActivos() {

    const response = await axiosClient.get("/servicios/activos");

    return response.data.data;

}