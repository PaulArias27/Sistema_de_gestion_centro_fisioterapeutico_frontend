import {
    Card,
    CardContent,
    Typography,
    Box,
} from "@mui/material";

function DashboardCard({

    titulo,

    valor,

    icono,

    color = "#1976d2",

}) {

    return (

        <Card

            elevation={3}

            sx={{

                borderRadius: 4,

                height: "100%",

                minHeight: 170,

                transition: "0.25s",

                "&:hover": {

                    transform: "translateY(-4px)",

                    boxShadow: 8,

                },

            }}

        >

            <CardContent>

                <Box

                    display="flex"

                    justifyContent="space-between"

                    alignItems="flex-start"

                >

                    <Box>

                        <Typography

                            variant="body1"

                            color="text.secondary"

                        >

                            {titulo}

                        </Typography>

                        <Typography

                            variant="h3"

                            fontWeight="bold"

                            mt={1}

                        >

                            {valor}

                        </Typography>

                    </Box>

                    <Box

                        sx={{

                            width: 62,

                            height: 62,

                            borderRadius: "50%",

                            bgcolor: color,

                            display: "flex",

                            justifyContent: "center",

                            alignItems: "center",

                            color: "#fff",

                        }}

                    >

                        {icono}

                    </Box>

                </Box>

            </CardContent>

        </Card>

    );

}

export default DashboardCard;