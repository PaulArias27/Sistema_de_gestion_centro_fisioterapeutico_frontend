import {

    Dialog,

    DialogTitle,

    DialogContent,

    Grid,

    Typography,

} from "@mui/material";

function SucursalDetailsDialog({

    open,

    onClose,

    sucursal,

}) {

    if (!sucursal) return null;

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                Detalle de la Sucursal

            </DialogTitle>

            <DialogContent dividers>

                <Grid
                    container
                    spacing={2}
                >

                    <Grid size={{ xs:12 }}>

                        <Typography>

                            <strong>Nombre:</strong>

                            {" "}

                            {sucursal.nombre}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs:12 }}>

                        <Typography>

                            <strong>Dirección:</strong>

                            {" "}

                            {sucursal.direccion}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <Typography>

                            <strong>Teléfono:</strong>

                            {" "}

                            {sucursal.telefono}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <Typography>

                            <strong>Correo:</strong>

                            {" "}

                            {sucursal.correo || "-"}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs:12 }}>

                        <Typography>

                            <strong>Estado:</strong>

                            {" "}

                            {sucursal.estado}

                        </Typography>

                    </Grid>

                </Grid>

            </DialogContent>

        </Dialog>

    );

}

export default SucursalDetailsDialog;