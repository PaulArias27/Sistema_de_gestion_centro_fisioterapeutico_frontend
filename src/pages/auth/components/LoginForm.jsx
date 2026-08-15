import { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";
import { getHomeByRole } from "../../../utils/roleRedirect";

import { login as loginService } from "../../../services/authService";
import { useAuth } from "../../../hooks/useAuth";

function LoginForm() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    setLoading(true);

    try {

      const response = await loginService(form);

      login(response);

      navigate(getHomeByRole(response.rol), {
          replace: true,
      });

    } catch (err) {

      console.error(err);

      setError("Usuario o contraseña incorrectos.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <Paper
      elevation={3}
      sx={{
        width: 420,
        p: 5,
        borderRadius: 4,
      }}
    >

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={1}
      >
        Iniciar Sesión
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Bienvenido nuevamente.
      </Typography>

      <form onSubmit={handleSubmit}>

        <Stack spacing={3}>

          {error && (

            <Alert severity="error">

              {error}

            </Alert>

          )}

          <TextField
            label="Usuario"
            name="username"
            value={form.username}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
              label="Contraseña"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              fullWidth
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            sx={{
              bgcolor: "#F57C00",
              py: 1.4,

              "&:hover": {
                bgcolor: "#E65100",
              },
            }}
          >

            {loading ? (

              <CircularProgress
                color="inherit"
                size={24}
              />

            ) : (

              "Ingresar"

            )}

          </Button>

        </Stack>

      </form>

    </Paper>

  );

}

export default LoginForm;