import {
    Box,
    LinearProgress,
    Typography,
} from "@mui/material";

function ProgressTratamiento({

    realizadas = 0,

    planificadas = 0,

}) {

    const porcentaje =

        planificadas > 0

            ? Math.round(

                (realizadas * 100) /

                planificadas

            )

            : 0;

    return (

        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                width: "100%",
            }}
        >

            <Box sx={{ flexGrow: 1 }}>

                <LinearProgress
                    variant="determinate"
                    value={porcentaje}
                    sx={{
                        height: 8,
                        borderRadius: 5,
                    }}
                />

            </Box>

            <Typography
                variant="body2"
                fontWeight="bold"
                minWidth={40}
            >

                {porcentaje}%

            </Typography>

        </Box>

    );

}

export default ProgressTratamiento;