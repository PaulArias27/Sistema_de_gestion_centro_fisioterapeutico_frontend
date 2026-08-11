import { useEffect, useState } from "react";

import * as tratamientoService from "../services/tratamientoService";

function useTratamientos() {

    const [tratamientos, setTratamientos] = useState([]);

    const [loading, setLoading] = useState(false);

    const cargarTratamientos = async () => {

        try {

            setLoading(true);

            const data =
                await tratamientoService.obtenerTratamientos();

            setTratamientos(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        const cargar = async () => {

            await cargarTratamientos();

        };

        cargar();

    }, []);

    const guardarTratamiento = async (data) => {

        await tratamientoService.crearTratamiento(data);

        await cargarTratamientos();

    };

    const actualizarTratamiento = async (

        id,

        data

    ) => {

        await tratamientoService.actualizarTratamiento(

            id,

            data

        );

        await cargarTratamientos();

    };

    const suspenderTratamiento = async (id) => {

        await tratamientoService.suspenderTratamientoServicio(id);

        await cargarTratamientos();

    };

    const reanudarTratamiento = async (id) => {

        await tratamientoService.reanudarTratamientoServicio(id);

        await cargarTratamientos();

    };

    const finalizarTratamiento = async (id) => {

        await tratamientoService.finalizarTratamientoServicio(id);

        await cargarTratamientos();

    };

    const cancelarTratamiento = async (id) => {

        await tratamientoService.cancelarTratamientoServicio(id);

        await cargarTratamientos();

    };

    return {

        tratamientos,

        loading,

        guardarTratamiento,

        actualizarTratamiento,

        suspenderTratamiento,

        reanudarTratamiento,

        finalizarTratamiento,

        cancelarTratamiento,

        cargarTratamientos,

    };

}

export default useTratamientos;