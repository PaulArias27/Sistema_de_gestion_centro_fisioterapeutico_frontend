import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

function PasswordDialog({

    open,

    onClose,

    onGuardar,

    formData,

    onChange,

    errores,

}) {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="sm"

            fullWidth

        >

            <DialogTitle>

                Cambiar contraseña

            </DialogTitle>

            <DialogContent dividers>

                <TextField

                    fullWidth

                    margin="normal"

                    type="password"

                    label="Nueva contraseña"

                    name="nuevaPassword"

                    value={formData.nuevaPassword}

                    onChange={onChange}

                    error={!!errores.nuevaPassword}

                    helperText={errores.nuevaPassword}

                />

            </DialogContent>

            <DialogActions>

                <Button

                    onClick={onClose}

                >

                    Cancelar

                </Button>

                <Button

                    variant="contained"

                    onClick={onGuardar}

                >

                    Actualizar

                </Button>

            </DialogActions>

        </Dialog>

    );

}

export default PasswordDialog;