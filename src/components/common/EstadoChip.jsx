import { Chip } from "@mui/material";

function EstadoChip({ estado }) {

    const activo =
        estado === "ACTIVO" ||
        estado === true;

    return (

        <Chip
            label={
                activo
                    ? "ACTIVO"
                    : "INACTIVO"
            }
            size="small"
            sx={{
                fontWeight: 600,
                color: "#FFFFFF",
                bgcolor: activo
                    ? "#2E7D32"
                    : "#757575",
            }}
        />

    );

}

export default EstadoChip;