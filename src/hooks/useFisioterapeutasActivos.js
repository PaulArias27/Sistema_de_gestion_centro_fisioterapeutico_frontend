import { useEffect, useState } from "react";

import {
    obtenerFisioterapeutasActivos,
} from "../services/fisioterapeutaService";

export function useFisioterapeutasActivos() {

    const [fisioterapeutas, setFisioterapeutas] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarFisioterapeutas = async () => {

        try {

            const data =
                await obtenerFisioterapeutasActivos();

            setFisioterapeutas(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

    const cargar = async () => {
        await cargarFisioterapeutas();
    };

    cargar();

}, []);

    return {

        fisioterapeutas,

        loading,

        cargarFisioterapeutas,

    };

}