import {
  Box,
  Button,
  TextField,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

function PacienteToolbar({ onNuevoPaciente,busqueda,

    onBuscar, }) {

  return (

    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 3,
        gap: 2,
        flexWrap: "wrap",
      }}
    >

      <TextField
        fullWidth
        placeholder="Buscar paciente..."
        value={busqueda}
        onChange={(e) => onBuscar(e.target.value)}
        size="small"
        sx={{
          width: 350,
        }}
      />

      <Button
        variant="contained"
        startIcon={<AddRoundedIcon />}
        onClick={onNuevoPaciente}
        sx={{
          bgcolor: "#F57C00",

          "&:hover": {
            bgcolor: "#E65100",
          }
        }}
      >
        Nuevo Paciente
      </Button>

    </Box>

  );

}

export default PacienteToolbar;