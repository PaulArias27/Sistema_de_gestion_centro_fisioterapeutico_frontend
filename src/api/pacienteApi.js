import axiosClient from "./axiosClient";

export async function getPacientes() {

    const response = await axiosClient.get("/pacientes");

    return response.data.data;

}

export async function getPacienteById(id) {

    const response = await axiosClient.get(`/pacientes/${id}`);

    return response.data.data;

}

export async function createPaciente(data) {

    const response = await axiosClient.post("/pacientes", data);

    return response.data.data;

}

export async function updatePaciente(id, data) {

    const response = await axiosClient.put(`/pacientes/${id}`, data);

    return response.data.data;

}

export async function inactivarPaciente(id) {

    const response = await axiosClient.patch(`/pacientes/${id}/inactivar`);

    return response.data;

}

export async function reactivarPaciente(id) {

    const response = await axiosClient.patch(
        `/pacientes/${id}/reactivar`
    );

    return response.data;

}