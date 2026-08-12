import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboardService";

function useDashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    const cargarDashboard = async () => {

        try {

            setLoading(true);

            const data = await getDashboard();

            setDashboard(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        const cargar = async () => {

            await cargarDashboard();

        };

        cargar();

    }, []);

    return {

        dashboard,

        loading,

        recargarDashboard: cargarDashboard,

    };

}

export default useDashboard;