import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

import UsuarioForm from "./UsuarioForm";

function UsuarioDialog({

    open,

    onClose,

    onGuardar,

    formData,

    onChange,

    errores,

    editando,

}) {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="sm"

            fullWidth

        >

            <DialogTitle>

                {

                    editando

                        ? "Editar Usuario"

                        : "Nuevo Usuario"

                }

            </DialogTitle>

            <DialogContent dividers>

                <UsuarioForm

                    formData={formData}

                    onChange={onChange}

                    errores={errores}

                    editando={editando}

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

                    {

                        editando

                            ? "Actualizar"

                            : "Guardar"

                    }

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default UsuarioDialog;