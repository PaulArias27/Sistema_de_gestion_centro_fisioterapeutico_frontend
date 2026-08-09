import {Box, IconButton, Tooltip } from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function TableActions({

    activo,

    onVer,

    onEditar,

    onEliminar,

    onReactivar,

    mostrarReactivar = true,

}) {

    return (

    <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            flexWrap: "nowrap",
        }}
    >

        <Tooltip title="Ver" arrow>
            <IconButton
                color="primary"
                onClick={onVer}
            >
                <VisibilityRoundedIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Editar" arrow>
            <IconButton
                color="warning"
                onClick={onEditar}
            >
                <EditRoundedIcon />
            </IconButton>
        </Tooltip>

        {activo ? (

            <Tooltip title="Inactivar" arrow>
                <IconButton
                    color="error"
                    onClick={onEliminar}
                >
                    <BlockRoundedIcon />
                </IconButton>
            </Tooltip>

        ) : (

            mostrarReactivar && (

                <Tooltip title="Reactivar" arrow>
                    <IconButton
                        color="success"
                        onClick={onReactivar}
                    >
                        <CheckCircleRoundedIcon />
                    </IconButton>
                </Tooltip>

            )

        )}

    </Box>

);

}

export default TableActions;