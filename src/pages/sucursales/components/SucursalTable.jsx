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

function SucursalTable({

    sucursales,

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

                        <TableCell>Nombre</TableCell>

                        <TableCell>Dirección</TableCell>

                        <TableCell>Teléfono</TableCell>

                        <TableCell>Correo</TableCell>

                        <TableCell>Estado</TableCell>

                        <TableCell align="center">
                            Acciones
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {sucursales
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((sucursal) => (

                            <TableRow
                                key={sucursal.id}
                                hover
                            >

                                <TableCell>

                                    {sucursal.nombre}

                                </TableCell>

                                <TableCell>

                                    {sucursal.direccion}

                                </TableCell>

                                <TableCell>

                                    {sucursal.telefono}

                                </TableCell>

                                <TableCell>

                                    {sucursal.correo || "-"}

                                </TableCell>

                                <TableCell>

                                    <EstadoChip
                                        estado={sucursal.estado}
                                    />

                                </TableCell>

                                <TableCell align="center">

                                    <TableActions

                                        activo={sucursal.estado === "ACTIVO"}

                                        onVer={() => onVer(sucursal.id)}

                                        onEditar={() => onEditar(sucursal.id)}

                                        onEliminar={() => onEliminar(sucursal)}

                                        onReactivar={() => onReactivar(sucursal)}

                                    />

                                </TableCell>

                            </TableRow>

                        ))}

                </TableBody>

            </Table>

            <TablePagination

                component="div"

                count={sucursales.length}

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

                labelRowsPerPage="Sucursales por página:"

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

export default SucursalTable;