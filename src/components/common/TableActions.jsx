import { IconButton, Tooltip } from "@mui/material";

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

}) {

    return (

        <>

            <Tooltip title="Ver" arrow>

                <IconButton
                    color="primary"
                    sx={{ mx: 0.3 }}
                    onClick={onVer}
                >
                    <VisibilityRoundedIcon />
                </IconButton>

            </Tooltip>

            <Tooltip title="Editar" arrow>

                <IconButton
                    color="warning"
                    sx={{ mx: 0.3 }}
                    onClick={onEditar}
                >
                    <EditRoundedIcon />
                </IconButton>

            </Tooltip>

            {activo ? (

                <Tooltip title="Inactivar" arrow>

                    <IconButton
                        color="error"
                        sx={{ mx: 0.3 }}
                        onClick={onEliminar}
                    >
                        <BlockRoundedIcon />
                    </IconButton>

                </Tooltip>

            ) : (

                <Tooltip title="Reactivar" arrow>

                    <IconButton
                        color="success"
                        sx={{ mx: 0.3 }}
                        onClick={onReactivar}
                    >
                        <CheckCircleRoundedIcon />
                    </IconButton>

                </Tooltip>

            )}

        </>

    );

}

export default TableActions;