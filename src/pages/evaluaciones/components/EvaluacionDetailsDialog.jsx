import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

import EstadoChip from "../../../components/common/EstadoChip";

function Dato({ etiqueta, valor }) {
    return (
        <Grid size={{ xs: 12, md: 6 }}>
            <Typography color="text.secondary" variant="body2">{etiqueta}</Typography>
            <Typography sx={{ whiteSpace: "pre-wrap" }}>{valor ?? "-"}</Typography>
        </Grid>
    );
}

function EvaluacionDetailsDialog({ open, onClose, evaluacion, onInactivar }) {
    if (!evaluacion) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>Detalle de la evaluación</DialogTitle>
            <DialogContent dividers>
                <Typography variant="h6" fontWeight={700} gutterBottom>Información general</Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                    <Dato etiqueta="Código" valor={evaluacion.codigoEvaluacion} />
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography color="text.secondary" variant="body2">Estado</Typography>
                        <EstadoChip estado={evaluacion.estado} />
                    </Grid>
                    <Dato etiqueta="Paciente" valor={evaluacion.pacienteNombre} />
                    <Dato etiqueta="Fisioterapeuta" valor={evaluacion.fisioterapeutaNombre} />
                    <Dato etiqueta="Fecha de evaluación" valor={evaluacion.fechaEvaluacion} />
                    <Dato etiqueta="Escala EVA" valor={evaluacion.escalaDolorEva} />
                    <Dato etiqueta="Motivo de consulta" valor={evaluacion.motivoConsulta} />
                    <Dato etiqueta="Antecedentes" valor={evaluacion.antecedentes} />
                </Grid>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3 }} gutterBottom>Evaluación clínica</Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                    <Dato etiqueta="Diagnóstico fisioterapéutico" valor={evaluacion.diagnosticoFisioterapeutico} />
                    <Dato etiqueta="Objetivos del tratamiento" valor={evaluacion.objetivosTratamiento} />
                    <Dato etiqueta="Inspección" valor={evaluacion.inspeccion} />
                    <Dato etiqueta="Palpación" valor={evaluacion.palpacion} />
                    <Dato etiqueta="Rango de movimiento" valor={evaluacion.rangoMovimiento} />
                    <Dato etiqueta="Fuerza muscular" valor={evaluacion.fuerzaMuscular} />
                    <Dato etiqueta="Pruebas funcionales" valor={evaluacion.pruebasFuncionales} />
                </Grid>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3 }} gutterBottom>Plan terapéutico</Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                    <Dato etiqueta="Sesiones recomendadas" valor={evaluacion.sesionesRecomendadas} />
                    <Dato etiqueta="Frecuencia semanal" valor={evaluacion.frecuenciaSemanal} />
                    <Dato etiqueta="Tratamiento sugerido" valor={evaluacion.tratamientoSugerido} />
                    <Dato etiqueta="Observaciones" valor={evaluacion.observaciones} />
                </Grid>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Button color="error" onClick={onInactivar} disabled={evaluacion.estado !== "ACTIVO"}>
                    Inactivar
                </Button>
                <Button variant="contained" onClick={onClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EvaluacionDetailsDialog;
