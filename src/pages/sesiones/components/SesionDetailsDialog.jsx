import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

import EstadoSesionChip from "../../../components/common/EstadoSesionChip";

function SesionDetailsDialog({

    open,

    onClose,

    sesion,

    onRealizar,

    onNoAsistio,

    onReprogramar,

}) {

    if (!sesion) return null;

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >

            <DialogTitle>

                Detalle de la Sesión

            </DialogTitle>

            <DialogContent dividers>

                {/* ====================== */}
                {/* INFORMACIÓN GENERAL */}
                {/* ====================== */}

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                >

                    Información General

                </Typography>

                <Divider sx={{ mb:3 }}/>

                <Grid container spacing={2}>

                    <Grid size={{xs:12,md:6}}>

                        <Typography
                            color="text.secondary"
                        >

                            Código

                        </Typography>

                        <Typography>

                            {sesion.codigoSesion}

                        </Typography>

                    </Grid>

                    <Grid size={{xs:12,md:6}}>

                        <Typography
                            color="text.secondary"
                        >

                            Estado

                        </Typography>

                        <EstadoSesionChip
                            estado={sesion.estado}
                        />

                    </Grid>

                    <Grid size={{xs:12,md:6}}>

                        <Typography
                            color="text.secondary"
                        >

                            Paciente

                        </Typography>

                        <Typography>

                            {sesion.nombrePaciente}

                        </Typography>

                    </Grid>

                    <Grid size={{xs:12,md:6}}>

                        <Typography
                            color="text.secondary"
                        >

                            Fisioterapeuta

                        </Typography>

                        <Typography>

                            {sesion.nombreFisioterapeuta}

                        </Typography>

                    </Grid>

                    <Grid size={{xs:12}}>

                        <Typography
                            color="text.secondary"
                        >

                            Tratamiento

                        </Typography>

                        <Typography>

                            {sesion.codigoTratamiento}

                        </Typography>

                    </Grid>

                </Grid>

                <Divider sx={{my:3}}/>

                {/* ====================== */}
                {/* HORARIO */}
                {/* ====================== */}

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                >

                    Horario

                </Typography>

                <Grid container spacing={2}>

                    <Grid size={{xs:12,md:3}}>

                        <Typography color="text.secondary">

                            Fecha

                        </Typography>

                        <Typography>

                            {sesion.fechaSesion}

                        </Typography>

                    </Grid>

                    <Grid size={{xs:12,md:3}}>

                        <Typography color="text.secondary">

                            Inicio

                        </Typography>

                        <Typography>

                            {sesion.horaInicio}

                        </Typography>

                    </Grid>

                    <Grid size={{xs:12,md:3}}>

                        <Typography color="text.secondary">

                            Fin

                        </Typography>

                        <Typography>

                            {sesion.horaFin}

                        </Typography>

                    </Grid>

                    <Grid size={{xs:12,md:3}}>

                        <Typography color="text.secondary">

                            Duración

                        </Typography>

                        <Typography>

                            {sesion.duracionMinutos} min

                        </Typography>

                    </Grid>

                </Grid>

                <Divider sx={{my:3}}/>

                {/* ====================== */}
                {/* EVA */}
                {/* ====================== */}

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                >

                    Escala EVA

                </Typography>

                <Grid container spacing={2}>

                    <Grid size={{xs:12,md:6}}>

                        <Typography color="text.secondary">

                            EVA Antes

                        </Typography>

                        <Typography>

                            {sesion.evaAntes}

                        </Typography>

                    </Grid>

                    <Grid size={{xs:12,md:6}}>

                        <Typography color="text.secondary">

                            EVA Después

                        </Typography>

                        <Typography>

                            {sesion.evaDespues}

                        </Typography>

                    </Grid>

                </Grid>

                <Divider sx={{my:3}}/>

                {/* ====================== */}
                {/* TÉCNICAS */}
                {/* ====================== */}

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                >

                    Técnicas Aplicadas

                </Typography>

                <Typography>

                    {sesion.tecnicasAplicadas?.join(", ") || "-"}

                </Typography>

                <Divider sx={{my:3}}/>

                {/* ====================== */}
                {/* EVOLUCIÓN */}
                {/* ====================== */}

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                >

                    Evolución Clínica

                </Typography>

                <Typography>

                    {sesion.evolucionClinica || "-"}

                </Typography>

                <Divider sx={{my:3}}/>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                >

                    Observaciones

                </Typography>

                <Typography>

                    {sesion.observaciones || "-"}

                </Typography>

                <Divider sx={{my:3}}/>

                {/* ====================== */}
                {/* PRÓXIMA SESIÓN */}
                {/* ====================== */}

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                >

                    Próxima Sesión

                </Typography>

                <Grid container spacing={2}>

                    <Grid size={{xs:12,md:4}}>

                        <Typography color="text.secondary">

                            Fecha

                        </Typography>

                        <Typography>

                            {sesion.proximaSesion || "-"}

                        </Typography>

                    </Grid>

                    <Grid size={{xs:12,md:8}}>

                        <Typography color="text.secondary">

                            Observaciones

                        </Typography>

                        <Typography>

                            {sesion.proximaSesionObservacion || "-"}

                        </Typography>

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions
                    sx={{
                        justifyContent: "space-between",
                        px: 3,
                        py: 2,
                    }}
                >

                    <Button
                        variant="outlined"
                        color="success"
                        onClick={onRealizar}
                        disabled={
                            sesion.estado === "REALIZADA" ||
                            sesion.estado === "CANCELADA"
                        }
                    >
                        Marcar realizada
                    </Button>

                    <Button
                        variant="outlined"
                        color="warning"
                        onClick={onNoAsistio}
                        disabled={
                            sesion.estado === "REALIZADA" ||
                            sesion.estado === "CANCELADA"
                        }
                    >
                        No asistió
                    </Button>

                    <Button
                        variant="outlined"
                        color="info"
                        onClick={() => onReprogramar(sesion)}
                        disabled={
                            sesion.estado === "REALIZADA" ||
                            sesion.estado === "CANCELADA"
                        }
                    >
                        Reprogramar
                    </Button>

                    <Button
                        variant="contained"
                        onClick={onClose}
                    >
                        Cerrar
                    </Button>

                </DialogActions>

        </Dialog>

    );

}

export default SesionDetailsDialog;