import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

function SucursalDialog({

    open,

    onClose,

    title,

    children,

    onSave,

    modoEdicion,

}) {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                {title}

            </DialogTitle>

            <DialogContent dividers>

                {children}

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onClose}
                >
                    Cancelar
                </Button>

                <Button
                    variant="contained"
                    onClick={onSave}
                    sx={{
                        bgcolor:"#F57C00",

                        "&:hover":{

                            bgcolor:"#E65100",

                        }

                    }}
                >

                    {modoEdicion
                        ? "Actualizar"
                        : "Guardar"}

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default SucursalDialog;