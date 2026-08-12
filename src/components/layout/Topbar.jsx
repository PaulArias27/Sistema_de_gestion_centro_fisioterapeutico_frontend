import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ProfileDialog from "./ProfileDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { logout as logoutService } from "../../services/authService";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Topbar({

    sidebarOpen,

    setSidebarOpen,

}) {

  const { usuario, logout } = useAuth();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const [openProfile, setOpenProfile] = useState(false);

  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event) => {

    setAnchorEl(event.currentTarget);

  };

  const handleCloseMenu = () => {

      setAnchorEl(null);

  };

  const handleProfile = () => {

      handleCloseMenu();

      setOpenProfile(true);

  };

  const handleLogout = async () => {

      try {

          await logoutService();

      } catch (error) {

          console.error(error);

      } finally {

          logout();

          navigate("/login", {

              replace: true,

          });

      }

  };


  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{

            zIndex:(theme)=>theme.zIndex.drawer+1,

            bgcolor:"#fff",

            color:"#212121"

        }}
   >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* Izquierda */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton

              onClick={() =>

                  setSidebarOpen(!sidebarOpen)

              }

              sx={{

                  borderRadius: 2,

                  "&:hover": {

                      bgcolor: "#F5F5F5",

                  },

              }}

            >

              <MenuRoundedIcon />

          </IconButton>

          <Paper
              elevation={0}
              sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  py: 0.5,

                  width: {
                      xs: 170,
                      sm: 240,
                      md: 320,
                      lg: 380,
                  },

                  maxWidth: "100%",

                  borderRadius: 3,

                  bgcolor: "#F5F5F5",

                  opacity: 0.75,

                  cursor: "not-allowed",

                  userSelect: "none",
              }}
          >
            <SearchRoundedIcon
                sx={{
                    color: "#BDBDBD",
                    mr: 1,
                }}
            />

            <InputBase
                placeholder="Búsqueda global (Próximamente)"
                fullWidth
                disabled
            />
          </Paper>
        </Box>

        {/* Derecha */}
        <Box

            onClick={handleOpenMenu}

            sx={{

                display: "flex",

                alignItems: "center",

                gap: 1.5,

                cursor: "pointer",

                borderRadius: 2,

                px: 1,

                py: .5,

                transition: ".2s",

                "&:hover": {

                    bgcolor: "#F5F5F5",

                },

            }}

        >

            <Avatar

                sx={{

                    bgcolor: "#F57C00",

                }}

            >

                {usuario?.username?.charAt(0)?.toUpperCase()}

            </Avatar>

            <Box>

                <Typography

                    fontWeight={600}

                    fontSize={14}

                >

                    {usuario?.username}

                </Typography>

                <Typography

                    variant="caption"

                    color="text.secondary"

                >

                    {usuario?.rol}

                </Typography>

            </Box>

        </Box>
      </Toolbar>

      <Menu

            anchorEl={anchorEl}

            open={openMenu}

            onClose={handleCloseMenu}

        >

            <MenuItem onClick={handleProfile}>

                <ListItemIcon>

                    <PersonRoundedIcon fontSize="small" />

                </ListItemIcon>

                Mi Perfil

            </MenuItem>

            <Divider />

            <MenuItem onClick={handleLogout}>

                <ListItemIcon>

                    <LogoutRoundedIcon fontSize="small" />

                </ListItemIcon>

                Cerrar sesión

            </MenuItem>

        </Menu>

        <ProfileDialog

            open={openProfile}

            onClose={() => setOpenProfile(false)}

            usuario={usuario}

        />
    </AppBar>
  );
}

export default Topbar;