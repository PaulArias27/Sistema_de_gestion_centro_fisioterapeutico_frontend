import * as fisioterapeutaApi from "../api/fisioterapeutaApi";

export const obtenerFisioterapeutas = () =>
    fisioterapeutaApi.getFisioterapeutas();

export const obtenerFisioterapeuta = (id) =>
    fisioterapeutaApi.getFisioterapeutaById(id);

export const crearFisioterapeuta = (data) =>
    fisioterapeutaApi.createFisioterapeuta(data);

export const actualizarFisioterapeuta = (id, data) =>
    fisioterapeutaApi.updateFisioterapeuta(id, data);

export const inactivarFisioterapeuta = (id) =>
    fisioterapeutaApi.inactivarFisioterapeuta(id);

export const reactivarFisioterapeuta = (id) =>
    fisioterapeutaApi.reactivarFisioterapeuta(id);