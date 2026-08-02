import {
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

function PacienteForm({
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
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={onChange}
            label="Fecha de nacimiento"
            slotProps={{
                inputLabel: {
                    shrink: true,
                },
            }}
            error={!!errores.fechaNacimiento}
            helperText={errores.fechaNacimiento}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          required
          fullWidth
          label="Sexo"
          name="sexo"
          value={formData.sexo}
          onChange={onChange}
          error={!!errores.sexo}
          helperText={errores.sexo}
        >
          <MenuItem value="MASCULINO">
            Masculino
          </MenuItem>

          <MenuItem value="FEMENINO">
            Femenino
          </MenuItem>
        </TextField>
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
          label="Correo electrónico"
          name="correo"
          value={formData.correo}
          onChange={onChange}
        />
      </Grid>

    </Grid>
  );
}

export default PacienteForm;