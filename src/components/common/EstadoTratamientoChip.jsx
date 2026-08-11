import { Chip } from "@mui/material";

function EstadoTratamientoChip({ estado }) {

    const estados = {

        ACTIVO: {

            label: "Activo",

            color: "success",

        },

        SUSPENDIDO: {

            label: "Suspendido",

            color: "warning",

        },

        FINALIZADO: {

            label: "Finalizado",

            color: "primary",

        },

        CANCELADO: {

            label: "Cancelado",

            color: "error",

        },

    };

    const config = estados[estado] || {

        label: estado,

        color: "default",

    };

    return (

        <Chip

            label={config.label}

            color={config.color}

            size="small"

            variant="filled"

        />

    );

}

export default EstadoTratamientoChip;