import axiosClient from "./axiosClient";

export async function getSesiones() {
    const response = await axiosClient.get("/sesiones");
    return response.data.data;
}

export async function getSesionById(id) {
    const response = await axiosClient.get(`/sesiones/${id}`);
    return response.data.data;
}

export async function createSesion(data) {
    const response = await axiosClient.post("/sesiones", data);
    return response.data.data;
}

export async function updateSesion(id, data) {
    const response = await axiosClient.put(`/sesiones/${id}`, data);
    return response.data.data;
}

export async function registrarRealizada(id) {
    const response = await axiosClient.patch(
        `/sesiones/${id}/realizada`
    );

    return response.data.data;
}

export async function reprogramarSesion(id, data) {
    const response = await axiosClient.patch(
        `/sesiones/${id}/reprogramar`,
        data
    );

    return response.data.data;
}

export async function cancelarSesion(id) {
    const response = await axiosClient.patch(
        `/sesiones/${id}/cancelar`
    );

    return response.data.data;
}

export async function noAsistioSesion(id) {
    const response = await axiosClient.patch(
        `/sesiones/${id}/no-asistio`
    );

    return response.data.data;
}