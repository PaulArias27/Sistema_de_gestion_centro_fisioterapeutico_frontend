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

            ml: sidebarOpen ? `${drawerWidth}px` : "72px",

            width: sidebarOpen
              ? `calc(100% - ${drawerWidth}px)`
              : "calc(100% - 72px)",

            transition: "margin .25s ease, width .25s ease",

            display: "flex",

            flexDirection: "column",

            minWidth: 0,

            bgcolor: "#F5F5F5",

            minHeight: "100vh",
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
            overflowY: "auto",
            overflowX: "hidden",
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