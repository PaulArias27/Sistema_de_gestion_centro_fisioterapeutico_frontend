import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

import { drawerWidth } from "../../config/layout";

function MainLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          bgcolor: "#F5F5F5",
        }}
      >

        <Topbar />

        <Box
          sx={{
            flex: 1,
            p: 3,
            overflow: "auto",
          }}
        >
          {children}
        </Box>

        <Footer />

      </Box>

    </Box>
  );
}

export default MainLayout;