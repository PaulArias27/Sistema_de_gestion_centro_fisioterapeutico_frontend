import axiosClient from "./axiosClient";

export async function getVentas() {

    const response = await axiosClient.get("/ventas");

    return response.data.data;

}

export async function getVentaById(id) {

    const response = await axiosClient.get(`/ventas/${id}`);

    return response.data.data;

}

export async function createVenta(data) {

    const response = await axiosClient.post("/ventas", data);

    return response.data.data;

}

export async function updateVenta(id, data) {

    const response = await axiosClient.put(`/ventas/${id}`, data);

    return response.data.data;

}

export async function deleteVenta(id) {

    const response = await axiosClient.delete(`/ventas/${id}`);

    return response.data;

}

export async function confirmarPago(id) {

    const response = await axiosClient.patch(
        `/ventas/${id}/confirmar-pago`
    );

    return response.data.data;

}

export async function anularPago(id) {

    const response = await axiosClient.patch(
        `/ventas/${id}/anular-pago`
    );

    return response.data.data;

}

export async function emitirFactura(id) {

    const response = await axiosClient.patch(
        `/ventas/${id}/emitir-factura`
    );

    return response.data.data;

}

export async function anularFactura(id) {

    const response = await axiosClient.patch(
        `/ventas/${id}/anular-factura`
    );

    return response.data.data;

}