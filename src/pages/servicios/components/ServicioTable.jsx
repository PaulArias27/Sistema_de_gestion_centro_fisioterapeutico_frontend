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

function ServicioTable({

    servicios,

    loading,

    page,

    rowsPerPage,

    onPageChange,

    onRowsPerPageChange,

    onVer,

    onEditar,

    onEliminar,

    onReactivar,

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

                        <TableCell>
                            Código
                        </TableCell>

                        <TableCell>
                            Servicio
                        </TableCell>

                        <TableCell align="center">
                            Sesiones
                        </TableCell>

                        <TableCell align="right">
                            Precio Venta
                        </TableCell>

                        <TableCell align="center">
                            Estado
                        </TableCell>

                        <TableCell align="center">
                            Acciones
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {servicios
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((servicio) => (

                            <TableRow
                                key={servicio.id}
                                hover
                            >

                                <TableCell>

                                    {servicio.codigoServicio}

                                </TableCell>

                                <TableCell>

                                    {servicio.nombre}

                                </TableCell>

                                <TableCell align="center">

                                    {servicio.cantidadSesiones}

                                </TableCell>

                                <TableCell align="right">

                                    $
                                    {Number(
                                        servicio.precioVenta
                                    ).toFixed(2)}

                                </TableCell>

                                <TableCell align="center">

                                    <EstadoChip
                                        estado={
                                            servicio.activo
                                        }
                                    />

                                </TableCell>

                                <TableCell align="center">

                                    <TableActions

                                        activo={
                                            servicio.activo
                                        }

                                        onVer={() =>
                                            onVer(servicio.id)
                                        }

                                        onEditar={() =>
                                            onEditar(servicio.id)
                                        }

                                        onEliminar={() =>
                                            onEliminar(servicio)
                                        }

                                        onReactivar={() =>
                                            onReactivar(servicio)
                                        }

                                    />

                                </TableCell>

                            </TableRow>

                        ))}

                </TableBody>

            </Table>

            <TablePagination

                component="div"

                count={servicios.length}

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

                labelRowsPerPage="Servicios por página:"

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

export default ServicioTable;