import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    Typography,
    Divider,
} from "@mui/material";

import EstadoCitaChip from "../../../components/common/EstadoCitaChip";

function CitaDetailsDialog({

    open,

    onClose,

    cita,

}) {

    if (!cita) return null;

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
        >

            <DialogTitle>

                Detalle de la Cita

            </DialogTitle>

            <DialogContent dividers>

                <Grid container spacing={2}>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography variant="subtitle2">

                            Paciente

                        </Typography>

                        <Typography>

                            {cita.pacienteNombre}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography variant="subtitle2">

                            Fisioterapeuta

                        </Typography>

                        <Typography>

                            {cita.fisioterapeutaNombre}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography variant="subtitle2">

                            Fecha

                        </Typography>

                        <Typography>

                            {cita.fecha}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography variant="subtitle2">

                            Horario

                        </Typography>

                        <Typography>

                            {cita.horaInicio} - {cita.horaFin}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography variant="subtitle2">

                            Duración

                        </Typography>

                        <Typography>

                            {cita.duracionMinutos} minutos

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography variant="subtitle2">

                            Estado

                        </Typography>

                        <EstadoCitaChip

                            estado={cita.estado}

                        />

                    </Grid>

                    <Grid size={12}>

                        <Divider sx={{ my: 2 }} />

                    </Grid>

                    <Grid size={12}>

                        <Typography variant="subtitle2">

                            Tipo de Terapia

                        </Typography>

                        <Typography>

                            {cita.tipoTerapia}

                        </Typography>

                    </Grid>

                    <Grid size={12}>

                        <Typography variant="subtitle2">

                            Motivo de Consulta

                        </Typography>

                        <Typography>

                            {cita.motivoConsulta}

                        </Typography>

                    </Grid>

                    <Grid size={12}>

                        <Typography variant="subtitle2">

                            Observaciones

                        </Typography>

                        <Typography>

                            {cita.observaciones || "-"}

                        </Typography>

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onClose}
                    variant="contained"
                >

                    Cerrar

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default CitaDetailsDialog;