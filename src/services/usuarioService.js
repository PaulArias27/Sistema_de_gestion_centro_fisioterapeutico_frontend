import * as usuarioApi from "../api/usuarioApi";

export const obtenerUsuarios = () =>
    usuarioApi.getUsuarios();

export const obtenerUsuario = (id) =>
    usuarioApi.getUsuarioById(id);

export const crearUsuario = (data) =>
    usuarioApi.createUsuario(data);

export const actualizarUsuario = (id, data) =>
    usuarioApi.updateUsuario(id, data);

export const activarUsuario = (id) =>
    usuarioApi.activarUsuario(id);

export const desactivarUsuario = (id) =>
    usuarioApi.desactivarUsuario(id);

export const cambiarPassword = (id, data) =>
    usuarioApi.cambiarPassword(id, data);