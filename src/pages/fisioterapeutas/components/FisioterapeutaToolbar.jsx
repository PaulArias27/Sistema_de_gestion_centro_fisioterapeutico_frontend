import {
  Box,
  Button,
  TextField,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

function FisioterapeutaToolbar({ onNuevoFisioterapeuta,busqueda,

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
      
        placeholder="Buscar fisioterapeuta..."
        value={busqueda}
        onChange={(e) => onBuscar(e.target.value)}
        size="small"
        sx={{
          width: {
            xs: "100%",
            md: 350,
        },
        }}
      />

      <Button
        variant="contained"
        startIcon={<AddRoundedIcon />}
        onClick={onNuevoFisioterapeuta}
        sx={{
          minWidth: 220,
          bgcolor: "#F57C00",

          "&:hover": {
            bgcolor: "#E65100",
          }
        }}
      >
        Nuevo Fisioterapeuta
      </Button>

    </Box>

  );

}

export default FisioterapeutaToolbar;