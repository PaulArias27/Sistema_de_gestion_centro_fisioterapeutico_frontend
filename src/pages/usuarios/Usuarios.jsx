import { useMemo, useState } from "react";

import {
    Alert,
    Box,
    Button,
    Paper,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

import ConfirmDialog from "../../components/common/ConfirmDialog";

import UsuarioTable from "./components/UsuarioTable";
import UsuarioDialog from "./components/UsuarioDialog";
import UsuarioDetailsDialog from "./components/UsuarioDetailsDialog";
import PasswordDialog from "./components/PasswordDialog";

import useUsuarios from "../../hooks/useUsuarios";

function Usuarios() {

    const {

        usuarios,

        loading,

        guardarUsuario,

        actualizarUsuario,

        activarUsuario,

        desactivarUsuario,

        actualizarPassword,

    } = useUsuarios();

    const [openDialog, setOpenDialog] = useState(false);

    const [openDetails, setOpenDetails] = useState(false);

    const [openPassword, setOpenPassword] = useState(false);

    const [openConfirm, setOpenConfirm] = useState(false);

    const [editando, setEditando] = useState(false);

    const [usuarioSeleccionado, setUsuarioSeleccionado] =
        useState(null);

    const [busqueda, setBusqueda] = useState("");

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [accionPendiente, setAccionPendiente] =
        useState("");

    const [snackbar, setSnackbar] = useState({

        open: false,

        severity: "success",

        message: "",

    });

    const formInicial = {

        username: "",

        password: "",

        rol: "",

    };

    const [formData, setFormData] =
        useState(formInicial);

    const [passwordData, setPasswordData] =
        useState({

            nuevaPassword: "",

        });

    const [errores, setErrores] = useState({});

        const usuariosFiltrados = useMemo(() => {

        const texto = busqueda.toLowerCase();

        return usuarios.filter((usuario) =>

            usuario.username
                .toLowerCase()
                .includes(texto)

            ||

            usuario.rol
                .toLowerCase()
                .includes(texto)

            ||

            (usuario.activo
                ? "activo"
                : "inactivo")
                .includes(texto)

        );

    }, [

        usuarios,

        busqueda,

    ]);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const handlePasswordChange = (event) => {

        const { name, value } = event.target;

        setPasswordData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const validarFormulario = () => {

        const nuevosErrores = {};

        if (!formData.username)

            nuevosErrores.username =
                "Ingrese el nombre de usuario.";

        if (!editando && !formData.password)

            nuevosErrores.password =
                "Ingrese la contraseña.";

        if (!formData.rol)

            nuevosErrores.rol =
                "Seleccione un rol.";

        setErrores(nuevosErrores);

        return Object.keys(nuevosErrores).length === 0;

    };

    const validarPassword = () => {

        const nuevosErrores = {};

        if (!passwordData.nuevaPassword)

            nuevosErrores.nuevaPassword =
                "Ingrese la nueva contraseña.";

        setErrores(nuevosErrores);

        return Object.keys(nuevosErrores).length === 0;

    };

    const nuevoUsuario = () => {

        setEditando(false);

        setUsuarioSeleccionado(null);

        setErrores({});

        setFormData(formInicial);

        setOpenDialog(true);

    };

    const editarUsuario = (id) => {

        const usuario = usuarios.find(

            u => u.id === id

        );

        if (!usuario) return;

        setUsuarioSeleccionado(usuario);

        setEditando(true);

        setErrores({});

        setFormData({

            username: usuario.username,

            password: "",

            rol: usuario.rol,

        });

        setOpenDialog(true);

    };

    const verUsuario = (id) => {

        const usuario = usuarios.find(

            u => u.id === id

        );

        if (!usuario) return;

        setUsuarioSeleccionado(usuario);

        setOpenDetails(true);

    };

    const abrirPassword = (usuario) => {

        setUsuarioSeleccionado(usuario);

        setPasswordData({

            nuevaPassword: "",

        });

        setErrores({});

        setOpenPassword(true);

    };

    const guardar = async () => {

        if (!validarFormulario()) return;

        try {

            if (editando) {

                await actualizarUsuario(

                    usuarioSeleccionado.id,

                    formData

                );

                setSnackbar({

                    open: true,

                    severity: "success",

                    message:
                        "Usuario actualizado correctamente.",

                });

            } else {

                await guardarUsuario(formData);

                setSnackbar({

                    open: true,

                    severity: "success",

                    message:
                        "Usuario registrado correctamente.",

                });

            }

            setOpenDialog(false);

            setErrores({});

            setFormData(formInicial);

        } catch (error) {

            console.error(error);

            const response = error.response?.data;

            let mensaje =
                response?.message ||
                "Ocurrió un error al guardar el usuario.";

            if (response?.data) {

                mensaje = Object.values(
                    response.data
                ).join("\n");

            }

            setSnackbar({

                open: true,

                severity: "error",

                message: mensaje,

            });

        }

    };

    const guardarPassword = async () => {

        if (!validarPassword()) return;

        try {

            await actualizarPassword(

                usuarioSeleccionado.id,

                passwordData

            );

            setSnackbar({

                open: true,

                severity: "success",

                message:
                    "Contraseña actualizada correctamente.",

            });

            setOpenPassword(false);

            setPasswordData({

                nuevaPassword: "",

            });

        } catch (error) {

            console.error(error);

            const response = error.response?.data;

            let mensaje =
                response?.message ||
                "No fue posible actualizar la contraseña.";

            if (response?.data) {

                mensaje = Object.values(
                    response.data
                ).join("\n");

            }

            setSnackbar({

                open: true,

                severity: "error",

                message: mensaje,

            });

        }

    };

    const activar = (usuario) => {

        setUsuarioSeleccionado(usuario);

        setAccionPendiente("activar");

        setOpenConfirm(true);

    };

    const desactivar = (usuario) => {

        setUsuarioSeleccionado(usuario);

        setAccionPendiente("desactivar");

        setOpenConfirm(true);

    };

    const confirmarAccion = async () => {

        try {

            switch (accionPendiente) {

                case "activar":

                    await activarUsuario(

                        usuarioSeleccionado.id

                    );

                    break;

                case "desactivar":

                    await desactivarUsuario(

                        usuarioSeleccionado.id

                    );

                    break;

                default:

                    break;

            }

            setSnackbar({

                open: true,

                severity: "success",

                message:
                    "Operación realizada correctamente.",

            });

            setOpenDetails(false);

        } catch (error) {

            console.error(error);

            const response = error.response?.data;

            let mensaje =
                response?.message ||
                "No fue posible completar la operación.";

            if (response?.data) {

                mensaje = Object.values(
                    response.data
                ).join("\n");

            }

            setSnackbar({

                open: true,

                severity: "error",

                message: mensaje,

            });

        }

        setOpenConfirm(false);

        setAccionPendiente("");

    };