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

import EstadoChip from "../../../components/common/EstadoChip";

function ServicioDetailsDialog({

    open,

    onClose,

    servicio,

}) {

    if (!servicio) return null;

    const ganancia =
        Number(servicio.precioVenta) -
        Number(servicio.precioCosto);

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
                Detalle del Servicio
            </DialogTitle>

            <DialogContent dividers>

                <Grid
                    container
                    spacing={3}
                >

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Código
                        </Typography>

                        <Typography fontWeight={600}>

                            {servicio.codigoServicio}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Estado
                        </Typography>

                        <EstadoChip
                            estado={servicio.activo}
                        />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Divider />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Nombre
                        </Typography>

                        <Typography>

                            {servicio.nombre}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Descripción
                        </Typography>

                        <Typography>

                            {servicio.descripcion}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Sesiones
                        </Typography>

                        <Typography>

                            {servicio.cantidadSesiones}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Precio costo
                        </Typography>

                        <Typography>

                            $
                            {Number(
                                servicio.precioCosto
                            ).toFixed(2)}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Precio venta
                        </Typography>

                        <Typography>

                            $
                            {Number(
                                servicio.precioVenta
                            ).toFixed(2)}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Divider />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Ganancia por servicio
                        </Typography>

                        <Typography
                            fontWeight={700}
                            color="success.main"
                        >

                            $
                            {ganancia.toFixed(2)}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Fecha creación
                        </Typography>

                        <Typography>

                            {new Date(
                                servicio.fechaCreacion
                            ).toLocaleString()}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >
                            Última actualización
                        </Typography>

                        <Typography>

                            {new Date(
                                servicio.fechaActualizacion
                            ).toLocaleString()}

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

export default ServicioDetailsDialog;