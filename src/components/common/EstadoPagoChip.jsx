import { Chip } from "@mui/material";

function EstadoPagoChip({ estado }) {

    const configuracion = {

        PAGADO: {

            label: "Pagado",

            color: "success",

        },

        PENDIENTE: {

            label: "Pendiente",

            color: "warning",

        },

        ABONADO: {

            label: "Abonado",

            color: "info",

        },

        ANULADO: {

            label: "Anulado",

            color: "error",

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

export default EstadoPagoChip;