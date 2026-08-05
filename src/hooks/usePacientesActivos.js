import { useEffect, useState } from "react";

import {
    obtenerPacientesActivos,
} from "../services/pacienteService";

export function usePacientesActivos() {

    const [pacientes, setPacientes] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarPacientes = async () => {

        try {

            const data =
                await obtenerPacientesActivos();

            setPacientes(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        const cargar = async () => {
            await cargarPacientes();
        };

        cargar();

    }, []);

    return {

        pacientes,

        loading,

        cargarPacientes,

    };

}