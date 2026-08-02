import { useEffect, useState } from "react";

import {
    obtenerFisioterapeutas,
} from "../services/fisioterapeutaService";

export function useFisioterapeutas() {

    const [fisioterapeutas, setFisioterapeutas] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarFisioterapeutas = async () => {

        try {

            const data =
                await obtenerFisioterapeutas();

            setFisioterapeutas(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

    const fetchFisioterapeutas = async () => {

        await cargarFisioterapeutas();

    };

    fetchFisioterapeutas();

    }, []);

    return {

        fisioterapeutas,

        loading,

        cargarFisioterapeutas,

    };

}