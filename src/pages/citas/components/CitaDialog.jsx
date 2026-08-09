import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";

import CitaForm from "./CitaForm";

function CitaDialog({

    open,

    onClose,

    onGuardar,

    editando,

    formData,

    onChange,

    errores,

    pacientes,

    fisioterapeutas,

}) {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="md"

        >

            <DialogTitle>

                {

                    editando

                        ? "Editar Cita"

                        : "Nueva Cita"

                }

            </DialogTitle>

            <DialogContent dividers>

                <CitaForm

                    formData={formData}

                    onChange={onChange}

                    errores={errores}

                    pacientes={pacientes}

                    fisioterapeutas={fisioterapeutas}

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

export default CitaDialog;