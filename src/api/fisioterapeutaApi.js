import axiosClient from "./axiosClient";

export async function getFisioterapeutas() {

    const response = await axiosClient.get("/fisioterapeutas");

    return response.data.data;

}

export async function getFisioterapeutaById(id) {

    const response = await axiosClient.get(`/fisioterapeutas/${id}`);

    return response.data.data;

}

export async function createFisioterapeuta(data) {

    const response = await axiosClient.post(
        "/fisioterapeutas",
        data
    );

    return response.data.data;

}

export async function updateFisioterapeuta(id, data) {

    const response = await axiosClient.put(
        `/fisioterapeutas/${id}`,
        data
    );

    return response.data.data;

}

export async function inactivarFisioterapeuta(id) {

    const response = await axiosClient.patch(
        `/fisioterapeutas/${id}/inactivar`
    );

    return response.data;

}

export async function reactivarFisioterapeuta(id) {

    const response = await axiosClient.patch(
        `/fisioterapeutas/${id}/reactivar`
    );

    return response.data;

}