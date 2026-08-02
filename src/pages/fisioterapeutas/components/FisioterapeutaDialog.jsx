import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from "@mui/material";

function FisioterapeutaDialog({

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
            maxWidth="md"
        >

            <DialogTitle
                sx={{
                    fontWeight: 700,
                }}
            >
                {title}
            </DialogTitle>

            <DialogContent
                dividers
                sx={{
                    maxHeight: "70vh",
                }}
            >
                {children}
            </DialogContent>

            <DialogActions sx={{ p: 2 }}>

                <Button onClick={onClose}>

                    Cancelar

                </Button>

                <Button
                    variant="contained"
                    onClick={onSave}
                    sx={{
                        bgcolor: "#F57C00",

                        "&:hover": {
                            bgcolor: "#E65100",
                        },
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

export default FisioterapeutaDialog;