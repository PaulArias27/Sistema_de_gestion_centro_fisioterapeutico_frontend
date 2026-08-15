export function getHomeByRole(rol) {

    switch (rol) {

        case "ADMIN":
            return "/dashboard";

        case "FISIOTERAPEUTA":
            return "/pacientes";

        default:
            return "/login";

    }

}