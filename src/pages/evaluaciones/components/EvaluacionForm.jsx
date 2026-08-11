import { Divider, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";

function EvaluacionForm({ formData, onChange, errores, pacientes, fisioterapeutas }) {
    const activos = (items) => items.filter((item) => item.estado === "ACTIVO");
    const campo = (name, label, opciones = {}) => (
        <TextField fullWidth name={name} label={label} value={formData[name] ?? ""}
            onChange={onChange} error={Boolean(errores[name])} helperText={errores[name]} {...opciones} />
    );

    return (
        <Grid container spacing={3} mt={0.5}>
            <Grid size={12}>
                <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>Información general</Typography>
                    <Divider sx={{ mb: 2.5 }} />
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField select required fullWidth name="pacienteId" label="Paciente"
                                value={formData.pacienteId ?? ""} onChange={onChange}
                                error={Boolean(errores.pacienteId)} helperText={errores.pacienteId}>
                                {activos(pacientes).map((paciente) => (
                                    <MenuItem key={paciente.id} value={paciente.id}>
                                        {paciente.nombres} {paciente.apellidos} — {paciente.cedula}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField select required fullWidth name="fisioterapeutaId" label="Fisioterapeuta"
                                value={formData.fisioterapeutaId ?? ""} onChange={onChange}
                                error={Boolean(errores.fisioterapeutaId)} helperText={errores.fisioterapeutaId}>
                                {activos(fisioterapeutas).map((fisioterapeuta) => (
                                    <MenuItem key={fisioterapeuta.id} value={fisioterapeuta.id}>
                                        {fisioterapeuta.nombres} {fisioterapeuta.apellidos}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>{campo("fechaEvaluacion", "Fecha de evaluación", { type: "date", slotProps: { inputLabel: { shrink: true } } })}</Grid>
                        <Grid size={{ xs: 12, md: 8 }}>{campo("motivoConsulta", "Motivo de consulta", { multiline: true, rows: 2 })}</Grid>
                        <Grid size={12}>{campo("antecedentes", "Antecedentes relevantes", { multiline: true, rows: 3 })}</Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid size={12}>
                <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>Evaluación clínica</Typography>
                    <Divider sx={{ mb: 2.5 }} />
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 3 }}>{campo("escalaDolorEva", "Escala EVA (0-10)", { type: "number", inputProps: { min: 0, max: 10 } })}</Grid>
                        <Grid size={{ xs: 12, md: 9 }}>{campo("diagnosticoFisioterapeutico", "Diagnóstico fisioterapéutico", { required: true, multiline: true, rows: 2 })}</Grid>
                        <Grid size={12}>{campo("objetivosTratamiento", "Objetivos del tratamiento", { required: true, multiline: true, rows: 3 })}</Grid>
                        <Grid size={{ xs: 12, md: 6 }}>{campo("inspeccion", "Inspección", { multiline: true, rows: 3 })}</Grid>
                        <Grid size={{ xs: 12, md: 6 }}>{campo("palpacion", "Palpación", { multiline: true, rows: 3 })}</Grid>
                        <Grid size={{ xs: 12, md: 6 }}>{campo("rangoMovimiento", "Rango de movimiento", { multiline: true, rows: 3 })}</Grid>
                        <Grid size={{ xs: 12, md: 6 }}>{campo("fuerzaMuscular", "Fuerza muscular", { multiline: true, rows: 3 })}</Grid>
                        <Grid size={12}>{campo("pruebasFuncionales", "Pruebas funcionales", { multiline: true, rows: 3 })}</Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid size={12}>
                <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>Plan terapéutico</Typography>
                    <Divider sx={{ mb: 2.5 }} />
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>{campo("sesionesRecomendadas", "Sesiones recomendadas", { type: "number", inputProps: { min: 1 } })}</Grid>
                        <Grid size={{ xs: 12, md: 4 }}>{campo("frecuenciaSemanal", "Frecuencia semanal", { type: "number", inputProps: { min: 1 } })}</Grid>
                        <Grid size={12}>{campo("tratamientoSugerido", "Tratamiento sugerido", { required: true, multiline: true, rows: 3 })}</Grid>
                        <Grid size={12}>{campo("observaciones", "Observaciones", { multiline: true, rows: 3 })}</Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default EvaluacionForm;
