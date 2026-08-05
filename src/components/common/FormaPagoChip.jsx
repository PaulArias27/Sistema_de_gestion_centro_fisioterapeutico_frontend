import { Chip } from "@mui/material";

function FormaPagoChip({ formaPago }) {

    const configuracion = {

        EFECTIVO: {
            label: "Efectivo",
            color: "success",
        },

        TRANSFERENCIA: {
            label: "Transferencia",
            color: "info",
        },

        TARJETA: {
            label: "Tarjeta",
            color: "secondary",
        },

        DEPOSITO: {
            label: "Depósito",
            color: "warning",
        },

        BILLETERA_MOVIL: {
            label: "Billetera móvil",
            color: "primary",
        },

    };

    const chip =
        configuracion[formaPago] || {

            label: formaPago,

            color: "default",

        };

    return (

        <Chip

            label={chip.label}

            color={chip.color}

            size="small"

            variant="filled"

        />

    );

}

export default FormaPagoChip;