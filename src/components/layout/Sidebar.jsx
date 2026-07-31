import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";

import { drawerWidth } from "../../config/layout";

import logo from "../../assets/logo/logo.png";
import menuItems from "../../utils/menuItems";

function Sidebar() {
  return (
      <Drawer
        variant="permanent"
        sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {

            width: drawerWidth,

            boxSizing: "border-box",

            bgcolor: "#121212",

            color: "#fff",

            borderRight: "none",

            p:3,

            display:"flex",

            flexDirection:"column"

        }

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

      {/* Usuario */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#F57C00",
            width: 48,
            height: 48,
            fontWeight: "bold",
          }}
        >
          P
        </Avatar>

        <Box ml={2}>
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            Paul Arias
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#BDBDBD",
            }}
          >
            Administrador
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: "#2f2f2f",
          mb: 2,
        }}
      />

      {/* Menú */}
      <List
          sx={{
            flex: 1,
            overflowY: "auto",
            mt: 1,
          }}
        >
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            sx={{
              borderRadius: 2,
              mb: 1,

              "&:hover": {
                bgcolor: "#F57C00",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "#ffffff",
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: 15,
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Divider
        sx={{
          borderColor: "#2f2f2f",
          mt: 2,
          mb: 2,
        }}
      />

      <Typography
        variant="caption"
        sx={{
          color: "#757575",
          textAlign: "center",
        }}
      >
        © 2026 Kinesio Vitality
      </Typography>
    </Drawer>
  );
}

export default Sidebar;