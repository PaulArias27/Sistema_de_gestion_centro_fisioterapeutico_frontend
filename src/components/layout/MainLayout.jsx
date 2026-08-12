import { useState } from "react";
import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

import { drawerWidth } from "../../config/layout";

function MainLayout({ children }) {


  const [sidebarOpen, setSidebarOpen] = useState(true);


  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar
          open={sidebarOpen}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${sidebarOpen ? drawerWidth : 72}px)`,
          transition: "width .25s ease",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          bgcolor: "#F5F5F5",
        }}
      >

        <Topbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
        />

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