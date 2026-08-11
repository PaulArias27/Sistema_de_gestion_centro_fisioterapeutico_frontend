import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";

import EstadoChip from "../../../components/common/EstadoChip";
import TableActions from "../../../components/common/TableActions";

function EvaluacionTable({
    evaluaciones,
    loading,
    page,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
    onVer,
    onEditar,
    onInactivar,
}) {
    if (loading) return <CircularProgress />;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell>Paciente</TableCell>
                        <TableCell>Fisioterapeuta</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Diagnóstico</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {evaluaciones
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((evaluacion) => (
                            <TableRow hover key={evaluacion.id}>
                                <TableCell>{evaluacion.codigoEvaluacion}</TableCell>
                                <TableCell>{evaluacion.pacienteNombre}</TableCell>
                                <TableCell>{evaluacion.fisioterapeutaNombre}</TableCell>
                                <TableCell>{evaluacion.fechaEvaluacion || "-"}</TableCell>
                                <TableCell sx={{ maxWidth: 260 }}>
                                    {evaluacion.diagnosticoFisioterapeutico || "-"}
                                </TableCell>
                                <TableCell><EstadoChip estado={evaluacion.estado} /></TableCell>
                                <TableCell align="center">
                                    <TableActions
                                        activo={evaluacion.estado === "ACTIVO"}
                                        mostrarReactivar={false}
                                        onVer={() => onVer(evaluacion.id)}
                                        onEditar={() => onEditar(evaluacion.id)}
                                        onEliminar={() => onInactivar(evaluacion)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={evaluaciones.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={(_, nuevaPagina) => onPageChange(nuevaPagina)}
                onRowsPerPageChange={(event) => {
                    onRowsPerPageChange(parseInt(event.target.value, 10));
                    onPageChange(0);
                }}
                rowsPerPageOptions={[5, 10, 25, 50]}
                labelRowsPerPage="Evaluaciones por página:"
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
            />
        </TableContainer>
    );
}

export default EvaluacionTable;
