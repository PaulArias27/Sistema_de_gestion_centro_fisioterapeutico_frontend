import {
    Grid,
    TextField,
} from "@mui/material";

function FisioterapeutaForm({
    formData,
    onChange,
    errores,
}) {

    return (

        <Grid container spacing={2} mt={1}>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    required
                    label="Nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={onChange}
                    error={!!errores.nombres}
                    helperText={errores.nombres}
                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    required
                    label="Apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={onChange}
                    error={!!errores.apellidos}
                    helperText={errores.apellidos}
                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    required
                    label="Cédula"
                    name="cedula"
                    value={formData.cedula}
                    onChange={onChange}
                    error={!!errores.cedula}
                    helperText={errores.cedula}
                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    required
                    label="Celular"
                    name="celular"
                    value={formData.celular}
                    onChange={onChange}
                    error={!!errores.celular}
                    helperText={errores.celular}
                />

            </Grid>

            <Grid size={{ xs: 12 }}>

                <TextField
                    fullWidth
                    required
                    label="Correo electrónico"
                    name="correo"
                    value={formData.correo}
                    onChange={onChange}
                    error={!!errores.correo}
                    helperText={errores.correo}
                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    label="Especialidad"
                    name="especialidad"
                    value={formData.especialidad}
                    onChange={onChange}
                    error={!!errores.especialidad}
                    helperText={errores.especialidad}
                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField
                    fullWidth
                    required
                    label="Número de Licencia"
                    name="numeroLicencia"
                    value={formData.numeroLicencia}
                    onChange={onChange}
                    error={!!errores.numeroLicencia}
                    helperText={errores.numeroLicencia}
                />

            </Grid>

        </Grid>

    );

}

export default FisioterapeutaForm;