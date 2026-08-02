import * as pacienteApi from "../api/pacienteApi";

export const obtenerPacientes = () => pacienteApi.getPacientes();

export const obtenerPaciente = (id) =>
    pacienteApi.getPacienteById(id);

export const crearPaciente = (data) =>
    pacienteApi.createPaciente(data);

export const actualizarPaciente = (id, data) =>
    pacienteApi.updatePaciente(id, data);

export const inactivarPaciente = (id) =>
    pacienteApi.inactivarPaciente(id);

export const reactivarPaciente = (id) =>
    pacienteApi.reactivarPaciente(id);