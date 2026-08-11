import * as evaluacionApi from "../api/evaluacionApi";

export const obtenerEvaluaciones = () =>
    evaluacionApi.getEvaluaciones();

export const obtenerEvaluacion = (id) =>
    evaluacionApi.getEvaluacionById(id);

export const crearEvaluacion = (data) =>
    evaluacionApi.createEvaluacion(data);

export const actualizarEvaluacion = (id, data) =>
    evaluacionApi.updateEvaluacion(id, data);

export const inactivarEvaluacion = (id) =>
    evaluacionApi.inactivarEvaluacion(id);