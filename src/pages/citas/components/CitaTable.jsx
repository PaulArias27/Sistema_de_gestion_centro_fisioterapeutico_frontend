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
import EstadoCitaChip from "../../../components/common/EstadoCitaChip";

function CitaTable({

    citas,

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

                        <TableCell>Paciente</TableCell>

                        <TableCell>Fisioterapeuta</TableCell>

                        <TableCell>Fecha</TableCell>

                        <TableCell>Hora Inicio</TableCell>

                        <TableCell>Hora Fin</TableCell>

                        <TableCell>Terapia</TableCell>

                        <TableCell>Estado</TableCell>

                        <TableCell align="center">

                            Acciones

                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {citas

                        .slice(

                            page * rowsPerPage,

                            page * rowsPerPage + rowsPerPage

                        )

                        .map((cita) => (

                            <TableRow

                                hover

                                key={cita.id}

                            >

                                <TableCell>

                                    {cita.pacienteNombre}

                                </TableCell>

                                <TableCell>

                                    {cita.fisioterapeutaNombre}

                                </TableCell>

                                <TableCell>

                                    {cita.fecha}

                                </TableCell>

                                <TableCell>

                                    {cita.horaInicio}

                                </TableCell>

                                <TableCell>

                                    {cita.horaFin}

                                </TableCell>

                                <TableCell>

                                    {cita.tipoTerapia}

                                </TableCell>

                                <TableCell>

                                    <EstadoCitaChip

                                        estado={cita.estado}

                                    />

                                </TableCell>

                                <TableCell align="center">

                                    <TableActions

                                        activo={

                                            cita.estado !==

                                            "CANCELADA"

                                        }

                                        mostrarReactivar={false}

                                        onVer={() =>

                                            onVer(cita.id)

                                        }

                                        onEditar={() =>

                                            onEditar(cita.id)

                                        }

                                        onEliminar={() =>

                                            onCancelar(cita)

                                        }

                                    />

                                </TableCell>

                            </TableRow>

                        ))}

                </TableBody>

            </Table>

            <TablePagination

                component="div"

                count={citas.length}

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

                labelRowsPerPage="Citas por página:"

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

export default CitaTable;