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
import FormaPagoChip from "../../../components/common/FormaPagoChip";
import EstadoPagoChip from "../../../components/common/EstadoPagoChip";
import EstadoFacturaChip from "../../../components/common/EstadoFacturaChip";

function VentaTable({

    ventas,

    loading,

    page,

    rowsPerPage,

    onPageChange,

    onRowsPerPageChange,

    onVer,

    onEditar,

    onEliminar,

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

                        <TableCell>Servicio</TableCell>

                        <TableCell>Fisioterapeuta</TableCell>

                        <TableCell>Sucursal</TableCell>

                        <TableCell align="right">
                            Total
                        </TableCell>

                        <TableCell>
                            Forma Pago
                        </TableCell>

                        <TableCell>
                            Estado Pago
                        </TableCell>

                        <TableCell>
                            Factura
                        </TableCell>

                        <TableCell>
                            Fecha
                        </TableCell>

                        <TableCell align="center">
                            Acciones
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {ventas
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((venta) => (

                            <TableRow
                                key={venta.id}
                                hover
                            >

                                <TableCell>

                                    {venta.codigoVenta}

                                </TableCell>

                                <TableCell>

                                    {venta.paciente}

                                </TableCell>

                                <TableCell>

                                    {venta.nombreServicio}

                                </TableCell>

                                <TableCell>

                                    {venta.fisioterapeuta}

                                </TableCell>

                                <TableCell>

                                    {venta.sucursal}

                                </TableCell>

                                <TableCell align="right">

                                    ${Number(
                                        venta.total
                                    ).toFixed(2)}

                                </TableCell>

                                <TableCell align="center">

                                    <FormaPagoChip
                                        formaPago={venta.formaPago}
                                    />

                                </TableCell>

                                <TableCell align="center">

                                    <EstadoPagoChip
                                        estado={venta.estadoPago}
                                    />

                                </TableCell>

                                <TableCell align="center">

                                    <EstadoFacturaChip
                                        estado={venta.estadoFactura}
                                    />

                                </TableCell>

                                <TableCell align="center">

                                    {venta.fechaVenta}

                                </TableCell>

                                <TableCell align="center">

                                    <TableActions

                                        activo={
                                            venta.estadoPago !==
                                            "ANULADO"
                                        }

                                        onVer={() =>
                                            onVer(
                                                venta.id
                                            )
                                        }

                                        onEditar={() =>
                                            onEditar(
                                                venta.id
                                            )
                                        }

                                        onEliminar={() =>
                                            onEliminar(
                                                venta
                                            )
                                        }

                                        mostrarReactivar={false}

                                    />

                                </TableCell>

                            </TableRow>

                        ))}

                </TableBody>

            </Table>

            <TablePagination

                component="div"

                count={ventas.length}

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

                labelRowsPerPage="Ventas por página:"

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

export default VentaTable;