import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

function Topbar() {
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
          <IconButton>
            <MenuRoundedIcon />
          </IconButton>

          <Paper
            elevation={0}
            sx={{
                display:"flex",
                alignItems:"center",
                px:2,
                py:0.5,

                width:{
                    xs:170,
                    sm:240,
                    md:320,
                    lg:380
                },

                maxWidth:"100%",

                borderRadius:3,

                bgcolor:"#F5F5F5"
              }}
            >
            <SearchRoundedIcon
              sx={{
                color: "#757575",
                mr: 1,
              }}
            />

            <InputBase
              placeholder="Buscar..."
              fullWidth
            />
          </Paper>
        </Box>

        {/* Derecha */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton>
            <Badge
              badgeContent={3}
              color="error"
            >
              <NotificationsRoundedIcon />
            </Badge>
          </IconButton>

          <IconButton>
            <DarkModeRoundedIcon />
          </IconButton>

          <Avatar
            sx={{
              bgcolor: "#F57C00",
            }}
          >
            P
          </Avatar>

          <Box>
            <Typography
              fontWeight={600}
              fontSize={14}
            >
              Paul Arias
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              Administrador
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;