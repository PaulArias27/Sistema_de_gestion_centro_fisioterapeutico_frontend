import {
    Grid,
    TextField,
    Autocomplete,
    Typography,
    Divider,
    Paper,
} from "@mui/material";

function CitaForm({

    formData,

    onChange,

    errores,

    pacientes,

    fisioterapeutas,

}) {

    const calcularDuracion = () => {

        if (

            !formData.horaInicio ||

            !formData.horaFin

        ) {

            return 0;

        }

        const inicio = formData.horaInicio.split(":");

        const fin = formData.horaFin.split(":");

        const minutosInicio =

            Number(inicio[0]) * 60 +

            Number(inicio[1]);

        const minutosFin =

            Number(fin[0]) * 60 +

            Number(fin[1]);

        return Math.max(

            minutosFin - minutosInicio,

            0

        );

    };

    return (

        <Grid container spacing={3}>

            {/* COLUMNA IZQUIERDA */}

            <Grid size={{ xs: 12, md: 6 }}>

                <Autocomplete

                    options={pacientes}

                    value={

                        pacientes.find(

                            p =>

                                p.id ===

                                formData.pacienteId

                        ) || null

                    }

                    getOptionLabel={(option) =>

                        `${option.nombres} ${option.apellidos}`

                    }

                    isOptionEqualToValue={

                        (option, value) =>

                            option.id === value.id

                    }

                    onChange={(event, value) =>

                        onChange({

                            target: {

                                name: "pacienteId",

                                value:

                                    value?.id || "",

                            },

                        })

                    }

                    renderInput={(params) => (

                        <TextField

                            {...params}

                            label="Paciente"

                            margin="normal"

                            error={

                                !!errores.pacienteId

                            }

                            helperText={

                                errores.pacienteId

                            }

                        />

                    )}

                />

                <Autocomplete

                    options={

                        fisioterapeutas

                    }

                    value={

                        fisioterapeutas.find(

                            f =>

                                f.id ===

                                formData.fisioterapeutaId

                        ) || null

                    }

                    getOptionLabel={(option) =>

                        `${option.nombres} ${option.apellidos}`

                    }

                    isOptionEqualToValue={

                        (option, value) =>

                            option.id === value.id

                    }

                    onChange={(event, value) =>

                        onChange({

                            target: {

                                name:

                                    "fisioterapeutaId",

                                value:

                                    value?.id || "",

                            },

                        })

                    }

                    renderInput={(params) => (

                        <TextField

                            {...params}

                            label="Fisioterapeuta"

                            margin="normal"

                            error={

                                !!errores.fisioterapeutaId

                            }

                            helperText={

                                errores.fisioterapeutaId

                            }

                        />

                    )}

                />

                <TextField

                    fullWidth

                    margin="normal"

                    type="date"

                    label="Fecha"

                    name="fecha"

                    value={formData.fecha}

                    onChange={onChange}

                    InputLabelProps={{

                        shrink: true,

                    }}

                    error={!!errores.fecha}

                    helperText={errores.fecha}

                />

                <TextField

                    fullWidth

                    margin="normal"

                    label="Tipo de terapia"

                    name="tipoTerapia"

                    value={

                        formData.tipoTerapia

                    }

                    onChange={onChange}

                    error={

                        !!errores.tipoTerapia

                    }

                    helperText={

                        errores.tipoTerapia

                    }

                />

            </Grid>

            {/* COLUMNA DERECHA */}

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField

                    fullWidth

                    margin="normal"

                    type="time"

                    label="Hora inicio"

                    name="horaInicio"

                    value={

                        formData.horaInicio

                    }

                    onChange={onChange}

                    InputLabelProps={{

                        shrink: true,

                    }}

                    error={

                        !!errores.horaInicio

                    }

                    helperText={

                        errores.horaInicio

                    }

                />

                <TextField

                    fullWidth

                    margin="normal"

                    type="time"

                    label="Hora fin"

                    name="horaFin"

                    value={

                        formData.horaFin

                    }

                    onChange={onChange}

                    InputLabelProps={{

                        shrink: true,

                    }}

                    error={

                        !!errores.horaFin

                    }

                    helperText={

                        errores.horaFin

                    }

                />

                <TextField

                    fullWidth

                    margin="normal"

                    multiline

                    rows={3}

                    label="Motivo de consulta"

                    name="motivoConsulta"

                    value={

                        formData.motivoConsulta

                    }

                    onChange={onChange}

                    error={

                        !!errores.motivoConsulta

                    }

                    helperText={

                        errores.motivoConsulta

                    }

                />

                <TextField

                    fullWidth

                    margin="normal"

                    multiline

                    rows={3}

                    label="Observaciones"

                    name="observaciones"

                    value={

                        formData.observaciones

                    }

                    onChange={onChange}

                />

            </Grid>

            {/* RESUMEN */}

            <Grid size={12}>

                <Paper

                    elevation={2}

                    sx={{

                        p: 3,

                        mt: 2,

                        borderRadius: 3,

                        backgroundColor:

                            "#fafafa",

                    }}

                >

                    <Typography

                        variant="h6"

                        fontWeight="bold"

                        gutterBottom

                    >

                        Resumen de la Cita

                    </Typography>

                    <Divider sx={{ mb: 3 }} />

                    <Grid container spacing={2}>

                        <Grid size={{ xs: 6, md: 4 }}>

                            <Typography

                                color="text.secondary"

                            >

                                Duración

                            </Typography>

                            <Typography

                                variant="h6"

                            >

                                {

                                    calcularDuracion()

                                }{" "}

                                min

                            </Typography>

                        </Grid>

                        <Grid size={{ xs: 6, md: 4 }}>

                            <Typography

                                color="text.secondary"

                            >

                                Estado

                            </Typography>

                            <Typography

                                variant="h6"

                                color="warning.main"

                            >

                                Pendiente

                            </Typography>

                        </Grid>

                    </Grid>

                </Paper>

            </Grid>

        </Grid>

    );

}

export default CitaForm;