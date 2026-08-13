import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Divider,
    Stack,
} from "@mui/material";

function AboutDialog({

    open,

    onClose,

}) {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: 3,
                    },
                },
            }}
        >

            <DialogTitle>

                Acerca de Kinesio Vitality

            </DialogTitle>

            <DialogContent>

                <Stack spacing={2} mt={1}>

                    <Typography>

                        <strong>Sistema:</strong> Kinesio Vitality

                    </Typography>

                    <Typography>

                        <strong>Versión:</strong> 1.0.0

                    </Typography>

                    <Typography>

                        <strong>Desarrollador:</strong> Paul Arias 

                    </Typography>

                    <Typography>

                        <strong>Tecnologías:</strong>

                    </Typography>

                    <Typography variant="body2">

                        • Java 21

                    </Typography>

                    <Typography variant="body2">

                        • Spring Boot

                    </Typography>

                    <Typography variant="body2">

                        • Spring Security + JWT

                    </Typography>

                    <Typography variant="body2">

                        • React + Vite

                    </Typography>

                    <Typography variant="body2">

                        • Material UI

                    </Typography>

                    <Typography variant="body2">

                        • PostgreSQL

                    </Typography>

                    <Divider />

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >

                        Sistema de gestión para centros de fisioterapia,
                        desarrollado para la administración integral de
                        pacientes, fisioterapeutas, citas, tratamientos,
                        sesiones, ventas y demás procesos clínicos.

                    </Typography>

                </Stack>

            </DialogContent>

            <DialogActions>

                <Button
                    variant="contained"
                    onClick={onClose}
                >

                    Cerrar

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default AboutDialog;