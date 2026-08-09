import axiosClient from "./axiosClient";

export async function getCitas() {

    const response =
        await axiosClient.get("/citas");

    return response.data.data;

}

export async function getCitaById(id) {

    const response =
        await axiosClient.get(`/citas/${id}`);

    return response.data.data;

}

export async function createCita(data) {

    const response =
        await axiosClient.post("/citas", data);

    return response.data.data;

}

export async function updateCita(id, data) {

    const response =
        await axiosClient.put(
            `/citas/${id}`,
            data
        );

    return response.data.data;

}

export async function cancelarCita(id) {

    const response =
        await axiosClient.patch(
            `/citas/${id}/cancelar`
        );

    return response.data;

}