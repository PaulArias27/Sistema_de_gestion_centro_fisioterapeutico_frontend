import { useEffect, useState } from "react";

import * as evaluacionService from "../services/evaluacionService";

function useEvaluaciones() {

    const [evaluaciones, setEvaluaciones] = useState([]);

    const [loading, setLoading] = useState(false);

    const cargarEvaluaciones = async () => {

        try {

            setLoading(true);

            const data =
                await evaluacionService.obtenerEvaluaciones();

            setEvaluaciones(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        const cargar = async () => {

            await cargarEvaluaciones();

        };

        cargar();

    }, []);

    const guardarEvaluacion = async (data) => {

        await evaluacionService.crearEvaluacion(data);

        await cargarEvaluaciones();

    };

    const actualizarEvaluacion = async (

        id,

        data

    ) => {

        await evaluacionService.actualizarEvaluacion(

            id,

            data

        );

        await cargarEvaluaciones();

    };

    const inactivarEvaluacion = async (id) => {

        await evaluacionService.inactivarEvaluacion(id);

        await cargarEvaluaciones();

    };

    return {

        evaluaciones,

        loading,

        guardarEvaluacion,

        actualizarEvaluacion,

        inactivarEvaluacion,

        cargarEvaluaciones,

    };

}

export default useEvaluaciones;