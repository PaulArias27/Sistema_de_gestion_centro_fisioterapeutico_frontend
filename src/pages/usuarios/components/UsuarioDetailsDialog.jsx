import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

function UsuarioDetailsDialog({

    open,

    onClose,

    usuario,

    onEditar,

    onPassword,

    onActivar,

    onDesactivar,

}) {

    if (!usuario) return null;

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="md"

            fullWidth

        >

            <DialogTitle>

                Detalles del Usuario

            </DialogTitle>

            <DialogContent dividers>

                <Grid

                    container

                    spacing={2}

                >

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >

                            Usuario

                        </Typography>

                        <Typography>

                            {usuario.username}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >

                            Rol

                        </Typography>

                        <Typography>

                            {usuario.rol}

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >

                            Estado

                        </Typography>

                        <Typography>

                            {

                                usuario.activo

                                    ? "Activo"

                                    : "Inactivo"

                            }

                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >

                            Debe cambiar contraseña

                        </Typography>

                        <Typography>

                            {

                                usuario.debeCambiarPassword

                                    ? "Sí"

                                    : "No"

                            }

                        </Typography>

                    </Grid>

                    <Grid size={12}>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                        >

                            Fecha de creación

                        </Typography>

                        <Typography>

                            {usuario.fechaCreacion}

                        </Typography>

                    </Grid>

                </Grid>

                <Divider sx={{ my: 3 }} />

                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >

                    <Button

                        variant="outlined"

                        onClick={onEditar}

                    >

                        Editar

                    </Button>

                    <Button

                        variant="outlined"

                        color="secondary"

                        onClick={onPassword}

                    >

                        Cambiar contraseña

                    </Button>

                    {

                        usuario.activo ? (

                            <Button

                                variant="contained"

                                color="error"

                                onClick={onDesactivar}

                            >

                                Desactivar

                            </Button>

                        ) : (

                            <Button

                                variant="contained"

                                color="success"

                                onClick={onActivar}

                            >

                                Activar

                            </Button>

                        )

                    }

                </Box>

            </DialogContent>

            <DialogActions>

                <Button

                    onClick={onClose}

                >

                    Cerrar

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default UsuarioDetailsDialog;