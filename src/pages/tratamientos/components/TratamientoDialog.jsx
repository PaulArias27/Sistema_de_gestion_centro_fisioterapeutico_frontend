import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

import TratamientoForm from "./TratamientoForm";

function TratamientoDialog({

    open,

    onClose,

    onGuardar,

    formData,

    onChange,

    errores,

    pacientes,

    fisioterapeutas,

    evaluaciones,

    editando,

}) {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="lg"

            fullWidth

        >

            <DialogTitle>

                {

                    editando

                        ? "Editar Tratamiento"

                        : "Nuevo Tratamiento"

                }

            </DialogTitle>

            <DialogContent dividers>

                <TratamientoForm

                    formData={formData}

                    onChange={onChange}

                    errores={errores}

                    pacientes={pacientes}

                    fisioterapeutas={fisioterapeutas}

                    evaluaciones={evaluaciones}

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

export default TratamientoDialog;