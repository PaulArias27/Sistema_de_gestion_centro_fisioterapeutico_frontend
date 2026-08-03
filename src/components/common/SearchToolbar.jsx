import {
    Box,
    Button,
    TextField,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

function SearchToolbar({

    placeholder,

    busqueda,

    onBuscar,

    buttonText,

    onNuevo,

}) {

    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                mb: 3,
                flexWrap: "wrap",
            }}
        >

            <TextField
                size="small"
                placeholder={placeholder}
                value={busqueda}
                onChange={(e) =>
                    onBuscar(e.target.value)
                }
                sx={{
                    width: 350,
                }}
            />

            <Button
                variant="contained"
                startIcon={<AddRoundedIcon />}
                onClick={onNuevo}
                sx={{
                    bgcolor: "#F57C00",

                    "&:hover": {

                        bgcolor: "#E65100",

                    },
                }}
            >

                {buttonText}

            </Button>

        </Box>

    );

}

export default SearchToolbar;