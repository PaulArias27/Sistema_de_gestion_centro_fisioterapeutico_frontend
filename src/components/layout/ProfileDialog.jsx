import {
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

function ProfileDialog({

    open,

    onClose,

    usuario,

}) {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="xs"
        >

            <DialogTitle>

                Mi Perfil

            </DialogTitle>

            <DialogContent>

                <Stack
                    spacing={2}
                    alignItems="center"
                    mt={1}
                >

                    <Avatar
                        sx={{
                            width: 80,
                            height: 80,
                            bgcolor: "#F57C00",
                            fontSize: 30,
                            fontWeight: "bold",
                        }}
                    >

                        {usuario?.username?.charAt(0)?.toUpperCase()}

                    </Avatar>

                    <Divider flexItem />

                    <Stack
                        spacing={1}
                        width="100%"
                    >

                        <Typography>

                            <strong>Usuario:</strong>

                        </Typography>

                        <Typography color="text.secondary">

                            {usuario?.username}

                        </Typography>

                        <Divider />

                        <Typography>

                            <strong>Rol:</strong>

                        </Typography>

                        <Typography color="text.secondary">

                            {usuario?.rol}

                        </Typography>

                    </Stack>

                </Stack>

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

export default ProfileDialog;