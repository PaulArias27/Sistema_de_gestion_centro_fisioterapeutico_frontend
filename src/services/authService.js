import * as authApi from "../api/authApi";

export async function login(credentials) {

    return await authApi.login(credentials);

}

export async function logout() {

    return await authApi.logout();

}