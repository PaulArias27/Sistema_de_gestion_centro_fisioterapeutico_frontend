import { useEffect, useState } from "react";
import * as sesionService from "../services/sesionService";

function useSesiones() {

    const [sesiones, setSesiones] = useState([]);
    const [loading, setLoading] = useState(false);

    const obtenerSesiones = async () => {

        try {

            setLoading(true);

            const data = await sesionService.obtenerSesiones();

            setSesiones(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        const cargar = async () => {

            await obtenerSesiones();

        };

        cargar();

    }, []);

    const guardarSesion = async (data) => {

        await sesionService.crearSesion(data);

        await obtenerSesiones();

    };

    const actualizarSesion = async (id, data) => {

        await sesionService.actualizarSesion(id, data);

        await obtenerSesiones();

    };

    const registrarRealizada = async (id) => {

        await sesionService.marcarRealizada(id);

        await obtenerSesiones();

    };

    const reprogramarSesion = async (id, data) => {

        await sesionService.reprogramarSesion(id, data);

        await obtenerSesiones();

    };

    const cancelarSesion = async (id) => {

        await sesionService.cancelarSesion(id);

        await obtenerSesiones();

    };

    const registrarNoAsistio = async (id) => {

        await sesionService.marcarNoAsistio(id);

        await obtenerSesiones();

    };

    return {

        sesiones,
        loading,

        obtenerSesiones,

        guardarSesion,
        actualizarSesion,

        registrarRealizada,
        reprogramarSesion,
        cancelarSesion,
        registrarNoAsistio,

    };

}

export default useSesiones;