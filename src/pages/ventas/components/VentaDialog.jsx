import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";

function VentaDialog({

    open,

    onClose,

    title,

    onSave,

    children,

}) {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="md"

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

                >
                    Guardar

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default VentaDialog;