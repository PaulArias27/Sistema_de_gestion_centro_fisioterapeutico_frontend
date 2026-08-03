import * as sucursalApi from "../api/sucursalApi";

export const obtenerSucursales = () =>
    sucursalApi.listarSucursales();

export const obtenerSucursal = (id) =>
    sucursalApi.obtenerSucursal(id);

export const crearSucursal = (data) =>
    sucursalApi.crearSucursal(data);

export const actualizarSucursal = (id, data) =>
    sucursalApi.actualizarSucursal(id, data);

export const inactivarSucursal = (id) =>
    sucursalApi.inactivarSucursal(id);

export const reactivarSucursal = (id) =>
    sucursalApi.reactivarSucursal(id);

export const obtenerSucursalesActivas = () =>
    sucursalApi.listarSucursalesActivas();