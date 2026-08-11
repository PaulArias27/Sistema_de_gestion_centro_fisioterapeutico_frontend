import { useEffect, useState } from "react";

import * as usuarioService from "../services/usuarioService";

function useUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

    const [loading, setLoading] = useState(false);

    const cargarUsuarios = async () => {

        try {

            setLoading(true);

            const data =
                await usuarioService.obtenerUsuarios();

            setUsuarios(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        const cargar = async () => {

            await cargarUsuarios();

        };

        cargar();

    }, []);

    const guardarUsuario = async (data) => {

        await usuarioService.crearUsuario(data);

        await cargarUsuarios();

    };

    const actualizarUsuario = async (

        id,

        data

    ) => {

        await usuarioService.actualizarUsuario(

            id,

            data

        );

        await cargarUsuarios();

    };

    const activarUsuario = async (id) => {

        await usuarioService.activarUsuario(id);

        await cargarUsuarios();

    };

    const desactivarUsuario = async (id) => {

        await usuarioService.desactivarUsuario(id);

        await cargarUsuarios();

    };

    const actualizarPassword = async (

        id,

        data

    ) => {

        await usuarioService.cambiarPassword(

            id,

            data

        );

        await cargarUsuarios();

    };

    return {

        usuarios,

        loading,

        guardarUsuario,

        actualizarUsuario,

        activarUsuario,

        desactivarUsuario,

        actualizarPassword,

        cargarUsuarios,

    };

}

export default useUsuarios;