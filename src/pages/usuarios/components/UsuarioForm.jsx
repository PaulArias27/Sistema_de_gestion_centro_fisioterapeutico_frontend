import {

    Grid,

    MenuItem,

    TextField,

} from "@mui/material";

function UsuarioForm({

    formData,

    onChange,

    errores,

    editando,

}) {

    return (

        <Grid
            container
            spacing={2}
            sx={{ mt: 1 }}
        >

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField

                    fullWidth

                    label="Nombre de usuario"

                    name="username"

                    value={formData.username}

                    onChange={onChange}

                    error={!!errores.username}

                    helperText={errores.username}

                />

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

                <TextField

                    fullWidth

                    select

                    label="Rol"

                    name="rol"

                    value={formData.rol}

                    onChange={onChange}

                    error={!!errores.rol}

                    helperText={errores.rol}

                >

                    <MenuItem value="ADMIN">

                        Administrador

                    </MenuItem>

                    <MenuItem value="FISIOTERAPEUTA">

                        Fisioterapeuta

                    </MenuItem>


                </TextField>

            </Grid>

            {!editando && (

                <Grid size={12}>

                    <TextField

                        fullWidth

                        type="password"

                        label="Contraseña"

                        name="password"

                        value={formData.password}

                        onChange={onChange}

                        error={!!errores.password}

                        helperText={errores.password}

                    />

                </Grid>

            )}

        </Grid>

    );

}

export default UsuarioForm;