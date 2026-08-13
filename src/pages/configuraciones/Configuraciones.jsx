import { useState } from "react";

import {
    Grid,
    Snackbar,
    Alert,
} from "@mui/material";

import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import PaletteRoundedIcon from "@mui/icons-material/PaletteRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

import PageTitle from "../../components/common/PageTitle";

import ConfigCard from "./components/ConfigCard";
import AboutDialog from "./components/AboutDialog";

function Configuraciones() {

    const [openAbout, setOpenAbout] = useState(false);

    const [snackbar, setSnackbar] = useState({

        open: false,

        severity: "info",

        message: "",

    });

    const mostrarProximamente = () => {

        setSnackbar({

            open: true,

            severity: "info",

            message: "Esta opción estará disponible en una próxima versión.",

        });

    };

    return (

        <>

            <PageTitle
                title="Configuraciones"
                subtitle="Opciones y preferencias del sistema"
            />

            <Grid
                container
                spacing={3}
            >

                <Grid
                    size={{ xs: 12, md: 6 }}
                >

                    <ConfigCard
                        icon={<BusinessRoundedIcon fontSize="large" />}
                        titulo="Datos de la clínica"
                        descripcion="Administrar la información general de la clínica."
                        onClick={mostrarProximamente}
                    />

                </Grid>

                <Grid
                    size={{ xs: 12, md: 6 }}
                >

                    <ConfigCard
                        icon={<PersonRoundedIcon fontSize="large" />}
                        titulo="Mi perfil"
                        descripcion="Actualizar información personal y contraseña."
                        onClick={mostrarProximamente}
                    />

                </Grid>

                <Grid
                    size={{ xs: 12, md: 6 }}
                >

                    <ConfigCard
                        icon={<SecurityRoundedIcon fontSize="large" />}
                        titulo="Seguridad"
                        descripcion="Configurar opciones de seguridad del sistema."
                        onClick={mostrarProximamente}
                    />

                </Grid>

                <Grid
                    size={{ xs: 12, md: 6 }}
                >

                    <ConfigCard
                        icon={<PaletteRoundedIcon fontSize="large" />}
                        titulo="Apariencia"
                        descripcion="Personalizar la apariencia de la aplicación."
                        onClick={mostrarProximamente}
                    />

                </Grid>

                <Grid
                    size={{ xs: 12, md: 6 }}
                >

                    <ConfigCard
                        icon={<InfoRoundedIcon fontSize="large" />}
                        titulo="Acerca del sistema"
                        descripcion="Información de la versión y tecnologías utilizadas."
                        onClick={() => setOpenAbout(true)}
                    />

                </Grid>

            </Grid>

            <AboutDialog

                open={openAbout}

                onClose={() => setOpenAbout(false)}

            />

            <Snackbar

                open={snackbar.open}

                autoHideDuration={3000}

                onClose={() =>

                    setSnackbar((prev) => ({

                        ...prev,

                        open: false,

                    }))

                }

            >

                <Alert

                    severity={snackbar.severity}

                    variant="filled"

                >

                    {snackbar.message}

                </Alert>

            </Snackbar>

        </>

    );

}

export default Configuraciones;