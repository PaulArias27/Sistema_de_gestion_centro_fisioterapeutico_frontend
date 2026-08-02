import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    Typography,
    Chip,
} from "@mui/material";

function PacienteDetailsDialog({

    open,

    onClose,

    paciente,

}) {

    if (!paciente) return null;

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >

            <DialogTitle>

                Información del Paciente

            </DialogTitle>

            <DialogContent dividers>

                <Grid container spacing={3} mt={1}>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography fontWeight={600}>
                            Nombres
                        </Typography>

                        <Typography>
                            {paciente.nombres}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography fontWeight={600}>
                            Apellidos
                        </Typography>

                        <Typography>
                            {paciente.apellidos}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography fontWeight={600}>
                            Cédula
                        </Typography>

                        <Typography>
                            {paciente.cedula}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography fontWeight={600}>
                            Sexo
                        </Typography>

                        <Typography>
                            {paciente.sexo}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography fontWeight={600}>
                            Celular
                        </Typography>

                        <Typography>
                            {paciente.celular}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography fontWeight={600}>
                            Correo
                        </Typography>

                        <Typography>
                            {paciente.correo}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography fontWeight={600}>
                            Fecha de nacimiento
                        </Typography>

                        <Typography>
                            {paciente.fechaNacimiento}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography fontWeight={600}>
                            Estado
                        </Typography>

                        <Chip
                            label={paciente.estado}
                            color={
                                paciente.estado === "ACTIVO"
                                    ? "success"
                                    : "default"
                            }
                        />

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions>

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

export default PacienteDetailsDialog;