import { useState } from "react";

import PageTitle from "../../components/common/PageTitle";
import SearchToolbar from "../../components/common/SearchToolbar";
import CustomSnackbar from "../../components/common/CustomSnackbar";
import ConfirmDialog from "../../components/common/ConfirmDialog";

import SucursalTable from "./components/SucursalTable";
import SucursalDialog from "./components/SucursalDialog";
import SucursalForm from "./components/SucursalForm";
import SucursalDetailsDialog from "./components/SucursalDetailsDialog";

import { useSucursales } from "../../hooks/useSucursales";

import {

    crearSucursal,
    actualizarSucursal,
    obtenerSucursal,
    inactivarSucursal,
    reactivarSucursal,

} from "../../services/sucursalService";

function Sucursales() {

    const {

        sucursales,

        loading,

        cargarSucursales,

    } = useSucursales();

    const [busqueda, setBusqueda] = useState("");

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [openDialog, setOpenDialog] = useState(false);

    const [modoEdicion, setModoEdicion] = useState(false);

    const [detalleOpen, setDetalleOpen] = useState(false);

    const [confirmOpen, setConfirmOpen] = useState(false);

    const [modoReactivar, setModoReactivar] = useState(false);

    const [sucursalSeleccionada, setSucursalSeleccionada] = useState(null);

    const [sucursalEditando, setSucursalEditando] = useState(null);

    const [sucursalEstado, setSucursalEstado] = useState(null);

    const [errores, setErrores] = useState({});

    const initialFormData = {

        nombre: "",

        direccion: "",

        telefono: "",

        correo: "",

    };

    const [formData, setFormData] = useState(initialFormData);

    const [snackbar, setSnackbar] = useState({

        open: false,

        message: "",

        severity: "success",

    });

    const mostrarSnackbar = (

        message,

        severity = "success"

    ) => {

        setSnackbar({

            open: true,

            message,

            severity,

        });

    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value,

        }));

        setErrores((prev) => ({

            ...prev,

            [name]: undefined,

        }));

    };

    const cerrarDialog = () => {

        setOpenDialog(false);

        setModoEdicion(false);

        setSucursalEditando(null);

        setErrores({});

        setFormData(initialFormData);

    };

    const abrirNuevaSucursal = () => {

        setModoEdicion(false);

        setErrores({});

        setFormData(initialFormData);

        setOpenDialog(true);

    };

    const sucursalesFiltradas = sucursales.filter((sucursal) => {

        const texto = busqueda
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ");

        return (

            sucursal.nombre
                .toLowerCase()
                .includes(texto)

            ||

            sucursal.direccion
                .toLowerCase()
                .includes(texto)

            ||

            sucursal.telefono
                .includes(texto)

            ||

            (sucursal.correo || "")
                .toLowerCase()
                .includes(texto)

        );

    });
        const guardarSucursal = async () => {

        if (
            !formData.nombre ||
            !formData.direccion ||
            !formData.telefono
        ) {

            mostrarSnackbar(
                "Complete todos los campos obligatorios.",
                "warning"
            );

            return;

        }

        try {

            if (modoEdicion) {

                await actualizarSucursal(
                    sucursalEditando.id,
                    formData
                );

                mostrarSnackbar(
                    "Sucursal actualizada correctamente.",
                    "success"
                );

            } else {

                await crearSucursal(formData);

                mostrarSnackbar(
                    "Sucursal registrada correctamente.",
                    "success"
                );

            }

            setErrores({});

            cerrarDialog();

            await cargarSucursales();

        } catch (error) {

            const response = error.response?.data;

            if (response?.data) {

                setErrores(response.data);

                const primerError =
                    Object.values(response.data)[0];

                mostrarSnackbar(
                    primerError,
                    "error"
                );

                return;

            }

            setErrores({});

            mostrarSnackbar(
                response?.message ||
                "No se pudo guardar la sucursal.",
                "error"
            );

        }

    };

    const verSucursal = async (id) => {

        try {

            const sucursal =
                await obtenerSucursal(id);

            setSucursalSeleccionada(sucursal);

            setDetalleOpen(true);

        } catch (error) {

            console.error(error);

            mostrarSnackbar(
                error.response?.data?.message ||
                "No se pudo obtener la sucursal.",
                "error"
            );

        }

    };

    const editarSucursal = async (id) => {

        try {

            const sucursal =
                await obtenerSucursal(id);

            setSucursalEditando(sucursal);

            setFormData({

                nombre: sucursal.nombre,

                direccion: sucursal.direccion,

                telefono: sucursal.telefono,

                correo: sucursal.correo || "",

            });

            setModoEdicion(true);

            setOpenDialog(true);

        } catch (error) {

            console.error(error);

            mostrarSnackbar(

                error.response?.data?.message ||

                "No se pudo obtener la sucursal.",

                "error"

            );

        }

    };

    const abrirConfirmacion = (sucursal) => {

        setSucursalEstado(sucursal);

        setModoReactivar(false);

        setConfirmOpen(true);

    };

    const cerrarConfirmacion = () => {

        setConfirmOpen(false);

        setSucursalEstado(null);

        setModoReactivar(false);

    };

    const eliminarSucursal = async () => {

        try {

            await inactivarSucursal(
                sucursalEstado.id
            );

            mostrarSnackbar(
                "Sucursal inactivada correctamente.",
                "success"
            );

            cerrarConfirmacion();

            await cargarSucursales();

        } catch (error) {

            mostrarSnackbar(

                error.response?.data?.message ||

                "No se pudo inactivar la sucursal.",

                "error"

            );

        }

    };

    const abrirReactivacion = (sucursal) => {

        setSucursalEstado(sucursal);

        setModoReactivar(true);

        setConfirmOpen(true);

    };

    const reactivarSucursalSeleccionada = async () => {

        try {

            await reactivarSucursal(
                sucursalEstado.id
            );

            mostrarSnackbar(
                "Sucursal reactivada correctamente.",
                "success"
            );

            cerrarConfirmacion();

            await cargarSucursales();

        } catch (error) {

            mostrarSnackbar(

                error.response?.data?.message ||

                "No se pudo reactivar la sucursal.",

                "error"

            );

        }

    };
        return (

        <>

            <PageTitle
                title="Sucursales"
            />

            <SearchToolbar
                placeholder="Buscar sucursal..."
                buttonText="Nueva Sucursal"
                busqueda={busqueda}
                onBuscar={(texto) => {

                    setBusqueda(texto);

                    setPage(0);

                }}
                onNuevo={abrirNuevaSucursal}
            />

            <SucursalTable

                sucursales={sucursalesFiltradas}

                loading={loading}

                page={page}

                rowsPerPage={rowsPerPage}

                onPageChange={setPage}

                onRowsPerPageChange={setRowsPerPage}

                onVer={verSucursal}

                onEditar={editarSucursal}

                onEliminar={abrirConfirmacion}

                onReactivar={abrirReactivacion}

            />

            <SucursalDetailsDialog

                open={detalleOpen}

                onClose={() =>
                    setDetalleOpen(false)
                }

                sucursal={sucursalSeleccionada}

            />

            <SucursalDialog

                open={openDialog}

                onClose={cerrarDialog}

                title={
                    modoEdicion
                        ? "Editar Sucursal"
                        : "Nueva Sucursal"
                }

                modoEdicion={modoEdicion}

                onSave={guardarSucursal}

            >

                <SucursalForm

                    formData={formData}

                    onChange={handleChange}

                    errores={errores}

                />

            </SucursalDialog>

            <CustomSnackbar

                open={snackbar.open}

                message={snackbar.message}

                severity={snackbar.severity}

                onClose={() =>
                    setSnackbar({

                        ...snackbar,

                        open: false,

                    })
                }

            />

            <ConfirmDialog

                open={confirmOpen}

                onClose={cerrarConfirmacion}

                onConfirm={
                    modoReactivar
                        ? reactivarSucursalSeleccionada
                        : eliminarSucursal
                }

                title={
                    modoReactivar
                        ? "Reactivar sucursal"
                        : "Inactivar sucursal"
                }

                message={
                    sucursalEstado
                        ? modoReactivar
                            ? `¿Está seguro de reactivar la sucursal "${sucursalEstado.nombre}"?`

                            : `¿Está seguro de inactivar la sucursal "${sucursalEstado.nombre}"?`

                        : ""
                }

                confirmText={
                    modoReactivar
                        ? "Reactivar"
                        : "Inactivar"
                }

            />

        </>

    );

}

export default Sucursales;