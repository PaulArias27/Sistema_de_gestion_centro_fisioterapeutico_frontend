import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    Typography,
    Chip,
    Divider,
} from "@mui/material";

function FisioterapeutaDetailsDialog({

    open,
    onClose,
    fisioterapeuta,

}) {

    if (!fisioterapeuta) return null;

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
        >

            <DialogTitle
                sx={{
                    fontWeight: 700,
                }}
            >
                Detalle del fisioterapeuta
            </DialogTitle>

            <DialogContent dividers>

                <Grid
                    container
                    spacing={3}
                >

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Nombres
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {fisioterapeuta.nombres}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Apellidos
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {fisioterapeuta.apellidos}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Cédula
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {fisioterapeuta.cedula}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Celular
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {fisioterapeuta.celular}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Correo electrónico
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {fisioterapeuta.correo}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Especialidad
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {fisioterapeuta.especialidad || "-"}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Número de licencia
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {fisioterapeuta.numeroLicencia}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Divider />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Estado
                        </Typography>

                        <Chip
                            label={fisioterapeuta.estado}
                            sx={{
                                mt: 1,
                                color: "#fff",
                                bgcolor:
                                    fisioterapeuta.estado === "ACTIVO"
                                        ? "#2E7D32"
                                        : "#757575",
                            }}
                        />

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Fecha de creación
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {new Date(
                                fisioterapeuta.fechaCreacion
                            ).toLocaleString()}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Última actualización
                        </Typography>

                        <Typography
                            fontWeight={600}
                        >
                            {fisioterapeuta.fechaActualizacion
                                ? new Date(
                                      fisioterapeuta.fechaActualizacion
                                  ).toLocaleString()
                                : "-"}
                        </Typography>

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

export default FisioterapeutaDetailsDialog;