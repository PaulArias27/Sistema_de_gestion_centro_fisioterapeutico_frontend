import {
  Chip,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Tooltip from "@mui/material/Tooltip";

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

                <Chip
                    label={paciente.estado}
                    size="small"
                    sx={{
                        fontWeight: 600,
                        color: "#FFFFFF",
                        bgcolor:
                            paciente.estado === "ACTIVO"
                                ? "#2E7D32"
                                : "#757575",
                    }}
                />

              </TableCell>

              <TableCell align="center">

                <Tooltip title="Ver paciente" arrow>
                    <IconButton
                        color="primary"
                        sx={{ mx: 0.3 }}
                        onClick={() => onVer(paciente.id)}
                    >
                        <VisibilityRoundedIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Editar paciente" arrow>
                    <IconButton
                        color="warning"
                        sx={{ mx: 0.3 }}
                        onClick={() => onEditar(paciente.id)}
                    >
                        <EditRoundedIcon />
                    </IconButton>
                </Tooltip>

                {
                    paciente.estado === "ACTIVO" ? (

                        <Tooltip title="Inactivar paciente" arrow>
                            <IconButton
                                color="error"
                                sx={{ mx: 0.3 }}
                                onClick={() => onEliminar(paciente)}
                            >
                                <BlockRoundedIcon />
                            </IconButton>
                        </Tooltip>

                    ) : (

                        <Tooltip title="Reactivar paciente" arrow>
                            <IconButton
                                color="success"
                                sx={{ mx: 0.3 }}
                                onClick={() => onReactivar(paciente)}
                            >
                                <CheckCircleRoundedIcon />
                            </IconButton>
                        </Tooltip>

                    )
                }

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