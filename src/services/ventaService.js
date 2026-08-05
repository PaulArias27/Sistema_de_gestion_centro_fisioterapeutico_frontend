import * as ventaApi from "../api/ventaApi";

export const obtenerVentas = () =>
    ventaApi.getVentas();

export const obtenerVenta = (id) =>
    ventaApi.getVentaById(id);

export const crearVenta = (data) =>
    ventaApi.createVenta(data);

export const actualizarVenta = (id, data) =>
    ventaApi.updateVenta(id, data);

export const eliminarVenta = (id) =>
    ventaApi.deleteVenta(id);

export const confirmarPago = (id) =>
    ventaApi.confirmarPago(id);

export const anularPago = (id) =>
    ventaApi.anularPago(id);

export const emitirFactura = (id) =>
    ventaApi.emitirFactura(id);

export const anularFactura = (id) =>
    ventaApi.anularFactura(id);