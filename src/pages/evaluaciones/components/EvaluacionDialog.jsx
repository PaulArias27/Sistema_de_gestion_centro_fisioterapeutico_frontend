import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

import EvaluacionForm from "./EvaluacionForm";

function EvaluacionDialog({
    open,
    onClose,
    onGuardar,
    formData,
    onChange,
    errores,
    pacientes,
    fisioterapeutas,
    editando,
}) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg" scroll="paper"
            slotProps={{
        paper: {
            sx: {
                borderRadius: 4, width: "95%", maxHeight: "90vh" } } }}>
            <DialogTitle sx={{ fontWeight: 700 }}>
                {editando ? "Editar evaluación" : "Nueva evaluación"}
            </DialogTitle>
            <DialogContent dividers>
                <EvaluacionForm formData={formData} onChange={onChange} errores={errores}
                    pacientes={pacientes} fisioterapeutas={fisioterapeutas} />
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
                <Button onClick={onClose}>Cancelar</Button>
                <Button variant="contained" onClick={onGuardar}>
                    {editando ? "Actualizar" : "Guardar"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EvaluacionDialog;
