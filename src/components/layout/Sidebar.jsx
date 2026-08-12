import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import {
    adminMenu,
    fisioterapeutaMenu,
} from "../../utils/menuItems";
import logo from "../../assets/logo/logo.png";


import { useAuth } from "../../hooks/useAuth";
import { logout as logoutService } from "../../services/authService";


function Sidebar() {
  const { usuario, logout } = useAuth();
  const menuItems =
    usuario?.rol === "ADMIN"
        ? adminMenu
        : fisioterapeutaMenu;

  
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {

  try {

    await logoutService();

  } catch (error) {

    console.error("Error al cerrar sesión:", error);

  } finally {

    logout();

    navigate("/login", { replace: true });

  }

};

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "#121212",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        p: 3,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          py: 2,
          mb: 2,
        }}
      >
        <img
          src={logo}
          alt="Kinesio Vitality"
          style={{
            width: 55,
            height: 55,
            objectFit: "contain",
          }}
        />

        <Box>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "1.1rem",
              lineHeight: 1.2,
            }}
          >
            Kinesio
          </Typography>

          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "1rem",
              lineHeight: 1.2,
            }}
          >
            Vitality
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: "#2f2f2f",
          mb: 3,
        }}
      />


      {/* Menú */}
      <List
          sx={{
            flex: 1,
            overflowY: "auto",
          }}
        >
          {menuItems.map((item, index) => {

              if (item.divider) {

                  return (

                      <Divider
                          key={`divider-${index}`}
                          sx={{
                              borderColor: "#2f2f2f",
                              my: 1.5,
                          }}
                      />

                  );

              }

              return (

                  <ListItemButton
                      key={item.text}
                      onClick={() => navigate(item.path)}
                      selected={location.pathname === item.path}
                      sx={{
                          borderRadius: 2,
                          mb: 1,

                          "&.Mui-selected": {
                              bgcolor: "#F57C00",
                          },

                          "&.Mui-selected:hover": {
                              bgcolor: "#E65100",
                          },

                          "&:hover": {
                              bgcolor: "#2A2A2A",
                          },
                      }}
                  >

                      <ListItemIcon
                          sx={{
                              color:
                                  location.pathname === item.path
                                      ? "#FFFFFF"
                                      : "#BDBDBD",
                              minWidth: 40,
                          }}
                      >
                          {item.icon}
                      </ListItemIcon>

                      <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                              sx: {
                                  color: "#FFFFFF",
                                  fontSize: 15,
                                  fontWeight: 500,
                              },
                          }}
                      />

                  </ListItemButton>

              );

          })}
        </List>

      <Divider
        sx={{
          borderColor: "#2f2f2f",
          my: 2,
        }}
      />

      {/* Botón Logout */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleLogout}
        sx={{
          bgcolor: "#F57C00",
          py: 1.2,
          borderRadius: 2,

          "&:hover": {
            bgcolor: "#E65100",
          },
        }}
      >
        Cerrar Sesión
      </Button>

      <Typography
        variant="caption"
        sx={{
          color: "#757575",
          textAlign: "center",
          mt: 2,
        }}
      >
        © 2026 Kinesio Vitality
      </Typography>
    </Box>
  );
}

export default Sidebar;