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

function FisioterapeutaTable({
        fisioterapeutas,
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

        return (

            <Paper
                sx={{
                    p: 5,
                    display: "flex",
                    justifyContent: "center",
                }}
            >

                <CircularProgress />

            </Paper>

        );

    }


  const handleChangePage = (event, newPage) => {

    onPageChange(newPage);

  };

  const handleChangeRowsPerPage = (event) => {

      onRowsPerPageChange(parseInt(event.target.value, 10));

      onPageChange(0);

  };
  return (
    <TableContainer
          component={Paper}
          sx={{
              overflowX: "auto",
              borderRadius: 3,
          }}
      >

      <Table>

        <TableHead>

          <TableRow>
              <TableCell>Cédula</TableCell>

              <TableCell>Fisioterapeuta</TableCell>

              <TableCell>Especialidad</TableCell>

              <TableCell>Celular</TableCell>

              <TableCell>Estado</TableCell>

              <TableCell align="center">
                  Acciones
              </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {fisioterapeutas
            .slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            )
            .map((fisioterapeuta) => (

            <TableRow
              key={fisioterapeuta.id}
              hover
            >

              <TableCell>
                {fisioterapeuta.cedula}
              </TableCell>

              <TableCell>
                {fisioterapeuta.nombres} {fisioterapeuta.apellidos}
              </TableCell>

              <TableCell>
                {fisioterapeuta.especialidad || "-"}
              </TableCell>

              <TableCell>
                {fisioterapeuta.celular}
              </TableCell>

              <TableCell>

                <Chip
                    label={fisioterapeuta.estado}
                    size="small"
                    sx={{
                        fontWeight: 600,
                        color: "#FFFFFF",
                        bgcolor:
                            fisioterapeuta.estado === "ACTIVO"
                                ? "#2E7D32"
                                : "#757575",
                    }}
                />

              </TableCell>

              <TableCell align="center">

                <Tooltip title="Ver fisioterapeuta" arrow>
                    <IconButton
                        color="primary"
                        sx={{ mx: 0.3 }}
                        onClick={() => onVer(fisioterapeuta.id)}
                    >
                        <VisibilityRoundedIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Editar fisioterapeuta" arrow>
                    <IconButton
                        color="warning"
                        sx={{ mx: 0.3 }}
                        onClick={() => onEditar(fisioterapeuta.id)}
                    >
                        <EditRoundedIcon />
                    </IconButton>
                </Tooltip>

                {
                    fisioterapeuta.estado === "ACTIVO" ? (

                        <Tooltip title="Inactivar fisioterapeuta" arrow>
                            <IconButton
                                color="error"
                                sx={{ mx: 0.3 }}
                                onClick={() => onEliminar(fisioterapeuta)}
                            >
                                <BlockRoundedIcon />
                            </IconButton>
                        </Tooltip>

                    ) : (

                        <Tooltip title="Reactivar fisioterapeuta" arrow>
                            <IconButton
                                color="success"
                                sx={{ mx: 0.3 }}
                                onClick={() => onReactivar(fisioterapeuta)}
                            >
                                <CheckCircleRoundedIcon />
                            </IconButton>
                        </Tooltip>

                    )
                }

              </TableCell>

            </TableRow>

          ))}

          {fisioterapeutas.length === 0 && (

              <TableRow>

                  <TableCell
                      colSpan={6}
                      align="center"
                  >
                      No existen fisioterapeutas registrados.
                  </TableCell>

              </TableRow>

          )}

        </TableBody>

      </Table>
      <TablePagination
          component="div"
          count={fisioterapeutas.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
          labelRowsPerPage="Fisioterapeutas por página:"
          labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} de ${count}`
          }
      />

    </TableContainer>
  );
}

export default FisioterapeutaTable;