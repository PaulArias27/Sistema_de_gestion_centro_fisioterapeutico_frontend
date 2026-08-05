import { useEffect, useState } from "react";

import {
    obtenerSucursalesActivas,
} from "../services/sucursalService";

export function useSucursalesActivas() {

    const [sucursales, setSucursales] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarSucursales = async () => {

        try {

            const data =
                await obtenerSucursalesActivas();

            setSucursales(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

    const cargar = async () => {
        await cargarSucursales();
    };

    cargar();

}, []);

    return {

        sucursales,

        loading,

        cargarSucursales,

    };

}