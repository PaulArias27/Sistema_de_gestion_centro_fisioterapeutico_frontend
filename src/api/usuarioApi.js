import axiosClient from "./axiosClient";

export async function getUsuarios() {

    const response = await axiosClient.get("/usuarios");

    return response.data.data;

}

export async function getUsuarioById(id) {

    const response = await axiosClient.get(`/usuarios/${id}`);

    return response.data.data;

}

export async function createUsuario(data) {

    const response = await axiosClient.post(
        "/usuarios",
        data
    );

    return response.data.data;

}

export async function updateUsuario(id, data) {

    try {

        const response = await axiosClient.put(
            `/usuarios/${id}`,
            data
        );

        return response.data.data;

    } catch (error) {

        console.log("Status:", error.response?.status);

        console.log("Body:", error.response?.data);

        console.log("Errores:", error.response?.data?.data);

        throw error;

    }

}

export async function activarUsuario(id) {

    const response = await axiosClient.patch(
        `/usuarios/${id}/activar`
    );

    return response.data;

}

export async function desactivarUsuario(id) {

    const response = await axiosClient.patch(
        `/usuarios/${id}/desactivar`
    );

    return response.data;

}

export async function cambiarPassword(
    id,
    data
) {

    const response = await axiosClient.patch(
        `/usuarios/${id}/password`,
        data
    );

    return response.data;

}