import * as sesionApi from "../api/sesionApi";

export const obtenerSesiones = () =>
    sesionApi.getSesiones();

export const obtenerSesion = (id) =>
    sesionApi.getSesionById(id);

export const crearSesion = (data) =>
    sesionApi.createSesion(data);

export const actualizarSesion = (id, data) =>
    sesionApi.updateSesion(id, data);

export const marcarRealizada = (id) =>
    sesionApi.registrarRealizada(id);

export const reprogramarSesion = (id, data) =>
    sesionApi.reprogramarSesion(id, data);

export const cancelarSesion = (id) =>
    sesionApi.cancelarSesion(id);

export const marcarNoAsistio = (id) =>
    sesionApi.noAsistioSesion(id);