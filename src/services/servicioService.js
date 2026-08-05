import * as servicioApi from "../api/servicioApi";

export const obtenerServicios = () =>
    servicioApi.getServicios();

export const obtenerServicio = (id) =>
    servicioApi.getServicioById(id);

export const crearServicio = (data) =>
    servicioApi.createServicio(data);

export const actualizarServicio = (id, data) =>
    servicioApi.updateServicio(id, data);

export const inactivarServicio = (id) =>
    servicioApi.inactivarServicio(id);

export const reactivarServicio = (id) =>
    servicioApi.reactivarServicio(id);

export const obtenerServiciosActivos = () =>
    servicioApi.getServiciosActivos();