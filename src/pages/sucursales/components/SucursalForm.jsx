import {

    Grid,

    TextField,

} from "@mui/material";

function SucursalForm({

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

            <Grid size={{ xs:12 }}>

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

            <Grid size={{ xs:12 }}>

                <TextField
                    fullWidth
                    required
                    label="Dirección"
                    name="direccion"
                    value={formData.direccion}
                    onChange={onChange}
                    error={!!errores.direccion}
                    helperText={errores.direccion}
                />

            </Grid>

            <Grid size={{ xs:12, md:6 }}>

                <TextField
                    fullWidth
                    required
                    label="Teléfono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={onChange}
                    error={!!errores.telefono}
                    helperText={errores.telefono}
                />

            </Grid>

            <Grid size={{ xs:12, md:6 }}>

                <TextField
                    fullWidth
                    label="Correo (opcional)"
                    name="correo"
                    value={formData.correo}
                    onChange={onChange}
                    error={!!errores.correo}
                    helperText={errores.correo}
                />

            </Grid>

        </Grid>

    );

}

export default SucursalForm;