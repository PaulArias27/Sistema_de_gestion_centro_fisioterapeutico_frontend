import { useEffect, useState } from "react";

import {
    obtenerServicios,
} from "../services/servicioService";

export function useServicios() {

    const [servicios, setServicios] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarServicios = async () => {

        try {

            const data =
                await obtenerServicios();

            setServicios(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        Promise.resolve().then(() => {

            cargarServicios();

        });

    }, []);

    return {

        servicios,

        loading,

        cargarServicios,

    };

}