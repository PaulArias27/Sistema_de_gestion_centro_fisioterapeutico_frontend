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

import TableActions from "../../../components/common/TableActions";
import EstadoSesionChip from "../../../components/common/EstadoSesionChip";

function SesionTable({

    sesiones,

    loading,

    page,

    rowsPerPage,

    onPageChange,

    onRowsPerPageChange,

    onVer,

    onEditar,

    onCancelar,

}) {

    if (loading) {

        return <CircularProgress />;

    }

    const handleChangePage = (event, newPage) => {

        onPageChange(newPage);

    };

    const handleChangeRowsPerPage = (event) => {

        onRowsPerPageChange(
            parseInt(event.target.value, 10)
        );

        onPageChange(0);

    };

    return (

        <TableContainer component={Paper}>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Código</TableCell>

                        <TableCell>Paciente</TableCell>

                        <TableCell>Fisioterapeuta</TableCell>

                        <TableCell>Tratamiento</TableCell>

                        <TableCell>Fecha</TableCell>

                        <TableCell>Hora</TableCell>

                        <TableCell>Estado</TableCell>

                        <TableCell align="center">

                            Acciones

                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {sesiones
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((sesion) => (

                            <TableRow
                                hover
                                key={sesion.id}
                            >

                                <TableCell>

                                    {sesion.codigoSesion}

                                </TableCell>

                                <TableCell>

                                    {sesion.nombrePaciente}

                                </TableCell>

                                <TableCell>

                                    {sesion.nombreFisioterapeuta}

                                </TableCell>

                                <TableCell>

                                    {sesion.codigoTratamiento}

                                </TableCell>

                                <TableCell>

                                    {sesion.fechaSesion}

                                </TableCell>

                                <TableCell>

                                    {sesion.horaInicio} - {sesion.horaFin}

                                </TableCell>

                                <TableCell>

                                    <EstadoSesionChip
                                        estado={sesion.estado}
                                    />

                                </TableCell>

                                <TableCell align="center">

                                    <TableActions

                                        activo={
                                            sesion.estado !==
                                            "CANCELADA"
                                        }

                                        mostrarReactivar={false}

                                        onVer={() =>
                                            onVer(
                                                sesion.id
                                            )
                                        }

                                        onEditar={() =>
                                            onEditar(
                                                sesion.id
                                            )
                                        }

                                        onEliminar={() =>
                                            onCancelar(
                                                sesion
                                            )
                                        }

                                    />

                                </TableCell>

                            </TableRow>

                        ))}

                </TableBody>

            </Table>

            <TablePagination

                component="div"

                count={sesiones.length}

                page={page}

                rowsPerPage={rowsPerPage}

                onPageChange={handleChangePage}

                onRowsPerPageChange={
                    handleChangeRowsPerPage
                }

                rowsPerPageOptions={[
                    5,
                    10,
                    25,
                    50,
                ]}

                labelRowsPerPage="Sesiones por página:"

                labelDisplayedRows={({
                    from,
                    to,
                    count,
                }) =>
                    `${from}-${to} de ${count}`
                }

            />

        </TableContainer>

    );

}

export default SesionTable;