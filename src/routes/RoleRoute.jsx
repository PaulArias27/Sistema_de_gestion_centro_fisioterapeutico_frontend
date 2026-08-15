import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { getHomeByRole } from "../utils/roleRedirect";

function RoleRoute({

    roles,

    children,

}) {

    const { token, usuario } = useAuth();

    if (!token) {

        return <Navigate to="/login" replace />;

    }

    if (!roles.includes(usuario?.rol)) {

        return (

            <Navigate
                to={getHomeByRole(usuario?.rol)}
                replace
            />

        );

    }

    return children;

}

export default RoleRoute;