import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    Typography,
    Divider,
    Paper,
} from "@mui/material";

import FormaPagoChip from "../../../components/common/FormaPagoChip";
import EstadoPagoChip from "../../../components/common/EstadoPagoChip";
import EstadoFacturaChip from "../../../components/common/EstadoFacturaChip";

function VentaDetailsDialog({

    open,

    onClose,

    venta,

}) {

    if (!venta) return null;

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="md"

        >

            <DialogTitle>

                Detalle de la Venta

            </DialogTitle>

            <DialogContent dividers>

                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Paper sx={{ p: 2 }}>

                            <Typography variant="h6">

                                Información General

                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography>

                                <strong>Código:</strong>{" "}

                                {venta.codigoVenta}

                            </Typography>

                            <Typography>

                                <strong>Fecha:</strong>{" "}

                                {venta.fechaVenta}

                            </Typography>

                            <Typography>

                                <strong>Paciente:</strong>{" "}

                                {venta.paciente}

                            </Typography>

                            <Typography>

                                <strong>Servicio:</strong>{" "}

                                {venta.nombreServicio}

                            </Typography>

                            <Typography>

                                <strong>Fisioterapeuta:</strong>{" "}

                                {venta.fisioterapeuta}

                            </Typography>

                            <Typography>

                                <strong>Sucursal:</strong>{" "}

                                {venta.sucursal}

                            </Typography>

                        </Paper>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Paper sx={{ p: 2 }}>

                            <Typography variant="h6">

                                Información Económica

                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography>

                                <strong>Precio:</strong>{" "}

                                ${Number(
                                    venta.precioUnitario
                                ).toFixed(2)}

                            </Typography>

                            <Typography>

                                <strong>Descuento:</strong>{" "}

                                ${Number(
                                    venta.descuento
                                ).toFixed(2)}

                            </Typography>

                            <Typography>

                                <strong>Total:</strong>{" "}

                                ${Number(
                                    venta.total
                                ).toFixed(2)}

                            </Typography>

                            <Typography sx={{ mt: 2 }}>

                                <strong>Forma de pago:</strong>

                            </Typography>

                            <FormaPagoChip

                                formaPago={
                                    venta.formaPago
                                }

                            />

                            <Typography sx={{ mt: 2 }}>

                                <strong>Estado del pago:</strong>

                            </Typography>

                            <EstadoPagoChip

                                estado={
                                    venta.estadoPago
                                }

                            />

                            <Typography sx={{ mt: 2 }}>

                                <strong>Estado factura:</strong>

                            </Typography>

                            <EstadoFacturaChip

                                estado={
                                    venta.estadoFactura
                                }

                            />

                        </Paper>

                    </Grid>

                    <Grid size={12}>

                        <Paper sx={{ p: 2 }}>

                            <Typography variant="h6">

                                Observaciones

                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography>

                                {venta.observaciones ||

                                    "Sin observaciones."}

                            </Typography>

                        </Paper>

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

export default VentaDetailsDialog;