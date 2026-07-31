import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

function MainLayout({ children }) {

    return (

        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
            }}
        >

            <Sidebar />

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh"
                }}
            >

                <Topbar />

                <Box
                    sx={{
                        flex: 1,
                        p: 4,
                        bgcolor: "#F5F5F5"
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