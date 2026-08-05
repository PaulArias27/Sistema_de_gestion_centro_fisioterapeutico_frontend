import { useEffect, useState } from "react";

import {
    obtenerServiciosActivos,
} from "../services/servicioService";

export function useServiciosActivos() {

    const [servicios, setServicios] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarServicios = async () => {

        try {

            const data =
                await obtenerServiciosActivos();

            setServicios(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

    const cargar = async () => {
        await cargarServicios();
    };

    cargar();

}, []);

    return {

        servicios,

        loading,

        cargarServicios,

    };

}