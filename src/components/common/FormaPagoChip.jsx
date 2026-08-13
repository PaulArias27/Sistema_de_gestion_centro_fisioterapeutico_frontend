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

        TARJETA_DEBITO: {
            label: "Tarjeta de débito",
            color: "secondary",
        },

        TARJETA_CREDITO: {
            label: "Tarjeta de crédito",
            color: "primary",
        },

        OTRO: {
            label: "Otro",
            color: "default",
        },

    };

    const chip = configuracion[formaPago] || {

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