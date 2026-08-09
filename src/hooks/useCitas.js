import { useEffect, useState } from "react";

import {
    obtenerCitas,
} from "../services/citaService";

export function useCitas() {

    const [citas, setCitas] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const cargarCitas = async () => {

        try {

            const data =
                await obtenerCitas();

            setCitas(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        Promise.resolve().then(() => {

            cargarCitas();

        });

    }, []);

    return {

        citas,

        loading,

        cargarCitas,

    };

}