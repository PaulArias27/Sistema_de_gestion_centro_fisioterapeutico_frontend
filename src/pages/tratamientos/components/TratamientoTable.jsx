import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    CircularProgress,
    Box,
    Typography,
} from "@mui/material";

import TratamientoActions from "./TratamientoActions";
import EstadoTratamientoChip from "../../../components/common/EstadoTratamientoChip";
import ProgressTratamiento from "../../../components/common/ProgressTratamiento";

function TratamientoTable({

    tratamientos,

    loading,

    page,

    rowsPerPage,

    onPageChange,

    onRowsPerPageChange,

    onVer,

    onEditar,

    onSuspender,

    onReanudar,

    onFinalizar,

    onCancelar,

}) {

    if (loading) {

        return (

            <Box

                display="flex"

                justifyContent="center"

                py={5}

            >

                <CircularProgress />

            </Box>

        );

    }

    return (

        <Paper
            elevation={0}
            sx={{
                borderRadius: 3,
                overflow: "hidden",
            }}
        >

            <TableContainer>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>

                                Código

                            </TableCell>

                            <TableCell>

                                Paciente

                            </TableCell>

                            <TableCell>

                                Fisioterapeuta

                            </TableCell>

                            <TableCell>

                                Estado

                            </TableCell>

                            <TableCell>

                                Sesiones

                            </TableCell>

                            <TableCell>

                                Avance

                            </TableCell>

                            <TableCell>

                                Inicio

                            </TableCell>

                            <TableCell align="center">

                                Acciones

                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            tratamientos.length === 0 ? (

                                <TableRow>

                                    <TableCell

                                        colSpan={8}

                                        align="center"

                                    >

                                        <Typography>

                                            No existen tratamientos registrados.

                                        </Typography>

                                    </TableCell>

                                </TableRow>

                            )

                            :

                            tratamientos

                                .slice(

                                    page * rowsPerPage,

                                    page * rowsPerPage + rowsPerPage

                                )

                                .map((tratamiento) => (

                                    <TableRow

                                        hover

                                        key={tratamiento.id}

                                    >

                                        <TableCell>

                                            {tratamiento.codigoTratamiento}

                                        </TableCell>

                                        <TableCell>

                                            {tratamiento.nombrePaciente}

                                        </TableCell>

                                        <TableCell>

                                            {tratamiento.nombreFisioterapeuta}

                                        </TableCell>

                                        <TableCell>

                                            <EstadoTratamientoChip

                                                estado={tratamiento.estado}

                                            />

                                        </TableCell>

                                        <TableCell>

                                            {tratamiento.sesionesRealizadas}

                                            {" / "}

                                            {tratamiento.sesionesPlanificadas}

                                        </TableCell>

                                        <TableCell
                                            sx={{ minWidth: 180 }}
                                        >

                                            <ProgressTratamiento

                                                realizadas={
                                                    tratamiento.sesionesRealizadas
                                                }

                                                planificadas={
                                                    tratamiento.sesionesPlanificadas
                                                }

                                            />

                                        </TableCell>

                                        <TableCell>

                                            {tratamiento.fechaInicio}

                                        </TableCell>

                                        <TableCell align="center">

                                            <TratamientoActions

                                                estado={tratamiento.estado}

                                                onVer={() => onVer(tratamiento.id)}

                                                onEditar={() => onEditar(tratamiento.id)}

                                                onSuspender={() => onSuspender(tratamiento)}

                                                onReanudar={() => onReanudar(tratamiento)}

                                                onFinalizar={() => onFinalizar(tratamiento)}

                                                onCancelar={() => onCancelar(tratamiento)}

                                            />

                                        </TableCell>

                                    </TableRow>

                                ))

                        }

                    </TableBody>

                </Table>

            </TableContainer>

            <TablePagination

                component="div"

                count={tratamientos.length}

                page={page}

                rowsPerPage={rowsPerPage}

                onPageChange={(e, newPage) =>

                    onPageChange(newPage)

                }

                onRowsPerPageChange={(event) => {

                    onRowsPerPageChange(

                        parseInt(event.target.value, 10)

                    );

                    onPageChange(0);

                }}

                rowsPerPageOptions={[5, 10, 25, 50]}

            />

        </Paper>

    );

}

export default TratamientoTable;