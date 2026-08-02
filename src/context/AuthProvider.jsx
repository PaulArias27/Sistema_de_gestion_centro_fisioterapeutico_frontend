import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem("usuario"))
    );

    const login = (data) => {

        setToken(data.token);

        setUsuario({
            username: data.username,
            rol: data.rol,
        });

        localStorage.setItem("token", data.token);

        localStorage.setItem(
            "usuario",
            JSON.stringify({
                username: data.username,
                rol: data.rol,
            })
        );
    };

    const logout = () => {

        setToken(null);
        setUsuario(null);

        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                usuario,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}