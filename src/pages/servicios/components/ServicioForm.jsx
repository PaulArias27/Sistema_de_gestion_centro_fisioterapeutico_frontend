import { Grid, TextField } from "@mui/material";

function ServicioForm({

    formData,

    onChange,

    errores,

}) {

    return (

        <Grid
            container
            spacing={2}
            mt={1}
        >

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    required
                    label="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={onChange}
                    error={!!errores.nombre}
                    helperText={errores.nombre}
                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    required
                    type="number"
                    label="Cantidad de sesiones"
                    name="cantidadSesiones"
                    value={formData.cantidadSesiones}
                    onChange={onChange}
                    error={!!errores.cantidadSesiones}
                    helperText={errores.cantidadSesiones}
                    inputProps={{
                        min: 1,
                    }}
                />

            </Grid>

            <Grid size={{ xs: 12 }}>

                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Descripción"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={onChange}
                    error={!!errores.descripcion}
                    helperText={errores.descripcion}
                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    type="number"
                    label="Costo interno (opcional)"
                    placeholder="Ej. 20.00"
                    name="precioCosto"
                    value={formData.precioCosto}
                    onChange={onChange}
                    error={!!errores.precioCosto}
                    helperText={
                        errores.precioCosto ||
                        "Puede dejar este campo vacío."
                    }
                    inputProps={{
                        min: 0,
                        step: "0.01",
                    }}
                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    required
                    type="number"
                    label="Precio de venta"
                    placeholder="Ej. 35.00"
                    name="precioVenta"
                    value={formData.precioVenta}
                    onChange={onChange}
                    error={!!errores.precioVenta}
                    helperText={errores.precioVenta}
                    inputProps={{
                        min: 0,
                        step: "0.01",
                    }}
                />

            </Grid>

        </Grid>

    );

}

export default ServicioForm;