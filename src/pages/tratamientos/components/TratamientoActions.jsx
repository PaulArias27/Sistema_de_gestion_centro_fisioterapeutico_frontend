import {
    IconButton,
    Tooltip,
    Stack,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

function TratamientoActions({

    estado,

    onVer,

    onEditar,

    onSuspender,

    onReanudar,

    onFinalizar,

    onCancelar,

}) {

    return (

        <Stack

            direction="row"

            spacing={0.5}

            justifyContent="center"

        >

            <Tooltip title="Ver">

                <IconButton

                    color="primary"

                    onClick={onVer}

                >

                    <VisibilityRoundedIcon />

                </IconButton>

            </Tooltip>

            {estado === "ACTIVO" && (

                <>

                    <Tooltip title="Editar">

                        <IconButton

                            color="warning"

                            onClick={onEditar}

                        >

                            <EditRoundedIcon />

                        </IconButton>

                    </Tooltip>

                    <Tooltip title="Suspender">

                        <IconButton

                            color="secondary"

                            onClick={onSuspender}

                        >

                            <PauseCircleRoundedIcon />

                        </IconButton>

                    </Tooltip>

                    <Tooltip title="Finalizar">

                        <IconButton

                            color="success"

                            onClick={onFinalizar}

                        >

                            <TaskAltRoundedIcon />

                        </IconButton>

                    </Tooltip>

                    <Tooltip title="Cancelar">

                        <IconButton

                            color="error"

                            onClick={onCancelar}

                        >

                            <CancelRoundedIcon />

                        </IconButton>

                    </Tooltip>

                </>

            )}

            {estado === "SUSPENDIDO" && (

                <>

                    <Tooltip title="Reanudar">

                        <IconButton

                            color="success"

                            onClick={onReanudar}

                        >

                            <PlayCircleRoundedIcon />

                        </IconButton>

                    </Tooltip>

                    <Tooltip title="Cancelar">

                        <IconButton

                            color="error"

                            onClick={onCancelar}

                        >

                            <CancelRoundedIcon />

                        </IconButton>

                    </Tooltip>

                </>

            )}

        </Stack>

    );

}

export default TratamientoActions;