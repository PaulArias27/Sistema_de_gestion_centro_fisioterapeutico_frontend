import axiosClient from "./axiosClient";

/* ===========================
   LISTAR
=========================== */

export async function getTratamientos() {

    const response = await axiosClient.get("/tratamientos");

    return response.data.data;

}

/* ===========================
   BUSCAR POR ID
=========================== */

export async function getTratamientoById(id) {

    const response = await axiosClient.get(`/tratamientos/${id}`);

    return response.data.data;

}

/* ===========================
   REGISTRAR
=========================== */

export async function createTratamiento(data) {

    const response = await axiosClient.post(

        "/tratamientos",

        data

    );

    return response.data.data;

}

/* ===========================
   ACTUALIZAR
=========================== */

export async function updateTratamiento(

    id,

    data

) {

    const response = await axiosClient.put(

        `/tratamientos/${id}`,

        data

    );

    return response.data.data;

}

/* ===========================
   SUSPENDER
=========================== */

export async function suspenderTratamiento(id) {

    const response = await axiosClient.patch(

        `/tratamientos/${id}/suspender`

    );

    return response.data.data;

}

/* ===========================
   REANUDAR
=========================== */

export async function reanudarTratamiento(id) {

    const response = await axiosClient.patch(

        `/tratamientos/${id}/reanudar`

    );

    return response.data.data;

}

/* ===========================
   FINALIZAR
=========================== */

export async function finalizarTratamiento(id) {

    const response = await axiosClient.patch(

        `/tratamientos/${id}/finalizar`

    );

    return response.data.data;

}

/* ===========================
   CANCELAR
=========================== */

export async function cancelarTratamiento(id) {

    const response = await axiosClient.patch(

        `/tratamientos/${id}/cancelar`

    );

    return response.data.data;

}

/* ===========================
   LISTAR POR PACIENTE
=========================== */

export async function getTratamientosPaciente(

    pacienteId

) {

    const response = await axiosClient.get(

        `/tratamientos/paciente/${pacienteId}`

    );

    return response.data.data;

}

/* ===========================
   LISTAR POR FISIOTERAPEUTA
=========================== */

export async function getTratamientosFisioterapeuta(

    fisioterapeutaId

) {

    const response = await axiosClient.get(

        `/tratamientos/fisioterapeuta/${fisioterapeutaId}`

    );

    return response.data.data;

}

/* ===========================
   LISTAR POR ESTADO
=========================== */

export async function getTratamientosEstado(

    estado

) {

    const response = await axiosClient.get(

        `/tratamientos/estado/${estado}`

    );

    return response.data.data;

}