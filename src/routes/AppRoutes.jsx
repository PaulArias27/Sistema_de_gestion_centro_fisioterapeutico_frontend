import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

import MainLayout from "../components/layout/MainLayout";
import Pacientes from "../pages/pacientes/Pacientes";
import Fisioterapeutas from "../pages/fisioterapeutas/Fisioterapeutas";
import Servicios from "../pages/servicios/Servicios";
import Sucursales from "../pages/sucursales/Sucursales";
import Ventas from "../pages/ventas/Ventas";
import Citas from "../pages/citas/Citas";
import Sesiones from "../pages/sesiones/Sesiones";
import Tratamientos from "../pages/tratamientos/Tratamientos";
import Evaluaciones from "../pages/evaluaciones/Evaluaciones";
import Usuarios from "../pages/usuarios/Usuarios";
import Configuraciones from "../pages/configuraciones/Configuraciones";
import HomeRedirect from "./HomeRedirect";
import RoleRoute from "./RoleRoute";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/"
                    element={<HomeRedirect />}
                />

               <Route
                    path="/pacientes"
                    element={
                        <RoleRoute roles={["ADMIN", "FISIOTERAPEUTA"]}>
                            <MainLayout>
                                <Pacientes />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/fisioterapeutas"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <MainLayout>
                                <Fisioterapeutas />
                            </MainLayout>
                        </RoleRoute>
                    }
                />
                <Route
                    path="/servicios"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <MainLayout>
                                <Servicios />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/sucursales"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <MainLayout>
                                <Sucursales />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/tratamientos"
                    element={
                        <RoleRoute roles={["ADMIN", "FISIOTERAPEUTA"]}>
                            <MainLayout>
                                <Tratamientos />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/evaluaciones"
                    element={
                        <RoleRoute roles={["ADMIN", "FISIOTERAPEUTA"]}>
                            <MainLayout>
                                <Evaluaciones />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/ventas"
                    element={
                        <RoleRoute roles={["ADMIN", "FISIOTERAPEUTA"]}>
                            <MainLayout>
                                <Ventas />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/citas"
                    element={
                        <RoleRoute roles={["ADMIN", "FISIOTERAPEUTA"]}>
                            <MainLayout>
                                <Citas />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/sesiones"
                    element={
                        <RoleRoute roles={["ADMIN", "FISIOTERAPEUTA"]}>
                            <MainLayout>
                                <Sesiones />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/usuarios"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <MainLayout>
                                <Usuarios />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

                <Route
                    path="/configuraciones"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <MainLayout>
                                <Configuraciones />
                            </MainLayout>
                        </RoleRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;
