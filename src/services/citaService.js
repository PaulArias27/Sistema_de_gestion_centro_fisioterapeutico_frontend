import * as citaApi from "../api/citaApi";

export const obtenerCitas = () =>
    citaApi.getCitas();

export const obtenerCita = (id) =>
    citaApi.getCitaById(id);

export const crearCita = (data) =>
    citaApi.createCita(data);

export const actualizarCita = (id, data) =>
    citaApi.updateCita(id, data);

export const cancelarCita = (id) =>
    citaApi.cancelarCita(id);