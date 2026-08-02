import { useEffect, useState } from "react";

import { obtenerPacientes } from "../services/pacienteService";

export function usePacientes() {

    const [pacientes, setPacientes] = useState([]);

    const [loading, setLoading] = useState(true);

    const cargarPacientes = async () => {

        try {

            const data = await obtenerPacientes();

            console.log("Pacientes:", data);
            
            setPacientes(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

    const fetchPacientes = async () => {

        await cargarPacientes();

    };

    fetchPacientes();

    }, []);

    return {

        pacientes,

        loading,

        cargarPacientes,

    };

}