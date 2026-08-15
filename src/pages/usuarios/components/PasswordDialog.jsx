import { useState } from "react";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    TextField,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function PasswordDialog({

    open,

    onClose,

    onGuardar,

    formData,

    onChange,

    errores,

}) {

    const [showPassword, setShowPassword] = useState(false);

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
                    type={showPassword ? "text" : "password"}
                    label="Nueva contraseña"
                    name="nuevaPassword"
                    value={formData.nuevaPassword}
                    onChange={onChange}
                    error={!!errores.nuevaPassword}
                    helperText={errores.nuevaPassword}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {showPassword
                                            ? <VisibilityOff />
                                            : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
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