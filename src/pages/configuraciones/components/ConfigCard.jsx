import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Box,
} from "@mui/material";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

function ConfigCard({

    icon,

    titulo,

    descripcion,

    onClick,

}) {

    return (

        <Card
            elevation={2}
            sx={{
                borderRadius: 3,
                transition: "0.25s",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                },
            }}
        >

            <CardActionArea
                onClick={onClick}
            >

                <CardContent>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >

                        <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                        >

                            <Box
                                sx={{
                                    color: "primary.main",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >

                                {icon}

                            </Box>

                            <Box>

                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                >

                                    {titulo}

                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >

                                    {descripcion}

                                </Typography>

                            </Box>

                        </Box>

                        <ChevronRightRoundedIcon
                            color="action"
                        />

                    </Box>

                </CardContent>

            </CardActionArea>

        </Card>

    );

}

export default ConfigCard;