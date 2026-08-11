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

function UsuarioTable({

    usuarios,

    loading,

    page,

    rowsPerPage,

    onPageChange,

    onRowsPerPageChange,

    onVer,

    onEditar,

    onActivar,

    onDesactivar,

    onPassword,

}) {

    if (loading) {

        return <CircularProgress />;

    }

    const handleChangePage = (

        event,

        newPage

    ) => {

        onPageChange(newPage);

    };

    const handleChangeRowsPerPage = (

        event

    ) => {

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

                            Usuario

                        </TableCell>

                        <TableCell>

                            Rol

                        </TableCell>

                        <TableCell>

                            Estado

                        </TableCell>

                        <TableCell>

                            Cambiar contraseña

                        </TableCell>

                        <TableCell>

                            Fecha creación

                        </TableCell>

                        <TableCell align="center">

                            Acciones

                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {usuarios

                        .slice(

                            page * rowsPerPage,

                            page * rowsPerPage +

                                rowsPerPage

                        )

                        .map((usuario) => (

                            <TableRow

                                hover

                                key={usuario.id}

                            >

                                <TableCell>

                                    {

                                        usuario.username

                                    }

                                </TableCell>

                                <TableCell>

                                    {usuario.rol}

                                </TableCell>

                                <TableCell>

                                    {usuario.activo

                                        ? "Activo"

                                        : "Inactivo"}

                                </TableCell>

                                <TableCell>

                                    {usuario.debeCambiarPassword

                                        ? "Sí"

                                        : "No"}

                                </TableCell>

                                <TableCell>

                                    {

                                        usuario.fechaCreacion

                                    }

                                </TableCell>

                                <TableCell align="center">

                                    <TableActions

                                        activo={usuario.activo}

                                        mostrarReactivar

                                        mostrarPassword

                                        onVer={() => onVer(usuario.id)}

                                        onEditar={() => onEditar(usuario.id)}

                                        onPassword={() => onPassword(usuario)}

                                        onEliminar={() => onDesactivar(usuario)}

                                        onReactivar={() => onActivar(usuario)}

                                    />

                                </TableCell>

                            </TableRow>

                        ))}

                </TableBody>

            </Table>

            <TablePagination

                component="div"

                count={usuarios.length}

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

                labelRowsPerPage="Usuarios por página:"

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

export default UsuarioTable;