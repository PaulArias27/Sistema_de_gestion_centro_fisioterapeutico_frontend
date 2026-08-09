import { Chip } from "@mui/material";

function EstadoCitaChip({ estado }) {

    const estados = {

        PENDIENTE: {

            label: "Pendiente",

            color: "warning",

        },

        CONFIRMADA: {

            label: "Confirmada",

            color: "primary",

        },

        COMPLETADA: {

            label: "Completada",

            color: "success",

        },

        CANCELADA: {

            label: "Cancelada",

            color: "error",

        },

    };

    const config =

        estados[estado] ||

        {

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

export default EstadoCitaChip;