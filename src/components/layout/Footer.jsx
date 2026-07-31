import { Box, Typography } from "@mui/material";

function Footer() {

    return (

        <Box
            sx={{
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#fff",
                borderTop: "1px solid #ddd"
            }}
        >

            <Typography variant="body2">

                © 2026 Kinesio Vitality

            </Typography>

        </Box>

    );

}

export default Footer;