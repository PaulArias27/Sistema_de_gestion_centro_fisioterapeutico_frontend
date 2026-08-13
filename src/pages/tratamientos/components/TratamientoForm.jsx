import {
    Grid,
    MenuItem,
    TextField,
    Typography,
    Divider,
    Autocomplete,
} from "@mui/material";

const tecnicasDisponibles = [

    "Masoterapia",

    "Electroterapia",

    "Ultrasonido",

    "Laserterapia",

    "Termoterapia",

    "Crioterapia",

    "Punción seca",

    "Vendaje neuromuscular",

    "Movilización articular",

    "Ejercicio terapéutico",

    "Fortalecimiento muscular",

    "Propiocepción",

    "Reeducación de la marcha",

    "Estiramientos",

    "Realidad Virtual",

];

function TratamientoForm({

    formData,

    onChange,

    errores,

    pacientes,

    fisioterapeutas,

    evaluaciones,

}) {

    return (

        <>

            <Typography

                variant="h6"

                fontWeight="bold"

                gutterBottom

            >

                Información General

            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>

                <Grid size={{ xs: 12, md: 4 }}>

                    <TextField

                        select

                        fullWidth

                        label="Paciente"

                        name="pacienteId"

                        value={formData.pacienteId}

                        onChange={onChange}

                        error={!!errores.pacienteId}

                        helperText={errores.pacienteId}

                    >

                        {

                            pacientes.map((paciente) => (

                                <MenuItem

                                    key={paciente.id}

                                    value={paciente.id}

                                >

                                    {paciente.nombres} {paciente.apellidos}

                                </MenuItem>

                            ))

                        }

                    </TextField>

                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>

                    <TextField

                        select

                        fullWidth

                        label="Fisioterapeuta"

                        name="fisioterapeutaId"

                        value={formData.fisioterapeutaId}

                        onChange={onChange}

                        error={!!errores.fisioterapeutaId}

                        helperText={errores.fisioterapeutaId}

                    >

                        {

                            fisioterapeutas.map((fisioterapeuta) => (

                                <MenuItem

                                    key={fisioterapeuta.id}

                                    value={fisioterapeuta.id}

                                >

                                    {fisioterapeuta.nombres} {fisioterapeuta.apellidos}

                                </MenuItem>

                            ))

                        }

                    </TextField>

                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>

                    <TextField

                        select

                        fullWidth

                        label="Evaluación"

                        name="evaluacionId"

                        value={formData.evaluacionId}

                        onChange={onChange}

                        error={!!errores.evaluacionId}

                        helperText={errores.evaluacionId}

                    >

                        {

                            evaluaciones.map((evaluacion) => (

                                <MenuItem

                                    key={evaluacion.id}

                                    value={evaluacion.id}

                                >

                                    {evaluacion.codigoEvaluacion}

                                </MenuItem>

                            ))

                        }

                    </TextField>

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        fullWidth

                        type="date"

                        label="Fecha Inicio"

                        name="fechaInicio"

                        value={formData.fechaInicio ?? ""}

                        onChange={onChange}

                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}

                        error={!!errores.fechaInicio}

                        helperText={errores.fechaInicio}

                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        fullWidth

                        type="date"

                        label="Fecha Estimada Alta"

                        name="fechaEstimadaAlta"

                        value={formData.fechaEstimadaAlta ?? ""}

                        onChange={onChange}

                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}

                    />

                </Grid>

            </Grid>
                            <Divider sx={{ my: 4 }} />

            <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
            >

                Plan Terapéutico

            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>

                <Grid size={{ xs: 12 }}>

                    <TextField

                        fullWidth

                        multiline

                        rows={3}

                        label="Objetivo General"

                        name="objetivoGeneral"

                        value={formData.objetivoGeneral ?? ""}

                        onChange={onChange}

                        error={!!errores.objetivoGeneral}

                        helperText={errores.objetivoGeneral}

                    />

                </Grid>

                <Grid size={{ xs: 12 }}>

                    <TextField

                        fullWidth

                        multiline

                        rows={4}

                        label="Objetivos Específicos"

                        name="objetivosEspecificos"

                        value={formData.objetivosEspecificos ?? ""}

                        onChange={onChange}

                        error={!!errores.objetivosEspecificos}

                        helperText={errores.objetivosEspecificos}

                    />

                </Grid>

                <Grid size={{ xs: 12 }}>

                    <TextField

                        fullWidth

                        multiline

                        rows={4}

                        label="Diagnóstico Fisioterapéutico"

                        name="diagnostico"

                        value={formData.diagnostico ?? ""}

                        onChange={onChange}

                        error={!!errores.diagnostico}

                        helperText={errores.diagnostico}

                    />

                </Grid>

                <Grid size={{ xs: 12 }}>

                    <TextField

                        fullWidth

                        multiline

                        rows={5}

                        label="Tratamiento Propuesto"

                        name="tratamientoPropuesto"

                        value={formData.tratamientoPropuesto ?? ""}

                        onChange={onChange}

                        error={!!errores.tratamientoPropuesto}

                        helperText={errores.tratamientoPropuesto}

                    />

                </Grid>

            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
            >

                Técnicas Aplicadas

            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Autocomplete

                multiple

                options={tecnicasDisponibles}

                value={formData.tecnicas}

                onChange={(event, value) =>

                    onChange({

                        target: {

                            name: "tecnicas",

                            value,

                        },

                    })

                }

                renderInput={(params) => (

                    <TextField

                        {...params}

                        label="Técnicas"

                        error={!!errores.tecnicas}

                        helperText={errores.tecnicas}

                    />

                )}

            />
                            <Divider sx={{ my: 4 }} />

            <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
            >

                Planificación del Tratamiento

            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>

                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        fullWidth

                        type="number"

                        label="Sesiones Planificadas"

                        name="sesionesPlanificadas"

                        value={formData.sesionesPlanificadas ?? 0}

                        onChange={onChange}

                        error={!!errores.sesionesPlanificadas}

                        helperText={errores.sesionesPlanificadas}

                        slotProps={{
                            htmlInput: {
                                min: 1,
                            },
                        }}

                    />

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        fullWidth

                        type="number"

                        label="Frecuencia Semanal"

                        name="frecuenciaSemanal"

                        value={formData.frecuenciaSemanal ?? 0}

                        onChange={onChange}

                        error={!!errores.frecuenciaSemanal}

                        helperText={errores.frecuenciaSemanal}

                        slotProps={{
                            htmlInput: {
                                min: 1,
                            },
                        }}

                    />

                </Grid>

            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography

                variant="h6"

                fontWeight="bold"

                gutterBottom

            >

                Observaciones

            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>

                <Grid size={{ xs: 12 }}>

                    <TextField

                        fullWidth

                        multiline

                        rows={4}

                        label="Observaciones Iniciales"

                        name="observacionesIniciales"

                        value={formData.observacionesIniciales ?? ""}

                        onChange={onChange}

                        error={!!errores.observacionesIniciales}

                        helperText={errores.observacionesIniciales}

                    />

                </Grid>

                <Grid size={{ xs: 12 }}>

                    <TextField

                        fullWidth

                        multiline

                        rows={4}

                        label="Observaciones Finales"

                        name="observacionesFinales"

                        value={formData.observacionesFinales ?? ""}

                        onChange={onChange}

                    />

                </Grid>

            </Grid>

        </>

    );

}

export default TratamientoForm;