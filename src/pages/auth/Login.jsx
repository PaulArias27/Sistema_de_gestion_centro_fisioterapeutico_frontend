import { Box, Grid, Typography } from "@mui/material";
import LoginForm from "./components/LoginForm";
import logo from "../../assets/logo/logo.png";

function Login() {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
      }}
    >
      {/* Panel izquierdo */}
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{
          bgcolor: "#121212",
          color: "#FFFFFF",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          minHeight: "100vh",
          p: 6,
        }}
      >
        <Box
          sx={{
            maxWidth: 420,
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Kinesio Vitality"
            sx={{
              width: 180,
              mb: 4,
            }}
          />

          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              mb: 2,
            }}
          >
            Kinesio Vitality
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#BDBDBD",
              lineHeight: 1.8,
            }}
          >
            Sistema Integral para la Gestión de Centros de
            Fisioterapia.
          </Typography>
        </Box>
      </Grid>

      {/* Panel derecho */}
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{
          bgcolor: "#F5F5F5",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          minHeight: "100vh",
          p: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 430,
          }}
        >
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;