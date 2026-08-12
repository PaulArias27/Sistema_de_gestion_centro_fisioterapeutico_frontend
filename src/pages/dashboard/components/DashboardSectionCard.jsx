import {

    Card,

    CardContent,

    Typography,

    Divider,

    Box,

} from "@mui/material";

function DashboardSectionCard({

    titulo,

    icono,

    items,

}) {

    return (

        <Card

            elevation={3}

            sx={{

                borderRadius: 4,

                height: "100%",

                transition: ".25s",

                "&:hover": {

                    boxShadow: 8,

                },

            }}

        >

            <CardContent>

                <Box

                    display="flex"

                    alignItems="center"

                    gap={1}

                    mb={2}

                >

                    {icono}

                    <Typography

                        variant="h6"

                        fontWeight="bold"

                    >

                        {titulo}

                    </Typography>

                </Box>

                <Divider sx={{ mb: 2 }} />

                {

                    items.map((item, index) => (

                        <Box

                            key={index}

                            sx={{

                                display: "flex",

                                justifyContent: "space-between",

                                alignItems: "center",

                                py: 1.3,

                                borderBottom:

                                    index !== items.length - 1

                                        ? "1px solid #f2f2f2"

                                        : "none",

                            }}

                        >

                            <Typography

                                color="text.secondary"

                            >

                                {item.label}

                            </Typography>

                            <Typography

                                fontWeight="bold"

                                variant="h6"

                            >

                                {item.value}

                            </Typography>

                        </Box>

                    ))

                }

            </CardContent>

        </Card>

    );

}

export default DashboardSectionCard;