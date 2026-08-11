import axiosClient from "./axiosClient";

export async function getEvaluaciones() {

    const response = await axiosClient.get("/evaluaciones");

    return response.data.data;

}

export async function getEvaluacionById(id) {

    const response = await axiosClient.get(`/evaluaciones/${id}`);

    return response.data.data;

}

export async function createEvaluacion(data) {

    const response = await axiosClient.post("/evaluaciones", data);

    return response.data.data;

}

export async function updateEvaluacion(id, data) {

    const response = await axiosClient.put(`/evaluaciones/${id}`, data);

    return response.data.data;

}

export async function inactivarEvaluacion(id) {

    const response = await axiosClient.patch(
        `/evaluaciones/${id}/inactivar`
    );

    return response.data;

}