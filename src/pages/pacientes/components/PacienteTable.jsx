import {

  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

import EstadoChip from "../../../components/common/EstadoChip";
import TableActions from "../../../components/common/TableActions";

function PacienteTable({
        pacientes,
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

      onRowsPerPageChange(parseInt(event.target.value, 10));

      onPageChange(0);

  };
  return (
    <TableContainer component={Paper}>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Cédula</TableCell>

            <TableCell>Paciente</TableCell>

            <TableCell>Teléfono</TableCell>

            <TableCell>Estado</TableCell>

            <TableCell align="center">
              Acciones
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {pacientes
            .slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            )
            .map((paciente) => (

            <TableRow
              key={paciente.id}
              hover
            >

              <TableCell>
                {paciente.cedula}
              </TableCell>

              <TableCell>
                {paciente.nombres} {paciente.apellidos}
              </TableCell>

              <TableCell>
                {paciente.celular}
              </TableCell>

              <TableCell>

                <EstadoChip
                    estado={paciente.estado}
                />

              </TableCell>

              <TableCell align="center">

                <TableActions

                  activo={paciente.estado === "ACTIVO"}

                  onVer={() => onVer(paciente.id)}

                  onEditar={() => onEditar(paciente.id)}

                  onEliminar={() => onEliminar(paciente)}

                  onReactivar={() => onReactivar(paciente)}

              />

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>
      <TablePagination
          component="div"
          count={pacientes.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
          labelRowsPerPage="Pacientes por página:"
          labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} de ${count}`
          }
      />

    </TableContainer>
  );
}

export default PacienteTable;