import { Chip } from "@mui/material";

function EstadoFacturaChip({ estado }) {

    const configuracion = {

        EMITIDA: {

            label: "Emitida",

            color: "success",

        },

        PENDIENTE: {

            label: "Pendiente",

            color: "warning",

        },

        ANULADA: {

            label: "Anulada",

            color: "error",

        },

        NO_REQUIERE: {

            label: "No requiere",

            color: "default",

        },

    };

    const chip =
        configuracion[estado] || {

            label: estado,

            color: "default",

        };

    return (

        <Chip

            label={chip.label}

            color={chip.color}

            size="small"

        />

    );

}

export default EstadoFacturaChip;