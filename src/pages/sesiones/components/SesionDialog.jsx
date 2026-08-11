import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

import SesionForm from "./SesionForm";

function SesionDialog({

    open,

    onClose,

    onGuardar,

    formData,

    onChange,

    errores,

    tratamientos,

    editando,

}) {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="lg"
        >

            <DialogTitle>

                {editando

                    ? "Editar Sesión"

                    : "Nueva Sesión"}

            </DialogTitle>

            <DialogContent dividers>

                <SesionForm

                    formData={formData}

                    onChange={onChange}

                    errores={errores}

                    tratamientos={tratamientos}

                />

            </DialogContent>

            <DialogActions>

                <Button

                    onClick={onClose}

                >

                    Cancelar

                </Button>

                <Button

                    variant="contained"

                    onClick={onGuardar}

                >

                    {editando

                        ? "Actualizar"

                        : "Guardar"}

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default SesionDialog;