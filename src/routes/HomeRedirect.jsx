import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { getHomeByRole } from "../utils/roleRedirect";

function HomeRedirect() {

    const { usuario } = useAuth();

    if (!usuario) {

        return <Navigate to="/login" replace />;

    }

    return (

        <Navigate
            to={getHomeByRole(usuario.rol)}
            replace
        />

    );

}

export default HomeRedirect;