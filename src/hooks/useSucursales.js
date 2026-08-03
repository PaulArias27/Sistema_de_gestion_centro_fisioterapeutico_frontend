import { useEffect, useState } from "react";

import {
    obtenerSucursales,
} from "../services/sucursalService";

export function useSucursales() {

    const [sucursales, setSucursales] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarSucursales = async () => {

        try {

            const data =
                await obtenerSucursales();

            setSucursales(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        Promise.resolve().then(cargarSucursales);

    }, []);

    return {

        sucursales,

        loading,

        cargarSucursales,

    };

}