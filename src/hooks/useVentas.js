import { useEffect, useState } from "react";

import {
    obtenerVentas,
} from "../services/ventaService";

export function useVentas() {

    const [ventas, setVentas] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarVentas = async () => {

        try {

            const data = await obtenerVentas();

            setVentas(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        Promise.resolve().then(cargarVentas);

    }, []);

    return {

        ventas,

        loading,

        cargarVentas,

    };

}