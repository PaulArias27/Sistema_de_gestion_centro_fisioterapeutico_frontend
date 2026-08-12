import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
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
                        <PrivateRoute>
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route
                    path="/pacientes"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Pacientes />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/fisioterapeutas"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Fisioterapeutas />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/servicios"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Servicios />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/sucursales"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Sucursales />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/tratamientos"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Tratamientos />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/evaluaciones"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Evaluaciones />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/ventas"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Ventas />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/citas"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Citas />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/sesiones"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Sesiones />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/usuarios"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Usuarios />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/configuraciones"
                    element={
                        <PrivateRoute>
                            <MainLayout>
                                <Configuraciones />
                            </MainLayout>
                        </PrivateRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;
