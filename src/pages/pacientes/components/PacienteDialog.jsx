import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function PacienteDialog({
  open,
  onClose,
  title,
  children,
  onSave,
  modoEdicion,
}) {
  return (
    <Dialog
          open={open}
          onClose={onClose}
          fullWidth
          maxWidth="md"
          scroll="paper"
          slotProps={{
        paper: {
            sx: {
                borderRadius: 4,
                  width: "95%",
                  maxHeight: "90vh",
              },
            }
          }}
      >
      <DialogTitle
        sx={{
          fontWeight: 700,
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent
          dividers
          sx={{
              overflowY: "auto",
          }}
      >
          {children}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose}>
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={onSave}
          sx={{
            bgcolor: "#F57C00",

            "&:hover": {
              bgcolor: "#E65100",
            },
          }}
        >
          {modoEdicion ? "Actualizar" : "Guardar"}
        
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PacienteDialog;