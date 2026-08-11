import { Chip } from "@mui/material";

function EstadoSesionChip({ estado }) {

    const estados = {

        PROGRAMADA: {

            label: "Programada",

            color: "primary",

        },

        REPROGRAMADA: {

            label: "Reprogramada",

            color: "warning",

        },

        REALIZADA: {

            label: "Realizada",

            color: "success",

        },

        CANCELADA: {

            label: "Cancelada",

            color: "error",

        },

        NO_ASISTIO: {

            label: "No asistió",

            color: "default",

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

export default EstadoSesionChip;