import {

    getTratamientos,
    getTratamientoById,
    createTratamiento,
    updateTratamiento,
    suspenderTratamiento,
    reanudarTratamiento,
    finalizarTratamiento,
    cancelarTratamiento,
    getTratamientosPaciente,
    getTratamientosFisioterapeuta,
    getTratamientosEstado,

} from "../api/tratamientoApi";

/* ===========================
   LISTAR
=========================== */

export async function obtenerTratamientos() {

    return await getTratamientos();

}

/* ===========================
   BUSCAR POR ID
=========================== */

export async function obtenerTratamientoPorId(id) {

    return await getTratamientoById(id);

}

/* ===========================
   REGISTRAR
=========================== */

export async function crearTratamiento(data) {

    return await createTratamiento(data);

}

/* ===========================
   ACTUALIZAR
=========================== */

export async function actualizarTratamiento(

    id,

    data

) {

    return await updateTratamiento(

        id,

        data

    );

}

/* ===========================
   SUSPENDER
=========================== */

export async function suspenderTratamientoServicio(id) {

    return await suspenderTratamiento(id);

}

/* ===========================
   REANUDAR
=========================== */

export async function reanudarTratamientoServicio(id) {

    return await reanudarTratamiento(id);

}

/* ===========================
   FINALIZAR
=========================== */

export async function finalizarTratamientoServicio(id) {

    return await finalizarTratamiento(id);

}

/* ===========================
   CANCELAR
=========================== */

export async function cancelarTratamientoServicio(id) {

    return await cancelarTratamiento(id);

}

/* ===========================
   LISTAR POR PACIENTE
=========================== */

export async function obtenerTratamientosPaciente(

    pacienteId

) {

    return await getTratamientosPaciente(

        pacienteId

    );

}

/* ===========================
   LISTAR POR FISIOTERAPEUTA
=========================== */

export async function obtenerTratamientosFisioterapeuta(

    fisioterapeutaId

) {

    return await getTratamientosFisioterapeuta(

        fisioterapeutaId

    );

}

/* ===========================
   LISTAR POR ESTADO
=========================== */

export async function obtenerTratamientosEstado(

    estado

) {

    return await getTratamientosEstado(

        estado

    );

}