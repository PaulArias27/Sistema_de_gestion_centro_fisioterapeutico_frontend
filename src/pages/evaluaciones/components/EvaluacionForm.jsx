import { Divider, Grid, Autocomplete, Paper, TextField, Typography } from "@mui/material";

function EvaluacionForm({ formData, onChange, errores, pacientes, fisioterapeutas }) {
    
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
                            <Autocomplete
                                options={pacientes}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                getOptionLabel={(option) =>
                                    `${option.nombres} ${option.apellidos} — ${option.cedula}`
                                }
                                value={
                                    pacientes.find(
                                        (p) => p.id === formData.pacienteId
                                    ) || null
                                }
                                onChange={(event, value) =>
                                    onChange({
                                        target: {
                                            name: "pacienteId",
                                            value: value?.id || "",
                                        },
                                    })
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        required
                                        label="Paciente"
                                        error={!!errores.pacienteId}
                                        helperText={errores.pacienteId}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Autocomplete
                                options={fisioterapeutas}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                getOptionLabel={(option) =>
                                    `${option.nombres} ${option.apellidos}`
                                }
                                value={
                                    fisioterapeutas.find(
                                        (f) => f.id === formData.fisioterapeutaId
                                    ) || null
                                }
                                onChange={(event, value) =>
                                    onChange({
                                        target: {
                                            name: "fisioterapeutaId",
                                            value: value?.id || "",
                                        },
                                    })
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        required
                                        label="Fisioterapeuta"
                                        error={!!errores.fisioterapeutaId}
                                        helperText={errores.fisioterapeutaId}
                                    />
                                )}
                            />
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
