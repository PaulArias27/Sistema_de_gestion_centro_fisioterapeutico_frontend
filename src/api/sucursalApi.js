import axiosClient from "./axiosClient";

export async function listarSucursales() {

    const response = await axiosClient.get("/sucursales");

    return response.data.data;

}

export async function obtenerSucursal(id) {

    const response = await axiosClient.get(`/sucursales/${id}`);

    return response.data.data;

}

export async function crearSucursal(data) {

    const response = await axiosClient.post("/sucursales", data);

    return response.data.data;

}

export async function actualizarSucursal(id, data) {

    const response = await axiosClient.put(`/sucursales/${id}`, data);

    return response.data.data;

}

export async function inactivarSucursal(id) {

    const response = await axiosClient.patch(
        `/sucursales/${id}/inactivar`
    );

    return response.data;

}

export async function reactivarSucursal(id) {

    const response = await axiosClient.patch(
        `/sucursales/${id}/reactivar`
    );

    return response.data;

}

export async function listarSucursalesActivas() {

    const response = await axiosClient.get(
        "/sucursales/activas"
    );

    return response.data.data;

}